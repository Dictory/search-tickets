import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './App/start/App';
import HtmlLayout from './HtmlLayout';

const app = express();
const tickets = require('../api/tickets.json');

app.get('/', (req, res) => {
  const content = ReactDom.renderToString(<App />);
  const html = `<!DOCTYPE html>${ReactDom.renderToStaticMarkup(<HtmlLayout content={content} />)}`;
  res.send(html);
});

app.get('/api/tickets', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(tickets);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
