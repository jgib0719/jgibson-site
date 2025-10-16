/**
 * Questions Model
 * Sequelize model for quiz questions
 */

const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const Questions = sequelize.define('questions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1
        }
    },
    category: {
        type: DataTypes.ENUM('cisco', 'wiley'),
        allowNull: false,
        validate: {
            isIn: [['cisco', 'wiley']]
        }
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 10000]
        }
    },
    options: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isValidJSON(value) {
                try {
                    const parsed = JSON.parse(value);
                    if (!Array.isArray(parsed) || parsed.length === 0) {
                        throw new Error('Options must be a non-empty JSON array');
                    }
                } catch (e) {
                    throw new Error('Options must be valid JSON array');
                }
            }
        },
        get() {
            const rawValue = this.getDataValue('options');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('options', JSON.stringify(value));
        }
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isValidJSON(value) {
                try {
                    const parsed = JSON.parse(value);
                    if (!Array.isArray(parsed) || parsed.length === 0) {
                        throw new Error('Answer must be a non-empty JSON array');
                    }
                } catch (e) {
                    throw new Error('Answer must be valid JSON array');
                }
            }
        },
        get() {
            const rawValue = this.getDataValue('answer');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('answer', JSON.stringify(value));
        }
    },
    explanation: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 10000]
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 255]
        }
    }
}, {
    // Table options
    tableName: 'questions',
    indexes: [
        {
            name: 'questions_category_idx',
            fields: ['category']
        },
        {
            name: 'questions_number_idx', 
            fields: ['number']
        },
        {
            name: 'questions_unique_entry',
            unique: true,
            fields: ['number', 'category']
        }
    ]
});

// Class methods
Questions.findByCategory = async function(category, options = {}) {
    const { count, random = false } = options;
    
    const queryOptions = {
        where: { category },
        order: random ? sequelize.literal('RANDOM()') : [['number', 'ASC']]
    };
    
    if (count && count > 0) {
        queryOptions.limit = Math.min(count, 1000); // Max safety limit
    }
    
    return await this.findAll(queryOptions);
};

// Custom query methods - not overriding Sequelize methods
Questions.getQuestions = async function(options = {}) {
    const { count, random = false, category } = options;
    
    const queryOptions = {
        order: random ? sequelize.literal('RANDOM()') : [['category', 'ASC'], ['number', 'ASC']]
    };
    
    if (category) {
        queryOptions.where = { category };
    }
    
    if (count && count > 0) {
        queryOptions.limit = Math.min(count, 1000); // Max safety limit
    }
    
    // Call the inherited Sequelize findAll method
    return await this.findAll(queryOptions);
};

Questions.createQuestion = async function(questionData) {
    // Validate that options and answer are arrays
    if (!Array.isArray(questionData.options)) {
        throw new Error('Options must be an array');
    }
    if (!Array.isArray(questionData.answer)) {
        throw new Error('Answer must be an array');
    }
    
    return await this.create(questionData);
};

Questions.updateQuestion = async function(id, questionData) {
    const question = await this.findByPk(id);
    if (!question) {
        throw new Error('Question not found');
    }
    
    // Validate arrays if provided
    if (questionData.options && !Array.isArray(questionData.options)) {
        throw new Error('Options must be an array');
    }
    if (questionData.answer && !Array.isArray(questionData.answer)) {
        throw new Error('Answer must be an array');
    }
    
    return await question.update(questionData);
};

module.exports = Questions;