const {Time} = require("../task-1");

/** Задача 2 - Класс Meeting
Требуется написать класс встречи - Meeting, который содержит:
	2.1. Поле c датой встречи (объект класса Date)
	2.2. Поле — время начала встречи (объект класса Time)
	2.3. Поле — время конца встречи (объект класса Time)
	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
		Начало временного промежутка — объект класса Time
		Конец временного промежутка — объект класса Time
		Должен возвращать true, если встреча, у которой был вызван метод,
		пересекает переданный временной промежуток
	2.5. Время начала встречи должно быть больше времени конца
	2.6. Встреча может быть назначена только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) {
    if (!(meetingDate instanceof Date)){
        throw new Error("Argument error. Argument meetingDate must be an instance of Date.");
    }
    if (!(startTime instanceof Time)){
        throw new Error("Argument error. Argument startTime must be an instance of Date.");
    }
    if (!(endTime instanceof Time)){
        throw new Error("Argument error. Argument endTime must be an instance of Date.");
    }

    const minStartTime = new Time(8, 0);
    const maxEndTime = new Time(19, 0);

    if (startTime.isEarlier(minStartTime) || endTime.isLater(maxEndTime) || endTime.isEarlier(startTime)){
        throw new Error("Argument error. Incorrect meeting time.");
    }

    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;

    this.isMeetingInTimeRange = (start, end) => {
        if (!(start instanceof Time)){
            throw new Error("Argument error. Argument start must be an instance of Date.");
        }
        if (!(end instanceof Time)){
            throw new Error("Argument error. Argument end must be an instance of Date.");
        }

        return start.isEarlier(this.endTime) && end.isLater(this.startTime);
    };
}

module.exports.Meeting = Meeting;