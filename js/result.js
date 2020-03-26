$(function () {

    $('#done').on('click', function () {
        $('#input').hide(2000, function () {
            $('#output').show(2000);
        });
    });
});