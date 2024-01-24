fetch('https://www.error.www') // 없는 주소 , 호출된 Promise 객체는 rejected상태로 에러 정보가 담긴 값을 다음 then의 두번째 콜백함수의 파라미터로 넘김
  .then((response) => response.text()) // rejected상태를 받았으므로 두번째 콜백함수를 실행해야 하나 없으므로 패스
  .then((result) => { console.log(result); }) // 같은 이유로 패스
  .catch((error) => { console.log('Hello'); throw new Error('test'); }) // 에러 정보를 받았으나 쓰이지않음, 'Hello'출력, 인위적인 에러 객체 호출 (rejected)
  .then((result) => { console.log(result); }) // 패스
  .then(undefined, (error) => { }) // 두번째 콜백함수가 있으나 아무값도 반환하지 않으므로 undefined 값을 반환, fulfilled 상태로 다음 첫번째 콜백함수에 undefined넘겨줌
  .catch((error) => { console.log('JS'); }) // 첫번째 콜백함수가 없으므로 패스
  .then((result) => { console.log(result); }) // undefined 출력, 그 후 다시 undefined 반환
  .finally(() => { console.log('final'); }); // finally 문이므로 이전 Promise 객체에서 받은 값은 무시하고 'final' 출력