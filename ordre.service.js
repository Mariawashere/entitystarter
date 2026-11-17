import * as produktRepository from './produkt.repository.js';

export async function opretOrdre( ordreData ) {
  // 1. find ordrelinjer i ordredata
// 2. for hver ordrelinje
// 3. find produktet i den ordrelinje (produkt_id)
// 4. find det produkts stykpris
// 5. opret et Ordrelinje objekt med produkt, antal, og stykpris
const ordreLinjer = [];

for( const linjeData of ordreData.ordrelinjer) {
const produkt = await produktRepository.getById(linjeData.produkt_id);
const ordreLinje = new OrdreLinje(produkt.produkt_id,
linjeData. antal, produkt.pris);
ordreLinjer.push (ordreLinje);

}

const ordre = new Ordre (ordreData.kunde_id, ordreLinjer);

console.log(ordre);
}
