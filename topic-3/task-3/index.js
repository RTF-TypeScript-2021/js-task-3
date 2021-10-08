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
    /* проверяем данные на адекватность */
    if (vacationEndDate <= vacationStartDate || vacationStartDate === undefined || vacationEndDate === undefined) {
        throw new Error ("Start date must be earlier than the end one");
    }
    /*задаем контекст для валидного диапазона дат */
    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;
}
/* сравниваем валидный диапазон с передаваемым в date */ 
Vacation.prototype.isDateInVacation = function (date) {
    if (this.vacationStartDate <= date && date <= this.vacationEndDate) {
        return true;
    } else {
        return false;
    }
    /*  return this.vacationStartDate <= date <= this.vacationEndDate; - не работает. Не понимаю почему. По возможности объясни, пожалуйста :)*/
    
}
module.exports.Vacation = Vacation;