const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Admin Panel</h1><p>Server is running correctly!</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});