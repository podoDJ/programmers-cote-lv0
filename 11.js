// 치킨 쿠폰
// 문제 설명
// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// chicken은 정수입니다.
// 0 ≤ chicken ≤ 1,000,000

// 입출력 예
// chicken	result
// 100	      11
// 1,081	    120

// 입출력 예 #2

// 1081마리를 주문하면 쿠폰이 1081장 발급되므로 서비스 치킨 108마리를 주문할 수 있습니다. 
// 그리고 쿠폰이 1장 남습니다.
// 0. 치킨을 chicken 마리 시킨다. 그러면 쿠폰의 개수 coupon이 chicken만큼 발생한다.
// 1. coupon을 10으로 나눈다. 그 몫은 치킨에 +된다.
// 2. coupon을 10으로 나눈 나머지와 그 몫의 합이 새로운 쿠폰개수(counpon = parseInt(coupon/10)+(coupon%10))가 된다.
// 3. 새로운 쿠폰개수를 10으로 나눈다. 그 몫은 치킨에 +된다.
// 4. 새로운 쿠폰개수를 10으로 나눈 나머지와 그 몫의 합이 새로운 쿠폰개수가 된다.
// 5. 3~4가 반복된다. 언제까지 반복시킬 것인가?
// 6. 새로운 쿠폰개수가 10미만일 경우까지 반복한다. 

let chicken = 1081

function solution(chicken) {
  let coupon = chicken
  let serviceChicken = 0
  while (coupon >= 10) { 
  
  serviceChicken += parseInt(coupon/10)
  coupon = parseInt(coupon/10) + coupon%10
  }
  return serviceChicken;
}

console.log(solution(chicken))