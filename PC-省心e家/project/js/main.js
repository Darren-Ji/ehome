/**
 * Created by feique on 16/9/11.
 */
//main

    //banner
    //    自动轮播
var oImgs=$(".banner .bannerInner img");
var oLis=$(".banner ul li");
function change(index){
    $(oImgs[index]).addClass("active").siblings().removeClass("active");
    $(oLis[index]).addClass("active").siblings().removeClass("active");
}
var i=0;
function which(){
    i>3?i=0:null;
    change(i);
    i++;
}
var banner=window.setInterval(which,6000);

        //鼠标悬停轮播停止
$(".banner").mouseover(function(e){window.clearInterval(banner);});
$(".banner").mouseout(function(e){banner=window.setInterval(which,6000);});

        //点击轮播至指定页面
$(oLis).each(function(index,item){
    $(this).click(function(){
        i=index;
        change(i);
    })
});

//ranges online

    //form
    $("form .submit").click(function(){
        if(isNaN($("form #phone").val())||$("form #phone").val()==""){
            $("form .tip").css({"display":"block"}).html("请正确输入联系电话...");
        }else if($("form #address").val()==""){
            $("form .tip").css({"display":"block"}).html("请正确输入地址...");
        }else if($("form #content").val()==""){
            $("form .tip").css({"display":"block"}).html("请填写问题阐述，谢谢...");
        }else {
            $("form .tip").css({"display":"none"}).html("");
        }
    });





















