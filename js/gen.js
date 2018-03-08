
/* 제네레이터 블록 브레이킹
 * 핵심로직 분배
 * 지역변수를 사용함에 의한 단순함
 */
const loop = function* (n,f,slice=3) {
    
    let i=0, limit=0;
    while(i<n) {
        if(limit++ < slice) f(i++);
        else {
            limit = 0;
            yield;
        }
    }
}
const executor = iter => {
    const runner =_=> {
        
        if(!iter.done) {
            iter.next();
            requestAnimationFrame(runner)
        }
        
    }
    requestAnimationFrame(runner)
}
executor(loop(10,console.log))

