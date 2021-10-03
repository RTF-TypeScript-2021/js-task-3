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
    if (hours > 23 || hours < 0 || minutes < 0 || minutes > 59 || !Number.isInteger(hours) || !Number.isInteger(minutes)) {
        throw new Error();
    }
    this.hours = hours;
    this.minutes = minutes;
}
const minInHour = 60;
const checkPar = function(param) {
    return param.hours * minInHour + param.minutes;
}

Time.prototype.isEarlier = function(time) {
    return checkPar(this) < checkPar(time);
}

Time.prototype.isLater = function(time) {
    return checkPar(this) > checkPar(time);
}

module.exports.Time = Time;