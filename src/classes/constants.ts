/**
 * The name of this module
 * @internal
 */
export const ModuleName = 'parties-5e';



/**
 * The different hooks that other systems and modules can listen too
 */
export enum PartyHooks {
    EventOccurred = 'parties-event-occurred',
    Ready = 'party-ready',
    Init = 'party-init'
}

/*
EventOccurred:



*/

/*
Event object must have these parameters
chat message, message_visibility, distance_remaining=0, time_remaining=0
When created, at exactly one of distance_remaining and time_remaining must be > 0.

Events should be stored in priority queues: 1 for time remaining, one for distance remaining

*/