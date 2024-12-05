const esClient = require('../config/elasticsearch');

exports.indexArticle = async (article) => {
    return await esClient.index({
        index: 'articles',
        body: article,
    });
};

exports.searchArticles = async (query) => {
    const { body } = await esClient.search({
        index: 'articles',
        body: {
            query: {
                multi_match: {
                    query,
                    fields: ['title', 'author', 'content'],
                },
            },
        },
    });
    return body.hits.hits;
};
