const TYPES = [
  'flight',
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'check-in',
  'sightseeing',
  'restaurant',
];

const DEFAULT_TRIP_EVENT = {
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
      acceptance: false,
      description: 'Chamonix-Mont-Blanc (usually shortened to&nbsp;Chamonix) is&nbsp;a&nbsp;resort area near the junction of&nbsp;France, Switzerland and Italy. At&nbsp;the base of&nbsp;Mont Blanc, the highest summit in&nbsp;the Alps, it&rsquo;s renowned for its skiing.',
    },
  ],
  time: {
    start: new Date(),
    end: new Date(),
  },
  price: '',
  offers: [
    {
      name: 'luggage',
      acceptance: false,
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
};

export {TYPES, DEFAULT_TRIP_EVENT};
