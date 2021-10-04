/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */
const {Meeting} = require("../task-2");
const {Vacation} = require("../task-3");

function Organaizer (meetings = [], vacations = []) {
    if (!(Array.isArray(meetings)) || meetings.some(meeting => !(meeting instanceof Meeting))) {
        throw new Error("Meetings variable must be an array of Meeting");
    }
    if (!(Array.isArray(vacations)) || vacations.some(vacation => !(vacation instanceof Vacation))) {
        throw new Error("Vacations variable must be an array of Vacation");
    }
    
    this.meetings = meetings;
    this.vacations = vacations;
}

module.exports.Organaizer = Organaizer;