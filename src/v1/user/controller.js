import { execute , insert} from "../../utils/dbhelper.js"
import constant from "../../constant.js"
import { usermodel } from "./model.js";

export  const getUserList = async()=>{
      try {
           const qr = `select ud.username , ud.dob , ud.email, ud.about , ql.qualificationName , gd.genderName from ${constant.schema.users}."${constant.table.user}" ud 
           join ${constant.schema.users}."${constant.table.genders}" gd on ud.genderid = gd.genderid
           join ${constant.schema.users}."${constant.table.qualifications}" ql on ud.qualificationid = ql.qualificationid 
           order by created_on desc`;
           const  res = await execute(qr)
           return Promise.resolve(res)
      } catch (error) {
          console.log("error is : ", error)
          return Promise.reject(error)
      }
}

export const addUser = async(body)=>{
    try {
        const model = usermodel(body)
        await insert(constant.schema.users , constant.table.user , model)
        const qr = `select ud.username , ud.dob , ud.email, ud.about , ql.qualificationName , gd.genderName from ${constant.schema.users}."${constant.table.user}" ud 
           join ${constant.schema.users}."${constant.table.genders}" gd on ud.genderid = gd.genderid
           join ${constant.schema.users}."${constant.table.qualifications}" ql on ud.qualificationid = ql.qualificationid 
           order by created_on desc`;
           const  res = await execute(qr)
        return Promise.resolve(res)
    } catch (error) {
        console.log("error is : ", error)
        return Promise.reject(error)
    }
}

export const getGenders = async()=>{
    try {
        const qr = `select * from ${constant.schema.users}."${constant.table.genders}" `;
           const  res = await execute(qr)
           return Promise.resolve(res)
    } catch (error) {
        return  Promise.reject(error)
    }
}

export const getQualifications = async()=>{
    try {
        const qr = `select * from ${constant.schema.users}."${constant.table.qualifications}"`;
           const  res = await execute(qr)
           return Promise.resolve(res)
    } catch (error) {
        return  Promise.reject(error)
    }
}

