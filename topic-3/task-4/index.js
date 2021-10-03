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
    if (!Array.isArray(meetings) || !Array.isArray(vacations)){
        throw new Error();
    }

    this.meetings = meetings;
    this.vacations = vacations;
};

module.exports.Organaizer = Organaizer;