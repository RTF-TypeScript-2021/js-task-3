"use strict";
/** Задача 1 - Класс Time
Требуется написать класс времени - Time, который содержит:
	1.1. Поле с часами — hours (number)
	1.2. Поле с минутами — minutes (number)
	1.3. Прототип класса должен содержать метод сравнения isEarlier,
	который принимает объект класса Time и возвращает true,
	если переданное значение времени находится позже того,
	которое содержится в экземпляре объекта, у которого вызван метод.
	1.4. Прототип класса должен содержать метод сравнения isLater,
	который принимает объект класса Time и возвращает true,
	если переданное значение времени находится раньше того,
	которое содержится в экземпляре объекта, у которого вызван метод.
@constructor
@this {Time}
@param {number} hours - Час
@param {number} minutes - Минуты
 */
function Time (hours, minutes) {
    if (!Number.isInteger(hours) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error("Hours variable must be an integer between 0 and 23");
    }
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
        throw new Error("Minutes must be an integer between 0 and 60");
    }
    
    this.hours = hours;
    this.minutes = minutes;
}

Time.prototype.isEarlier = function (time) {
    if (!(time instanceof Time)) {
        throw new Error("The argument must be an instance of Time");
    }
    
    return this.hours < time.hours || this.hours === time.hours && this.minutes < time.minutes;
}

Time.prototype.isLater = function (time) {
    if (!(time instanceof Time)) {
        throw new Error("The argument must be an instance of Time");
    }
    
    return !this.isEarlier(time);
}

module.exports.Time = Time;