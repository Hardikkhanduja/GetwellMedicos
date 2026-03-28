const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prescriptionRoutes = require('./routes/prescription');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://getwell-medicos.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Prescription route
app.use('/api', prescriptionRoutes);

// Health check — Render needs this
app.get('/', (req, res) => {
  res.send('Getwell Medicos Backend is running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
