const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

const renderHTML = componentHTML => (`
  <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello React</title>
        <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
    </head>
    <body>
      <div id="react-view">${componentHTML}</div>
      <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
    </body>
  </html>
`);

export default renderHTML;
