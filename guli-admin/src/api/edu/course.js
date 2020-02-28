import request from '@/utils/request'

const apiPath = '/admin/edu/course'
export default{
  saveCourseInfo(courseInfo) {
    return request({
      url: `${apiPath}/save-course-info`,
      method: 'post',
      data: courseInfo
    })
  },
  getCourseInfoById(id) {
    return request({
      url: `${apiPath}/course-info/${id}`,
      method: 'get'
    })
  },
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${apiPath}/update-course-info`,
      method: 'put',
      data: courseInfo
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${apiPath}/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(id) {
    return request({
      url: `${apiPath}/remove/${id}`,
      method: 'delete'
    })
  },
  getCoursePublishInfoById(id) {
    return request({
      url: `${apiPath}/course-publish-info/${id}`,
      method: 'get'
    })
  },

  publishCourse(id) {
    return request({
      url: `${apiPath}/publish-course/${id}`,
      method: 'put'
    })
  }
}
