const mongoose = require('mongoose')

console.log(process.env.MONGOOSE_URL)

mongoose.connect( process.env.MONGOOSE_URI, {
    useNewUrlParser: true
})

.then( db => console.log('DB is conected'))
.catch( err => console.log(err))