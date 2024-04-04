import service from './base'
export function allArticles() {
  return service({
    url: '/article/list',
    method: 'get'
  })
}

export function createArticle(data) {
  return service({
    url: '/staff/article/create',
    method: 'post',
    data
  })
}

export function getArticlesByTags(data) {
  return service({
    url: '/article/getByTagKeys',
    method: 'post',
    data
  })
}

export function getOneArticle(data) {
  return service({
    url: '/article/get?id=' + data,
    method: 'get'
  })
}

export function batchDelete(data) {
  return service({
    url: '/staff/article/batchDelete',
    method: 'post',
    data
  })
}
