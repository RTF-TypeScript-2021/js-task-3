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

function Vacation(vacationStartDate, vacationEndDate) {
    if(!(vacationEndDate instanceof Date) || !(vacationStartDate instanceof Date)) {
        throw new Error();
    }
    if(vacationEndDate <= vacationStartDate) {
        throw new Error();
    }
    this.vacationEndDate = vacationEndDate;
    this.vacationStartDate = vacationStartDate;
}

Vacation.prototype.isDateInVacation = function(date) {
    if (!(date instanceof Date)) {
        throw new Error("date must be instance of Date ");
    }
    const result = this.vacationStartDate <= date && date <= this.vacationEndDate; 

    return result;
}

module.exports.Vacation = Vacation;