// fulfilled 상태의 Promise 객체 만들기
const p = Promise.resolve('success');
/* 
fulfilled 상태이면서 작업 성공 결과로 문자열 'success'를 가진 Promise 객체를 만들 수 있다.
*/


//rejected 상태의 Promise 객체 만들기
const p2 = Promise.reject(new Error('fail'));
/*
rejected 상태이면서 작업 실패 정보로 'fail' 이라는 메시지를 가진 Error객체를 가진
Promise 객체를 만들 수 있다.
*/


const p3 = new Promise((resolve, reject) => {
 // resolve('success');

 // reject(new Error('fail'));
});



/*
어떤 비동기 작업을 처리할 필요가 있다면 new 생성자와 executor 함수를 사용해서
Promise 객체를 만들어야 하지만, 그렇지 않고 바로 상태가 이미 결정된 Promise 객체를
만들고 싶을 때는 이 resolve 또는 reject 메소드를 이용한다.
*/



/*
만약 어떤 함수가 어떤 상황이든 항상 Promise 객체를 리턴하는 것으로 통일하고 싶은 경우에는
resolve나 reject 메소드를 유용하게 사용할 수 있다.
*/
function doSomething(a, b) {
  // ~
  if (problem) {
    return Promise.reject(new Error('Failed due to..')); // 문제가 생겨도 Promise 객체를 리턴해준다
  } else {
    return fetch('https://~')
  }
}


/* 주의점. Promise 객체의 상태가 정해진 시점과는 상관없이 몇 번이든 then 메소드를 붙여서
해당 객체의 결과를 가져올 수 있다. */
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('success'); }, 2000); // 2초 후에 fulfilled 상태가 됨
});

p4.then((result) => { console.log(result); }); // pending 상태일때 콜백 등록
setTimeout(() => {
  p4.then((result) => { 
    console.log(result); 
  }); 
}, 5000) // Promise 객체가 fulfilled 상태가 된지 3초후 콜백 등록

/* Promise 객체는 항상 결과를 줄 수 있는 공급자이고 그것의 then 메소드는 그 결과를
소비하는 콜백인 소비자를 설정하는 메소드라는 사실을 잘 기억하자.
시점과는 전혀 연관이 없다! */