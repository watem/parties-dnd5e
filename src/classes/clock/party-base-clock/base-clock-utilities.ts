/*
export default class SimpleCalendarUtilities {
    static GetNextDaytimeInterrupt() {
        // const timestamp = SimpleCalendar.api.timestamp();
        let changetime = 0;
        // TODO: get which times are interrupts
        for setting in time option list {
            if (setting) {
                let time = settingGetTime(setting, timestamp) // getMidday
                if (time < changetime || changetime < date) {
                    changetime = time;
                }
            }
        }
    }

    static settingGetTime(setting, timestamp) {
        let time = 0;
        if (setting == "midnight") {
            date = dayTimeFromTimestamp(timestamp);
            time = timeFromDayTime({day: (date.day + 1), hour: 0, minute: 0, second: 0});
        } else if (setting == "dawn") {
            time = date.sunrise;
        } else if (setting == "midday") {
            time = date.midday;
        } else if (setting == "dusk") {
            time = date.sunset;
        }
        if (time <= timestamp) {
            time = settingGetTime(setting, getTomorrow(timestamp, false));
        }
        return time
    }

    static dayTimeFromTimestamp(timestamp) {
        const secondsPerDay = 0;
        const day = timestamp / secondsPerDay
        const dayTime = timestamp % secondsPerDay;
        const hour = dayTime / hoursPerDay;
        const minute = dayTime % hoursPerDay / minutesPerHour;
        const second = dayTime % hoursPerDay % minutesPerHour / secondsPerMinute;
        return {day: day, hour: hour, minute: minute, second: second}
    }

    static timestampFromDayTime(dayTime) {
        const secondsPerDay = 0;
        const daySeconds = day * secondsPerDay;

        return (dayTime.day * secondsPerDay) + (dayTime.hour * hoursPerDay) + (dayTime.minute * minutesPerHour) + (dayTime.second * secondsPerMinute)
    }
}
*/