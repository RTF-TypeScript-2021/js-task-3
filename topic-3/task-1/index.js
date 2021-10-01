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

    this.hours = Hours();
    this.minutes = Minutes();

    function Hours() {
        if(hours < 0 || hours >= 24) {
            throw new Error("Incorrect data");
        } else {
            return hours;
        }
    }

    function Minutes() {
        if (minutes < 0 || minutes >= 60) {
            throw new Error("Incorrect data");
        } else {
            return minutes;
        }
    }
}

const minInHour = 60;

Time.prototype.isEarlier = function(Time) {
    return (Time.minutes + Time.hours*minInHour) > (this.hours*minInHour + this.minutes);
}

Time.prototype.isLater = function(Time) {
    return (Time.minutes + Time.hours*minInHour) < (this.hours*minInHour + this.minutes);
}

module.exports.Time = Time;