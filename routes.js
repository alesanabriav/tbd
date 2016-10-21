'use strict';
import controllers from './controllers';

export default function routes(app, seq) {
  const cntl = controllers(seq);

  app.get('/api/v1/companies', cntl.companies.get);

  app.get('/*', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
  });


  return app;
}
