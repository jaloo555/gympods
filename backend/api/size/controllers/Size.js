'use strict';

/**
 * Size.js controller
 *
 * @description: A set of functions called "actions" for managing `Size`.
 */

module.exports = {

  /**
   * Retrieve size records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.size.search(ctx.query);
    } else {
      return strapi.services.size.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a size record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.size.fetch(ctx.params);
  },

  /**
   * Count size records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.size.count(ctx.query);
  },

  /**
   * Create a/an size record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.size.add(ctx.request.body);
  },

  /**
   * Update a/an size record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.size.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an size record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.size.remove(ctx.params);
  }
};
