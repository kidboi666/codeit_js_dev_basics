async function pick(menus) {
  console.log('pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const random = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[random];
        resolve(selectedMenu);
      }, 1000);
    }
  })
  return p;
}

async function getRandomMenu() {
  console.log('---Please wait!---');
  try {
    const response = await fetch('https://learn.codeit.kr/api/menus');
    const menus = await response.json();
    const pickMenu = await pick(menus);
    console.log(`Today's lunch is ${pickMenu.name}~`);
  } catch(error) {
    console.log(error.message);
  } finally {
    console.log('Random Menu candidates change everyday');
  }
}

getRandomMenu()
