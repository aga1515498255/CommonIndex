import service from './base'

export function allBlocks() {
  return service({
    url: '/block/all',
    method: 'get'
  })
}

export function oneBlock(blockId) {
  return service({
    url: '/staff/block/one/?blockId=' + blockId,
    method: 'get'
  })
}

export function createBlock(data) {
  return service({
    url: '/staff/block/create',
    method: 'post',
    data
  })
}

export function updateBlock(data) {
  return service({
    url: '/staff/block/update',
    method: 'post',
    data
  })
}

export function deleteBlock(data) {
  return service({
    url: '/staff/block/delete',
    method: 'post',
    data
  })
}

export function addToBlock(data) {
  return service({
    url: '/staff/block/delete',
    method: 'post',
    data
  })
}

export function insertBatcch(data) {
  return service({
    url: '/staff/block/article/batchInsert',
    method: 'post',
    data
  })
}

export function deleteBatcch(data) {
  return service({
    url: '/staff/block/article/batchRemove',
    method: 'post',
    data
  })
}
