// Define all variables

let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24 = parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();
const hour10 = $('#time10').text();
const hour11 = $('#time11').text();
const hour12 = $('#time12').text();
const hour13 = $('#time13').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);
const hour10Int = parseInt(hour10);
const hour11Int = parseInt(hour11);
const hour12Int = parseInt(hour12);
const hour13Int = parseInt(hour13);

// Store user input in local Storage

$('#btn1').click(function() {
    if ($('#text1').val()) {
        localStorage.removeItem('text1');
    }

    const hour1String = JSON.stringify(hour1);

    localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
    if ($('#text2').val()) {
        localStorage.removeItem('text2');
    }

    const hour2String = JSON.stringify(hour2);

    localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
    if ($('#text3').val()) {
        localStorage.removeItem('text3');
    }

    const hour3String = JSON.stringify(hour3);

    localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
    if ($('#text4').val()) {
        localStorage.removeItem('text4');
    }

    const hour4String = JSON.stringify(hour4);

    localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
    if ($('#text5').val()) {
        localStorage.removeItem('text5');
    }

    const hour5String = JSON.stringify(hour5);

    localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
    if ($('#text6').val()) {
        localStorage.removeItem('text6');
    }

    const hour6String = JSON.stringify(hour6);

    localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
    if ($('#text7').val()) {
        localStorage.removeItem('text7');
    }

    const hour7String = JSON.stringify(hour7);

    localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
    if ($('#text8').val()) {
        localStorage.removeItem('text8');
    }

    const hour8String = JSON.stringify(hour8);

    localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() {
    if ($('#text9').val()) {
        localStorage.removeItem('text9');
    }

    const hour9String = JSON.stringify(hour9);

    localStorage.setItem(hour9, $('#text9').val());
})

$('#btn10').click(function() {
    if ($('#text10').val()) {
        localStorage.removeItem('text10');
    }

    const hour10String = JSON.stringify(hour10);

    localStorage.setItem(hour10, $('#text10').val());
});


$('#btn11').click(function() {
    if ($('#text11').val()) {
        localStorage.removeItem('text11');
    }

    const hour11String = JSON.stringify(hour11);

    localStorage.setItem(hour11, $('#text11').val());
});

$('#btn12').click(function() {
    if ($('#text12').val()) {
        localStorage.removeItem('text12');
    }

    const hour12String = JSON.stringify(hour12);

    localStorage.setItem(hour12, $('#text12').val());
});

$('#btn13').click(function() {
    if ($('#text13').val()) {
        localStorage.removeItem('text13');
    }

    const hour1String = JSON.stringify(hour13);

    localStorage.setItem(hour13, $('#text13').val());
});


// Display the time using moment.js

$('#currentDay').append(timeNow);

// Color coding to reflect whether the time slot is in the past, the present or the future 

colorCoding();

function colorCoding() {

    TIMER = setInterval(colorCoding, 1000);
    // Test check: hourNow24 = 20;
    if (hourNow24 >= 13 && hourNow24 <= 17) {

        for (let i = 1; i <= 13; i++) {
            let hourInInt = parseInt($('#time' + i).text());

            if (hourInInt < 13) {
                hourInInt = hourInInt + 12;
            }

            if (hourInInt == hourNow24) {
                $('#text' + i).css('background-color', '#f6fdce');
                continue;
            }

            if (hourInInt < hourNow24) {
                $('#text' + i).css('background-color', '#cee9fd');
            } else {
                $('#text' + i).css('background-color', '#cefdce');
            }
        }

    } else {
        clearInterval(TIMER);
        $('textarea').css('background-color', '#fdcef5');
    }
}