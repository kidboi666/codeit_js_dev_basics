fetch('https://jsonplaceholder.typicde.com/users')
  .then((response) => response.text(), (error) => { console.log(error); })
  .then((result) => { console.log(result); });