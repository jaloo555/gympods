'use strict';

/**
 * Supplement.js controller
 *
 * @description: A set of functions called "actions" for managing `Supplement`.
 */

module.exports = {

  /**
   * Retrieve supplement records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.supplement.search(ctx.query);
    } else {
      return strapi.services.supplement.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a supplement record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.supplement.fetch(ctx.params);
  },

  /**
   * Count supplement records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.supplement.count(ctx.query);
  },

  /**
   * Create a/an supplement record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.supplement.add(ctx.request.body);
  },

  /**
   * Update a/an supplement record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.supplement.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an supplement record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.supplement.remove(ctx.params);
  }
};
