import service from './service'
import qs from 'qs'
// 图片上传
export const uploadFile = formData => {
  return service.request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: {'Content-Type': 'multipart/form-data'}
  })
}
export const get = (url, params) => {
  return service.request({
    method: 'get',
    url: url,
    params: params
  })
}
export const post = (url, data) => {
  return service.request({
    method: 'post',
    url: url,
    data: qs.stringify(data)
  })
}
