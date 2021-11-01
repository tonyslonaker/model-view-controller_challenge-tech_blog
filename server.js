const app = express();
const express = require('express');
const expresshb = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const help = require('./utils/helper');
const path = require('path');
const PORT = process.env.PORT || 3006;
const routes = require('./controllers/api');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session = require('express-session');
const sess = {
    secret: 'It is a secret to everyone',
    cookie: { maxAge: 30000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));

});