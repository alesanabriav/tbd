'use strict';

export default function routes(app) {

  app.get('/*', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
  });

  return app;
}
