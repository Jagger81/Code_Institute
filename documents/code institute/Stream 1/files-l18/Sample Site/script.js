$(document).ready(function() {
 
   $(".card").on("click", function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        // create a variable for each item in the array.
        // [0] will always be 'stream'
        // [1] will be the stream number that was clicked (e.g. 'one', 'two' or 'three')
        var cardClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className).css("background-color", "#000");
			$("." + className).css("color", "white");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $("." + cardClass).css("background-color", "#000");
			$("." + className).css("color", "white");
            $("." + className).css("background-color", "red");
			$("." + className).css("color", "white");
        }
    });
	
	$("#hideButton").on("click", function() {
       if ($(".card").css("background-color") == "rgb(255, 0, 0)") {
		   $(".card").hide("slow");
	   }	   
	});
	
	$("#showButton").on("click", function() {
       $(".card").show("slow");
	});
	   

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$("tr:even").addClass("rowcolorEven");

    $("p").on("click", function() {
	  	$(this).css("color","blue");
	});
	
	$("p").on("click", function() {
	  	$(this).children("a").css("color","yellow");
	});
	
	$("button").click(function() {
	$(this).prev().slideToggle("slow");
});
	
	$(".bottom_button").mouseenter(function() {
	  	$("body").css("background-color","black");
	});
	
	$(".bottom_button").mouseleave(function() {
	  	$("body").css("background-color","lightgray");
	});
	
	$("h2").mouseover(function() {
		$("h2").addClass("h2_color");
	});
	
	$("#hr1").hover(function(){
		$("#hr2").removeClass("h2_font_size");
		$("#hr3").removeClass("h2_font_size");
		$("#hr4").removeClass("h2_font_size");
		$("#hr5").removeClass("h2_font_size");
		$("#hr6").removeClass("h2_font_size");
        $("#hr1").addClass("h2_font_size");

	});	
	
	$("#hr2").hover(function(){
		$("#hr1").removeClass("h2_font_size");
		$("#hr3").removeClass("h2_font_size");
		$("#hr4").removeClass("h2_font_size");
		$("#hr5").removeClass("h2_font_size");
		$("#hr6").removeClass("h2_font_size");
        $("#hr2").addClass("h2_font_size");

	});	
	
	$("#hr3").hover(function(){
		$("#hr1").removeClass("h2_font_size");
		$("#hr2").removeClass("h2_font_size");
		$("#hr4").removeClass("h2_font_size");
		$("#hr5").removeClass("h2_font_size");
		$("#hr6").removeClass("h2_font_size");
        $("#hr3").addClass("h2_font_size");

	});	
	
	$("#hr4").hover(function(){
		$("#hr1").removeClass("h2_font_size");
		$("#hr3").removeClass("h2_font_size");
		$("#hr2").removeClass("h2_font_size");
		$("#hr5").removeClass("h2_font_size");
		$("#hr6").removeClass("h2_font_size");
        $("#hr4").addClass("h2_font_size");

	});	
	
	$("#hr5").hover(function(){
		$("#hr1").removeClass("h2_font_size");
		$("#hr3").removeClass("h2_font_size");
		$("#hr4").removeClass("h2_font_size");
		$("#hr2").removeClass("h2_font_size");
		$("#hr6").removeClass("h2_font_size");
        $("#hr5").addClass("h2_font_size");

	});	
	
	$("#hr6").hover(function(){
		$("#hr1").removeClass("h2_font_size");
		$("#hr3").removeClass("h2_font_size");
		$("#hr4").removeClass("h2_font_size");
		$("#hr5").removeClass("h2_font_size");
		$("#hr2").removeClass("h2_font_size");
        $("#hr6").addClass("h2_font_size");

	});	
	
	$("#b1").mouseenter(function() {
	  	$("#b1").addClass("makeButtonRed");
	
    });	
	
	$("#b1").mouseleave(function() {
	  	$("#b1").removeClass("makeButtonRed").addClass("makeBorder");
	
	});	
	
	$("#b1").click(function() {
	  	$("#b2").slideUp("slow");
	
    });	
	
	$("#b1").mouseleave(function() {
	  	$("#b2").slideDown("slow");
	
    });
	
	$("#b2").click(function() {
		$("#par1").hide("slow");
	  	
	
    });

    $("#b2").mouseleave(function() {
	  	$("#par1").show("slow");
	
    });

    $("#b2").click(function() {
		$("#b1").toggle("slow");	
	
	});
	
	$("#b3").click(function() {
		$("#b2").slideToggle("slow");	
	
	});
	
	$("#b4").click(function() {
		$("#b5").fadeToggle("slow");	
	
	});
	
	$("#b5").click(function() {
		$("#im6").fadeTo("slow","0.5");
        $("#im6").fadeTo("slow","1");		
	
	});
	
	$("#b6").mouseenter(function() {
		$("#b6").fadeTo("slow","1");
        	
	});
	
	$("#b6").mouseleave(function() {
        $("#b6").fadeTo("slow","0.5");		
	
	});
	
});
