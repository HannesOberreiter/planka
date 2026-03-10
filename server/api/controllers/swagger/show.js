/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

const swaggerJsdoc = require('swagger-jsdoc');

const swaggerConfig = require('../../../config/swagger');

let cachedSpecification;

module.exports = {
  async fn() {
    if (!sails.config.custom.swaggerEnabled) {
      return this.res.notFound();
    }

    if (!cachedSpecification) {
      cachedSpecification = swaggerJsdoc(swaggerConfig);
    }

    return this.res.json(cachedSpecification);
  },
};
