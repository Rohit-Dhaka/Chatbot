import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT || 5000
import ConnectDb from '../server/config/db.js'


app.use(express.json())
app.use(cors())


ConnectDb()
app.listen(PORT , ()=>{
    console.log(`app listening on port ${PORT}`)
})