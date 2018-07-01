// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event1) {
    $('table tr').remove();

    // Select size input
    var rows = $('#inputHeight').val();
    var cols = $('#inputWeight').val();

    for (let i = 1; i <= rows; i++) {
        $('table').append('<tr></tr>');
        for (let j = 1; j <= cols; j++) {
            $('tr:last').append('<td></td>');
            $('td').attr("class", "cell");
        }
    }

    event1.preventDefault();

    // make usage instruction less distracting
    // once user has submitted table size
    $("#create-grid").css("color", "rgb(147, 166, 184)");
    
    $("#colour-toggle-tip").show();

    $('.cell').click((event2) => {
        $("#colour-toggle-tip").hide();

        // Select color input
        let pickedColor = $('#colorPicker').val();

        if($(event2.target).attr('style')){
            $(event2.target).removeAttr('style');
        } else {
            $(event2.target).attr('style', 'background-color: ' + pickedColor) ;
        }  
    });

    $("input:reset").click(function() {
        $('table tr').remove();
        $("#create-grid").css("color", "firebrick");
        $("#colour-toggle-tip").show();
    })

});

