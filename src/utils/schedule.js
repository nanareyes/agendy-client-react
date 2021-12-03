import {getDefaultScheduleState} from "../atoms"

// Convert API schedule to local state
export const scheduleObjToArray = (schedule) => {
    const newSchedule = getDefaultScheduleState();
    Object.keys(schedule).forEach(day => {
        schedule[day].forEach(timeSlice => {
            for (let hour=timeSlice.startHour; hour<timeSlice.endHour; hour++){
                newSchedule[day] = [...newSchedule[day].slice(0, hour), {hour, selected: true}, ...newSchedule[day].slice(hour + 1)]
            }
        });
    });
    return newSchedule;
};

// Convert local schedule in the state to an object for the API
export const scheduleArrToObj = (schedule) => {
    const newSchedule = {}
    Object.keys(schedule).map(day => {
        const workingSlicesForDay = [];
        let startHour, endHour
        schedule[day].filter(hour => hour.selected).forEach(({hour}, index) => {
            if (index === 0) {
                startHour = hour
                endHour = hour
            }
            if ([0, 1].includes(hour - endHour)){
                endHour = hour
            } else {
                workingSlicesForDay.push({startHour, endHour: endHour + 1})
                startHour = hour
                endHour = hour
            }
        });
        if (startHour && endHour){
            workingSlicesForDay.push({startHour, endHour: endHour + 1})
        }
        
        newSchedule[day] = workingSlicesForDay;
    });
    return newSchedule;
};