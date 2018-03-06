import express from 'express';

const router = express.Router();

/* GET home page. */
// handles any requests made to the application by responding with a single view:

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/', (req, res) => {
  res.render('index');
});

export default router;
