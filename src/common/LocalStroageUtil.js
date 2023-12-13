
const LocalStorageKeys = {
    token : "JwtToken"
}

export function getLocalToken(){
    localStorage.getItem(LocalStorageKeys.token);
}