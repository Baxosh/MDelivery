'use strict';

/**
 * type-of-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-of-product.type-of-product');
