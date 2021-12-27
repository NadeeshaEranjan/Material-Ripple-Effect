$("html").on("click", ".btn-ripple", function(evt) {
	$( ".ripple-span" ).remove();
    var btn = $(evt.currentTarget);
    var x = evt.pageX - btn.offset().left;
    var y = evt.pageY - btn.offset().top;

    $("<span class='ripple-span'/>").appendTo(btn).css({
        left: x,
        top: y
    });
});

function hashColor() {
	var newColor = $("#colorCode").val();

	var	styleTag = '<style type="text/css">.ripple-span{background-color: #' + newColor + ' !important;}</style>'

	$('.new-style-container').empty();
	$('#html5colorpicker').val('#' + newColor);
	
	$('.new-style-container').append(styleTag);

}

function colorPicker(colorPickerVal) {
	var	styleTag = '<style type="text/css">.ripple-span{background-color: ' + colorPickerVal + ' !important;}</style>'
	
	$("#colorCode").val(colorPickerVal.replace( /#/, "" ));

	$('.new-style-container').empty();
	$('.new-style-container').append(styleTag);
}