const players = require('./players.routes');

module.exports = ({ router }) => {

    const playersRoutes = players({ router });

    router.use('/players', playersRoutes)

    return router;
}