import express from 'express'
import serviceresponse from '../../utils/serviceresponse.js'
import constant from '../../constant.js'
import { getGenders , getUserList , getQualifications , addUser } from './controller.js'
const userRouter = express.Router()

userRouter.get('/userlist' , (req , res)=>{
     getUserList()
       .then((result)=>{
           res.send(serviceresponse({status : constant.apistatus.success , result : result}))
       })
       .catch((error)=>{
          res.send(serviceresponse({status : constant.apistatus.failed , error : error}))
       })
})
userRouter.post('/adduser' , (req , res)=>{
    addUser(req.body)
      .then((result)=>{
          res.send(serviceresponse({status : constant.apistatus.success , result : result}))
      })
      .catch((error)=>{
         res.send(serviceresponse({status : constant.apistatus.failed , error : error}))
      })
})
userRouter.get('/genders' , (req , res)=>{
    getGenders()
      .then((result)=>{
          res.send(serviceresponse({status : constant.apistatus.success , result : result}))
      })
      .catch((error)=>{
         res.send(serviceresponse({status : constant.apistatus.failed , error : error}))
      })
})
userRouter.get('/qualifications' , (req , res)=>{
    getQualifications()
      .then((result)=>{
          res.send(serviceresponse({status : constant.apistatus.success , result : result}))
      })
      .catch((error)=>{
         res.send(serviceresponse({status : apistatus.apistatus.failed , error : error}))
      })
})

export default userRouter;