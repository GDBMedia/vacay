$(function(event){
	$("#submit").click(function(event){
		$("#survey").addClass("hidden");
		$("#answer").fadeToggle("slow");
		event.preventDefault();
	});
	event.preventDefault();
});