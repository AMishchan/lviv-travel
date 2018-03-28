$(document).ready(function() {
    var Data = new Date();
    var Day = Data.getDate();
    var Month = Data.getMonth();
    Month += 1 - 1; // Делаем текущий месяц с правильной цыфрой (если март, то номер месяца будет 3).
    if (Day < 10) {
        Day = "0" + Day;
    }
    $('.number').html(Day);
    switch (Month) {
        case 0 : Month = "Січня";
            break;
        case 1 : Month = "Лютого";
            break;
        case 2 : Month = "Березня";
            break;
        case 3 : Month = "Квітня";
            break;
        case 4 : Month = "Травня";
            break;
        case 5 : Month = "Червня";
            break;
        case 6 : Month = "Липня";
            break;
        case 7 : Month = "Серпня";
            break;
        case 8 : Month = "Вересня";
            break;
        case 9 : Month = "Жовтня";
            break;
        case 10 : Month = "Листопада";
            break;
        case 11 : Month = "Грудня";
            break;
    }
    $('.month').html(Month);
    
    $('#date').datepicker({
        monthNames: [ "Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня" ],
        dateFormat : 'dd MM'
    });
    $('.datepick_event_date p').click(function() {
        $('#date').focus();
    });
    
    $('#date').change(function() {
        var data = $('#date').val();
        var arr = data.split(' ');
        $('.number').html(arr[0] + '</br>');
        $('.month').html(arr[1]);
//        $('.datepick_date').html('<h3 class="number">'+arr[0] + '</h3></br>' + '<h4 class="month">' + arr[1]);
    });
});