"use strict";
/** Задача 1 - Класс Time
Требуется написать класс времени - Time, который содержит:
	1.1. Поле с часами — hours (number)
	1.2. Поле с минутами — minutes (number)
	1.3. Прототип класса должен содержать метод сравнения isEarlier,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится позже того,
	которое содержится в экземпляре объекта, у которого вызван метод.
	1.4. Прототип класса должен содержать метод сравнения isLater,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится раньше того,
	которое содержится в экземпляре объекта, у которого вызван метод.
@constructor
@this {Time}
@param {number} hours - Час
@param {number} minutes - Минуты
 */
function Time(hours, minutes) {
	if (!Number.isInteger(hours) || hours > 24 || hours < 0) {
            throw new Error('An impossible number of hours');
	}
	if (!Number.isInteger(minutes) || minutes > 60 || minutes < 0) {
		throw new Error('An impossible number of minutes');
	}
	this.hours = hours;
    this.minutes = minutes;
}

Time.prototype.isEarlier = function(time) {
    return this.hours === time.hours ? this.minutes < time.minutes : this.hours < time.hours;
}
Time.prototype.isLater = function(time) {
    return !this.isEarlier(time);
}

module.exports.Time = Time;