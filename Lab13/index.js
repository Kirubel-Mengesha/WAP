const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
