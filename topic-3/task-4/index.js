/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)1
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */

const { Meeting } = require("../task-2");
const { Vacation } = require("../task-3");

function Organaizer(meetings = [], vacations = []) { 
	if (!(Array.isArray(meetings)) || !(Array.isArray(vacations))){
		throw Error("Meetings and vacations have to be arrays");
	}
	for (let meet of meetings){
		if (!(meet instanceof Meeting)){
			throw Error("Wrong type of data")
		}
	}
	for (let vacation of vacations){
		if (!(vacation instanceof Vacation)){
			throw Error("Wrong type of data")
		}
	}
	this.meetings = meetings;
	this.vacations = vacations;
};

module.exports.Organaizer = Organaizer;