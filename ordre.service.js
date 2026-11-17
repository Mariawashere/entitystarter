import ordreLinje from "./ordrelinje.js";

export async function opretOrdre( ordreData ) {
  console.log("Opret ordre i service");

  console.log(ordreData);

  const ordreLinjeData = ordreData.ordreLinjer [0]; 
  console.log("Linje 1", ordreLinje1Data);

//fisk produkt_id og antal ud fra ordreLinjeData
//? hvad med pris? skal den hentes fra produktet eller sendes med i ordreLinjeData?


const productId = ordreLinjeData.productId;
const quantity = ordreLinjeData.quantity;

const price = ____________; 

//find product in database by productId and get price from there
//lav stykpris variable med produktets stykpris

const ordreLinje1 = new ordreLinje({ productId, quantity, price });

console.log("Ordrelinje 1", ordreLinje1);

  //  const ordreLinje1 = new OrdreLinje (21, 4, 12.95)
  //  const ordreLinje2 = new OrdreLinje (44,  1, 49.95)

  //  ordreRepository.create(ordre);

}