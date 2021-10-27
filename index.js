import express from "express";

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('Here we go')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})