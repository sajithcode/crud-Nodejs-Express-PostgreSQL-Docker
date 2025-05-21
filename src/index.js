import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middleware/errorHandler.js';
import createUserTable from './data/createuserTable.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());


//Routes
app.use('/api', userRoutes);

//Error handling middleware
app.use(errorHandling);

// Create table before starting the server
createUserTable();

//Testing POSTGRES Connection
app.get('/', async (req, res) => {
  console.log("Start");
  const result = await pool.query('SELECT current_database()');
  console.log("End");
  res.send(`Connected to database: ${result.rows[0].current_database}`);
});




//Server running
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});