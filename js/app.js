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

    $('.cell').click((event2) => {
        // Select color input
        var color = $('#colorPicker').val();
        $(event2.target).css('background-color', color);
    })
});

