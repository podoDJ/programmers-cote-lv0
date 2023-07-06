// A로 B 만들기

// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < before의 길이 == after의 길이 < 1,000
// before와 after는 모두 소문자로 이루어져 있습니다.

// 입출력 예
// before	  after	  result
// "olleh"	  "hello"	  1
// "allpe"	  "apple"	  0

const before = "olleh";
const after = "hello";

// const before = "allpe";
// const after = "apple"

// 로직구성
// (1) 일단 배열로 만든다.
// (2) 반복문 돌려서 before의 글자 하나하나 떼어내어 
// (3) 그 문자가 before에는 몇 개 있는지 / after에는 몇 개 있는지 비교한다.
// (4) 개수 다르면 0을 내뱉고, else 케이스를 굳이 continue로 생각할 필요가 없다고 한다.
// (5) retrun 1의 case는 for문이나 if문이 아닌 solution함수에 대해서 내뱉어야 한다.
function solution(before, after) {
  const beforeArr = before.split("");

  const afterArr = after.split("");
  for (let i = 0 ; i < beforeArr.length ; i++) {
    let b = beforeArr.filter((item) => item === beforeArr[i])
    let a = afterArr.filter((item) => item === beforeArr[i])
    if (a.length !== b.length) {
      return 0
    } 
  }
  return 1
}

console.log(solution(before, after));
