
const arr = [1,2,3,4]
const ref = [...arr]
const arrRef = [...arr];

// while(ref.length > 0) {
//     console.log('while', ref)
//     ref.pop()
// }

// for (let i=arr.length; i>0; i--) {
//     console.log("for", arr)
//     arr.pop()
    
// }

const Iterator = class {
    [Symbol.iterator](){
        return this
    }
    constructor(arr) {
        this.data = arr
    }
    next() {
        return {
            done : this.data.length === 0,
            value : this.data.pop()
        }
    }
}
const iterator = new Iterator(arrRef);


// 사용자 반복처리기
// 직접 iterator 반복처리기를 구현
// 수동으로 소비하는 행위
const loops = (iter, f) => {
    if (typeof iter[Symbol.iterator == 'function']) {
        iter = iter[Symbol.iterator]()
    }
    if (typeof iter.next !== 'function') return;

    while(true) {
        const v = iter.next();
        if(v.done) return;
        f(v.value)
    }
}
// loops(iterator, console.log)

// ES6 : 루프는 자기가 상태를 관리 하기 때문에 여러 소비형태를 대응한다!!!!!
const [a, ...b] = iterator;
console.log(a,b)
console.log(typeof [][Symbol.iterator])

// rest Parameter(묶어서 배열로)
// spread(iterator 객체 해체)와 다른점은 장소
// rest parametor + spread = apply/call
const foo = (...arg) => {
    console.log(arg)
}
foo(1,2,3,4)


// for of 
// value of iterator
for (const v of iterator) {
    console.log('forOf',v)
}

