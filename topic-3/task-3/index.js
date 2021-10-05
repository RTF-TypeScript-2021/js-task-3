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
    const checkArguments = () => {
        if(arguments.length!==2){
            throw new Error(`Неверный ввод`);
        }
        for (const date of arguments) {
            if (!date instanceof Date){
                throw new Error(`${date} не является экземпляром класса Date`)
            }
        }
        if (vacationEndDate <= vacationStartDate){
            throw new Error(`${vacationEndDate.toDateString()} меньше чем ${vacationStartDate.toDateString()}`)
        }
    };

    this.checkDateVacation = function (date){
        return vacationStartDate <= date && vacationEndDate >= date
    }

    checkArguments()
    this.vacationStartDate = vacationStartDate;
    this.vacationEndDate = vacationEndDate;

}


Vacation.prototype.isDateInVacation = function (date){
    if (date instanceof Date){
        return this.checkDateVacation(date)
    }
    throw new Error(`${date} не является экземпляром класса Date`)
}
module.exports.Vacation = Vacation;
