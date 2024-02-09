export const QUERY_KEYS = Object.freeze({
  PAGEABLE: 'get-pageable',
  GET_PRESIDENT_INFO: 'get-president-info',
  GET_MEMBER_COUNT: 'get-member-count',
  GET_LATEST_NEWS: 'get-latest-news',
  GET_PROFILE: 'get-profile',
  GET_MY_ARTICLES: 'get-my-articles',
  GET_MY_COMMENTS: 'get-my-comments',
  GET_ARTICLE_DETAIL: 'get-article-detail',
  GET_PARENT_COMMENT: 'get-parent-comment',
  POST_PARENT_COMMENT: 'post-parent-comment',
  DELETE_PARENT_COMMENT: 'delete-parent-comment',
  GET_NESTED_COMMENT: 'get-nested-comment',
  POST_NESTED_COMMENT: 'post-nested-comment',
  POST_ARTICLE: 'post-article',
  DELETE_ARTICLE: 'delete-article',
  UPDATE_ARTICLE: 'update-article',
  GET_USERINFO: 'get-userinfo',
  PATCH_PROFILE: 'patch-profile',
  GET_MAJORS: 'get-majors',
  POST_RESET_PASSWORD: 'post-reset-password',
  POST_CHANGE_PASSWORD: 'post-change-password',
});

export const STORE_KEYS = Object.freeze({
  SIDEBAR: 'sidebar',
  NESTED_COMMENT: 'nestedComment',
  LOGIN: 'login',
  ADMIN: 'admin',
  PRESIDENT: 'president',
});

export const COOKIE_KEYS = Object.freeze({
  ACCESS_KEY: 'access',
  REFRESH_KEY: 'refresh',
  IS_LOGIN: 'is-login',
});
