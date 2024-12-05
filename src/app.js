const express = require('express');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/articleRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', articleRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

