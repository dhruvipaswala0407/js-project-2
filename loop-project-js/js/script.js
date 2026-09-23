
// q:-1
let ans1 = document.getElementById('ans1');
let num = document.getElementById('q1').innerHTML = 1213;
let reversed = 0;
while (num > 0) {
    let remainder = num % 10;
    reversed = (reversed * 10) + remainder;
    num = Math.floor(num / 10);
}
ans1.innerHTML = 'Reversed number:-' + reversed;
//q:-2
let ans2 = document.getElementById('ans2');
let num1 = document.getElementById('q2').innerHTML = 5512;
let copy = num1;
let reversed1 = 0;
while (num1 > 0) {
    let remainder1 = num1 % 10;
    reversed1 = (reversed1 * 10) + remainder1;
    num1 = Math.floor(num1 / 10);
}
if (copy == reversed1) {
    ans2.innerHTML = 'Is a palindrome' + reversed1;
}
else {
    ans2.innerHTML = 'Is not a palindrome' + reversed1;
}
//q:-3
let ans3 = document.getElementById('ans3');
let n = document.getElementById('q3').innerHTML = 10;
let a = 0;
let b = 1;
let series = "";
let i;
if (n >= 1) {
    series += a;
}
if (n >= 2) {
    series += "," + b;
}
for (i = 3; i <= n; i++) {
    let nt = a + b;
    series += ", " + nt;
    a = b;
    b = nt;
}
ans3.innerHTML = 'Fibonacci series: ' + series;
//q:-4
let ans4 = document.getElementById('ans4');
let n1 = document.getElementById('q4').innerHTML = 5;
let sum = 1;
let div;
let j;
for (j = n1; j >= 1; j--) {
    div = sum * j;
    sum = div;
}
ans4.innerHTML = 'the factorial of a number:' + div;
//q:-5
let ans5 = document.getElementById('ans5');
let num5 = document.getElementById('q5').innerHTML = 7;
let k;
let count = 0;
for (k = 2; k < num5; k++) {
    if (num5 % k === 0) {
        count++;
    }
}
if (count === 0) {
    ans5.innerHTML = `${num5} Is a prime number`;
}
else {
    ans5.innerHTML = `${num5} Is not a prime number`;
}
//q:-6
let ans6 = document.getElementById('ans6');
let num6 = document.getElementById('q6').innerHTML = 9249874;
let count6 = 0;
let num6_clone = num6;
while (num6_clone != 0) {
    num6_clone = Math.floor(num6_clone / 10);
    count6++;
}
ans6.innerHTML = `The total number of digits in ${count6}`;
//q:-7
let ans7 = document.getElementById('ans7');
let num7 = document.getElementById('q7').innerHTML = 156;
let sum7 = 0;
let num7_clone = num7;
let digit;
while (num7_clone != 0) {
    digit = num7_clone % 10;
    sum7 += digit;
    num7_clone = Math.floor(num7_clone / 10);
}
ans7.innerHTML = `The total number of digits in ${sum7}`;
//q:-8
let ans8 = document.getElementById('ans8');
let num8 = document.getElementById('q8').innerHTML = 153;
let num8_clone = num8;
let count8 = 0;
let num8_sum1 = 0;
while (num8_clone != 0) {
    num8_clone = Math.floor(num8_clone / 10);
    count8++;
}
num8_clone = num8;
while (num8_clone != 0) {
    let ld = num8_clone % 10;
    num8_sum1 += Math.pow(ld, count8);
    num8_clone = Math.floor(num8_clone / 10);
}
if (num8_sum1 === num8) {
    ans8.innerHTML = `${num8} Is a armstrong number`;
}
else {
    ans8.innerHTML = `${num8} Is not a armstrong number`;
}
//q:-9
let ans9 = document.getElementById('ans9');
let base = 3;
let exponent = 4;
let result = 1;
for (let i = 0; i < exponent; i++) {
    result *= base;
}
ans9.innerHTML = `${base} to the power of ${exponent} is ${result}`;
//q:-10
let ans10 = document.getElementById('ans10');
let str = '';
let g;
let p;
for (g = 1; g <= 5; g++) {
    for (p = 1; p <= g; p++) {
        str += p + ' ';
    }
    str += "<br>";
}
ans10.innerHTML = str;
//q:-11
let ans11 = document.getElementById('ans11');
let str1 = '';
let g1;
let p1;
for (g1 = 5; g1 >= 1; g1--) {
    for (p1 = 1; p1 <= g1; p1++) {
        str1 += p1 + ' ';
    }
    str1 += "<br>";
}
ans11.innerHTML = str1;
//q-12
let ans12 = document.getElementById('ans12');
let str2 = ' ';
let a1;
let b1;
for (a1 = 1; a1 <= 5; a1++) {
    for (let s = 1; s < a1; s++) {
        str2 += ' _ ';
    }
    for (b1 = 1; b1 <= (6 - a1); b1++) {
        str2 += b1 + ' ';
    }
    str2 += "<br>";
}
ans12.innerHTML = str2;
//q-13
let ans13 = document.getElementById('ans13');
let str3 = '';
let a2;
let b2;
for (a2 = 1; a2 <= 5; a2++) {
    for (b2 = 1; b2 <= (5 - a2); b2++) {
        str3 += ' _ ';
    }
    for (b2 = 1; b2 <= a2; b2++) {
        str3 += b2 + ' ';
    }
    str3 += "<br>";
}
ans13.innerHTML = str3;
