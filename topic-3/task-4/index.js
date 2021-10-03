"use strict";

const { Meeting } = require("../task-2");
const { Vacation } = require("../task-3");

class Organaizer { 
	/**
	 * @param {Array<Meeting>} meetings 
	 * @param {Array<Vacation>} vacations 
	 */
	
	constructor(meetings = [], vacations = []) {
		if(
			!Array.isArray(meetings) ||
			!Array.isArray(vacations) ||
			meetings.some(x => !(x instanceof Meeting)) ||
			vacations.some(x => !(x instanceof Vacation))
		) {
			throw new Error("Invalid arguments")
		}

		this.meetings = meetings;
		this.vacations = vacations;
	}
};

module.exports.Organaizer = Organaizer;