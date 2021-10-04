/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */

// Get/Set

class Organaizer{
    get vacations() {
        return this._vacations;
    }

    set vacations(value) {
        if(Array.isArray(value)) {
            this._vacations = value;
        }
    }

    get meetings(){
        return this._meetings;
    }

    set meetings(value){
        if(Array.isArray(value)){
            this._meetings = value;
        }
    }

    constructor(meetings=[],vacations=[]) {
        this.meetings = meetings;
        this.vacations=vacations;
    }
    
}

module.exports.Organaizer = Organaizer;