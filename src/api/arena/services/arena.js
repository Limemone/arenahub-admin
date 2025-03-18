'use strict';

/**
 * arena service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arena.arena');
