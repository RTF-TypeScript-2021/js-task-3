"use strict";
// @ts-ignore
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
        if (!Number.isInteger(hours) || hours > 24 || hours < 0
         || !Number.isInteger(minutes) || minutes > 60 || minutes < 0){
            throw new Error('Incorrect argument');
        }
        this.hours = hours;
        this.minutes = minutes;
    }

    isEarlier(time) {
        return this.hours * 60 + this.minutes <= time.hours * 60 + time.minutes;
    }

    isLater(time) {
        return this.hours * 60 + this.minutes >= time.hours * 60 + time.minutes;
    }
}

module.exports.Time = Time;