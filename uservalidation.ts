export function isValidUsername(username: string,password:string){
    if(password.length<8){
        return false;
    }
    return true
}