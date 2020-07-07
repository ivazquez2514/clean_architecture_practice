const { getPlayers } = require('../../use-cases');

module.exports = ({ Player }) => (req, res) => {
    return getPlayers({ Player })
        .then(players => res.status(200).json({ players }));
}