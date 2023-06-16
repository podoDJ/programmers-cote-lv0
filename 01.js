//문자열 s가 매개변수로 주어집니다. 
//s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
//한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
// 예 : s="hello" result="eho"
/*
const s = "hello"

function solution(s) {
  if (s === "") {
    return answer
  } else
  for (i = 0 ; i < s.length ; i++) {
    for (j = i+1 ; j < s.length -1 ; j++) {
      if (s[i] === s[j]) { 
        let a = s[i]
        s = s.replace(a,'')
      }
    }
  }
  return s;
}

console.log(solution(s))
*/

// 이제 j--의 작동 방식을 확인해보겠습니다. 
// 첫 번째 "l"이 제거되면서 문자열은 "helo"가 됩니다. 
// 이후 j--가 실행됩니다. 
// j--에 의해 j의 값이 1 감소하면서 현재 인덱스인 "e"를 가리킵니다. 
// 그 다음 반복에서 "e"와 "o"를 비교하게 됩니다.

// 이런 식으로 j--를 사용하여 현재 인덱스를 감소시켜가며 중복된 문자를 모두 제거하는 과정이 반복됩니다. 
// 이렇게 함으로써 중복된 문자를 모두 제거할 수 있습니다.
// const s = "abcabcadc"

// function solution(s) {
//   if (s === "") {
//     return ""
//   } else
//   for (let i = 0 ; i < s.length ; i++) {
//     for (let j = i+1 ; j < s.length ; j++) {
//       if (s[i] === s[j]) { 
//         const repeatedChar = s[i]
//         s = s.split(repeatedChar).join("")
//         j--
//       }
//     }
//   }
//   const arr = s.split("") // 버블정렬함수는 array로만 가능함. 왜냐하면 str은 불변성이 있기 때문.
//   for (let i = 0 ; i < arr.length - 1 ; i++) {
//     for (let j = 0 ; j < arr.length -1 - i ; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//     return arr.join("");
//   }
// }

// console.log(solution(s))

/*
1. 문자열 s를 선언하고, 함수 solution을 정의합니다.
2. charCount라는 빈 객체를 선언합니다. 이 객체는 문자의 등장 횟수를 저장하기 위해 사용됩니다.
3. 첫 번째 반복문을 사용하여 문자열을 순회하면서 각 문자의 등장 횟수를 charCount 객체에 저장합니다. 이때 중복된 문자가 등장할 경우 해당 문자의 등장 횟수가 증가됩니다.
4. result라는 빈 문자열을 선언합니다. 이 변수는 한 번만 등장하는 문자를 저장하기 위해 사용됩니다.
5. 두 번째 반복문을 사용하여 문자열을 순회하면서 각 문자에 대해 다음 작업을 수행합니다.
6. 만약 해당 문자의 등장 횟수가 1이라면 (한 번만 등장하는 문자라면) result에 해당 문자를 추가합니다.
7. 그렇지 않은 경우 (중복된 문자라면) charCount 객체의 해당 문자의 등장 횟수를 0으로 설정하여 중복 문자를 제거합니다.
8. result에는 한 번만 등장하는 문자들이 사전 순으로 저장되어 있습니다.
9. result를 배열로 변환한 후, 버블 정렬을 사용하여 배열을 사전 순으로 정렬합니다.
10. 최종적으로 정렬된 배열을 문자열로 변환하여 반환합니다.
11. console.log를 사용하여 결과를 출력합니다.
*/


const s = "abcabcadc";

function solution(s) {
  const charCount = {};
  // 문자 등장 횟수 카운트
  for (let i = 0 ; i < s.length ; i++) {
    const char = s[i]
    charCount[char] = (charCount[char] || 0) + 1
  }

  let result = ""

  // 중복 문자 제거 및 한 번만 등장하는 문제를 사전 순으로 정렬하여 결과에 추가
  for (let i = 0 ; i < s.length ; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      result += char
    } else {
      charCount[char] = 0
    }
  }
  const arr = result.split("") // 버블정렬함수는 array로만 가능함. 왜냐하면 str은 불변성이 있기 때문.
  for (let i = 0 ; i < arr.length - 1 ; i++) {
    for (let j = 0 ; j < arr.length -1 - i ; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr.join("")
}
console.log(solution(s))