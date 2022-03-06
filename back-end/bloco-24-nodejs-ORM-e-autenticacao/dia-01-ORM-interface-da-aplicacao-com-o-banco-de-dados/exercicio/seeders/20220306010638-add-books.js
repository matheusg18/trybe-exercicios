'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Harry Potter e a Pedra Filosofal',
          author: 'J. K. Rowling',
          pageQuantity: 223,
          createdAt: Sequelize.literal('CURRENT_DATE'),
        },
        {
          title: 'Meu Pé de Laranja Lima',
          author: 'José Mauro de Vasconcelos',
          pageQuantity: 193,
          createdAt: Sequelize.literal('CURRENT_DATE'),
        },
        {
          title: 'O Pequeno Príncipe',
          author: 'Antoine de Saint-Exupéry',
          pageQuantity: 96,
          createdAt: Sequelize.literal('CURRENT_DATE'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  },
};
