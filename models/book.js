const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Author = require('./author')
const Genre = require('./genre')

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary: DataTypes.TEXT
})

Author.hasMany(Book)
Book.belongsTo(Author)

Genre.hasMany(Book)
Book.belongsTo(Genre)

module.exports = Book