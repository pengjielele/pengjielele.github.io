/* test 1*/

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate');
// })

// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout

/* test2 */

// var fs = require('fs')

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0);
//     setImmediate(() => {
//         console.log('immediate');
//     });
// });

// 因为 readFile 的回调在 poll 中执行
// 发现有 setImmediate ，所以会立即跳到 check 阶段执行回调
// 再去 timer 阶段执行 setTimeout
// 所以以上输出一定是 setImmediate，setTimeout

/* test3 */
// setTimeout(()=>{
//     console.log('timer1')

//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)

// setTimeout(()=>{
//     console.log('timer2')

//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)

// 以上代码在浏览器和 node 中打印情况是不同的
// 浏览器中打印 timer1, promise1, timer2, promise2
// node 中打印 timer1, timer2, promise1, promise2（测试中node中也打印 timer1, promise1, timer2, promise2）

/* test4 */
setTimeout(() => {
  console.log("timer1");

  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);

process.nextTick(() => {
  console.log("nextTick");
});
// nextTick, timer1, promise1