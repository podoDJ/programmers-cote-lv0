// 2차원으로 만들기
// 문제 설명
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// 제한사항
// num_list의 길이는 n의 배 수개입니다.
// 0 ≤ num_list의 길이 ≤ 150
// 2 ≤ n < num_list의 길이

// 입출력 예
// num_list	                            n	          result
// [1, 2, 3, 4, 5, 6, 7, 8]	            2	          [[1, 2], [3, 4], [5, 6], [7, 8]]
// [100, 95, 2, 4, 5, 6, 18, 33, 948]	  3	          [[100, 95, 2], [4, 5, 6], [18, 33, 948]]

// 로직 구상
// 1. slice 메서드로 앞에서부터 n개씩 꺼내어 배열로 만듦
// 2. num_list를 앞에서 n개씩 자르고 남은 배열로 다시 정의.
// 3. 반복문 돌림
// // 필요한 것
// 3-1. 몇 번 반복할 것인가? num_list의 길이는 n의 배수이므로 num_list를 n으로 나눈 값과 관계있음.
// 3-2. 가령 10개를 2개씩 나눈다고 했을 때 5덩이가 나옴.
// 3-3. for (let i = 0 ;) 반복문을 돌린다고 했을 때, 나누는 횟수는 0번부터 4번까지여야 5번이 됨.
// 3-4. 따라서 반복문 제한 조건은 i < num_list.length / n

// 2-1. 자르고 남은 배열을 다시 정의해야 함.
// 2-2. 배열은 불변성 유지가 안 되므로 const로 선언했을지라도 자신을 재할당 가능
// 2-3. 처음에는 temp=[]를 선언하여 answer.push 전에 temp = num_list.slice(0,n), answer.push(temp)를 했는데 그럴 필요가 없었음.

const num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
const n = 3 

function solution(num_list, n) {
  const limit = num_list.length / n
  let answer = []
  for (let i = 0 ; i < limit ; i++) {
    answer.push(num_list.slice(0,n))
    num_list = num_list.slice(n, n*(limit - i))
  }
  return answer
}

console.log(solution(num_list, n))