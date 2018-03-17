var API_URI = 'http://localhost:8080/DemoProject/weapp.do'

function fetchApi(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URI}/${type}`,
      data: params,
      header: {
        'content-type': 'json'
      },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  getList: function (type, pn = 0, count = 20) {
    return fetchApi(type, { "start": pn * count, "count": count })
      .then(res => res.data)
  },
  getDetail: function (id) {
    return fetchApi("/subject/" + id)
      .then(res => res.data)
  }
}