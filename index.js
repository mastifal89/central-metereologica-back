const express = require('express');

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