import {getRandomTripEvent} from '../mock/trip-event';

const TRIP_EVENT_COUNT = 5;

export default class TripEventsModel {
  tripEvents = Array.from({length: TRIP_EVENT_COUNT}, getRandomTripEvent);

  getTripEvents() {
    return this.tripEvents;
  }
}
