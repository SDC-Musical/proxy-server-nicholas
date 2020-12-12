require('newrelic');
const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = 80;

app.use(express.static('public'));

app.use('/reviews', createProxyMiddleware({
  target: 'http://localhost:3001/bundle-reviews-service.js',
  changeOrigin: true,
  pathRewrite: {
    '^/reviews': ''
  }
}))

app.use('/api/reviews', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true
}))

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));