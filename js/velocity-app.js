
$(function(){

    'use strict';

    $('.box1').velocity({
        opacity:0.5
    },{
        duration:0.4,
        easing:'linear'
    });

    $('.box2').velocity({
        width:'45px',
        borderRadius:'25px',
        borderColor:'#8cc152',
        paddingLeft:'0',
        paddingRight:'0',
        backgroundColor:'#8cc152',
        color:"#fff",
        boxShadowX:'0',
        boxSahdowY:'0',
    },{
        duration:350
    });

    // $('.box3')
    //     .velocity('slideUp')
    //     .delay(800)
    //     .velocity('slideDown')
    //     .velocity('fadeOut',450)
    //     .delay(800)
    //     .velocity('fadeIn',600)

    let $el = $('.toggle');
    let $target = $('.toggle-target');

    $el.on('click',function(){
        let is_visible = $target.is(':visible');
        let method = is_visible ? 'slideUp' :'slideDown';
        let time = is_visible ? 240 : 380;

        $target.velocity(method,{
            delay:160,
            duration:time,
            easing:'easeOutQuart',
            complete:function(){
                //alert('ok')
            }
        })  
    })


    //scroll
    let $document = $('body');
    let $btn = $('.btn');

    $btn.on('click',function(){
        $document.velocity('scroll',{
            duration:450,
            easing:'easeInExop'
        })
    })

    $('.icon')
    .velocity({
        translateY : '10px'
    },{
        loop:true
    })
    .velocity('reverse');

    //stagger

    let $menu = $('.has-submenu');

    $menu.on('click',function(){
        let $subMenu = $menu.children('ul');
        let $subMenuItem = $subMenu.children('li');

        if(!$subMenu.hasClass('on')){
            //
            $subMenu.addClass('on');
            $subMenu.velocity('transition.slideDownIn',{
                duration:200
            });
            //
            $subMenuItem.velocity('transition.expandIn',{
                delay:200,
                duration:300,
                stagger:100,
            })

        } else {
            $subMenu.removeClass('on');

            //역재생
            $subMenu.add($subMenuItem).velocity('reverse')
        }
    })

    //
    let offcanvas_sequence = [
        {
            //1
            //element
            e:$('.offcanvas'),
            //properties
            p:{translateX:0},
            //options
            o:{duration:300}
        },
        {
            //2
            e:$('.widgets'),
            p:{
                translateX:0,
                opacity:0
            },
            o:{
                duration:300
            }

        },
        {
            //3
            e:$('.close'),
            p:{
                translateY:0,
                translateZ:0,
            },
            o:{
                duration:200
            }
        }
    ]

    $.Velocity.RunSequence(offcanvas_sequence);

    //slot
    let hta = $('.slot-inner').outerHeight();
    let ht = $('.slot-inner span').outerHeight();
    let hts = hta -ht;
    let slots = $('.numbers');
    let slot = slots.children('div');

    
    
    $('.slot-inner').velocity({
        translateY : - hts +"px"
    },{
        duration: 3000,
        stagger:1000,
        easing:'easeInOut'
    })

})
