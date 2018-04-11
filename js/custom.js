$(document).ready(function() {
	manageColorSectionHandler();
//	mobileMenu();
	
	$(".testDrive").click(function(){
		$(".form-book-now").fadeIn(300);
	});
	$(".close-form").click(function(){
		$(".form-book-now").fadeOut(300);
	});
	$("#cust-icon").click(function() {
		$(".cust_details").toggleClass("active")
	});
});


/* ------------------------------------------------------------------ */
/* --------------------- COLOR SECTION --------------------- */
/* ------------------------------------------------------------------ */
function manageColorSectionHandler(){
	var prevImgDiv;
	var colorTabList = $(".color_tab_btn");
	var colorImgWrapper = $(".color_img_wrapper");
	var colorImgArr = ["color_image_brown.jpg", "color_image_blue.jpg", "color_image_grey.jpg"];
	
	var colorSecBtn = $(".color-sec-btn");
	var closeBtn = $(".color-close-btn");
	
	colorSecBtn.bind("click", function(){
		$.fn.fullpage.moveTo(3, 1);
		return false;
	});
	closeBtn.bind("click", function(){
		$.fn.fullpage.moveTo(3, 0);
		return false;
	});
	
	colorTabList.each(function(index, element) {
        var colorTabBtn = $(this);
		var img = "images/" + colorImgArr[index];
		var divHTML = '<div class="color_img_block"><img class="fit_into_viewport" src="' + img + '" /></div>';
		var currImgDiv = $(divHTML).appendTo(colorImgWrapper);
		//currImgDiv.slideUp(0);
		colorTabBtn.bind("click", function(){
			if(prevImgDiv != currImgDiv){
				if(prevImgDiv){
					prevImgDiv.css({"opacity":0});
				}				
				currImgDiv.css({"opacity":1});
				prevImgDiv = currImgDiv;
			}
			colorTabList.removeClass("active");
			colorTabBtn.addClass("active");
			return false;
		});
    });
	colorTabList.eq(0).trigger("click");
}

var winWidth = $(window).width();
if(winWidth <=991){
		$(this).removeClass(".mobile-menu-close");
		$(".mobile-menu").click(function(){
			$("#menu").slideDown();
			$(".mobile-menu").hide();
			$(".mobile-menu-close").show();
		});
		$(".mobile-menu-close").click(function(){
			$("#menu").slideUp();
			$(".mobile-menu-close").hide();
			$(".mobile-menu").show();
		});
		
		$("ul#menu li").click(function(){
			$("#menu").slideUp();
			$(".mobile-menu-close").hide();
			$(".mobile-menu").show();
		});
		
		
};





