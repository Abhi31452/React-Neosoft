const user="admin"
const pass="a123"

// const url
export function login(username, password){
    if(username==user && password==pass)
        return true
    else 
        return false;
}