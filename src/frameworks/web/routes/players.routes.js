const { Player } = require('../../persistence/db/models');
const playersController = require('../../../controllers/players');
const sequelizeModels = require('../../persistence/db/models');

module.exports = ({ router }) => {

    const {
        getPlayer
    } = playersController({ sequelizeModels });

    router.route('/')
        .get(getPlayer)
        // .post()
    
    return router;
}