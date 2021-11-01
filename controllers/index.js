const router = require('express').Router();

const apiRoute = require('./api');
const dashboardRoute = require('./dashboard-route.js');
const homeRoute = require('./home-route.js');


router.use('/api', apiRoute);
router.use('/dashboard', dashboardRoute);
router.use('/', homeRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;