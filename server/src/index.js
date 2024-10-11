import express from 'express';
import cors from 'cors';
import sequelize from './config/config.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
  });
});
