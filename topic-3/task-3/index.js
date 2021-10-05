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
    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;

    if(!vacationStartDate instanceof Date || !vacationEndDate instanceof Date) {
        throw new Error("Arguments must be instance of Date object");
    }

    if(!vacationStartDate || !vacationEndDate) {
        throw new Error("Arguments must contain start date and end date");
    }

    if(vacationStartDate >= vacationEndDate) {
        throw new Error("Second argument must be greater than first argument");
    }

    this.isDateInVacation = (date) => {
        return this.vacationStartDate <= date && date <= this.vacationEndDate;
    }
}

module.exports.Vacation = Vacation;
