'use strict';

/**
 * user-ui router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-ui.user-ui');
