'use strict';
import controllers from './controllers';

export default function routes(app, seq) {
  const cntl = controllers(seq);

  app.get('/api/v1/companies', cntl.companies.get);
  app.post('/api/v1/companies', cntl.companies.store);
  app.put('/api/v1/companies/:id', cntl.companies.update);
  app.delete('/api/v1/companies', cntl.companies.destroy);
  
  app.get('/*', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
  });

  return app;
}
