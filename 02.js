// 7의 개수
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다.
// 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
// 입출력 예
// array	result
// [7, 77, 17]	4

const array = [7, 77, 17];

function solution(array) {
  // 배열 문자열로 변형
  const str = array.join("");
  // 이하는 문자열의 특정 문자 개수 세는 함수
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") {
      ++count;
    }
  }
  return count
}
console.log(solution(array));
