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
	2.6. Встреча может быть назначана только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
//Создание через функцию
const Task = require("../task-1/index.js")

function Meeting(meetingDate, startTime, endTime) {

    this.checkArgs = function (start,end,meetingDate = null) {
        if (Task.Time.checkInstance(start)
            || Task.Time.checkInstance(end)
            || (end.hours < start.hours || end.hours === start.hours && end.minutes < start.minutes)) {
            throw new Error(`Неверные входные данные`)
        }
        if(meetingDate!==null){
            if(!meetingDate instanceof Date){
                throw new Error(`${meetingDate} не является экземпляром класса Date`)
            }
        }
    }

    this.checkArgs(startTime,endTime,meetingDate);
    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;

}
Meeting.prototype.isMeetingInTimeRange = function (start, end) {
    this.checkArgs(start,end);

    return this.startTime.isEarlier(end) && this.endTime.isLater(start);
}
module.exports.Meeting = Meeting;