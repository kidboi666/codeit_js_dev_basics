// 비동기 실행 함수들
/*
1. setTimeout(콜백, 시간)
2. setInterval(콜백, 시간)
3. addEventListener(이벤트이름, 콜백)

4. */ 
fetch('https://www.google.com')
  .then((response) => response.text()) // fetch 함수가 리턴하는 객체의 then 메소드를 사용해서 콜백을 등록
  .then((result) => { console.log(result); });

/* fetch 함수는 Promise 객체라는 것을 리턴하고, 이 Promise 객체는
비동기 실행을 지원하는 또 다른 종류의 문법에 해당된다. */