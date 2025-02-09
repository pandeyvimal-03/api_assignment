import express from 'express'
import cors from 'cors'
import config from './config.js'
import userRouter from './v1/user/routes.js'

const app = express()
app.use(cors({origin : "*"}))
app.use(express.json())
app.use(express.urlencoded())

app.get('/' , (req , res)=>{
    res.send("server is running fine")
})
app.use('/v1' , userRouter)

app.listen(config.port , ()=>{
    console.log(`server started running on ${config.port}`)
})