// q:-1
let ans1: number = document.getElementById('ans1');
let num: number = document.getElementById('q1')!.innerHTML = 1213;
let reversed: number = 0;

while (num > 0) {
    let remainder: number= num % 10;//3 
    reversed = (reversed * 10) + remainder;//3
    num = Math.floor(num / 10);//121.3
}
ans1.innerHTML = 'Reversed number:-' + reversed;
//q:-2
let ans2: number = document.getElementById('ans2');
let num1: number = document.getElementById('q2')!.innerHTML = 525;
let copy: number = num1;
let reversed1: number = 0;

while (num1 > 0) {
    let remainder1 = num1 % 10;//525=5
    reversed1 = (reversed1 * 10) + remainder1;//5
    num1 = Math.floor(num1 / 10);//52.5 =52
}
if (copy == reversed1) {
    ans2.innerHTML = 'Is a palindrome' + reversed1;
} else {
    ans2.innerHTML = 'Is not a palindrome' + reversed1;
}
//q:-3
let ans3: number = document.getElementById('ans3');
let n: number = document.getElementById('q3')!.innerHTML = 10;
let a: number = 0;
let b: number = 1;// 0 1 2 3 5...
let series: string = "";
let i: number;

if (n >= 1) {
    series += a;
}
if (n >= 2) {
    series += "," + b;
}
for (i = 3; i <= n; i++) {
    let nt: number = a + b;//3
    series += ", " + nt;
    a = b;
    b = nt;
}
ans3.innerHTML = 'Fibonacci series: ' + series;
//q:-4
let ans4 = document.getElementById('ans4');
let n1: number = document.getElementById('q4')!.innerHTML = 5;
let sum: number = 1;
let div: number;
let j: number;
for (j = n1; j >= 1; j--) {
    div = sum * j;//5 4 = 20
    sum = div;//20
}
ans4.innerHTML = 'the factorial of a number:' + div;
//q:-5
let ans5 = document.getElementById('ans5');
let num5: number = document.getElementById('q5')!.innerHTML = 7;
let k: number;
let count: number = 0;
for (k = 2; k < num5; k++) {
    if (num5 % k === 0) {
        count++;
    }
}
if (count === 0) {
    ans5.innerHTML = `${num5} Is a prime number`;
} else {
    ans5.innerHTML = `${num5} Is not a prime number`;
}
//q:-6
let ans6 = document.getElementById('ans6');
let num6: number = document.getElementById('q6')!.innerHTML = 9249874;
let count6: number = 0;
let num6_clone: number = num6;
while (num6_clone != 0) {
    num6_clone = Math.floor(num6_clone / 10);//9249874 = 4 =7
    count6++;//4 7
}
ans6.innerHTML = `The total number of digits in ${count6}`;
//q:-7
let ans7 = document.getElementById('ans7');
let num7: number = document.getElementById('q7')!.innerHTML = 156;
let sum7: number = 0;
let num7_clone: number = num7;
let digit: number;
while (num7_clone != 0) {
    digit = num7_clone % 10;//156 6 5 1
    sum7 += digit;//6 6+5=11 11+1 =12
    num7_clone = Math.floor(num7_clone / 10);//15.6=15 1
}
ans7.innerHTML = `The total number of digits in ${sum7}`;
//q:-8
let ans8 = document.getElementById('ans8');
let num8: number = document.getElementById('q8')!.innerHTML = 153;
let num8_clone: number = num8;
let count8: number = 0;
let num8_sum1: number = 0;
while (num8_clone != 0) {
    num8_clone = Math.floor(num8_clone / 10);
    count8++;//3
}
num8_clone = num8;
while (num8_clone != 0) {
    let ld: number = num8_clone % 10;
    num8_sum1 += Math.pow(ld, count8);//3*3*3
    num8_clone = Math.floor(num8_clone / 10);
}
if (num8_sum1 === num8) {
    ans8.innerHTML = `${num8} Is a armstrong number`;
} else {
    ans8.innerHTML = `${num8} Is not a armstrong number`;
}
//q:-9
let ans9=document.getElementById('ans9')
let base: number = 3;
let ex1: number = 4;
let result: number = 1;
for (let i = 0; i < ex1; i++) {
    result *= base;
}
ans9.innerHTML=`${base} to the power of ${ex1} is ${result}`;
//q:-10
let ans10 = document.getElementById('ans10')!;
let str = '';
let g: number;
let p: number;

for (g = 1; g <= 5; g++) {
    for (p = 1; p <= g; p++) {
        str += p + ' ';
    }
    str += "<br>";
}

ans10.innerHTML = str;
//q:-11
let ans11 = document.getElementById('ans11')!;
let str1 = '';
let g1: number;
let p1: number;

for (g1 = 5; g1 >= 1; g1--) {
    for (p1 = 1; p1 <= g1; p1++) {
        str1 += p1 + ' ';
    }
    str1 += "<br>";
}

ans11.innerHTML = str1;
//q-12
let ans12 = document.getElementById('ans12')!;
let str2 =' ';
let a1: number;
let b1: number;

for (a1 = 1; a1 <= 5; a1++) {
    for (let s = 1; s < a1; s++) {
        str2 += ' _ '; 
    } 
    for (b1 = 1; b1 <=(6 - a1); b1++) {
        str2 += b1 + ' ';
    }
    str2 += "<br>";
}

ans12.innerHTML = str2;
//q-13
let ans13 = document.getElementById('ans13')!;
let str3 = '';
let a2: number;
let b2: number;

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
