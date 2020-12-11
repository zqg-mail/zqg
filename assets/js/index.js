/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

$(function(){
    $('#title').keypress(function fn(e){
        e = e || window.event
        let code = e.keyCode || e.which
        let str = ''
        // console.log($('#todolist li').length);
        if(code===13){
            const value = $(this).val().trim()
            if(!value) return
            e.preventDefault()
            console.log($(this).val());
            for(var i = 0;i<$('#todolist li').length;i++){
                let a = i
            }
            
            str += `
                <li>
                    <input type="checkbox" />
                    <p onclick="edit(${i+1})">${$(this).val()}</p>
                    <a href="javascript:remove(${i+1})">-</a>
                </li>
            `
            $('#todolist').append(str)
            $('#todocount').text(i+1)
            
            const res = JSON.parse(window.localStorage.getItem('$(this).val()'))
            console.log(res);
            window.localStorage.setItem('a', $(this).val())
            $(this).val('')
            oAo()
        }
    })
    oAo()
    function oAo(){
        $('#todolist li a').on('click',function(){
            $(this).parent().remove()
        })
    
        $("li input").on("click",function(){
                if($(this).attr('checked')){
                    $(this).removeAttr('checked')
                    $('#todolist').append($(this).parent())
                        numberup()
                    numberdown()
                }else{
                    $(this).attr('checked','abc')
                    $('#donelist').append($(this).parent())
                    numberup()
                    numberdown()
                }
            })
            

        function numberup(){
            for(var i = 0;i<$('#todolist li').length;i++){
                let a = i
            }
            $('#todocount').text(i-0)
        }
        function numberdown(){
            for(var i = 0;i<$('#donelist li').length;i++){
                let a = i
            }
            $('#donecount').text(i-0)
        }


    }

})



