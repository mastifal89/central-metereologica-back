const express = require('express');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const parser = new ReadlineParser({ delimiter: '\r\n' });

var port = new SerialPort({
  path: 'COM3',
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

port.pipe(parser);

parser.on('data', function(data) {
  console.log('Data:', data);
});

const app = express();
const PORT = 3000;

// Datos mock que simulan la información que podría enviar el ESP8266
const mockData = {
  temperature: 25.5,
  humidity: 60,
  light: 800
};

app.get('/getData', (req, res) => {
  // Simulamos un pequeño retardo como si estuviéramos esperando por una respuesta del ESP8266
  setTimeout(() => {
    // Aquí enviaríamos los datos mock en lugar de obtenerlos del ESP8266
    res.json(mockData);
  }, 1000); // 1 segundo de retardo para simular una petición HTTP real
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});