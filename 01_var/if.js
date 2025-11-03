// 조건문.
// 회원(회원번호, 회원명, 회원점수(75))
// 1001, 김민준, 123/ 1002, 박설명, 95 / 1002, 이충희, 100
// members 배열에 저장.
// result 에 회원점수의 합 => 콘솔출력.

let members = [
  {memberNo: 1001, memberName:'김민준', point:123},
  {memberNo: 1002, memberName:'박설명', point:95},
  {memberNo: 1003, memberName:'이충희', point:100}
]

let result = {}; // 객체로 선언
result['total'] = members[0]['point'] + members[1]['point'] + members[2]['point'],
result['average'] = (members[0]['point'] + members[1]['point'] + members[2]['point']) / 3;

console.log('회원점수의 합' + result['total']);
console.log('회원점수의 평균' + result['average']);

let idx = 2;
if (members[idx]['point'] > result['average']){
  console.log[idx]['memberName']+ ('의 점수는 평균보다 큽니다');
} else if (members[idx]['point'] < result['average']) {
  console.log(members[idx]['memberName'])+('의 점수는 평균보다 작습니다');
} else { 
  console.log(members[idx]['memberName'])+('의 평균과 같습니다.');
}