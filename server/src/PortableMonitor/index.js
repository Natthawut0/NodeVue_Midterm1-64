const fs = require('fs')//file system
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize (
  config.db.database,
  config.db.spec,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    //const model = sequelize.import(path.join(__dirname, file))old version
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)//new version
    db[model.name] = model;
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize

  module.exports = db;