import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.put('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update(req.body);
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.delete('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router;