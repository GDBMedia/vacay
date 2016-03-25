$(function(event){
	$("body").fadeIn(1000);
	$(this).scrollTop();
	

	$("#clear").click(function(event){
		$("#myform")[0].reset();
		event.preventDefault();
		$("#nameInput").removeClass("has-error");
		$("#typeInput").removeClass("has-error");
		$("#tempInput").removeClass("has-error");
		$("#priceInput").removeClass("has-error");

	});
	$("#submit").click(function(event){

		
		// variables
		var name = $("#name").val();
		var type = parseInt($("#type").val());
		var temp = $("input:radio[name=temp]:checked").val();
		var price = parseInt($("#price").val());
		$(this).scrollTop();

		if(!name || !type || !temp || !price){
			if(!name){
				$("#nameInput").addClass("has-error");
				$("#nameInput").click(function(){
					$("#nameInput").removeClass("has-error");
				});
				
			}
			if(!type){
				$("#typeInput").addClass("has-error");
				$("#typeInput").click(function(){
					$("#typeInput").removeClass("has-error");
				});
			}
			if(!temp){
				$("#tempInput").addClass("has-error");
				$("#tempInput").click(function(){
					$("#tempInput").removeClass("has-error");
				});
			}
			if(!price){
				$("#priceInput").addClass("has-error");
				$("#priceInput").click(function(){
					$("#priceInput").removeClass("has-error");
				});
			}
			
		}else{

			var x = 1;

			if(temp === "hot"){
				if(type === 1){
					if(price === 1){
						$("#vacayAnswer").text("a wonderfully made hut in Harare, Zimbabwe");
						$("#description").text("help the people in this awesome city and get a chance to learn about thier culture");

					}
					if(price === 2){
						$("#vacayAnswer").text("a small but cozy hotel in Hanoi, Vietnam");
						$("#description").text("rent a scooter and ride all around Vietnam and see the wonderous views this beautiful country has to offer");
						
					}
					if(price === 3){
						x=2;
						
					}
					if(price === 4){
						$("#vacayAnswer").text("a small island no one has been to in all of written history");
						$("#description").text("explore this island and see what new isights it may have to offer(bonus you now get to name the island upon your return)");
						
					}

				}
				if(type === 2){
					if(price === 1){
						x=2;

					}
					if(price === 2){
						$("#vacayAnswer").text("a trip to wherelse? Paris, France in a small but affordable hotel");
						$("#description").text("take in all the sites Paris has to offer and of course enjoy the wonderous food");
						
					}
					if(price === 3){
						$("#vacayAnswer").text("a 3 week long trip through Spain, France, and Italy");
						$("#description").text("enjoy a cornucopia of sites throughout these amazing countries and as always enjoy the ridiculously amazing food");
						
					}
					if(price === 4){
						$("#vacayAnswer").text("a 4 year long trip around the world staying in 5 star hotels");
						$("#description").text("invent your own itinerary, where do you want to travel? What do you want to see? Clearly money is no problem!");
						
					}
				}
				if(type === 3){
					if(price === 1){
						x = 2;

					}
					if(price === 2){
						$("#vacayAnswer").text("a week long trip to Hawaii");
						$("#description").text("enjoy the many beaches Hawaii has to offer and see the amazing sites unique to Hawaii");
						
					}
					if(price === 3){
						$("#vacayAnswer").text("a 2 month trip though the Caribbean Islands");
						$("#description").text("island hop your way through paradise and see what each one has to offer");
						
					}
					if(price === 4){
						x = 2;
						
					}
				}
				if(type === 4){
					if(price === 1){
						$("#vacayAnswer").text("a storage room aboard a Carnival Cruise ship headed to the Caribbean");
						$("#description").text("go on all the adventures the cruise has to offer but good luck trying to sleep (the room does not come with a bed)");

					}
					if(price === 2){
						$("#vacayAnswer").text("an average room aboard a Princess Cruise ship on a tour of the Caribbean");
						$("#description").text("go on all the adventures the cruise has to offer as well as have a wonderfully equipped room with full turn down service");
						
					}
					if(price === 3){
						$("#vacayAnswer").text("a Massive room aboard Holland-America Cruise line touring the Caribbean");
						$("#description").text("go on all the adventures the cruise has to offer as well as have a wonderfully equipped room with full turn down service and access to VIP rooms on ths ship");
						
					}
					if(price === 4){
						$("#vacayAnswer").text("a Massive room aboard Holland-America Cruise line touring the Caribbean with added benefits");
						$("#description").text("go on all the adventures the cruise has to offer as well as have a wonderfully equipped room with full turn down service and access to VIP rooms on ths ship even hidden ones and heres the bonus all alcoholic purchases are free");
						
					}
				}
			}
			if(temp === "cold"){
				if(type === 1){
					if(price === 1){
						$("#vacayAnswer").text("This wonderful shack in Alaska");
						$("#description").text("live in the wild in this cold baren land on your meger $500 vacation in the cold");

					}
					if(price === 2){
						$("#vacayAnswer").text("This posh winter cabin in Duluth, Minnesota");
						$("#description").text("show your adventerous significant other a romantic weekend in this fire heated cabin and one king size mattress");
					}
					if(price === 3){
						$("#vacayAnswer").text("This amazing extravogent Ski Resort on the Swiss Alps ");
						$("#description").text("go skiing or snowboard on the best slopes in the world and when you're not doing enjoy your massive 2000 sqft room");
					}
					if(price === 4){
						$("#vacayAnswer").text("This exclusive lunar hotel on wherelse? The Moon!");
						$("#description").text("see and do things few people have like, go on space walks, see Buzz Aldrin's footprint, and of course plant the flag of your native country");
						
					}

				}
				if(type === 2){
					if(price === 1){
						$("#vacayAnswer").text("This comfy winter cabin in Saint Petersburg, Russia");
						$("#description").text("sit around a fire and cook your own breakfast by yourself and sleep in a 'really' comfortable twin bed and of course go enjoy the local sites");

					}
					if(price === 2){
						$("#vacayAnswer").text("This comfy winter cabin in Saint Petersburg, Russia");
						$("#description").text("kick back and relax with your significant other and take a trip around town and see the sites. Room comes with king size bed");
						
					}
					if(price === 3){
						x = 2;
					}
					if(price === 4){
						x=2;
						
					}
				}
				if(type === 3){
					if(price === 1){
						x=2;

					}
					if(price === 2){
						x=2;
						
					}
					if(price === 3){
						$("#vacayAnswer").text("This amazing log cabin themed hotel in Anchorage, Alaska");
						$("#description").text("explore the Iditarod Trail as you adventure through this majestic land");
						
					}
					if(price === 4){
						x=2;
						
					}
				}
				if(type === 4){
					if(price === 1){
						$("#vacayAnswer").text("a storage room aboard a Carnival Cruise ship headed to Alaska");
						$("#description").text("go on all the adventures the cruise has to offer but good luck trying to sleep (the room does not come with a bed)");

					}
					if(price === 2){
						$("#vacayAnswer").text("an Averaged size room aboard Princess Cruise line touring Alaska");
						$("#description").text("go on all the adventures the cruise has to offer as well as have a wonderfully equipped room with full turn down service");
					}
					if(price === 3){
						$("#vacayAnswer").text("a Massive room aboard Holland-America Cruise line touring Alaska");
						$("#description").text("go on all the adventures the cruise has to offer as well as have a wonderfully equipped room with full turn down service and access to VIP rooms on ths ship");
						
					}
					if(price === 4){
						x=2;
						
					}
				}
			}
		}

		$("#nameAnswer").text(name);
		$("#nameOops").text(name);

		if(x ===1){
			$("#header img").removeClass("logo");
			$("#header img").addClass("logo2");
			$("#survey").hide();
			$("#answer").fadeIn("slow");
		}
		if(x ===2 ){
			$("#header img").removeClass("logo");
			$("#header img").addClass("logo2");
			$("#survey").hide();
			$("#oops").fadeIn("slow");
		}
		event.preventDefault();
		$("#continue").click(function(){
			$(this).scrollTop();
			$("#header img").addClass("logo");
			$("#header img").removeClass("logo2");
			$("#answer").hide();
			$('#myform')[0].reset();
			$("#survey").fadeIn("slow");
			
		});
		event.preventDefault();
		$("#continue2").click(function(){
			$(this).scrollTop();
			$("#header img").addClass("logo");
			$("#header img").removeClass("logo2");
			$("#oops").hide();
			$('#myform')[0].reset();
			$("#survey").fadeIn("slow");
			
		});
	});
	event.preventDefault();
});