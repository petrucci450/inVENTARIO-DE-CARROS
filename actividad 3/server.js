const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let vehicles = [];

app.post('/api/vehicles', function(req, res) {
    let vehicle = {
        id: vehicles.length + 1,
        description: req.body.description,
        image: req.body.image,
        brand: req.body.brand,
        model: req.body.model,
        type: req.body.type,
        year: req.body.year
    };

    vehicles.push(vehicle);
    res.status(200).json(vehicle);
});

app.get('/api/vehicles', function(req, res) {
    res.status(200).json(vehicles);
});

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000');
});