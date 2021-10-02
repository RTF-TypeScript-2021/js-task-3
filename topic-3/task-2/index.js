"use strict";
import {Time} from "../task-1";
export {Meeting};

class Meeting {
	/**
	 * @param {Date} meetingDate 
	 * @param {Time} startTime 
	 * @param {Time} endTime 
	 */
    constructor(meetingDate, startTime, endTime) {
		if(startTime.isLater(endTime) || startTime.hours < 8 || startTime.hours > 19) {
			throw new Error("Invalid time");
		}
        this.meetingDate = meetingDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

	/**
	 * @param {Time} startTime
	 * @param {Time} endTime
	 */
	isMeetingInTimeRange(startTime, endTime) {
		return !startTime.isLater(this.endTime) && !endTime.isEarlier(this.startTime);
	}
}

module.exports.Meeting = Meeting;