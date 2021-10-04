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
//Создание через Класс
class Time {

    static checkInstance(time){
        if (!time instanceof Time){
            throw Error(`${time} не является экземпляром класса Time`);
        }
    }

    constructor(hours,minutes) {
        const checkBounds = (type,limit)=> type >=0 && limit > type;

        if (!(Number.isInteger(hours)
            && Number.isInteger(minutes)
            && checkBounds(hours,24)
            && checkBounds(minutes,60))) {
            throw new Error(`Некоректные данные: часы: ${hours} ; минуты: ${minutes}`)
        }

        this.hours = hours;
        this.minutes = minutes;
    }

    isEarlier(time){
        Time.checkInstance(time);

        return new Date(0,0,1,this.hours,this.minutes) < new Date(0,0,1,time.hours,time.minutes);
    }

    isLater(time){

        return !this.isEarlier(time);
    }
}
module.exports.Time = Time;