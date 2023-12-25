
export const LocalStorageKeys = {
    token : "JwtToken"
}

export function getLocalToken(){
    return localStorage.getItem(LocalStorageKeys.token);
}