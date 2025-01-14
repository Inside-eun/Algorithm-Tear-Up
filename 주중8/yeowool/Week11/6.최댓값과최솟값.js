// [PGS] 최댓값과 최솟값 / leve2
// 난이도 :  level 2
// 풀이시간 : 
// 점수 : 1

/*
문제
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
입출력 예
s	return
"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1"
*/
  

/*
< 의사코드 >
1. 공백 기준으로 split한다
2. 탬플릿 리터럴을 활용하여 return하는데 split한 배열을 Math를 활용해서
최대값과 최솟값을 구한다.
*/

function solution(s) {
    let arr = s.split(" ")
    return `${Math.min(...arr)} ${Math.max(...arr)}`
}

/*
테스트 1 〉	통과 (0.07ms, 33.6MB)
테스트 2 〉	통과 (0.08ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.10ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.08ms, 33.5MB)
테스트 11 〉	통과 (0.08ms, 33.5MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
*/