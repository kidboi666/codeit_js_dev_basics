const applyPrivacyRule = async function(users) { // 파라미터에 users객체 받음
  const resultWithRuleApplied = users.map((user) => { // 표현식으로 map 메서드를 통한 매개변수의 순환 결과를 변수에 할당
    const keys = Object.keys(user); // 매개변수의 키값을 표현식으로 할당
    const userWithoutPrivateInfo = {}; // 객체 생성자
    keys.forEach((key) => { // 할당된 키 값 들중 
      if (key !== 'address' && key !== 'phone') { // address이고 phone이 아닌 것들 전부 추려내서 
        userWithoutPrivateInfo[key] = user[key]; // 위에 생성한 객체에 다시 담음
      }
    });
    return userWithoutPrivateInfo; // 다시 담음 그 객체를 map메서드의 리턴값으로 태움
  });

  const p = new Promise((resolve, reject) => { // 프로미스 객체 자체 생성 (Promisify)
    setTimeout(() => { resolve(resultWithRuleApplied); }, 2000) // 로딩시간 구현 (뭐하러) 2초 뒤에 p에 담긴 사생활 필터링한 Promise객체는 fulfilled상태가 됨
  });
  return p; // 고것을 리턴
}

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    const users = JSON.parse(result); // 변수 users에 fetch함수로 받은 객체를 할당
    const resultWithPrivacyRuleApplied = await applyPrivacyRule(users); // async 함수 안에서 호출한 async 함수에 fetch함수로 받은 객체 파라미터로 전달해서 그 리턴값 할당
    return resultWithPrivacyRuleApplied; // 위에 복잡한 과정을 거쳐서 나온 결과를 리턴
  } catch(error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

getUsers().then((result) => { console.log(result); }) // 위에 복잡한 과정을 거쳐서 나온 결과를 고작 콘솔로그로 출렧