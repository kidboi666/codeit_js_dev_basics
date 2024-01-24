fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    console.log(result); 
    throw new Error('test');
  })
  .catch((error) => { console.log(error); }); // 보통 catch 함수는 맨마지막에 쓴다.


/* catch문은 사실 then(undefined, (error) => ...f ) 와 같이 then의 첫번째 파라미터가
undefined인것 과 같다. */



fetch('https://jsonplaceholder.typicode.com/users') // 리스폰스 유효
  .then((response) => response.json()) // 자바스크립트 객체로 Deserialize화 함 // static: fulfilled
  .then((result) => { // Deserialize화한 값을 넘겨받았으나 무시하고 에러 객체 호출 // static: rejected
    throw new Error('too long');
  })
  .then(undefined, (error) => { // 두번째 콜백함수를 실행, 에러네임 에러메시지 출력, 또 다른 에러 객체 호출 // static: rejected
    console.log(`${error.name}: ${error.message}`);
    throw new Error('no required field');
  })
  .catch((error) => { // 에러네임, 에러메시지 출력. Promise 객체가 아닌 원시값 2를 반환 // static: fulfilled
    console.log(`${error.name}: ${error.message}`);
    return 2;
  })
  .then((number) => { // 파라미터로 받은 숫자2를 출력했으나 반환한 값은 없으므로 undefined 반환 // static: fulfilled
    console.log(number);
  });