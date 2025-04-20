const Author = require('../models/author')

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll()
    res.json(authors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    if (!author) throw new Error('Author not found')
    res.json(author)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res.status(201).json(author)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    if (!author) throw new Error('Author not found')

    await author.update(req.body)
    res.json(author)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    if (!author) throw new Error('Author not found')

    await author.destroy()
    res.json({ message: 'Author deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}