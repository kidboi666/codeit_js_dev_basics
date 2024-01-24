fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('exit'); });

/* 그전에 Promise객체의 state가 fulfilled든 rejected든 상관없이 꼭 실행하고 
싶은 콜백 함수는 finally를 쓰면 된다. 보통은 맨뒤에 씀.
작업 결과에 대한 값을 필요로 하지 않기 때문에 파라미터가 필요없다.
*/

fetch('https://jsonplaceholder.typicode.com.../users')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => { 
    console.log(error);
    throw new Error('from catch method');
  })
  .finally(() => { console.log('exit'); });