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
	const {Meeting} = require("../task-2");
	const {Vacation} = require("../task-3");

	function Organaizer(meetings = [], vacations = []) {

		this.meetings = [];
		this.vacations = [];

		for( const meeting of meetings){
			if(!meeting instanceof Meeting){
				throw new Error()
			}
			this.meetings.push(meeting)
		}
		for( const vacation of vacations){
			if(!vacation instanceof Vacation){
				throw new Error()
			}
			this.meetings.push(vacation)
		}

	};

module.exports.Organaizer = Organaizer;