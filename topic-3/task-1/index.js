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
	if (!Number.isInteger(hours) && !Number.isInteger(minutes)
		|| hours < 0 || minutes < 0 || hours > 23 || minutes > 59) {
		throw new Error("The input data has incorrect format");
	}

	this.hours = hours;
	this.minutes = minutes;
}

Time.prototype.isEarlier = function(time) {
	if (!Time.prototype.isPrototypeOf(time)) {
		throw new Error("The input data has incorrect format");
	}

	return time.hours > this.hours || time.hours === this.hours && time.minutes >= this.minutes;
};

Time.prototype.isLater = function(time) {
	if (!Time.prototype.isPrototypeOf(time)) {
		throw new Error("The input data has incorrect format");
	}

	return time.hours < this.hours || time.hours === this.hours && time.minutes <= this.minutes;
};

module.exports.Time = Time;