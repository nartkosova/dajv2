import express from 'express'
import path from 'path'

const app = express()
const port = 3000

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')))

// Serve the main HTML file for all unmatched routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
