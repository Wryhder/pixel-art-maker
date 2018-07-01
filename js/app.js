let rows, cols, i, pickedColor;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event1) {
    $('table tr').remove();

    // Select size input
    rows = $('#inputHeight').val();
    cols = $('#inputWeight').val();

    i = 1;
    while (i <= rows) {
        $('table').append('<tr></tr>');
        for (let j = 1; j <= cols; j++) {
            $('tr:last').append('<td></td>');
            $('td').attr("class", "cell");
        }
        i++;
    }
    event1.preventDefault();

    // toggle colour of usage instructions
    $("#create-grid").css("color", "rgb(147, 166, 184)");
    $("#colour-toggle-tip").css("color", "firebrick");

    $('.cell').click((event2) => {
        $("#colour-toggle-tip").css("color", "rgb(147, 166, 184)");

        // Select color input
        pickedColor = $('#colorPicker').val();

        if($(event2.target).attr('style')){
            $(event2.target).removeAttr('style');
        } else {
            $(event2.target).attr('style', 'background-color: ' + pickedColor) ;
        }  
    });

    $("input:reset").click(function() {
        $('table tr').remove();
        $("#create-grid, #colour-toggle-tip").css("color", "firebrick");
    })

});

