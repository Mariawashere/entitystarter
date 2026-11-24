import * as repository from './produkt.repository.js';

export async function getAllProducts(req, res) {
  const products = await repository.getAll();

  res.json(products);
}

export async function getSingleProduct(req, res) {
  const id = req.params.id;
  const product = await repository.getById(id);

  if (product) {
    return res.status(200).json(product);
  }

  throw new HTTPError(404, "Product not found");
}