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
import { Time } from "../task-1";

function Meeting(meetingDate, startTime, endTime) {
    
    if (!Date.prototype.isPrototypeOf(meetingDate) || !Time.prototype.isPrototypeOf(endTime)
        || !Time.prototype.isPrototypeOf(startTime)) {
        throw Error('Неправильный тип данных')
    };

    if (startTime.hours < 8 || endTime.hours > 19) {
        throw Error('Время встречи неправильное');
    }

    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;

    this.isMeetingInTimeRange = function(startTime, endTime) {
        return this.startTime.isLater(startTime) && this.startTime.isEarlier(endTime) ||
			this.endTime.isLater(startTime) && this.endTime.isEarlier(endTime);
    };
}

const _Meeting = Meeting;
export { _Meeting as Meeting };