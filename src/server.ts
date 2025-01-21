import app from './app';
import dataRoutes from './routes/data.routes';
import mongoose, { ConnectOptions } from 'mongoose';

const PORT = process.env.PORT || 3000;

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error('MongoDB connection URL not found in .env');
  process.exit(1);
}

mongoose.connect(DB_URL).then(() => {
  console.log('Conectado a MongoDB');
  app.use('/api', dataRoutes);
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});