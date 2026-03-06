

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');



const authRoutes = require('./routes/auth');
const tripRoutes = require('./routes/trips');
const destinationsRoutes = require("./routes/destinations.js");
const tripsPageRoutes = require("./routes/tripsPage.js");

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use('/api', authRoutes);
app.use('/api', tripRoutes);
app.use('/api', destinationsRoutes);
app.use('/api', tripsPageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
