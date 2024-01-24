fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });

async function getTheLastPostOfTheLastUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Promise (fulfilled)
  const users = await response.json(); // Promise (fulfilled)
  console.log(users)
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const lastResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await lastResponse.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
