const { makePlayer } = require('../../entities/player/player');

module.exports = async ({ Player }) => {
    let players = await Player.findAll();
    const makePlayerFn = makePlayer();
    players = players.map(player =>
        makePlayerFn({ name: player.name, age: player.age, position: player.position }).toJSON());

    return players;
}