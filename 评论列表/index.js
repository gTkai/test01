$(function(){
    getList()
    function getList(){
        $.ajax({
            type:'get',
            url:'http://www.liulongbin.top:3006/api/cmtlist',
            success:function(res){
                if (res.status !== 200) {
                    return alert('获取评论列表失败！')
                    
                }
                let rows=[]
                $.each(res.data,function(i,itme){
                    rows.push(`<li class="list-group-item">${item.content}<span class="badge cmt-date">：'+ item.time +'</span><span class="badge cmt-person">评论人：'+ item.username +'</span></li>`)
                })
            }
        })
    }
})