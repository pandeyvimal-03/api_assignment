export const usermodel = (body)=>{
    return {
        username : body.username,
        dob : new Date(),
        genderid : body.genderId,
        qualificationid : body.qualificationId,
        email : body.email,
        about : body.about,
        created_on : new Date()
    }
}