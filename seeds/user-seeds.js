const { User } = require('../models');

const userData = [{
        username: 'Tony',
        password: 'tslonaker'

    },
    {
        username: 'Drake',
        password: 'Drake'
    },
    {
        username: 'Test',
        password: 'Test'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;