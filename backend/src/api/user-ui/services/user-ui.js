'use strict';

/**
 * user-ui service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-ui.user-ui');
