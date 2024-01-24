const successCallback = function () {};
const errorCallback = function () {};

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B

/*
1) fetch 메소드가 리턴하는 프로미스 객체를 Promise-A 객체라고 하고,
2) then 메소드가 리턴하는 프로미스 객체를 Promise-B 객체라고 해보자.

fetch 함수 작업이 실패하는 경우와 성공 경우를 나누어 생각해보자

1. fetch함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우 :
 - then 메소드 안의 '첫번째' 콜백인 successCallback이 실행된다.
 2. fetch함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우 :
 - then 메소드 안의 '두번째' 콜백인 errorCallback이 실행된다.

여기서 중요한 점은 Promise-B는 실행된 successCallback 또는 errorCallback에서
무엇을 리턴하느냐에 따라

- 그 상태와 (fulfilled or rejected)
- 결과가 (작업 성공 결과 or 실패 정보)
가 결정 된다는 점이다.
*/

// 1. 실행된 콜백이 어떤 값을 리턴하는 경우 (Promise 객체인 경우, Promise 객체가 아닌경우)

/* a) Promise 객체를 리턴하는 경우 */
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result); })
/* 위 코드에서 json() 메소드는 Promise 객체를 리턴하는 코드이다.
이렇게 콜백에서 Promise 객체를 리턴하는 경우에는 그 콜백을 등록한 then 메소드가
리턴했던 Promise 객체가. '콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이' 
따라 갖게 된다.
즉, 위 코드의 첫번째 then 메소드가 리턴했던 Promise 객체는,
response 객체의 json메소드가 리턴한 Promise객체가 추후에 갖게 되는 상태와 결과를
그대로 따라서 갖게 된다는 뜻이다.*/

/* b) Promise 객체 이외의 값을 리턴하는 경우 */
fetch('https://jsonplaceholder.typicode.com/users')// 인터넷 끊김
  .then((response) => response.json(), (error) => 'Try again!')
  .then((result) => { console.log(result) });
/* 만약 인터넷이 끊긴 상황이라 가정시, 위 첫번째 then은 error매개변수를 가진 
두번째 콜백함수를 실행한다. 두번째 콜백은 'Try again!' 문자열을 리턴한다. 이렇게 되면,
해당 콜백을 등록한 then메소드가 리턴했던 Promise가 fulfilled 상태가 되고,
그 작업 성공 결과로 'Try again!' 문자열을 갖게 된다. */

// 2. 실행된 콜백이 아무 값도 리턴하지 않는 경우
fetch('https://jsonplaceholder.typicode.com/users')// 인터넷 끊김
  .then((response) => response.json(), (error) => { alert('Try again!'); })
  .then((result) => { console.log(result) });
/* 만약 두번째 콜백이 무언가 리턴하는게 아니라 alert함수만 실행하고 만다고 가정하면,
결과적으로 이 콜백은 undefined를 리턴한 거라 간주한다. (alert메소드의 값은 원래 undefined이다)
그럼 위 1번 b의 경우처럼 undefined를 값으로 간주해 then메소드가 리턴한 Promise객체는
fulfilled 상태가 되고 그 작업 성공 결과로 undefined를 가진다. */


// 3. 실행된 콜백 내부에서 에러가 발생했을 때
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        add(1, 2); // ReferenceError 발생
  });
// 선언하지 않은 함수를 콜백에서 사용해 에러를 뿜거나
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
        throw new Error('failed'); 
  });
// 인위적으로 throw를 쓰거나
/* 이렇게 콜백 도중 에러가 나오면 then 메소드가 리턴했던 Promise 객체는 rejected 
상태가 되고 작업 실패 정보로 해당 에러 객체를 갖게 된다. */


// 4. 아무런 콜백도 실행되지 않을 때
fetch('https://www.google.com') // Promise-1 // 인터넷 끊김
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
/* fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되므로,
첫번째 then 메소드의 두번째 콜백이 실행되어야 한다. 하지만 없다. 그럼 아무거또 실행하지않는다
그럼 두번째 then은 나가리가 되는걸까? 아니다. Promise-1이 rejected이므로 그걸 
첫번째 then이 리턴한 Promise-2 객체도 rejected와 작업실패정보를 그대로 물려받는다.

위에중 한놈이 실패하면 그 뒤에 따라오는 걸 나머지 새끼들도 다 물려받는다고 보면된다.