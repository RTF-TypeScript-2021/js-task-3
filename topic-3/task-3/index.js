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
	if (!Date.prototype.isPrototypeOf(vacationStartDate) || !Date.prototype.isPrototypeOf(vacationEndDate)) {
		throw new Error("The input data has incorrect format");
	}
	if (vacationEndDate.getTime() <= vacationStartDate.getTime()) {
		throw new Error("The end date of the vacation must be later than the start date");
	}

	this.vacationStartDate = vacationStartDate;
	this.vacationEndDate = vacationEndDate;
}

Vacation.prototype.isDateInVacation = function (date) {
	if (!Date.prototype.isPrototypeOf(date)) {
		throw new Error("The input data has incorrect format");
	}

	return this.vacationStartDate.getTime() <= date.getTime() && date.getTime() <= this.vacationEndDate.getTime();
}

module.exports.Vacation = Vacation;