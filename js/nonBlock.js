/*
manual
f함수의 실행시간에 따라 slice를 manual하게 조정 
*/
const timeSliceManual = (n, f, slice = 100) => {
    let limit = 0, i = 0;
    const runner =_=>{
        while(i < n){
            if(limit++ < slice) f(i++); 
            else {
                limit = 0; 
                requestAnimationFrame(runner); 
                break;
            }
        }
    };
    requestAnimationFrame(runner)
};

//timeSliceManual(19471,console.log)


const timeSliceAuto = (n, f, ms = 3000, i = 0)=>{
    let old = performance.now(), curr;
    const runner =_=> {
        while(i < n) {
            curr = performance.now(); 
            if(curr - old < ms) f(i++); 
            else {
                old = curr; 
                requestAnimationFrame(runner); 
                break;
            }
        }
    };
    requestAnimationFrame(runner); 
};
timeSliceAuto(50,console.log)


const nestedArray = [1,2,3,[4,null,[5,6,7,[8]],undefined],9];

const arrMerge = (arr) => {
    return arr.reduce((p,c) => {
        return p.concat(
            Array.isArray(c) ? arrMerge(c) : c
        )
    },[])
};
console.log(arrMerge(nestedArray))

const backRun = (f, end, ...arg)=>{
    const blob = new Blob([`onmessage =e=>postMessage((${f})(e.data)); `], {type:'text/javascript'});
    
    const url = URL.createObjectURL(blob);
    
    
    const worker = new Worker(url); 
    
    
    worker.onmessage = e =>end(e.data); 
    worker.onerror =e=>end(null); 
    worker.postMessage(arg);
};
backRun(v=> v[0] + v[1],console.log,3,5);