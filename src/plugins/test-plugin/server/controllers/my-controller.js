'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('test-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
