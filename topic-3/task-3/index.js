"use strict";

class Vacation {
	/**
	 * @param {Date} vacationStartDate 
	 * @param {Date} vacationEndDate 
	 */
	constructor(vacationStartDate, vacationEndDate) {
		if(vacationStartDate.getDate() >= vacationEndDate.getDate()) {
			throw new Error("Invalid date");
		}
		this.vacationStartDate = vacationStartDate;
		this.vacationEndDate = vacationEndDate;
	}

	/**
	 * @param {Date} date
	 */
	isDateInVacation(date) {
		let time = date.getTime()
		return this.vacationStartDate.getTime() <= time && this.vacationEndDate.getTime() >= time;
	}
}

module.exports.Vacation = Vacation;