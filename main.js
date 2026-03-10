// function identify(){
//     num1 = document.getElementById('input1').value;
//     if (num1 > 0) {
//         document.getElementById('output').innerHTML = 'It is positive';
//     }
//     else if (num1 == 0) {
//         document.getElementById('output').innerHTML = 'It is zero';
//     }
//     else if (num1 < 0){
//         document.getElementById('output').innerHTML = 'It is negative';
//     }
// }

function odd_or_even(){
    num1 = document.getElementById("input1").value;
        if (num1 % 2 ===0) {
window.alert('It is even');
        } else {window.alert('It is odd');}
}