class ViewSor{
    #adat;
    #szuloElem;
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.#szuloElem = szuloElem;
        this.#sor();
    }

    #sor(){
        let txt = `<div class="container">
        <div class="row">`;
        for (let key in this.#adat) {
            txt += `<div>${this.#adat[key]}</div>`;
            
        }
        txt+=`</div>
        </div>`

        this.#szuloElem.append(txt);
    }
}

export default ViewSor;