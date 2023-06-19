// 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, 
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 
// solution 함수를 완성해주세요.

// 입출력 예
//     my_str	        n	          result
// "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]

const my_str = "abcdef123"
const n = 3

// 1. slice -> 인덱스 0, n-1까지 잘라낸다.
// 2. 잘라낸 아이를 배열의 요소로 넣는다.
// 3. 반복문을 돌려서 작업한다.
// 4. 제한조건 : my_str의 길이를 n으로 나눈 값을 올림한다. 덩이는 그 만큼 나와야 한다.
// 5. my_str의 길이가 n보다 크거나 같다면 배열의 i번째 요소로 들어간다.
// 6. my_str에는 slice로 자르고 남은 부분들을 다시 할당한다. 그리고 제한조건이 걸릴 때까지 반복한다.
// 7. my_str의 길이가 n보다 작다면 my_str을 그대로 마지막 요소에 넣는다.

function solution(my_str, n) {
  const parts = Math.ceil(my_str.length/n)
  const arr = []
  for (let i = 0 ; i < parts ; i++) {
    if (my_str.length >= n) {
      arr[i] = my_str.slice(0, n)
      my_str = my_str.slice(n, my_str.length)
    } else {
      arr[i] = my_str
    }
  }
  return arr
}

console.log(solution(my_str, n))