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
    if (typeof(hours) !== 'number' || typeof(minutes) !=='number' || hours < 0  || hours > 24 
    || minutes < 0 || minutes > 60) {
        throw new Error("Значение времени некорректно");       
    }
    this.hours = hours;
    this.minutes = minutes;
}
Time.prototype.isEarlier = function(time) {
    if (!time instanceof Time) {
        throw new Error("Сравниваемый объект некорректный")
    }
    if (this.hours === time.hours) {
        if (this.minutes < time.minutes) {
            return true;
        } else {
            return false;
        }
    } else if (this.hours < time.hours) {
        return true;
    } else {
        return false;
    }
}

Time.prototype.isLater = function(time) {
    if (!time instanceof Time) {
        throw new Error("Сравниваемый объект некорректный")
    }
    if (time.hours === this.hours && time.minutes === this.minutes) {
        return false;
    }
        
    return !this.isEarlier(time);
} 


module.exports.Time = Time;