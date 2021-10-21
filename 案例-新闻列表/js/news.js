$(function () {
    var bURL = 'http://www.liulongbin.top:3006';

    $.get(bURL + '/api/news', function (res) {
        console.log(res);
        if (res.status !== 200) {
            return alert('获取列表失败')
        }
        for (var i = 0; i < res.data.length; i++) {
            res.data[i].tags = res.data[i].tags.split(',')
        }

        var htmlStr = template('diz', res)
        $('#news-list').html(htmlStr)
    })
    function padZero(n) {
        if (n < 10) {
            return '0' + n
        }
        return n
    }
    template.defaults.imports.dateFormat = function (data) {
        var dt = new Date(data)
        var y = padZero(dt.getFullYear())
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())
        var hh = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }


})