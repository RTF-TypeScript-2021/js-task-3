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
    if (!(vacationStartDate instanceof Date)){
        throw new Error("Argument error. Argument vacationStartDate must be an instance of Date.");
    }
    if (!(vacationEndDate instanceof Date)){
        throw new Error("Argument error. Argument vacationEndDate must be an instance of Date.");
    }
    if (vacationStartDate >= vacationEndDate){
        throw new Error("Date error. Date vacationStartDate must be earlier than date vacationEndDate.");
    }

    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;

    this.isDateInVacation = (date) => {
        if (!(date instanceof Date)){
            throw new Error("Argument error. Argument date must be an instance of Date.");
        }

        return date >= this.vacationStartDate && date <= this.vacationEndDate;
    }
}

module.exports.Vacation = Vacation;