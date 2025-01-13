const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::doctor.doctor', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // Query for the entry, including unpublished drafts
    const doctor = await strapi.db.query('api::doctor.doctor').findOne({
      where: { id }, // Find by ID
      populate: true, // Include relationships
    });

    if (!doctor) {
      return ctx.notFound('Doctor not found.');
    }

    return doctor;
  },
}));