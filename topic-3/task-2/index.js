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
	2.6. Встреча может быть назначесна только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) {
    /* минимальное значение SiStartTime не должно быть меньше (08:00) 8 * 3600 + 0 * 60 = 28800 сек 
    максимальное значение SiEndTime не должно быть больше (19:00) 19 * 3600 + 0 * 60 = 68400 сек */
    const SiStartTime = startTime.hours * 3600 + startTime.minutes * 60;
    const SiEndTime = endTime.hours * 3600 + endTime.minutes * 60;
    if (startTime > endTime || SiStartTime < 28800 || SiEndTime > 68400 ) {
        throw new Error ("The meeting is only about between 8:00 and 19:00");
    }
    /* задаем контекст для валидного диапазона встречи */
    this.meetingDate = meetingDate;
    this.startTime = startTime;
    this.endTime = endTime;
}
/* переводим в Си, сравниваем с ранее заданным диапазоном встречи */
Meeting.prototype.isMeetingInTimeRange = function (startTime,endTime) {
    const currentStartTime = this.startTime.hours * 3600 + this.startTime.minutes * 60;
    const currentEndTime = this.endTime.hours * 3600 + this.endTime.minutes * 60;
    const inRangeStartTime = startTime.hours * 3600 + startTime.minutes * 60;
    const inRangeEndTime = endTime.hours * 3600 + endTime.minutes * 60;
    
    return currentEndTime > inRangeStartTime && currentStartTime < inRangeEndTime;
}

module.exports.Meeting = Meeting;
