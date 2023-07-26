// 로그인 성공?
// 문제 설명
// 머쓱이는 프로그래머스에 로그인하려고 합니다. 
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 
// 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 
// 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

// 제한사항
// 회원들의 아이디는 문자열입니다.
// 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
// 회원들의 패스워드는 숫자로 구성된 문자열입니다.
// 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
// id_pw의 길이는 2입니다.
// id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
// 1 ≤ 아이디의 길이 ≤ 15
// 1 ≤ 비밀번호의 길이 ≤ 6
// 1 ≤ db의 길이 ≤ 10
// db의 원소의 길이는 2입니다.

// 입출력 예
// id_pw	                                              db	                                                           result
// ["meosseugi", "1234"]	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]	                              "login"
// ["programmer01", "15789"]	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]	        "wrong pw"
// ["rabbit04", "98761"]	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]	                      "fail"

// 1. forEach를 사용한다.
// 2. 각 idPw 배열에서 id는 0번, pw는 1번 인덱스를 가진다.
// 3. foEach함수를 돌려 item[0]이 id_pw[0]과 일치하는 녀석을 찾는다.
// 4. if 3번이 true면, 

// db에 맞는 아이디와 비밀번호가 들어가 있든 아이디는 맞지만 틀린 비밀번호가 들어가있든 db의 마지막 원소에 의해 answer의 값이 정해져서 틀리게 반환됩니다.
// let id_pw = ["rabbit04", "98761"]
// let db = [["jaja11", "98761"], ["rabbit04", "98761"], ["rabbit00", "111333"]]
// function solution(id_pw, db) {
//   let result = "fail"
//   db.forEach((item) => {
//     if (item[0] !== id_pw[0]) {
//       result = "fail"
//     } else {
//       if(item[1] === id_pw[1]) {
//         result = "login"
//       } else {
//         result = "wrong pw"
//       }
//     }
//   })
//   return result
// }

// 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.

let id_pw = ["rabbit04", "98761"]
let db = [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]
function solution(id_pw, db) {
  let result = "fail"
  let db_arr = [].concat(...db)
  const id_check = db_arr.indexOf(id_pw[0])
  //중요 : indexOf는 일치하는 값을 찾지 못할 경우 -1을 return한다.
  if (id_check < 0) {
    result = "fail"
  } else {
    if(id_pw[1] === db_arr[id_check+1]) {
      result = "login"
    } else {
      result = "wrong pw"
    }
  }
  return result
}

console.log(solution(id_pw, db))