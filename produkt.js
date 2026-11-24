export default class Produkt {
    produkt_id;
    ean;
    navn;
    pris;
    kategori;

    constructor(row) {
        this.produkt_id = row.produkt_id;
        this.ean = row.ean;
        this.navn = row.navn;
        this.pris = row.pris;
        this.kategori = row.kategori ? row.kategori : row.kategori_id; // NOTE: erstat evt med row.kategori_id hvis der ikke er en kategori-kolonne
    }
}