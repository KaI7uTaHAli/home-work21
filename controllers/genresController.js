const Genre = require('../models/genre')

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.json(genres)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id)
    if (!genre) throw new Error('Genre not found')
    res.json(genre)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body)
    res.status(201).json(genre)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id)
    if (!genre) throw new Error('Genre not found')
    await genre.update(req.body)
    res.json(genre)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id)
    if (!genre) throw new Error('Genre not found')
    await genre.destroy()
    res.json({ message: 'Genre deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}