const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://www.2states.co.in',
    'https://2states.co.in',
    'https://two-states-indol.vercel.app'
  ]
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes
// For cPanel Passenger which passes the full path
app.use('/2-state/api', contactRoutes); 
// For local development
app.use('/api', contactRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Two States API is running.');
});
app.get('/2-state', (req, res) => {
  res.send('Two States API is running on cPanel.');
});

// Sync Database and start server
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
