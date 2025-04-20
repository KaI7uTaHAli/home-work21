const app = require('./app')
const sequelize = require('./config/database')
require('./models/author')
require('./models/genre')
require('./models/book')

const PORT = 3000

async function start() {
  try {
    await sequelize.sync({ alter: true })
    console.log('📚 DB synced')

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('❌ Error starting server:', error.message)
  }
}

start()