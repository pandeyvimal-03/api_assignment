export default (body)=>{
    return {
        status : body.status,
        result : body.result ? body.result : null,
        error : body.error ? body.error : null
    } 
}