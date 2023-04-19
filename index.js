require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)

//для парсинга json-формата
//app.get('/',(req,res)=>{
//   res.status(200).json({message:'IT IS'})
// })
//через POSTMAN тестим работу API

//тк middleware является замыкающим - обработчик располагается в конце
app.use(errorHandler)

const start = async ()=>{
    try {
       await sequelize.authenticate() //connect with database
       await sequelize.sync() //compare state of db with 
        app.listen(PORT, ()=>console.log(`${PORT}`))
    } catch(e){
        console.log(e)
    }
}
start()