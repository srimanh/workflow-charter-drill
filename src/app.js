const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next()
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/status', function(req, res) {
    res.json({ status: 'ok' });
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.status(201).json({received: true, data});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// fix
// working
// try this
// testing
app.get("/health", (req, res) => res.json({status: "ok"}));
// logic
