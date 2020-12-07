$(document).ready(function() {

    $('.date_time_pick_wrap').each(function(index, element) {
        var objWrap = $(this);

        objWrap.find('.outDateTime').on('change', function() {
            let datetime = $(this).val();
            let arr = new Date(datetime);
            objWrap.find('.inputTime').val(arr.getTime() / 1000);
        });

    });

});