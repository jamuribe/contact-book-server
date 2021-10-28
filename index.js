import express from 'express';
import router from './router.js';
import 'dotenv/config.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
