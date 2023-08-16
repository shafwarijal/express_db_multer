import { galery } from '../databases/db.js';

const galeryController = {
  addGalery: async (req, res) => {
    try {
      // const { title, url } = req.body;

      const data = {
        title: req.file.originalname,
        url: `http://localhost:3333/${req.file.filename}`,
      };

      if (!data.title || !data.url) {
        return res.status(400).json({ status: 'error', codeStatus: 400, message: 'Please fill all the fields' });
      }

      const newGalery = await galery.create(data);
      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Galery added successfully', newGalery });
    } catch (error) {
      console.log(error);
    }
  },
  getAllGaleries: async (req, res) => {
    try {
      const galeries = await galery.findAll();
      res.status(200).json({ status: 'success', codeStatus: 200, message: 'Success get all movies', galeries });
    } catch (error) {
      console.log(error);
    }
  },
};

export default galeryController;
