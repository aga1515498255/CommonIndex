import service from './base'

export function allPerms() {
  return service({
    url: '/user/perms',
    method: 'get'
  })
}

export function allUser() {
  return service({
    url: '/user/list',
    method: 'get'
  })
}

export function createUser(data) {
  return service({
    url: '/user/create',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return service({
    url: '/user/delete',
    method: 'post',
    data
  })
}

export function changeRole(data) {
  return service({
    url: '/user/setRoles',
    method: 'post',
    data
  })
}

export function login(data) {
  return service({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function SetUserPWD(data) {
  return service({
    url: '/user/changePWD',
    method: 'post',
    data
  })
}
