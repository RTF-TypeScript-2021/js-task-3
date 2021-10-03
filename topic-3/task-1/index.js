"use strict";

class Time {

	/**
	 * @param {Number} hours
	 * @param {Number} minutes 
	 */
	constructor(hours, minutes) {
		if (
			!Number.isInteger(hours) || 
			!Number.isInteger(minutes) || 
			hours < 0 || 
			hours > 23 ||
			minutes < 0 || 
			minutes > 59
		) {
			throw new Error("Invalid arguments");
		}
		this.hours = hours;
		this.minutes = minutes;
	}

	/**
	 * @param {Time} time Time to compare with
	 */
	isEarlier(time) {
		if(!(time instanceof Time)) {
			throw new Error("Invalid arguments");
		}

		return time.hours * 60 + time.minutes >= this.hours * 60 + this.minutes;
	}

	/**
	 * @param {Time} time Time to compare with
	 */
	isLater(time) {
		if(!(time instanceof Time)) {
			throw new Error("Invalid arguments");
		}

		return !this.isEarlier(time);
	}
}

module.exports.Time = Time;