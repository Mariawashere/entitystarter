import db from './db.js'


export async function getById(id) {
  const productData = await db.query("SELECT * FROM produkter WHERE produkt_id = $1", [id]);

  return productData.rows[0];
}