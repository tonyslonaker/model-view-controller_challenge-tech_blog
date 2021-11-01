const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

router.get('/', (req, res) => {
    //console.log(req.session);
    Post.findAll({
        attributes: [
            'created_at',
            'id',
            'post_body',
            'title'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['comment_text', 'created_at', 'id', 'user_id'],
                include: {
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('hompage', {
            posts, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
    router.get('/post/:id', (req,res) => {
        Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'created_at',
                'id',
                'post_body',
                'title'
            ],
            include: [
                {
                    model: Comment,
                    attributes: ['comment_text', 'created_at', 'id', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        }).then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'Error... No valid post found with the id provided. Please try again' });
                return;
            }
            // serialize the data
            const post = dbPostData.get({ plain: true });
    
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
    
    router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login');
    });
    
    module.exports = router;