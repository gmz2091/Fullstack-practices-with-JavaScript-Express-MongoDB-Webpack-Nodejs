if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()    
}



const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')



//Initializations
const app = express()
require('./database')


//Middlewares
app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Data().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single('image'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use( '/api/books', require('./routes/books'))

//Statis Files
 app.use(express.static(path.join(__dirname, 'public')))


//Settings
app.set('port', process.env.PORT || 4000)



//Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})