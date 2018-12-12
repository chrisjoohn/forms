var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var monthDateYear  = (month+1) + "/" + date + "/" + year;

document.getElementById('date').value = monthDateYear;



var ID = function(){
    return 'id_' + currentDate.getTime();
}

document.getElementById('orderNumber').value = ID();


var q1, q2, q3, q4, q5, u1, u2, u3, u4, u5, t1, t2, t3, t4, t5, total;
/*QUANTITY*/

q1 = document.getElementById('quantity1').value;
q2 = document.getElementById('quantity2').value;
q3 = document.getElementById('quantity3').value;
q4 = document.getElementById('quantity4').value;
q5 = document.getElementById('quantity5').value;


/*UNIT PRICE*/

u1 = document.getElementById('uprice1').value;
u2 = document.getElementById('uprice2').value;
u3 = document.getElementById('uprice3').value;
u4 = document.getElementById('uprice4').value;
u5 = document.getElementById('uprice5').value;

/*TOTAL PRICE */

t1 = q1 * u1;
t2 = q2 * u2;
t3 = q3 * u3;
t4 = q4 * u4;
t5 = q5 * u5;

document.getElementById('tprice1').value =  t1;
document.getElementById('tprice2').value = t2;
document.getElementById('tprice3').value = t3;
document.getElementById('tprice4').value = t4;
document.getElementById('tprice5').value = t5;


/*

total = [t1, t2, t3, t4, t5];
for(var i = 0; i <= total.length; i++){
    total += total[i];
    return total;
}

document.getElementById('total').value = &#x20B1 + total;

*/