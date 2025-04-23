const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => console.log("Server running on port 3001"));

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from the backend!" });
  });
  