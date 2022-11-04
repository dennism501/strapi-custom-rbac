module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
          directives: {
            'img-src': ["'self'", 'data:', 'blob:', 'https://dl.airtable.com','https://cdn1.iconfinder.com',],
            'media-src': ["'self'", 'data:', 'blob:', 'https://dl.airtable.com']
          }
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
