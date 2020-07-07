/* CONTROLLER FUNCTIONS  */
const getPlayer = require('./get-player');

module.exports = ({ sequelizeModels }) => {

    const { Player } = sequelizeModels;

    return {
        getPlayer: getPlayer({ Player })
    };
};