import React from 'react';

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

class HtmlLayout extends React.Component<any, any> {
  render() {
    return (
      <html lang="ru">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Search tickets</title>
          <link rel="stylesheet" href={`${assetUrl}/public/assets/styles.css`} />
        </head>
        <body>
          <div id="react-view" dangerouslySetInnerHTML={{ __html: this.props.content }} />
          <script type="application/javascript" src={`${assetUrl}/public/assets/bundle.js`} />
        </body>
      </html>
    );
  }
}

export default HtmlLayout;
