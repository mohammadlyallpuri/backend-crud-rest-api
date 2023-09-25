const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');
const studentsRoutes = require('./routes/students');
const mongoose = require('mongoose');

const port = 3000; // Define the desired port number

app.use(express.json());
app.use('/api/students', studentsRoutes);
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/batch5')
  .then((res) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
