$(document).ready(function(){
	num_box = $(".box");
	addition = 0;
});
	

$(function() {
    $( num_box ).draggable({
    	helper: 'clone',
    });
    $( "#cardSlots" ).droppable({
      drop: function( event, ui ) {
        var add = ui.draggable.attr('value');
        // console.log(add);
        addition = addition + parseInt(add);
        // console.log(addition);
        var duplicate = ui.draggable.clone();
        $("#cardSlots").append(duplicate);
		$("#total_sum").text(addition);
		var Limit = $("#cardSlots").children().length;
		console.log(Limit);
        // $( this )
        //   .addClass( "ui-state-highlight" )
        //   .find( "p" )
        //     .html( "Dropped!" );
      }
    });
 });


// var Card = {
//    init: function(type) {
 
// };


// var Lista = {
// 	function initialize(type){

// 	}
// }
