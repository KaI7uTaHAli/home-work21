const Book = require('../models/book')
const Author = require('../models/author')
const Genre = require('../models/genre')

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: [Author, Genre] })
    res.json(books)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, { include: [Author, Genre] })
    if (!book) throw new Error('Book not found')
    res.json(book)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.status(201).json(book)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id)
    if (!book) throw new Error('Book not found')
    await book.update(req.body)
    res.json(book)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id)
    if (!book) throw new Error('Book not found')
    await book.destroy()
    res.json({ message: 'Book deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}