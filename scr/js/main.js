$(document).ready(function() {

    $('.date_time_pick_wrap').each(function(index, element) {
        var objWrap = $(this);

        var dataValueOld = objWrap.find('.inputTime').val();
        if (dataValueOld > 0) {
            let arr = new Date(dataValueOld * 1000);

            let dateTimeD = arr.toISOString();
            let arDatD = dateTimeD.split('T');
            let arTimeD = arDatD[1].split('.')[0].split(':');
            let valData = arDatD[0] + 'T' + arTimeD[0] + ':' + arTimeD[1];
            // console.log(valData);
            objWrap.find('.outDateTime').val(valData);
        } else {
            var dataValue = objWrap.find('.outDateTime').val();
            let arr = new Date(dataValue);
            let timestamp = arr.getTime() / 1000;
            objWrap.find('.inputTime').val(timestamp);
        }


        objWrap.find('.outDateTime').on('change', function() {
            let datetime = $(this).val();
            let arr = new Date(datetime);
            let timestamp = arr.getTime() / 1000;
            if (timestamp > 0) {
                // console.log(timestamp);
                objWrap.find('.inputTime').val(timestamp);
            }
        });

        objWrap.find('.outDateTime').keyup(function(e) {

            let datetime = objWrap.find('.outDateTime').val();
            let arr = new Date(datetime);
            let timestamp = arr.getTime() / 1000;

            if (timestamp > 0) {
                // console.log(timestamp);
                objWrap.find('.inputTime').val(timestamp);
            }

        });

    });


});