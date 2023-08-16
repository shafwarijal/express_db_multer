import { game } from '../databases/db.js';

const gameController = {
  addGame: async (req, res) => {
    try {
      const { name, genre, platform } = req.body;

      if (!name || !genre || !platform) {
        return res.status(400).json({ status: 'error', codeStatus: 400, message: 'Please fill all the fields' });
      }

      const newGame = await game.create({ name, genre, platform });
      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Game added successfully', newGame });
    } catch (error) {
      console.log(error);
    }
  },
  getAllGames: async (req, res) => {
    try {
      const games = await game.findAll();
      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Success get all movies', games });
    } catch (error) {
      console.log(error);
    }
  },

  getGameByName: async (req, res) => {
    const { name } = req.params;
    try {
      const foundGame = await game.findOne({ where: { name } });

      if (!foundGame) {
        return res.status(400).json({ status: 'error', codeStatus: 400, message: 'Game not found' });
      }

      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Success get all movies', foundGame });
    } catch (error) {
      console.log(error);
    }
  },

  deleteGame: async (req, res) => {
    const { name } = req.params;
    try {
      const deletedGame = await game.destroy({ where: { name } }); // destroy the movie

      if (!deletedGame) {
        return res.status(400).json({ status: 'error', codeStatus: 400, message: 'Game not found' });
      }

      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Game deleted successfully' });
    } catch (error) {
      console.log(error);
    }
  },

  editGame: async (req, res) => {
    const { name } = req.params;
    const reqBody = req.body;
    try {
      const updatedGame = await game.update(req.body, { where: { name } });

      if (updatedGame[0] === 0) {
        return res.status(400).json({ status: 'error', codeStatus: 400, message: 'Game not found' });
      }

      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Game updated successfully', reqBody });
    } catch (error) {
      console.log(error);
    }
  },
};

export default gameController;
