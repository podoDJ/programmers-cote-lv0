// 직사각형 넓이 구하기
// 문제 설명
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// dots의 길이 = 4
// dots의 원소의 길이 = 2
// -256 < dots[i]의 원소 < 256
// 잘못된 입력은 주어지지 않습니다.

// 입출력 예
// dots	                                result
// [[1, 1], [2, 1], [2, 2], [1, 2]]	      1
// [[-1, -1], [1, 1], [1, -1], [-1, 1]]	  4

const dots = [[-1, -1], [1, 1], [1, -1], [-1, 1]]

// 로직
// 생각해봐라. 한 점을 찍었을 때, x좌표가 같은 점은 딱 한개 뿐이다. y좌표도 마찬가지다.
// (1)dots[0]을 집는다.
// (2)dots[0][0]과 dots[0][1]비교한다. 다르면 뺀다.
// (3)dots[0][0]과 dots[0][1]비교한다. 같으면 continue한다.
// (4)y길이도 같은 방식으로 구한다.
// (5)s = x길이*y길이
// (6)s가 음수면 *-1을 한다.

function solution(dots) {
  let x = 0
  let y = 0
  for (let i = 0 ; i < 4 ; i++) {
    if (dots[i][0] !== dots[i+1][0]) {
      x = dots[i][0] - dots[i+1][0]
      break;
    } else {
      continue;
    } 
  }
  for (let i = 0 ; i < 4 ; i++) {
    if (dots[i][1] !== dots[i+1][1]) {
      y = dots[i][1] - dots[i+1][1]
      break;
    } else {
      continue;
    } 
  }
  let s =x * y
  if (s<0) {
    s = s * (-1)
  } else {
    return s
  }
  return s
}

console.log(solution(dots))
// console.log(typeof dots[0][0])