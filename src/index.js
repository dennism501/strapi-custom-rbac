"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    await strapi.admin.services.permission.conditionProvider.register({
      displayName: "Role Matches Office",
      name: "role-matches-office",
      async handler(user) {
        const validOffices = user.roles.map(
          (role) => role.name.split("-")[0]
        );
        console.log("Offices: ",validOffices);
        return {
          "office.name": { $in: validOffices },
        };
      },
    });
  },
};
