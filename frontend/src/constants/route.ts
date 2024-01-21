const ROUTE = Object.freeze({
  HOME: '/',
  CALENDAR: '/calendar',
  COMMUNITY: {
    BASE: '/community',
    LIST: '',
    WRITE: 'write',
    DETAIL: ':id',
  },
  LOGIN: '/login',
  SIGNUP: '/signup',
  ADMIN: {
    BASE: '/admin',
    APPROVAL: 'approval',
    INFO: 'info',
    CHANGE: 'change',
  },
  TEMP: {
    BASE: '/temp',
    APPLE: 'apple',
    BANANA: 'banana',
    MANGO: 'mango',
  },
});

export default ROUTE;
