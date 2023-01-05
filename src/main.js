import './views/filter-view';
import './views/sort-view';
import './views/list-view';
import TripEventsPresenter from './presenters/trip-events-presenter';
import TripEventsModel from './model/trip-events-model';

const siteTripEventsContainer = document.querySelector('.trip-events');
const tripEventsModel = new TripEventsModel();
const tripEventsPresenter = new TripEventsPresenter({
  tripEventsContainer: siteTripEventsContainer,
  tripEventsModel,
});

tripEventsPresenter.init();
