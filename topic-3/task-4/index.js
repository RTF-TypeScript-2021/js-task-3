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
    this.meetings = meetings;
    this.vacations = vacations;

    if(!Array.isArray(meetings) || !Array.isArray(vacations)) {
        throw Error("Arguments are not arrays");
    }

    if (meetings.some(date => !(date instanceof Meeting))) {
        throw Error("First argument must be instance of Meeting object");
    }

    if (vacations.some(date => !(date instanceof Vacation))) {
        throw Error("Second argument must be instance of Vacation object");
    }
};

module.exports.Organaizer = Organaizer;
