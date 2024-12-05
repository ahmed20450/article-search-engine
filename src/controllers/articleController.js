const articleService = require('../services/articleService');

exports.indexArticle = async (req, res) => {
    try {
        const response = await articleService.indexArticle(req.body);
        res.status(201).send(response);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.searchArticles = async (req, res) => {
    try {
        const response = await articleService.searchArticles(req.query.query);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
