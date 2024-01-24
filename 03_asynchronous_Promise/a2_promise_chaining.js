console.log('start');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const user = users[0];
    console.log(user);
    const { address } = user;
    console.log(address);
    const { geo } = address;
    console.log(geo);
    const { lat } = geo;
    console.log(lat);
  })

console.log('end');


/*             -----------------------------     */


console.log('start');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }) // 콜백에서 프로미스 객체가 리턴되면 그 객체가 갖게 될 상태와 결과를 따라서 갖음
  .then((response) => response.text())
  .then((posts) => { console.log(posts); 
  });

console.log('end');
