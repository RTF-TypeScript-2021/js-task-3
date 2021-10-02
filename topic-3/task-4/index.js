"use strict";

class Organaizer { 
	/**
	 * @param {Array<Meeting>} meetings 
	 * @param {Array<Vacation>} vacations 
	 */
	
	constructor(meetings = [], vacations = []) {
		this.meetings = meetings;
		this.vacations = vacations;
	}
};

module.exports.Organaizer = Organaizer;