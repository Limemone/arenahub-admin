const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::arena.arena', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // Query for the entry, including unpublished drafts
    const arena = await strapi.db.query('api::arena.arena').findOne({
      where: { id }, // Find by ID
      populate: true, // Include relationships
    });

    if (!arena) {
      return ctx.notFound('Arena not found.');
    }

    return arena;
  },
}));