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
    if (!(Date.prototype.isPrototypeOf(meetingDate)) 
		|| !(Time.prototype.isPrototypeOf(startTime)) 
		|| !(Time.prototype.isPrototypeOf(endTime))
		|| startTime < 8 || endTime > 19 || startTime.isLater(endTime)){
        throw new Error();
    }

    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;
}

Meeting.prototype.isMeetingInTimeRange = function(startTime, endTime){
    if (!(Time.prototype.isPrototypeOf(startTime)) 
		|| !(Time.prototype.isPrototypeOf(endTime))){
        throw new Error();
    }

    return (this.startTime.isEarlier(startTime) && this.endTime.isLater(startTime)) 
    || (this.startTime.isLater(startTime) && this.endTime.isEarlier(endTime)
    || (this.startTime.isEarlier(endTime) && this.endTime.isLater(endTime)));
}

module.exports.Meeting = Meeting