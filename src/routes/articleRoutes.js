const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.post('/articles', articleController.indexArticle);
router.get('/search', articleController.searchArticles);

module.exports = router;
