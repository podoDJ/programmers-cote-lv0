// 이진수 더하기 *** 프로그래머스에는 테스트케이스 1개 통과 못함.

// 문제 설명
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때,
// 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// return 값은 이진수를 의미하는 문자열입니다.
// 1 ≤ bin1, bin2의 길이 ≤ 10
// bin1과 bin2는 0과 1로만 이루어져 있습니다.
// bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

// 입출력 예
// bin1	        bin2	    result
// "10"	        "11"	    "101"
// "1001"	  "1111"	  "11000"

// [1] 이진수 -> 십진수
// 1. 문자열을 배열로 변환
// 2. 각 자리를 변경한 새 temp배열 생성..index 0<->끝, 1<->끝-1 ...
// 3. temp배열의 요소를 십진수로 변환
// 4. 각 temp배열의 요소를 더한 dec 반환
// 5. sum = dec1 + dec2

// [2] n : sum이 이진수로 몇자리 숫자인지 확인..
// [3] sum을 이진수로 변환
// 1. a: 반복문 제한을 위한 n-1(그냥 i<n으로 했어도 문제 없었을듯?)
// 2. 이진수 기입(앞에서부터 채워나감)
// 2-1. 반복문
// (1) 반복문으로 sum이 2 ** (a -i)보다 크거나 같은 경우 해당 인덱스에 "1"을 요소로 push
// (1-1) sum을 sum - 2 ** (a -i)로 다음 자릿수에 해당하는 십진수 산출.
// (2) 반복문으로 sum이 2 ** (a -i)보다 작은 경우 해당 인덱스에 "0"을 요소로 push
// 3. join매서드로 배열을 string으로 변환

const bin1 = "10010";
const bin2 = "11111";

function solution(bin1, bin2) {
  const arr1 = bin1.split("");
  const arr2 = bin2.split("");
  const temp1 = [];
  const temp2 = [];
  for (let i = 0; i < arr1.length; i++) {
    temp1.push(arr1[arr1.length - 1 - i]);
    temp1[i] = temp1[i] * 2 ** i;
  }
  for (let i = 0; i < arr2.length; i++) {
    temp2.push(arr2[arr2.length - 1 - i]);
    temp2[i] = temp2[i] * 2 ** i;
  }
  let dec1 = temp1.reduce((acc, cur) => acc + cur);
  let dec2 = temp2.reduce((acc, cur) => acc + cur);
  let sum = dec1 + dec2;

  let n = 0;
  while (2 ** n <= sum) {
    n++;
  }
  let a = n - 1;
  let answerArr = [];
  for (let i = 0; i <= a; i++) {
    if (sum >= 2 ** (a - i)) {
      answerArr.push("1");
      sum = sum - 2 ** (a - i);
    } else {
      answerArr.push("0");
      continue;
    }
  }
  const answerStr = answerArr.join("");
  return answerStr;
}

console.log(solution(bin1, bin2));
