const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (QueryInterface) => QueryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Jon Joe',
        email: 'jon@email.com',
        phone: '3554564122',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jon2 Joe',
        email: 'jon2@email.com',
        phone: '3554564122',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jon3 Joe',
        email: 'jon3@email.com',
        phone: '3554564122',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
