async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}
console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

/* 함수 안에서 await을 만나면 리스폰스가 오기전에 함수 밖으로 나가 함수를 호출한
문단 다음의 코드들을 실행한다.즉, 스코프가 함수 안에서 외부로 나가게 되는것이다. */


async function fetchAndPrint() {
  console.log(2);
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(7);
    return response.text();
  })
  .then((result) => { console.log(result); });
}
console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);