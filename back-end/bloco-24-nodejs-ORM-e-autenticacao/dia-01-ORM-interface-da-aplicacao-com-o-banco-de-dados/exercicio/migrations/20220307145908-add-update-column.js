'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Books', 'updatedAt', {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.removeColumn('Books', 'updatedAt');
  },
};
