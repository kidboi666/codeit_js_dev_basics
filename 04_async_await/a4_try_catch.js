async function fetchAndPrint() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log(result);
  } catch(error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}
fetchAndPrint();