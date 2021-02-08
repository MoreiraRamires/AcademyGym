const {Pool} = require("pg")  

module.exports = new Pool({
  user:"rafael-ramires",
  password:"",
  host:"localhost",
  port:5432,
  database:"gymmanager"
})