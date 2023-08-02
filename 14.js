// 문제 설명
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
// 같은 식이라면 가장 짧은 수식을 return 합니다.



// 제한사항
// 0 < polynomial에 있는 수 < 100
// polynomial에 변수는 'x'만 존재합니다.
// polynomial은 양의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 항과 연산기호 사이에는 항상 공백이 존재합니다.
// 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
// 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
// " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
// 0으로 시작하는 수는 없습니다.
// (중요)문자와 숫자 사이의 곱하기는 생략합니다.
// polynomial에는 일차 항과 상수항만 존재합니다.
// (중요)계수 1은 생략합니다.
// (중요)결괏값에 상수항은 마지막에 둡니다.
// 0 < polynomial의 길이 < 50

// 입출력 예
// polynomial	    result
// "3x + 7 + x"	  "4x + 7"
// "x + x + x"	   "3x"

// 0. 생각을 해보자. 일단 인자가 string이다.
// 1. 제한사항을 보면 -는 존재하지 않는다. 곱셈은 있는데, 나눗셈은 확인되지 않는다.
// 2. 따라서 split의 요소로 +를 매개로 한다.
// 3. filter를 걸어서 1차항 배열과 상수항 배열로 구분한다.
// 4. map함수를 돌리던, reducer를 돌리던 합을 구한다.
// 5. 그 값을 string으로 엉겨 붙인다.

// 생각을 다시 해보자. 일단 내가 했던 2가지 실수와 다시 고려할 점이 있는데,
// 실수1 : 로직상에서는 계수가 1인 경우를 고려했으면서 정작 리턴때는 고려하지 않았다.
// 실수2 : 계수가 10이상인 경우를 생각 안했다....그래서 그냥 coefficitenArr에서 return item[0]을 해버렸다...
// 고려할 점 : 계수가 0인 경우도 고려해야 한단다...그러면 상수가 0일때도 고려해야겠지?? 그때는 빈값이겠지??
// 그러니까, 계수 or 상수 둘 중 하나만 0인 경우는 빈 값으로 처리해줘야하고,
// 둘 다 0이면 0을 리턴해야 하나 보다.

  //2. 1차항 배열과 상수항 배열 나누기
  // const linearArr = termsArr.filter((item) => item.includes("x"))
  // const constantArr = termsArr.filter((item) => !item.includes("x"))
const polynomial = "7 + 4"
function solution(polynomial) {
  let answer = ""
  let termsArr
  //1. 일단 +가 있는지 없는지부터 보자. 없으면 그대로 뱉어주면 된다.
  if (polynomial.includes("+")) {
    termsArr = polynomial.split(" + ")
  } else {
    answer = polynomial
    return answer;
  }
  //2. 각각 1차항 배열과 상수항 배열로 나누기.
  const linearArr = termsArr.filter((item) => item.includes("x"))
  const constantArr = termsArr.filter((item) => !item.includes("x"))

  // 3. 1차항 배열에서 계수만 더하기.
  const coefficeintArr = linearArr.map((item) => {
    //3-1 그냥 x인 녀석들
    if (item.length === 1) {
      return 1
    } else {
      // return Number(item.slice(0, -1))
      return (item.slice(0, -1))
    }
  })
  // 4. 1차항 배열에서 계수 더하기
  // 초기값을 0으로 설정해주자.
  // 만약 reduce가 map을 돌릴 배열 요소가 한 .(런타임)
  const coefficientSum = coefficeintArr.reduce((acc, cur) => +acc + +cur,0)
  const coefficient = (coefficientSum === 1) ? "" : coefficientSum
  // 5. 상수항 배열에서 상수 더하기
  // const constant = (constantArr.length === 0 ) ? "" : constantArr.reduce((acc, cur) => Number(acc) + Number(cur))
  const constant = (constantArr.length === 0 ) ? "" : constantArr.reduce((acc, cur) => (+acc) + (+cur),0)

  if (constant === "") {
    if (coefficient === "") {
      answer = "x"
      return answer
    }
    else {
      answer = `${coefficient}x` 
      return answer
    }
  } else {
    if (coefficient === "") {
      answer = `x + ${constant}`
      return answer
    }
    //상수항끼리의 합(=== 계수가 0인 케이스)
    else if (coefficient === 0) {
      answer = `${constant}`
      return answer
    }  
    else {
      answer = `${coefficient}x + ${constant}`
      return answer
    }
  }
  return answer
}

console.log(solution(polynomial))

/*
아름다운 답변
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}
*/