// 연속된 수의 합
// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
// 두 정수 num과 total이 주어집니다. 
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

// 입출력 예
// num	total	  result
// 3	    12	  [3, 4, 5]
// 5	    15	  [1, 2, 3, 4, 5]
// 4	    14	  [2, 3, 4, 5]
// 5	    5	    [-1, 0, 1, 2, 3]

// 이건 알고리즘이 아니라 수수께끼다!!(사실 그게 그거긴 해!)
// 생각해보자. 3개로 12를 만들려면? 방법이야 무수히 많지. 근데 result를 보니까 3,4,5다.
// 그렇다. 3,4,5의 가운데값 4는 12를 3으로 나눈 숫자다.
// 그러므로 result의 중앙값은 total/num
// 문제가 있다. 짝수의 경우에는 머리가 살짝 아프다.
// 따라서 우리는 ceil을 먹일거다.(floor를 안하고 ceil을 하는 이유는 아래 startValue를 생각해보라. 시작값 구할 때 더 쉽다.) 
// 그리고 num이 홀수/짝수 인 경우를 나눠줘야 한다.
// 다행히도, num !== 0이므로 0으로 나누는 경우는 생각 안해도 된다.

// 직접 해보니, 홀수/짝수 케이스를 나눌 필요가 없긴 했다. 그런데 테스트케이스 더 돌려봐야 알 것 같다.

// 정리하자.
// if num % 2 === 1
// centerValue = total/num
// statValue = centerValue - floor(num/2)
// endValue = startValue + num - 1
const num = 5
const total = 5
function solution(num, total) {
  const range = Math.floor(num/2)
  const centerValue = Math.ceil(total/num)
  const startValue = centerValue - range
  let result = []
  for (i=0 ; i < num ; i++) {
      elementValue = startValue + i
      result.push(elementValue)
    }
  
  return result
}
console.log(solution(num, total))