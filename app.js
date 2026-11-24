import express from 'express';
import * as ordreController from './ordre.controller.js';
import * as produktController from './produkt.controller.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/ordrer", ordreController.opretOrdre);

app.get("/produkter", produktController.getAllProducts);
app.get("/produkter/:id", produktController.getSingleProduct);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});