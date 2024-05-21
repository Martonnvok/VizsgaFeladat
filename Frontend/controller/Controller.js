import DataService from "../model/DataService.js";
import View from "../view/View.js";
class Controller{
    #dataService

    constructor(){
        this.#dataService = new DataService();
        this.#get();
    }

    megjelenit(list){
        new View($("article"), list);
    }
    #get(){
        this.#dataService.getAxiosData('http://localhost:8000/api/szavak',this.megjelenit);
        this.#dataService.getAxiosData('http://localhost:8000/api/tema',this.megjelenit);
    }
}
export default Controller;