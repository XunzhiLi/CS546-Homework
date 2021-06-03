const bandRoutes = require('./bands');
const albumRoutes = require('./albums');

const constructorMethod = app => {
    app.use('/111', bandRoutes);
    app.use('/albums', albumRoutes);

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;
