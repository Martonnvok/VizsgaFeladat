import ViewSor from "./ViewSor.js";
import Tevekenyseg from "./Tevekenyseg.js";

class View{
    #szuloElem;
    #divElem;
    #list=[];
    constructor(szuloElem, list){
        this.#szuloElem = szuloElem;
        this.#list = list;
        this.#szuloElem = szuloElem.append("<div>");
        this.#divElem = szuloElem.children(".adatok");
        this.#tevekenysegek();
        this.#divbeIr();
    }

    #divbeIr(){
        let txt = "";
        for (let key in this.#list) {
            new ViewSor(this.#list[key], this.#divElem);
            
        }

        this.#szuloElem.append(txt);
    }

    #tevekenysegek(){
        let txt = "";
        for (let key in this.#list) {
            new Tevekenyseg(this.#list[key], this.#divElem);
            
        }

        this.#szuloElem.append(txt);
    }
}

export default View;