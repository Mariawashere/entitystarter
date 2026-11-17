import express from 'express';
import * as controller from './ordre.controller.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/ordrer", controller.opretOrdre);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});