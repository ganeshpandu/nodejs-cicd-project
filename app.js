const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Ganni GitHub Actions CI/CD Pipeline'));

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('App running on port 3000'));
}

