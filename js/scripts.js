$(function(event){
	$("#submit").click(function(event){
		
		// variables
		var name = $("#name").val();
		var type = parseInt($("#type").val());
		var temp = $("input:radio[name=temp]:checked").val();
		var price = parseInt($("#price").val());

		if(temp === "hot"){
			if(type === 1){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}

			}
			if(type === 2){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}
			}
			if(type === 3){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}
			}
			if(type === 4){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
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
					$("#vacayAnswer").text("This amazing Ice Palace in Oymyakon, Russia");
					$("#description").text("experience the invigorating atmosphere of 20 below freezing while being surrounded by absolute decadence");
				}
				if(price === 4){
					$("#vacayAnswer").text("This exclusive lunar hotel on wherelse? The Moon!");
					$("#description").text("see and do things few people have like, go on space walks, see Buzz Aldrin's footprint, and of course plant the flag of your native country");
					
				}

			}
			if(type === 2){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}
			}
			if(type === 3){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}
			}
			if(type === 4){
				if(price === 1){
					alert(temp + " " + type + " " + price);

				}
				if(price === 2){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 3){
					alert(temp + " " + type + " " + price);
					
				}
				if(price === 4){
					alert(temp + " " + type + " " + price);
					
				}
			}
		}

		$("#nameAnswer").text(name);

		$("#survey").hide();
		$("#answer").fadeIn("slow");
		event.preventDefault();
		$("#continue").click(function(){
			$("#answer").hide();
			$('#myform')[0].reset();
			$("#survey").fadeIn("slow");
			
		});
	});
	event.preventDefault();
});