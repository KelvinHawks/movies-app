const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database connected successfully');
    } catch (error) {
        console.log(`error: ${error}`)
    }
}

module.exports = connectDb