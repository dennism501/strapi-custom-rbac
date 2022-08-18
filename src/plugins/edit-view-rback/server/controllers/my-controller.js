'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('edit-view-rback')
      .service('myService')
      .getWelcomeMessage();
  },
});
