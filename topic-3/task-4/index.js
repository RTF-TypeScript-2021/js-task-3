/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */

const { Meeting } = require("../task-2");
const { Vacation } = require("../task-3");

// Get/Set

class Organaizer{
    get vacations() {
        return this._vacations;
    }

    set vacations(value) {
        if(Array.isArray(value) && (value.forEach(x=>x instanceof Vacation) || value.length===0)) {
            this._vacations = value;
        }else{
            throw new Error(`${value} не является экземпляром класса ${Vacation}`)   
        }
    }

    get meetings(){
        return this._meetings;
    }

    set meetings(value){
        if(Array.isArray(value) && (value.forEach(x=>x instanceof Meeting) || value.length===0)) {
            this._meetings = value;
        } else{
            throw new Error(`${value} не является экземпляром класса ${Meeting}`)   
        }
    }

    constructor(meetings=[],vacations=[]) {
        this.meetings = meetings;
        this.vacations=vacations;
    }
    
}

module.exports.Organaizer = Organaizer;