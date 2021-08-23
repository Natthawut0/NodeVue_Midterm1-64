const {Spec} = require('../PortableMonitor')

module.exports = {
  // get all 
  async index (req, res) {
    try {
        const specs = await Spec.findAll()
        res.send(specs)
    } catch (err){
        res.status(500).send({
            error: 'The specs information was incorrect'
        })
    }
  },

  // create 
  async create (req, res) {
    // res.send(JSON.stringify(req.body))
    try {
        const spec = await Spec.create(req.body)
        res.send(spec.toJSON())
    } catch (err) {
        res.status(500).send({
            error: 'Create spec incorrect'
        })
    }
  },

  // edit 
  async put (req, res) {
    try {
      await Spec.update(req.body, {
          where: {
              id: req.params.specId
          }
      })
      res.send(req.body)
    } catch (err) {
        req.status(500).send({
            error: 'Update spec incorrect'
        })
    }
  },

  // delete 
  async remove (req, res) {
    try {
      const spec = await Spec.findOne({
          where: {
              id: req.params.specId
          }
      })

      if(!spec){
          return res.status(403).send({
              error: 'The spec information was incorrect'
          })
      }

      await spec.destroy()
      res.send(spec)
    } catch (err) {
        req.status(500).send({
            error: 'The spec information was incorrect'
        })
    }
  },

  // get spec by id
  async show (req, res) {
    try {
      const spec = await Spec.findByPk(req.params.specId)
      res.send(spec)
    } 
    catch (err) {
        req.status(500).send({
            error: 'The spec information was incorrect'
        })
    }
  }
}
