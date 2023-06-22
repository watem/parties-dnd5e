/*
// calculate next dawn, next midday, next dusk, next midnight
export default class SimpleCalendarUtilities {
    static GetNextDaytimeInterrupt() {
        const timestamp = SimpleCalendar.api.timestamp();
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
        let date = SimpleCalendar.api.timestampToDate(timestamp);
        let time = 0;
        if (setting == "midnight") {
            date = getTomorrow(timestamp);
            time = SimpleCalendar.api.dateToTimestamp({year: date.year, month: date.month, day: date.day, hour: 0, minute: 0, seconds: 0});
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

    static getTomorrow(timestamp, asDate=true) {
        let tomorrow = SimpleCalendar.api.timestampPlusInterval(timestamp, {day: 1});
        if (asDate) {
            return SimpleCalendar.api.timestampToDate(tomorrow);
        } else {
            return tomorrow;
        }
    }

}
*/