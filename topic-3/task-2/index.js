/** Задача 2 - Класс Meeting
Требуется написать класс встречи - Meeting, который содержит:
	2.1. Поле c датой встречи (объект класса Date)
	2.2. Поле — время начала встречи (объект класса Time)
	2.3. Поле — время конца встречи (объект класса Time)
	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
		Начало временного промежутка — объект класса Time
		Конец временного промежутка — объект класса Time
		Должен возвращать true, если встреча, у которой был вызван метод,
		пересекает переданный временной промежутук
	2.5. Время начала встречи должно быть больше времени конца
	2.6. Встреча может быть назначана только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) {
	
	if (!((startTime.hours >= 8) && (startTime.hours < 19)) || (!(endTime.hours > 8) && (endTime.hours <= 19))){
		throw Error("Wrong time period");
	}

	if (startTime.hours*60 + startTime.minutes >= endTime.hours*60 + endTime.minutes){
		throw Error("StartTime can't be more than endTime");
	}

	this.meetingDate = meetingDate;
	this.startTime = startTime;
	this.endTime = endTime;

	this.isMeetingInTimeRange = function(start, end){
		return (((this.startTime.hours < end.hours) || ((this.startTime.hours == end.hours) && (this.startTime.minutes < end.minutes))) &&
				((this.endTime.hours > start.hours) || ((this.endTime.hours == start.hours) && (this.endTime.minutes > start.minutes))));
	};
}

module.exports.Meeting = Meeting;