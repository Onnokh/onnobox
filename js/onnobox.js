	$(document).ready(function(){
	// add a click event
		$(".onnobox").click(function(){
			overlay = $(this).attr("src");
			text = $(this).attr("alt");
			window.startOverlay(overlay,text);
			return false;
		});
	});

		function startOverlay(overlay,text) {
		//toevoegen elementen
			$("body")
				.append('<div class="boxoverlay"></div><div class="boxcontainer"></div><div class="onnotitlebg"><div class="onnotitle"></div></div>')
				.css({"overflow-y":"hidden"});

		//animeren van achtergrond
			$(".boxoverlay").animate({"opacity":"0.8"}, 400, "linear");

		//afbeelding toeveogen
			$(".boxcontainer").html('<img src="'+overlay+'" alt="'+text+'" />');
			$(".onnotitle").html('<h3>'+text+'</h3>');

		//midden zoeken voor afbeelding
			$(".boxcontainer img").load(function() {
				var imgWidth = $(".boxcontainer img").width();
				var imgHeight = $(".boxcontainer img").height();
				$(".boxcontainer img")
					.css({
						"height": '80vh'
					})
				var imgWidth = $(".boxcontainer img").width();
				$(".boxcontainer")
					.css({
						"top":        "5vh",
						"width":       imgWidth,
						"margin":		"0 auto"
						
						
					})
					.animate({"opacity":"1"}, 400, "linear");
			
			//midden zoeken voor titel		
				$(".onnotitlebg").css({
					"width": "100vw",
				})
				
				window.removeOverlay();
			});
		}
		
		//alles uit de DOM verwijderen
		function removeOverlay() {
			$(".boxoverlay").click(function(){
				$("body")
				.css({"overflow-y":"visible"});
			
				$(".boxcontainer, .boxoverlay, .onnotitle, .onnotitlebg").animate({"opacity":"0"}, 200, "linear", function(){
					$(".boxcontainer, .boxoverlay, .onnotitle, .onnotitlebg").remove();	
				});
			});
		}
