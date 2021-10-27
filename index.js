import express from "express";
import router from './router.js';

const app = express();

app.use(router);
app.use(express.json());

const port = 3001;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})