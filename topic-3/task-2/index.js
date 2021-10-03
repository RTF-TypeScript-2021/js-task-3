import { Time } from "../task-1";
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
    if (!meetingDate) {
        throw Error(`Некорректная дата встречи`);
    }
    if (!startTime instanceof Time) {
        throw Error(`Некорректное время начала встречи`);
    }
    if (!endTime instanceof Time) {
        throw Error(`Некорректное время конца встречи`);
    }
    if (startTime.isLater(endTime)) {
        throw Error(`Извини, но пути назад, в прошлое, нет...`);
    }
    if (startTime.hours < 8 || (endTime.hours > 19 && endTime.minutes > 0)) {
        throw Error(`Встреча может быть назначана только в промежутке между 08:00 до 19:00`);
    }
    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;
}
Meeting.prototype.isMeetingInTimeRange = function(startTime, endTime) {
    return startTime.isEarlier(this.endTime) && endTime.isLater(this.startTime);
}

module.exports.Meeting = Meeting;
export {Meeting};