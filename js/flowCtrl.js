/*
 *
 * SYNC + BLOCK
 * normal API, legacy API
 */
// const sum = n => {
//     let sum = 0;
//     for (let i=0; i<=n; i++) sum+= i;
//     return sum;
// }
// console.log(sum(100))
 


/*
 *
 * SYNC + NON BLOCK
 * old API
 * 
 */
// const sum = n => {
//     const result = {isComplete : false};
//     requestAnimationFrame(_=>{
//         let sum=0;
//         for(let i=0; i<=n; i++) sum+=i;
//         result.isComplete = true;
//         result.value = sum;
//     })
//     return result;
// }
// const result = sum(100)
// while(!result.isComplete);
// console.log(result.value)


/**
 * ASYNC + BLOCK
 * TRAP!!!
 * 
 */

// const sum = (n,callback) => {
//     let sum = 0;
//     for (let i=0; i<=n; i++) sum+= i;
//     return callback(sum);
// }
// sum(100,console.log)
// console.log(123)



/**
 * ASYNC + NON-BLOCK
 * modern API
 * 
 */
//  const sum = (n,callback) => {
//      requestAnimationFrame(_=>{
//         let sum = 0;
//         //fix timeSlice
//         for (let i=0; i<=n; i++) sum+= i;
//         callback(sum)
//      })
//  }
// sum(10,console.log)
// console.log(123)
// 123 -> 5