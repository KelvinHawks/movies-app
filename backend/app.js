const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./ConnectDb')
const app = express()
const cors = require('cors')
const router = require('./routes/UserRoutes')

app.use(cors())
app.use(express.json())

dotenv.config()
connectDb()
const PORT = 5000

app.use('/api/users', router)
app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})
