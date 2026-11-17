import * as service from './ordre.service.js';

export async function opretOrdre(req, res) {
  const ordreData = req.body;

  // console.log("Controller modtager", ordreData);
  
  const ordre = await service.opretOrdre(ordreData);

  return res.status(201).send(ordre);
}