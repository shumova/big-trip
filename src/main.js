import FilterView from './views/filter-view';
import SortView from './views/sort-view';
import ListView from './views/list-view';
import NewPointEditorView from './views/new-point-editor-view';
import PointEditorView from './views/point-editor-view';

import Store from './store';

import CollectionModel from './models/collection-model';

import PointAdapter from './adapters/point-adapter';
import DestinationAdapter from './adapters/destination-adapter';
import OfferGroupAdapter from './adapters/offer-group-adapter';

import {FilterType, SortType} from './enums';
import {filterCallbackMap, sortCallbackMap} from './maps';

import FilterPresenter from './presenters/filter-presenter';
import SortPresenter from './presenters/sort-presenter';
import EmptyListPresenter from './presenters/empty-list-presenter';
import ListPresenter from './presenters/list-presenter';
import NewPointButtonPresenter from './presenters/new-point-button-presenter';
import NewPointEditorPresenter from './presenters/new-point-editor-presenter';
import PointEditorPresenter from './presenters/point-editor-presenter';

const BASE = 'https://24.objects.htmlacademy.pro/big-trip';
const AUTH = 'Basic MashaLovesJs!!!';

/**
 * @type {Store<Point>}
 */
const pointsStore = new Store(`${BASE}/points`, AUTH);

const pointsModel = new CollectionModel({
  store: pointsStore,
  adapt: (item) => new PointAdapter(item),
  filter: filterCallbackMap[FilterType.FUTURE],
  sort: sortCallbackMap[SortType.DAY],
});

/**
 * @type {Store<Destination>}
 */
const destinationsStore = new Store(`${BASE}/destinations`, AUTH);

const destinationsModel = new CollectionModel({
  store: destinationsStore,
  adapt: (item) => new DestinationAdapter(item),
});

/**
 * @type {Store<OfferGroup>}
 */
const offerGroupsStore = new Store(`${BASE}/offers`, AUTH);

const offerGroupsModel = new CollectionModel({
  store: offerGroupsStore,
  adapt: (item) => new OfferGroupAdapter(item),
});

const models = [
  pointsModel,
  destinationsModel,
  offerGroupsModel,
];

const newPointButtonView = document.querySelector('.trip-main__event-add-btn');
const filterView = document.querySelector(String(FilterView));
const sortView = document.querySelector(String(SortView));
const emptyListView = document.querySelector('.trip-events__msg');
const listView = document.querySelector(String(ListView));
const newPointEditorView = new NewPointEditorView(listView);
const pointEditorView = new PointEditorView(listView);

Promise.all(
  models.map((model) => model.ready())
)
  .then(() => {
    new NewPointButtonPresenter(newPointButtonView, models);
    new FilterPresenter(filterView, models);
    new SortPresenter(sortView, models);
    new EmptyListPresenter(emptyListView, models);
    new ListPresenter(listView, models);
    new NewPointEditorPresenter(newPointEditorView, models);
    new PointEditorPresenter(pointEditorView, models);
  })

  .catch((exception) => {
    emptyListView.textContent = exception;
  });
