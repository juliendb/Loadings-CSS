source_loadings =
{
	init:function()
	{
		$(".loading-container a").off().on("click", function() {
			content = $(this).prev(".loading").html()
			mclass = $(this).prev(".loading").attr("class")
			content = '<div class="'+mclass+'">'+replaceContent(content)+'</div>'

			$("#html-container textarea").val(content)


			$.get('source_css/'+replaceClass(mclass)+'.txt', function(data) {
				$("#css-container textarea").val(data)
			});


			$("#content-popup").fadeIn(400)
			$("#overlay-popup").css("display", "block")

			resizePopup()


			return false
		})

		$("#overlay-popup").off().on("click", function() {
			$("#content-popup").fadeOut(400)
			$("#overlay-popup").css("display", "none")


			return false
		})


		$(window).on("resize", function() { resizePopup() })



		function resizePopup() {
			window_left = $(window).width()

			if (window_left >= 980) {
				$("#content-popup").css({"left": 0})
				$("#content-popup span, #content-popup textarea").css({"width": "940px"})
			
			} else {
				$("#content-popup").css({"left": 10})
				$("#content-popup span, #content-popup textarea").css({"width": window_left-40})
			}
		}


		function replaceContent(str) {
			replace = [
				['					', ''],
				['	','  ']
			]

			for (var i in replace) {
				re = new RegExp(replace[i][0], 'g');
				str = str.replace(re, replace[i][1]);
			}

			return str
		}


		function replaceClass(str) {
			re = new RegExp(' ', 'g');
			return str.replace(re, '_');
		}
	}
}



$(source_loadings.init())