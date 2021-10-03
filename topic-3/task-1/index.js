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
    if (hours < 0 || hours > 24 || typeof(hours) !== 'number' 
	|| minutes < 0 || minutes > 60 || typeof(minutes) !== 'number'){
        throw new Error('incorrect data');
    }

    this.hours = hours;
    this.minutes = minutes;
}

Time.prototype.isEarlier = function(time) {
    if (!(Time.prototype.isPrototypeOf(time))){
        throw new Error();
    }

    return time.hours * 60 + time.minutes >= this.hours * 60 + this.minutes; // this 16:15 16:40 || 16:00 17:00
}

Time.prototype.isLater = function(time){
    if (!(Time.prototype.isPrototypeOf(time))){
        throw new Error();
    }

    return time.hours * 60 + time.minutes <= this.hours * 60 + this.minutes;
}

module.exports.Time = Time;