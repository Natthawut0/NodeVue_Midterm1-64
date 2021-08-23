const SpecController = require('./controllers/SpecController')

module.exports = (app) => {
  app.post('/spec',SpecController.create)
  app.put('/spec/:specId',SpecController.put)
  app.delete('/spec/:specId',SpecController.remove)
  app.get('/spec/:specId',SpecController.show)
  app.get('/specs',SpecController.index)
}