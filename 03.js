// 공 던지기
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
// k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 < numbers의 길이 < 100

// 입출력 예
// numbers	                    k	    result
// [1, 2, 3, 4]	                2       	3
// [1, 2, 3, 4, 5, 6]	          5	        3
// [1, 2, 3]	                  3	        2

// 0. const len = numbers.length로 할당한다.
// 1. k번째 투수가 배열속에 있는가?
// 1-1) 있을 조건 : len >= (k*2)-1 (왜? numbers 요소개수가 홀수일 경우, k번째 투수는 numbers에서 마지막 요소인 경우)
// ex) numbers = [1,2,3,4,5] / k = 3 ==> k번째 투수는 numbers에서 5번째 요소임.
// 1-2) 투수의 인덱스를 찾는다. ==> numbers[(k-1)*2]
// 2) k번째 투수가 없다면 : 배열요소를 반복해서 1-2)를 돌린다.
// 2-1) 몇 번 반복할 것인가? 일단 이 값을 repeat라고 하자.
// Math.ceil((k*2-1)/len)
// k번째 투수는 배열요소를 쭉 나열했을 때 (k*2-1)번째임.
newNumbers      : 1  2  3  4  5  6  1  2  3   4   5    6    1    2    3    4    5    6
k               : 1     2     3     4     5       6         7         8         9   
투수 몇번째?    : 1  2  3  4  5  6  7  8  9  10  11   12   13   14   15   16   17   18
index           : 0  1  2  3  4  5  6  7  8   9  10   11   12   13   14   15   16   17
// 그렇다면? 투수 몇번째(k*2-1)? 는 k번째 투수를 찾기 위한 최소 길이이다.
// 따라서 그 길이를 len으로 나누고, 그 값을 올림하면 필요한 최소 반복횟수(==repeat)를 알 수 있다.
// 가령 위의 경우 k=8번째 투수를 찾기 위해 필요한 repeat의 값은 15/6을 올림한 3이다.
// 2-2) 어떻게 반복하는가?
// 새 배열 newNumbers를 정의하고, 빈배열 []을 할당한다.
// 반복문으로 i가 repeat보다 작을 동안에
// concat 또는 push메서드로 newNumbers를 만든다.
// newNumbers = newNumbers.concat(numbers)  concat : 배열과 값들을 기존 배열에 합쳐서 새 배열을 반환 

// or, newNumbers.push(...numbers)
// 1-2)를 돌린다.

const numbers = [1, 2, 3, 4, 5, 6]
const k = 2

function solution(numbers, k) {
  const len = numbers.length
  if (len >= (k*2)-1) {
    const answer = numbers[(k-1)*2]
    return answer
  } else {
    const repeat = Math.ceil((k*2-1)/len)
    const newNumbers = []
    for (let i = 0 ; i < repeat ; i++) {
      // newNumbers.push(...numbers)
      newNumbers = newNumbers.concat(numbers)
    }
    const answer = newNumbers[(k-1)*2]
    return answer
  }
}

console.log(solution(numbers, k))