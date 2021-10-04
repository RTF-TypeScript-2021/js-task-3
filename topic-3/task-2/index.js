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
const { Time } = require("../task-1");

function Meeting(meetingDate, startTime, endTime) {
    if (!(meetingDate instanceof Date)) {
        throw new Error("Meeting Date variable must be an instance of Date");
    }
    if (!(startTime instanceof Time)) {
        throw new Error("Start time variable must be an instance of Time");
    }
    if (!(endTime instanceof Time)) {
        throw new Error("End time variable must be an instance of Time");
    }
    if (startTime.hours < 8 || endTime > 19) {
        throw new Error("The meeting must happen between 8:00 and 19:00");
    }
	
    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;
}

Meeting.prototype.isMeetingInTimeRange = function (startTime, endTime) {
    return this.endTime.isLater(startTime) && this.startTime.isEarlier(endTime)
}

module.exports.Meeting = Meeting;