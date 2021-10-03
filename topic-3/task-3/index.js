"use strict";

class Vacation {
	/**
	 * @param {Date} vacationStartDate 
	 * @param {Date} vacationEndDate 
	 */
	constructor(vacationStartDate, vacationEndDate) {
		if(
			!(vacationEndDate instanceof Date) || 
			!(vacationStartDate instanceof Date) || 
			vacationStartDate >= vacationEndDate
		) {
			throw new Error("Invalid date");
		}
		this.vacationStartDate = vacationStartDate;
		this.vacationEndDate = vacationEndDate;
	}

	/**
	 * @param {Date} date
	 */
	isDateInVacation(date) {
		if(!(date instanceof Date)) {
			throw new Error("Invalid argument");
		}
		const time = date.getTime()

		return this.vacationStartDate.getTime() <= time && this.vacationEndDate.getTime() >= time;
	}
}

module.exports.Vacation = Vacation;