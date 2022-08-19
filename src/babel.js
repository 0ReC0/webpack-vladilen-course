async function start(){
  return await Promise.resolve('async is working');
}
start().then(console.log);

// class Util {
//   static id = Date.now();
// }
//
// console.log(Util.id)

// @annotation
// class MyClass {}
//
// function annotation(target) {
//   target.annotated = true;
// }
// console.log(MyClass.annotated)

// const unused = 100;
// console.log(unused);

import('lodash').then(({default: _})=> {
  console.log("lodash", _.random(0, 42, true))
})
