/** Задача 3 - Класс Vacation
Требуется написать класс отпуска - Vacation, который содержит:
	3.1. Дата начала (объект класса Date)
	3.2. Дата окончания (объект класса Date)
	3.3. Прототип класса должен содержать метод isDateInVacation, принимающий один аргумент — дату.
	Должен возвращать true, если переданная дата, входит в промежуток отпуска.
	3.4. Дата окончания отпуска должна быть позже даты начала
@constructor
@this {Vacation}
@param {Date} vacationStartDate - Дата начала отпуска
@param {Date} vacationEndDate - Время конца отпуска
 */

function Vacation(vacationStartDate, vacationEndDate) {
    if (!vacationStartDate instanceof Date || !vacationEndDate instanceof Date
        || vacationStartDate.getTime() >= vacationEndDate.getTime()) {
        throw new Error("Дата некорректна");
    }
    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;
    /**
     * Метод принимающий один аргумент — дату.
	 * Должен возвращать true, если переданная дата, входит в промежуток отпуска.
     * @param {Date} date - Дата
     */
    this.isDateInVacation = function(date) {
        if (!date instanceof Date) {
            throw new Error("Дата некорректна");
        }
        const time = date.getTime();
        if (time >= this.vacationStartDate.getTime() 
        && time <= this.vacationEndDate.getTime()) {
            return true;
        }

        return false;
    }
}

module.exports.Vacation = Vacation;