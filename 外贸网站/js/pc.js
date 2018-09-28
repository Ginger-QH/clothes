$(function(){
	//监听滚动
	$(window).scroll(function(event) {
		setTimeout(function(){
			resetHeader();
		},10);
	});
	resetHeader();
	function resetHeader(){
		var h=$(window).scrollTop();
		if(h>10){
			$("#header").css({"backgroundColor":"rgba(100, 108, 120, 0.9)","borderBottom":"1px solid rgba(100, 108, 120, 0.9)"})
		}else{
			$("#header").css({"backgroundColor":"rgba(0,0,0,0.2)","borderBottom":"1px solid rgba(255,255,255,.4)"})
		}
	}
	//banner初始化
	var mySwiper = new Swiper('#banner', {
		autoplay: 5000,//可选选项，自动滑动
		loop:true,
		pagination:'.banpage',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	      swiperAnimateCache(swiper); //隐藏动画元素 
	      swiperAnimate(swiper); //初始化完成开始动画
	    }, 
	    onSlideChangeEnd: function(swiper){ 
	      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    } 
	});
});