$(function () {
    resetui()
    $('#btnSend').click(function () {
        let text = $('#ipt').val().trim()
        if (text.length <= 0) {
            return false
        }
        $('#talk_list').append(`
         <li class="right_word">
        <img src="img/person02.png" /> <span>${text}</span>
      </li>`)
        $('#ipt').val('')
        resetui()
        getMsg(text)
    })
    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                if (res.message == 'success') {
                    $('#talk_list').append(`<li class="left_word">
                    <img src="img/person01.png" />  
                    <span>${res.data.info.text}</span>
                  </li>`)
                    getVoice(res.data.info.text)
                }
                resetui()

            }
        })
    }
    function getVoice(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success:function(res){
                if (res.status==200) {
                    $('audio').attr('src',res.voiceUrl)
                }
            }
        })
    }
    $('#ipt').on('keyup', function(event) {
        　　if (event.keyCode == "13") {
        　　　　$('#btnSend').click();
        　　}
        });

})