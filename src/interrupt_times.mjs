/*
const get_midnight = () => {
    const interrupt_enabled = game.settings.get("parties-5e", "interrupts_midnight")
}

const get_dawn = () => {

}

const get_midday = () => {

}

const get_dusk = () => {

}

const get_next_interrupt = () => {
    const clock = game.settings.get("parties-5e", "clock");

//     if (clock == "simpleCalendar") {  // todo
    const clock_status = SimpleCalendar.api.clockStatus()
    if (!clock_status) { // clock started/paused
        const pause_status = SimpleCalendar.api.pauseClock() // true if now paused, false if now unpaused
        if (!pause_status) {
            SimpleCalendar.api.pauseClock()
        }
    }
    const timestamp = SimpleCalendar.api.timestamp();
    const date_time = SimpleCalendar.api.timestampToDate(timestamp);
    const month = SimpleCalendar.api.getCurrentMonth();
    const season = SimpleCalendar.api.getCurrentSeason();
    const

    if (!clock_status) { // clock started/paused
        if (pause_status) { // if clock was unpaused earlier, unpause again
            SimpleCalendar.api.pauseClock()
        }
    }
//     }
//     else {
//         return null;
//     }

    let int_time = 0;

    if (game.settings.get("parties-5e", "interrupts_midnight")) {
        let midnight = date_time;
        mid
        int_time = select_smallest_time(timestamp, int_time, midnight)
    }
    if (game.settings.get("parties-5e", "interrupts_midnight")) {

    }
    if (game.settings.get("parties-5e", "interrupts_midnight")) {

    }
    if (game.settings.get("parties-5e", "interrupts_midnight")) {

    }

    if (int_time > timestamp) {
        return int_time;
    } else {
        return null;
    }


}

const select_smallest_time = (current_time, interrupt_time, tested_time) => {
    if (interrupt_time <= current_time || tested_time < interrupt_time) {
        return tested_time;
    } else {
        return interrupt_time;
    }
}

const get_next_date = (current_time, current_month, leapyeardata) => {

}
*/