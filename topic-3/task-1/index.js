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
    if (hours > 24 || hours < 0) {
        throw Error(`Ты с какой планеты сюда прилетел? С Венеры? Введу тебя в курс дела, инопланетянин, 
		на планете Земля не может быть ${hours} часов в сутках, максимум 24`);
    }
    if (minutes > 60 || minutes < 0) {
        throw Error(`Ты с какой галактики сюда попал? Введу тебя в курс дела, иногалактянин,
		на планете Земля не может быть ${minutes} минут, максимум 60`);
    }
    this.hours = hours;
    this.minutes = minutes;
}
Time.prototype.isEarlier = function(otherTime) {
    return this.hours < otherTime.hours || 
	(this.hours === otherTime.hours && this.minutes < otherTime.minutes); 
}
Time.prototype.isLater = function(otherTime) {
    return otherTime.isEarlier(this);
}

module.exports.Time = Time;