$(document).ready(function(){
	
		//	big-banner-arr
		$(".banner-wrap").mouseenter(function(){
			$(".shutter-btn").show();
		});
		$(".banner-wrap").mouseleave(function(){
			$(".shutter-btn").hide();
		});
		//  返回顶部
		var gotop = 0;
		$(window).scroll(function(){
			gotop = $(document).scrollTop();
			if(gotop > 0){
				$(".fixed-gototop").show();
			}else{
				$(".fixed-gototop").hide();
			}
		});
			$(".fixed-gototop").click(function(){
				 $("html,body").animate({"scrollTop":0},300); 
			});
		
	 	//	锚点跳转滑动效果
            $("a").click(function() {
                console.log(this.pathname)
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top - 98;
                        $('html,body').animate({
                                    scrollTop: targetOffset
                                },
                                1000);
                        return false;
                    }
                }
            });

	
	// top固定定位
	var top = $(".wrap-top").height();
	$(window).scroll(function(){
		 var docSccrollTop = $(document).scrollTop();
                if(docSccrollTop > top){
                    $(".wrap-top").css({"position":"fixed","top":0});  
                    $(".banner-wrap").css("margin-top",98);
                }else{
                    $(".wrap-top").css({"position":"static"});  /*静态定位*/
                   $(".banner-wrap").css("margin-top",0);
                }
	});
	
	//  百叶窗轮播图
	 $('.shutter').shutter({
	shutterW: screen.availWidth, // 容器宽度
	shutterH: 700, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 2000, // 自动播放时间
	curDisplay: 3, // 当前显示页
	fullPage: false // 是否全屏展示
  });
	
	
	
	//	<关于我们> -- 旋转图片
	$("#carousel").featureCarousel({
		autoPlay:3000,
		trackerIndividual:false,
		trackerSummation:false,
		topPadding:50,
		smallFeatureWidth:.9,
		smallFeatureHeight:.9,
		sidePadding:0,
		smallFeatureOffset:0
	});
	
	//		success-case
	var speed = 1000;
	$(".success-b .case").hover(function(){
		$(this).children(".case-coverrr").stop().fadeTo(speed,0.75);
		$(this).children(".cover-border").stop().animate({"left":30},speed);
		$(this).children(".cover-border").children("p").stop().fadeTo(2000,1);
	},function(){
		$(this).children(".case-coverrr").stop().fadeOut(1000);
		$(this).children(".cover-border").stop().animate({"left":-400},500);
		$(this).children(".cover-border").children("p").stop().fadeOut(500);	
	});
//	news-center	

	$(".news1").hover(function(){
		$(this).children(".news-cover").stop().fadeTo(speed,1);	
		$(this).children(".news-cover2").children(".new-time").stop().animate({"top":50},speed);
		$(this).children(".news-cover2").children(".cover-line").stop().animate({"left":-20},speed);
		$(this).children(".news-cover2").children(".new-des").stop().animate({"top":90},1500);
		
	},function(){
		$(this).children(".news-cover").stop().fadeOut(1000);	
		$(this).children(".news-cover2").children(".new-time").stop().animate({"top":-200},400);
		$(this).children(".news-cover2").children(".cover-line").stop().animate({"left":-200},200);
		$(this).children(".news-cover2").children(".new-des").stop().animate({"top":400},400);
	});
	
	$(".news2").hover(function(){
		$(this).children(".news-cover").stop().fadeTo(speed,1);	
		$(this).children(".news-cover2").children(".new-time").stop().animate({"top":50},speed);
		$(this).children(".news-cover2").children(".cover-line").stop().animate({"left":-20},speed);
		$(this).children(".news-cover2").children(".new-des").stop().animate({"top":90},1500);
		
	},function(){
		$(this).children(".news-cover").stop().fadeOut(1000);	
		$(this).children(".news-cover2").children(".new-time").stop().animate({"top":-200},400);
		$(this).children(".news-cover2").children(".cover-line").stop().animate({"left":400},200);
		$(this).children(".news-cover2").children(".new-des").stop().animate({"top":400},400);
	});
	//  角度旋转

	

	//	arr隐藏于显示success-case 
	
	
});
