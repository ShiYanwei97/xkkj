/*
* @Author: Marte
* @Date:   2018-03-06 09:23:05
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-08 15:14:56
*/

'use strict';
$(function(){
    $(".gf_left").mouseenter(function(){
            $(".gf_left").stop().animate({
                width:1033
            },600)
    });
    $(".gf_txt").mouseenter(function(){
        $(".gf_left").stop().animate({
                width:486
            },600)
    });
    $(".gf_photo").mouseleave(function(){
        $(".gf_left").stop().animate({
                width:759
            },600)
    })
    $(document).scroll(function(){
        if($(document).scrollTop()>748){
            document.getElementsByTagName("video")[0].pause()
            /*video.pause()只能在js里使用*/
        }
        if($(document).scrollTop()<50){
            document.getElementsByTagName("video")[0].play()
            /*video.play()只能在js里使用*/
        }
        // $("title").html($(document).scrollTop())
        if($(document).scrollTop()>1390){
            $(".gf_zi").animate({
                left:0
            },1000)
        }
        if($(document).scrollTop()>400){
            $(".gf_size").animate({
                left:'50px'
            },1000)
        }
        if($(document).scrollTop()>3350){
            for(var i=0;i<6;i++){
                $(".gf_activity").eq(i).animate({
                    top:0
                },240*i+50);
                $(".gf_chinese").eq(i).animate({
                    top:358
                },220*i+50)
            }
        }
    })
    $(".gf_activity").mouseenter(function(){

            $(this).children("img").css({
                transform:"scale(1.1)"
            }).parents("li").siblings().children(".gf_activity").children("img").css({
                transform:"scale(1)"
            })
    });
    $(".gf_activity").mouseleave(function(){
            $(".gf_activity>img").css({
               transform:"scale(1)"
            },1200)
    });
})
