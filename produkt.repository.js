import db from './db.js'
import Produkt from './produkt.js';

export async function getAll() {
  const productRows = await db.query(/*SQL*/ `SELECT produkt_id, ean, produkter.navn, pris, kategori_navn AS kategori
    FROM produkter 
    JOIN kategorier 
    ON produkter.kategori_id = kategorier.kategori_id
    ORDER BY kategori ASC`);

  
  const products = productRows.rows.map( row => new Produkt(row));

  return products;
}

export async function getById(id) {
  const productData = await db.query("SELECT * FROM produkter WHERE produkt_id = $1", [id]);

  const product = new Produkt(productData.rows[0]);

  return product;
}