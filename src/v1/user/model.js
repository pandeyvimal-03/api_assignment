export const usermodel = (body)=>{
    return {
        username : body.username,
        dob : new Date(),
        genderid : Number(body.genderid),
        qualificationid : Number(body.qualificationid),
        email : body.email,
        about : body.about,
        created_on : new Date()
    }
}