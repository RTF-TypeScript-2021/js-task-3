const { Meeting } = require("../task-2");
const { Vacation } = require("../task-3");
/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */
function Organaizer(meetings = [], vacations = []) { 
    if (!meetings instanceof Array || !vacations instanceof Array) {
        throw new Error("Массивы некоректны");
    }
    meetings.forEach(element => {
        if (!element instanceof Meeting) {
            throw new Error("Массив meetings некорректный");
        }
    });
    vacations.forEach(element => {
        if (!element instanceof Vacation) {
            throw new Error("Массив vacations некорректный");
        }
    });
    this.meetings = meetings;
    this.vacations = vacations;
}

module.exports.Organaizer = Organaizer;