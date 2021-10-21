function resolveData(data) {
      var arr = []
      for (var k in data) {
        arr.push(k + '=' + data[k])
      }
      return arr.join('&')
    }
    
function ajax(options) {
    var xhr = new XMLHttpRequest()
    var params = resolveData(options.data)
    if (options.method.toUpperCase() == 'GET') {
        xhr.open(options.method, options.url + '?' + params)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(params)
    }
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4&&xhr.status==200) {
            var res=JSON.parse(xhr.responseText)
            options.success&& options.success(res)
        }
    }
}