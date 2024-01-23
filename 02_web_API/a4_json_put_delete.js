const member = {
  name: 'Alice',
  email: 'alice@codeitmall.kr',
  department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/2', {
  method: 'PUT',
  body: JSON.stringify(member),  // 자바스크립트 객체를 String타입의 JSON데이터로
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });


  fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });