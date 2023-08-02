// OX퀴즈
// 문제 설명
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 
// 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
// 1 ≤ quiz의 길이 ≤ 10
// X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 
// 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
// X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
// -10,000 ≤ X, Y ≤ 10,000
// -20,000 ≤ Z ≤ 20,000
// [연산자]는 + 와 - 중 하나입니다.

// quiz	                                                            result
// ["3 - 4 = -3", "5 + 6 = 11"]	                                  ["X", "O"]
// ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	    ["O", "O", "X", "O"]

// 1. ,로 배열을 나눠야 한다. map을 돌리던 forEach를 돌리던.
// 2. 

const quiz = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]

function solution(quiz) {
  let answer = []
  for (let i = 0 ; i < quiz.length ; i++) {
    let arr = quiz[i]
    let [left, right] = arr.split(' = ')
    const new_right = Number(right)
    //(1)첫 숫자가 음수일 때
    if (left[0] === "-") {
      const new_left = left.replace('-', '')
      // (1-1)뒤의 숫자가 덧셈이면
      if (new_left.includes('+')) {
        const [a, b] = new_left.split(' + ')
        answer.push((b-a) === new_right ? "O" : "X")
        // answer.push((b-a) === new_right ? "O" : "X")
      }
      // (1-2)뒤의 숫자가 뺄셈이면
      else {
        const [a, b] = new_left.split(' - ')
        answer.push((+a + +b)* -1 === new_right ? "O" : "X")
      }
    }
    else {
      if (left.includes('+')) {
        const [a, b] = left.split(' + ')
        answer.push((+a + +b) === new_right ? "O" : "X")
      }
      else {
        const [a, b] = left.split(' - ')
        answer.push((a-b) === new_right ? "O" : "X")
      }
    }
  }
  return answer
}

console.log(solution(quiz))

//구조분해 할당 쓰는 모법답안

function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        sum === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}