fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result); });


/*   -------------- fetch 구문 ----------------- */
// asynchronous (비동기)
async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}
fetchAndPrint();
/* 함수 앞에 async는 비동기의 약자로 이 함수안에는 비동기 적으로 실행될 부분이
들어있다는 뜻이다 혹은
이 함수 안에 코드 중에서 Promise 객체를 리턴하는 코드가 있다는 뜻이다.*/
/* await은 뒤에 코드가 fulfilled 상태 혹은 rejected 상태가 될 때 까지
기다려 주고 fulfilled 상태가 되면 그 작업 성공 결과를 추출해서 리턴해준다.*/
