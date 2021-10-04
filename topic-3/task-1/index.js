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
class Time {
    constructor(hours, minutes) {
        if (typeof (hours) !== "number" || typeof (minutes) !== "number" || hours < 0 || minutes < 0 || hours > 24 || minutes > 60) {throw Error}
        this.hours = hours;
        this.minutes = minutes;
    }

    getTimeInMinutes() {
        return this.hours * 60 + this.minutes
    }

    isEarlier(another) {
        return another.getTimeInMinutes() >= this.getTimeInMinutes();
    }

    isLater(another) {
        return another.getTimeInMinutes() <= this.getTimeInMinutes();
    }
}

module.exports.Time = Time;