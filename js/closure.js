// 자유변수와 클로저
// 자유변수는 루틴안에 있는 지역변수나 인자도 아니고 전역변수도 아닌데 루틴이 사용할수 있는 변수
// 자유변수를 인식할수 있는 공간을 클로저라고 함(함수의 다른 이름이기도 함. 자유변수를 사용할수 있는 공간이라는 특징만 잘라냈을때 그 함수의 블록공간을 클로저라고 함);
// 클로저는 상대적인 개념.. 루틴 바깥에 있는 애들은 죄다 자유 변수임
// 자유변수를 쓰는 이유는 이미 제공하고 있는 기능을 제공받기 위해서

function solution(A) {
    
    
    let num = 0;
    return A.reduce((p=0,v) => {
        const len = v.toString().length;
        if (len === 2 || v < 0) {
            return p + v
        }
    },0)
}


console.log(solution([1, 1000,10, -80, 91]))

function phone(A) {
    let removedStr = A.replace(/\s/g,'').replace(/\-/g,'');
    const gen = removedStr.replace(/(...?)(?!.?$)/g, '$1-');
    
    return gen
}
// 004 448 555 583 6
console.log(phone("00-44  48 2335555 8361"))




