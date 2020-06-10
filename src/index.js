import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR</h1>
      </body>
    </html>
  `)
})

app.listen(3000)