/** Задача 3 - Класс Vacation
 Требуется написать класс отпуска - Vacation, который содержит:
 3.1. Дата начала (объект класса Date)
 3.2. Дата окончания (объект класса Time)
 3.3. Прототип класса должен содержать метод isDateInVacation, принимающий один аргумент — дату.
 Должен возвращать true, если переданная дата, входит в промежуток отпуска.
 3.4. Дата окончания отпуска должна быть позже даты начала
 @constructor
 @this {Vacation}
 @param {Date} vacationStartDate - Дата начала отпуска
 @param {Date} vacationEndDate - Время конца отпуска
 */

function Vacation (vacationStartDate, vacationEndDate) {
    if (!(vacationStartDate instanceof Date)) {
        throw new Error("Vacation start date variable must be an instance of Date");
    }
    if (!(vacationEndDate instanceof Date)) {
        throw new Error("Vacation end date variable must be an instance of Date");
    }
    if (vacationStartDate.getTime() >= vacationEndDate.getTime()) {
        throw new Error("Vacation Start date must be earlier than end time");
    }
    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;
}

Vacation.prototype.isDateInVacation = function (date) {
    if (!(date instanceof Date)) {
        throw new Error("Date variable must be an instance of Date");
    }
    
    const dateTime = date.getTime();
    
    return this.vacationStartDate <= dateTime && this.vacationEndDate >= dateTime;
}

module.exports.Vacation = Vacation;