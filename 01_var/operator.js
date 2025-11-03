// 연산자.
console.log(heading);

result = 30%20;
console.log(result);
result++;
console.log(result);
result--;
console.log(result);

//할당연산자
let str = 'hello';
result = str = 'world';
console.log(result, str);

result = result + ', Another';
result += 'world'; // 누적연산

console.log(result);


let num = 10;
num -= 10;
num *= 10;
num += 10;
num /= 10;

console.log(num);

//비교연산자. => true/false 비교구문(if)
let team = 'red';
team = 10;

console.log(10 === '10'); // == ===

// 논리연산자 true && true => true, true || false => true
console.log(10<= 10 || !(10 < 10));