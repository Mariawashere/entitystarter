class Ordrelinje {
    produkt_id;
    antal;
    stykpris;

    constructor({ produkt_id, antal, stykpris }) {
        this.produkt_id = produkt_id;
        this.antal = antal;
        this.stykpris = stykpris;
    }

    get total() {
        return this.antal * this.stykpris;
    }
}



export default Ordrelinje;