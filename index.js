const app = require('./app')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000

connectDB()

process.on('uncaughtException', function (err) {
    console.error(err.stack); // either logs on console or send to other server via api call.
    process.exit(1)
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
