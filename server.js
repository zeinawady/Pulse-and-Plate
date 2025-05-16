const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const { swaggerUi, swaggerSpec } = require('./swagger');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');

const PORT = process.env.PORT || 3050;
const MONGO_URI = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log(' Connected to MongoDB Atlas successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(` Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error(' Failed to connect to MongoDB Atlas:', error.message);
  });

app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/addorder', orderRoutes);
