
const sum = (n) => {
    return n + (n > 1 ? sum(n-1) : 0)
}

// 메모리에 대한 요구사항을 정리해서 다음 번 콜에다가 값으로 넘겨주는게 핵심
// tail recursive를 지원하는 브라우저는 현재 webkit Safari
const sum_1 = (n, prev = 0) => {
    prev += n;
    return n + (n > 1 ? sum(n-1, prev) : prev)
}

// 재귀함수를 루프로 바꾸는 방법
// 재귀함수를 테일리커시브로 먼저 바꾸고 루프로 바꿈
const sum_2 = v => {
    let prev = 0;
    while (v > 1) {
        prev += v;
        v--;
    }
    return prev;
}
console.log(sum_1(3))
