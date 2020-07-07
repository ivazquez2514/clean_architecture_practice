const { makePlayer } = require('../../entities/player/player');

module.exports = (dependencies) => (playerData) => {
    return makePlayer()(playerData);
}