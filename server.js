const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');

require('dotenv').config();
connectDB();

const app = express();
// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed HTTP methods
    credentials: true // if you need to include cookies in the requests
}));
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
