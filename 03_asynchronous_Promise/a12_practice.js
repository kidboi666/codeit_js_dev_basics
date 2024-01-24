function pick(menus) {
  console.log('Pick random menu!'); // 3) 화면 출력
  const p = new Promise((resolve, reject) => { // Promise 생성자로 Promisify 문법 사용
    if (menus.length === 0) { // if메뉴가없다면
      reject(new Error('Need Candidates')); // 1)에서 호출한 함수의 리턴값으로 Promise 객체의 static: rejected상태와 에러 정보를 변수 p에 할당
    } else { // if메뉴가없지 않다면
      const randomIndex = Math.floor(Math.random() * menus.length); 
      const selectedMenu = menus[randomIndex]; // 난수로 메뉴 하나 선정
      resolve(selectedMenu); // 1)에서 호출한 함수의 리턴값으로 Promise 객체의 static: fulfilled상태와 결과 값으로 선정한 메뉴를 변수 p에 할당
    }
  });
  return p; // 변수 p 반환
}

function getRandomMenu() { 
  return fetch('https://learn.codeit.kr/api/menus') // 2) 함수의 리턴값으로 fetch함수 호출
    .then((response) => response.json()) // then 비동기 등록
    .then((result) => { // 메뉴가 들어있는 리스폰스 객체를 pick 함수의 파라미터로 호출하는 비동기 등록
      const menus = result; 
      return pick(menus); // ! random pick function  4)pick함수에서 반환한 변수 p의 할당값이 그대로 다시 반환
    });
}

getRandomMenu() // 1)함수호출 ----- 5) getRandomMenu함수에서 반환한 변수 p의 할당값이 파라미터로 들어와 결과적으로 static: fulfilled, 선정된 메뉴값이 들어옴
  .then((menu) => { // fulfilled
    console.log(`Today's lunch is ${menu.name} ~`);
  })
  .catch((error) => { // pass (getRandomMenu함수에 fetch 리스폰스가 문제가 없다면)
    console.log(error.message);
  })
  .finally(() => { // 상관없이 실행
    console.log('Random Menu candidates change everyday');
  });