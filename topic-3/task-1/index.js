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
    /* проверка входных значений на адекатность */
    if (typeof(hours,minutes) !=="number" || minutes < 0 || hours < 0 || hours > 23 || minutes > 59) {
        throw new Error("Time data must be number that more than 0");
    }
    /* задание контекста для аргументов hours и minutes */
    this.hours = hours;
    this.minutes = minutes;
}
/*Переводим в Си, делаем проверку */
Time.prototype.isEarlier = function(Time) { 
    return Time.hours * 3600 + Time.minutes * 60 > this.hours * 3600 + this.minutes * 60
}
/* аналогично предыдущему методу только later */
Time.prototype.isLater = function(Time) {
    return Time.hours * 3600 + Time.minutes * 60 < this.hours * 3600 + this.minutes * 60

}

module.exports.Time = Time;