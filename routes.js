'use strict';
import ctrl from './controllers';
import multer from 'multer';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}.${file.mimetype.split('/')[1]}`);
  }
});

var upload = multer({ storage });

export default function routes(app) {
  //companies
  app.get('/api/v1/companies', ctrl.companies.get);
  app.post('/api/v1/companies', ctrl.companies.store);
  app.put('/api/v1/companies/:id', ctrl.companies.update);
  app.delete('/api/v1/companies', ctrl.companies.destroy);

  //lists
  app.get('/api/v1/lists', ctrl.lists.get);
  app.post('/api/v1/lists', ctrl.lists.store);
  app.put('/api/v1/lists/:id', ctrl.lists.update);
  app.get('/api/v1/lists/:id', ctrl.lists.getOne);
  app.delete('/api/v1/lists/:id/companies', ctrl.lists.removeCompanies);
  app.post('/api/v1/lists/:id/companies', ctrl.lists.addCompanies);
  app.post('/api/v1/lists/sendcampaign', ctrl.lists.sendCampaign);
  
  app.post('/api/v1/upload', upload.single('file'), (req, res) => {
    return res.json(req.file);
  });

  app.get('/*', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
  });

  return app;
}
