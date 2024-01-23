fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => console.log(result)); // :method: GET , :path: /api/members

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),  // 자바스크립트 객체를 String타입의 JSON데이터로
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });



/* POST 리퀘스트를 보낼 때는 GET 리퀘스트를 보낼 때와 달리 fetch 함수의 두 번째 파라미터에
옵션 객체를 넣어줘야 한다. 이 옵션 객체엔 메소드 값과 바디의 내용을 설정한다 */

/* json을 자바스크립트로 불러올때 parse를 이용해 자바스크립트 객체로 변환해야 자바스크립트에서 
읽을 수 있던 것 처럼 반대로 자바스크립트에서 fetch함수를 이용해 POST리퀘스트를 보낼 때는 stringify를
이용해 String으로 변환해서 보내야 한다. */