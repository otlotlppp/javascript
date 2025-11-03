// todo.js
// 원격 작업 + 로컬 작업.

let students = [
  {studentNO : 1001, studentName : '김민준', engScore : 85, mathScore : 80},
  {studentNO : 1001, studentName : '김민준', engScore : 75, mathScore : 70},
  {studentNO : 1001, studentName : '김민준', engScore : 65, mathScore : 90}
]

let sum=0;
for (let i =0;, i<students.length; i++) {
  sum += studnets[i].engScore + students[i].mathScore;
}

let avg = sum / students.length;
let result = {};
result['sum'] = sum;
result['average'] = avg;