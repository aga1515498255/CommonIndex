export const LocalStorageKeys = {
  token: 'JwtToken'
}

export function getLocalToken() {
  return localStorage.getItem(LocalStorageKeys.token)
}

export function deleteLocalToken() {
  return localStorage.removeItem(LocalStorageKeys.token)
}
