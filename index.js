const express = require('express');
const bodyParser = require('body-parser');

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Datos mock que simulan la información que podría enviar el ESP8266
const mockData = {
  temperature: 25.5,
  humidity: 60,
  light: 800
};

app.post('/sendData', (req, res) => {
  console.log("res: ", req.body);
  // Aquí recibimos los datos enviados desde el ESP8266
  const data = req.body.data ? JSON.parse(req.body.data) : null;
  
  if (data) {
    console.log('Datos recibidos:', data);
    // Aquí podrías procesar los datos recibidos, guardarlos en una base de datos, etc.
    res.status(200).send('Datos recibidos correctamente');
  } else {
    res.status(400).send('Datos no recibidos o en formato incorrecto');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});