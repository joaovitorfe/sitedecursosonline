const { Sequelize } = require('sequelize')

const conn = mysql.createconnection({
  host: 'localhost',
  user: 'joaovitorf',
  password:'Abc@102030@Servidor',
  database: 'server',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
