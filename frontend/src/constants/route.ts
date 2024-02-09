const ROUTE = Object.freeze({
  HOME: '/',
  CALENDAR: '/calendar',
  COMMUNITY: {
    BASE: '/community',
    LIST: '',
    WRITE: 'write',
    UPDATE: 'update',
    DETAIL: ':id',
    NOT_FOUND: '404-not-found',
  },
  LOGIN: '/login',
  SIGNUP: '/signup',
  RESET_PASSWORD: '/reset-password',
  RESET_PASSWORD_AFTER_EMAIL_VERIFY: '/change-password',
  ENTERINFO: '/enterinfo',
  ADMIN: {
    BASE: '/admin',
    APPROVAL: 'approval',
    INFO: 'info',
    CHANGE: 'change',
  },
  PROFILE: {
    BASE: '/mypage',
    MYINFO: 'myinfo',
    MYWRITINGS: 'mywritings',
    MYCOMMENTS: 'mycomments',
  },
  TEMP: {
    BASE: '/temp',
    APPLE: 'apple',
    BANANA: 'banana',
    MANGO: 'mango',
  },
});

export default ROUTE;
