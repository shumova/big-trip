import {getRandomArrayElement} from '../utils';
import {TYPES} from '../const';

const mockTripEvents = [
  {
    type: TYPES[0],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: false,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: true,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-18 12:25'),
      end: new Date('2019-03-18 13:35'),
    },
    price: '160',
    offers: [
      {
        name: 'luggage',
        acceptance: true,
        title: 'Add luggage',
        price: '50',
      },
      {
        name: 'comfort',
        acceptance: true,
        title: 'Switch to comfort',
        price: '80',
      },
      {
        name: 'meal',
        acceptance: false,
        title: 'Add meal',
        price: '15',
      },
      {
        name: 'seats',
        acceptance: false,
        title: 'Choose seats',
        price: '5',
      },
      {
        name: 'train',
        acceptance: false,
        title: 'Travel by train',
        price: '40',
      },
    ],
  },
  {
    type: TYPES[5],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: false,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: true,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-18 14:30'),
      end: new Date('2019-03-18 16:05'),
    },
    price: '160',
    offers: [
      {
        name: 'car-rent',
        acceptance: true,
        title: 'Rent a car',
        price: '200',
      },
    ],
  },
  {
    type: TYPES[0],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: true,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: false,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-19 00:00'),
      end: new Date('2019-03-19 13:35'),
    },
    price: '120',
    offers: [
      {
        name: 'luggage',
        acceptance: true,
        title: 'Add luggage',
        price: '50',
      },
      {
        name: 'comfort',
        acceptance: false,
        title: 'Switch to comfort',
        price: '80',
      },
      {
        name: 'meal',
        acceptance: true,
        title: 'Add meal',
        price: '15',
      },
      {
        name: 'seats',
        acceptance: true,
        title: 'Choose seats',
        price: '5',
      },
      {
        name: 'train',
        acceptance: false,
        title: 'Travel by train',
        price: '40',
      },
    ],
  },
  {
    type: TYPES[2],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: true,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: false,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-19 00:00'),
      end: new Date('2019-03-19 13:35'),
    },
    price: '40',
    offers: [],
  },
  {
    type: TYPES[7],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: false,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: true,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-19 13:00'),
      end: new Date('2019-03-19 14:20'),
    },
    price: '120',
    offers: [
      {
        name: 'tickets',
        acceptance: true,
        title: 'Book tickets',
        price: '40',
      },
      {
        name: 'lunch',
        acceptance: false,
        title: 'Lunch in city',
        price: '30',
      },
    ],
  },
  {
    type: TYPES[6],
    destination: [
      {
        title: 'Amsterdam',
        acceptance: false,
        description: 'Information about Amsterdam.',
      },
      {
        title: 'Geneva',
        acceptance: false,
        description: 'Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac L&eacute;man (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.',
        photos: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Chamonix',
        acceptance: true,
        description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
      },
    ],
    time: {
      start: new Date('2019-03-18 16:20'),
      end: new Date('2019-03-19 17:20'),
    },
    price: '600',
    offers: [
      {
        name: 'breakfast',
        acceptance: true,
        title: 'Add breakfast',
        price: '50',
      },
      {
        name: 'king-size-bed',
        acceptance: true,
        title: 'King-size bed',
        price: '150',
      },
    ],
  },
];

function getRandomTripEvent() {
  return getRandomArrayElement(mockTripEvents);
}

export {getRandomTripEvent};
