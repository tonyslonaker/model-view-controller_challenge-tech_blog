const { Comment } = require('../models');

const commentData = [{
        comment_text: "Lorem ipsum",
        user_id: 10,
        post_id: 10
    },
    {
        comment_text: "consectetur",
        user_id: 20,
        post_id: 20
    },
    {
        comment_text: "labore et dolore magna aliqua",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;