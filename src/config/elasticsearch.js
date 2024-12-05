const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: 'http://localhost:9200', // Remplacez localhost par l'adresse IP correcte si nécessaire
});

module.exports = client;
