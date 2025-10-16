/**
 * API Stats Model
 * Sequelize model for API usage statistics tracking
 */

const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const ApiStats = sequelize.define('api_stats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        }
    },
    method: {
        type: DataTypes.ENUM('GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'),
        allowNull: false
    },
    status_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 100,
            max: 599
        }
    },
    response_time_ms: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true,
            min: 0
        }
    },
    user_agent: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ip_hash: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 64]
        }
    }
}, {
    // Table options
    tableName: 'api_stats',
    indexes: [
        {
            name: 'api_stats_created_at_idx',
            fields: ['created_at']
        },
        {
            name: 'api_stats_endpoint_idx',
            fields: ['endpoint']
        },
        {
            name: 'api_stats_method_idx',
            fields: ['method']
        },
        {
            name: 'api_stats_status_code_idx',
            fields: ['status_code']
        }
    ]
});

// Class methods
ApiStats.logRequest = async function(requestData) {
    try {
        return await this.create({
            endpoint: requestData.endpoint,
            method: requestData.method,
            status_code: requestData.statusCode,
            response_time_ms: requestData.responseTime,
            user_agent: requestData.userAgent,
            ip_hash: requestData.ipHash
        });
    } catch (error) {
        // Don't let stats logging break the application
        console.warn('Failed to log API stats:', error.message);
        return null;
    }
};

ApiStats.getStats = async function(options = {}) {
    const { startDate, endDate, endpoint, method } = options;
    
    const whereClause = {};
    
    if (startDate || endDate) {
        whereClause.created_at = {};
        if (startDate) whereClause.created_at[sequelize.Op.gte] = startDate;
        if (endDate) whereClause.created_at[sequelize.Op.lte] = endDate;
    }
    
    if (endpoint) whereClause.endpoint = endpoint;
    if (method) whereClause.method = method;
    
    return await this.findAll({
        where: whereClause,
        order: [['created_at', 'DESC']],
        limit: 1000 // Reasonable limit for stats queries
    });
};

ApiStats.getAggregatedStats = async function(options = {}) {
    const { startDate, endDate } = options;
    
    let whereClause = '';
    const replacements = {};
    
    if (startDate || endDate) {
        const conditions = [];
        if (startDate) {
            conditions.push('created_at >= :startDate');
            replacements.startDate = startDate;
        }
        if (endDate) {
            conditions.push('created_at <= :endDate');
            replacements.endDate = endDate;
        }
        if (conditions.length > 0) {
            whereClause = 'WHERE ' + conditions.join(' AND ');
        }
    }
    
    const query = `
        SELECT 
            endpoint,
            method,
            COUNT(*) as request_count,
            AVG(response_time_ms) as avg_response_time,
            MIN(response_time_ms) as min_response_time,
            MAX(response_time_ms) as max_response_time,
            COUNT(CASE WHEN status_code >= 200 AND status_code < 300 THEN 1 END) as success_count,
            COUNT(CASE WHEN status_code >= 400 THEN 1 END) as error_count
        FROM api_stats 
        ${whereClause}
        GROUP BY endpoint, method
        ORDER BY request_count DESC
    `;
    
    return await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        replacements
    });
};

// Cleanup old stats (for maintenance)
ApiStats.cleanup = async function(olderThanDays = 90) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);
    
    return await this.destroy({
        where: {
            created_at: {
                [sequelize.Op.lt]: cutoffDate
            }
        }
    });
};

module.exports = ApiStats;