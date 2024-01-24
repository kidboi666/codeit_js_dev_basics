async function test1() {
  const result = await Promise.resolve('success');
  console.log(result);
}

async function test2() {
  try {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => { resolve('last'); }, 3000);
    });
    const result = await p;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function test3() {
  try {
    const result = await Promise.reject('fail');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

test1();
console.log('JavaScript');
test2();
console.log('Programming');
test3();









async function test1() {
  Promise.resolve('success')
    .then((result) => {
      console.log(result);
    });
}

async function test2() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('last'); }, 3000);
  });
  p
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function test3() {
  Promise.reject('fail')
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

test1();
console.log('JavaScript');
test2();
console.log('Programming');
test3();
