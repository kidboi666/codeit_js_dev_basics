function wait(text, milliseconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, milliseconds);
  })
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
  .then((result) => { console.log(result); });