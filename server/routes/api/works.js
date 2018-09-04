const WorkModel = require('../../models/Work');

module.exports = (app) => {
  app.get('/api/works', (req, res, next) => {
    WorkModel.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/works', function (req, res, next) {
    const work = new WorkModel();

    work.save()
      .then(() => res.json(work))
      .catch((err) => next(err));
  });
};
