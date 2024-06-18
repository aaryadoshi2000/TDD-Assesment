import express = require('express');
import cors = require('cors');
import { add } from './StringCalculator'; // Adjust path as needed

const app = express();

app.use(express.json());
app.use(cors())

app.post('/calculate', (req, res) => {
  const { numbers } = req.body;

  try {
    const result = add(numbers);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
