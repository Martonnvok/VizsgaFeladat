class Tevekenyseg{
    #adat;
    #szuloElem;
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.#szuloElem = szuloElem;
        this.#sor();
    }

    #sor(){
        let txt = `<select name="tevekenysegek" > `;
        for (let key in this.#adat) {
            
            `<option ${this.#adat[key]} >${this.#adat[key]}</option>`;
            
        }
       
        txt+= `</select>`
        this.#szuloElem.append(txt);
    }
}

export default Tevekenyseg;