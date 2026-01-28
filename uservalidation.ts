export function isValidUsername(username: string,password:string){
    if(!username || username.length < 8){
        return false;
    }
    return true;
}