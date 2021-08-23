module.exports = {
  port:8081,
  db: {
    database: process.env.DB_NAME || 'nvWebblogDb',
    spec: process.env.DB_Spec || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      storage: './nvwebblog-db.sqlite'      
    },    
  }
}