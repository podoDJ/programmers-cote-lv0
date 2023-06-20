// //삼각형의 완성조건 (2)
// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
// 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 2입니다.
// 1 ≤ sides의 원소 ≤ 1,000

const sides = [11,7]

//남은 변의 길이를 a라고 하자.
// 3+a > 6  --> a > 3
// 6+a > 3  --> a > -3 이미 주어진 애들 중 작은놈은 알 바가 아니다.
// 3+6 > a  --> 9 > a

// 1. sides[0]과 sides[1]을 정렬시켜 작은놈 앞으로 보내고 temp
// 2. a > sides[1] - sides[0]
// 3. a < sides[0] + sides[1]

function solution(sides) {
  let temp = sides[0]
  let count = 0
  if (sides[1] < sides[0]) {
    sides[0] = sides[1]
    sides[1] = temp
  }
  for (let i = 0 ; i < Number(sides[0]) + Number(sides[1]) ; i++) {
    if (i > sides[1] - sides[0] && i < sides[0] + sides[1]) {
      count++
    } else {
      continue;
    }
  }
  return count
}

console.log(solution(sides))