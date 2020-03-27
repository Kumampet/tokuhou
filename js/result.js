$(function () {
    var num = Number(sessionStorage.getItem('share_num')) + 1;
    var dom;
    var str;

    $('#done').on('click', function () {
        $('input[id="result"]').attr('name', 'text' + num + '');
        $('#input').fadeOut(1000).hide(0, function () {


            //すべての段階数をもとに、データをセットする
            for (i = 1; i <= num; i++) {
                str = $('input[name="text' + (i) + '"]').val();
                dom = "<h1 class='s str" + (i) + "' >" + str + "</h1>";
                $('#content').append(dom);
                $('.str' + i + '').hide();
            }

            $('#output').fadeIn(200);
            $('.s').each(function (i) {
                $('.str' + (i + 1) + '').delay(5000 * i).fadeIn(0).delay(5100).fadeOut(200);
            });

            //最後のオチのデータをセットする
            // str = $('input[name="result').val();
            // dom = "<h1 class='out-result'>" + str + "</h1>";
            // $('#content').append(dom);
            // $('.out-result').hide();


        });
    });
});