const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', },
  body: JSON.stringify(newMember),  // 자바스크립트 객체를 String타입의 JSON데이터로
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
