import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from 'containers/App';
import renderHTML from 'renderHTML';

const app = express();
const tickets = require('../api/tickets.json');

app.get('/', (req, res) => {
  const componentHTML = ReactDom.renderToString(<App />);
  return res.end(renderHTML(componentHTML));
});

app.get('/api/tickets', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(tickets);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
