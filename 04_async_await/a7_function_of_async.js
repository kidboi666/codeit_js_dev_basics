// 1) function declaration (함수 선언식)
async function func1(a, b) {
  return a + b;
}

// 2.1) function expression(named) [함수 표현식]
const func2 = async function add(a, b) {
  return a + b;
};

// 2.2) function expression(anonymous) [익명 함수 표현식] 
const func3 = async function (a, b) {
  return a + b;
}

// 3) arrow function(화살표 함수)
const func4 = async (a, b) => { return a + b; }

// 3.2) arrow function(shortened) [화살표 함수 축약형]
const func5 = async (a, b) => a + b;



/* IIFE 즉시 실행 함수의 경우 */

// 1) 함수 선언식
( async function print(sentence) {
  console.log(sentence);
  return sentence;
}('i love javascript!') );

// 2) 익명 함수
( async function (a, b) {
  return a + b;
}(1, 2) );

// 3) 화살표 함수
( async (a, b) => { return a + b; } )(1, 2);


// 4) 화살표 함수 축약형
( async (a, b) => a + b)(1, 2);