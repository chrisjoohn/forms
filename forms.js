var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var monthDateYear  = (month+1) + "/" + date + "/" + year;
document.getElementById('date').value = monthDateYear;



var ID = function(){
    return 'ID_' + currentDate.getTime();
}

document.getElementById('orderNumber').value = ID();

/*QUANTITY*/

var u1, u2, u3, u4, u5, t1, t2, t3, t4, t5;
var q1, q2, q3, q4, q5, total = 0;


function changeValue1(val){
    q1 = (document.getElementById('quantity1').value = val);
    q1 = Number(q1);
    u1 = document.getElementById('uprice1').value;
    t1 = q1 * u1;
    document.getElementById('tprice1').value = t1;
    total = t1 + total;
    document.getElementById('total').value = total;
}

function changeValue2(val){
    q2 = (document.getElementById('quantity2').value = val);
    q2 = Number(q2)
    u2 = document.getElementById('uprice2').value;
    t2 = q2 * u2;
    document.getElementById('tprice2').value = t2;
    total = t2 + total;
    document.getElementById('total').value = total;
}

function changeValue3(val){
    q3 = (document.getElementById('quantity3').value = val);
    q3 = Number(q3)
    u3 = document.getElementById('uprice3').value;
    t3 = q3 * u3;
    document.getElementById('tprice3').value = t3;
    total = total + t3;
    document.getElementById('total').value = total;
}

function changeValue4(val){
    q4 = (document.getElementById('quantity4').value = val);
    q4 = Number(q4)
    u4 = document.getElementById('uprice4').value;
    t4 = q4 * u4;
    document.getElementById('tprice4').value = t4;
    total = total + t4;
    document.getElementById('total').value = total;
}

function changeValue5(val){
    q5 = (document.getElementById('quantity5').value = val);
    q5 = Number(q5)
    u5 = document.getElementById('uprice5').value;
    t5 = q5 * u5;
    document.getElementById('tprice5').value = t5;
    total = total + t5;
    document.getElementById('total').value = total;
}