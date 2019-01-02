'use strict';

/**
 * Flavors.js controller
 *
 * @description: A set of functions called "actions" for managing `Flavors`.
 */

module.exports = {

  /**
   * Retrieve flavors records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.flavors.search(ctx.query);
    } else {
      return strapi.services.flavors.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a flavors record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.flavors.fetch(ctx.params);
  },

  /**
   * Count flavors records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.flavors.count(ctx.query);
  },

  /**
   * Create a/an flavors record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.flavors.add(ctx.request.body);
  },

  /**
   * Update a/an flavors record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.flavors.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an flavors record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.flavors.remove(ctx.params);
  }
};
