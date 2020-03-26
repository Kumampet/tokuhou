$(function () {
    $('#output').hide();//最初に結果の部分は隠す
    var phases_num = 3;//初期phase数
    var share_num;

    $('.add-phase').on('click', function () {
        phases_num++;
        var dom = "<h2 class='in phase" + phases_num + "'>第" + phases_num + "段階：<input type='text' name='text" + phases_num + " id='text'></h2>";
        $('#phases').append(dom);
    });

    $('.delete-phase').on('click', function () {
        if (phases_num > 1) {
            $('.phase' + phases_num).remove();
            phases_num--;
        }else{
            alert("最低でも1つ以上の段階が必要です。");
        }
    });
    sessionStorage.setItem('share_num', phases_num);
});