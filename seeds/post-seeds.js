const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit.',
        user_id: 10

    },
    {
        title: 'Lorem Ipsum II',
        content: 'Amet aliquam id diam.',
        user_id: 20
    },
    {
        title: 'Lorem Ipsum III',
        content: 'Upurus in mollis.',
        user_id: 30
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;