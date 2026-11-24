import db from './db.js'
import Produkt from './produkt.js';

export async function getAll() {
  const productRows = await db.query("SELECT * FROM produkter");
  
  const products = productRows.rows.map( row => new Produkt(row));

  return products;
}

export async function getById(id) {
  const productData = await db.query("SELECT * FROM produkter WHERE produkt_id = $1", [id]);

  const product = new Produkt(productData.rows[0]);

  return product;
}