// Rutas para news
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// api/news
router.post('/', newsController.createNews);
router.get('/', newsController.getNews);
router.get('/:id', newsController.getOneNews);
router.delete('/:id', newsController.deleteOneNews);


module.exports = router;