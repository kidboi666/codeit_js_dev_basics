fetch('https://www.google.com') // 구글에 리퀘스트를 보내고
  .then((response) => response.text()) // 리스폰스를 받으면 그 리스폰스의 text함수를 리턴값으로 받고
  .then((result) => { console.log(result); }); // 그 리턴값을 콘솔로그로 출력

  /*
  1. fetch 함수는 어떤 객체를 리턴하는데 (Promise 객체)
  2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있고
  3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을
  이후 콜백이 넘겨 받아서 사용할 수 있다.

  이 때 response 파라미터에는 리스폰스에 관한 각종 부가 정보들과, 실제 내용을 함께 갖고
  있는 하나의 객체(object)가 넘어오게 된다. 그러므로 우리는 이 내용을 보기 위해 text메소드
  를 사용해야 한다. */