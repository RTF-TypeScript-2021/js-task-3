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
    const minTime = 0;
    const maxMinutes = 60;
    const maxHours = 24;
    this.hours = verifyTime(hours, minTime, maxHours);
    this.minutes = verifyTime(minutes, minTime, maxMinutes);

    function verifyTime(time, min, max) {
        if (Number.isInteger(time) && time >= min && time < max) {
            return time;
        }
        throw new Error("Argument error. Incorrect time value.");
    }
}

Time.prototype.isEarlier = function (time) {
    if (!(time instanceof Time)) {
        throw new Error("Argument error. Argument time must be an instance of Time.");
    }

    return time.hours === this.hours ? time.minutes > this.minutes : time.hours > this.hours;
}

Time.prototype.isLater = function (time){
    return !this.isEarlier(time);
}

module.exports.Time = Time;