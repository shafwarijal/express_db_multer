import express from 'express';
import cors from 'cors';
import db from './databases/db.js';
import router from './routes/gameRouter.js';
import routerGalery from './routes/galeryRouter.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

try {
  await db.sync();
  console.log('Database connected!');
} catch (err) {
  console.log('Failed to sync database', err);
}

app.get('/api/ping', (req, res) => {
  res.json({ message: 'ping!' });
});

app.use('/api/games', router);
app.use('/api/galeries', routerGalery);

app.use(express.static('public/uploads'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
