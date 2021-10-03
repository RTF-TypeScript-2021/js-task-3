const { Time } = require("../task-1");

/** Задача 2 - Класс Meeting
Требуется написать класс встречи - Meeting, который содержит:
	2.1. Поле c датой встречи (объект класса Date)
	2.2. Поле — время начала встречи (объект класса Time)
	2.3. Поле — время конца встречи (объект класса Time)
	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
		Начало временного промежутка — объект класса Time
		Конец временного промежутка — объект класса Time
		Должен возвращать true, если встреча, у которой был вызван метод,
		пересекает переданный временной промежуток
	2.5. Время начала встречи должно быть больше времени конца
	2.6. Встреча может быть назначена только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) {
    if (!meetingDate instanceof Date || !startTime instanceof Time || !endTime instanceof Time) {
        throw new Error("Неверные параметры");
    }
    this.meetingDate = meetingDate;
    if (startTime.isLater(endTime) || startTime.hours < 8 || startTime.hours > 19
    || endTime.hours < 8 || endTime.hours > 19) {
        throw new Error("Встреча назначена в некорректное время")
    }
    this.startTime = startTime;
    this.endTime = endTime;
}
/**
Метод, который должен возвращать true, если встреча, у которой был вызван метод,
пересекает переданный временной промежуток    
@param {Time} start - Время начала встречи
@param {Time} end - Время конца встречи
*/
Meeting.prototype.isMeetingInTimeRange = function(start, end) {
    if (!start instanceof Time || !end instanceof Time) {
        throw new Error("Временной промежуток не верный");
    }
    if ((this.startTime.isLater(start) && this.startTime.isEarlier(end))
    || (this.endTime.isLater(start) && this.endTime.isEarlier(end))) {
        return true;
    } else if (this.startTime.isEarlier(start) && this.endTime.isLater(end)) {
        return true;
    } else if ((this.startTime.hours === start.hours && this.startTime.minutes === start.minutes) || (this.endTime.hours === end.hours && this.endTime.minutes === end.minutes)) {
        return true;
    }
        
    return false;
}    

module.exports.Meeting = Meeting;