const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Backend is Running ");
});

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Shoes", price: 1500 },
        { id: 2, name: "Watches", price: 2000}
    ]);
});

app.listen(3000, () => console.log("Server running on port 3000"));
