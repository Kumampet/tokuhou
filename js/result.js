$(function () {
    var num = sessionStorage.getItem('share_num');
    var dom;
    var str;

    $('#done').on('click', function () {
        $('#input,#content').hide(2000, function () {
            $('#output').show(2000);

            //すべての段階数をもとに、データをセットする
            for (i = 1; i <= num; i++) {
                str = $('input[name="text' + (i) + '"]').val();
                dom = "<h1 class='str" + (i) + "'>" + str + "</h1>";
                $('#content').append(dom);
            }
            //最後のオチのデータをセットする
            str = $('input[name="result').val();
            dom = "<h1 class='out-result'>" + str + "</h1>";
            $('#content').append(dom);
        });
    });
});