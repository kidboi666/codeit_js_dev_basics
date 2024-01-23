/* 자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 것은
영어로 Serialization, 우리말로는 직렬화 라고 한다
이와는 반대로 string 타입의 JSON데이터를 자바스크립트 객체로 변환하는 것을 영어로는
Deserialization, 우리말로는 역직렬화 라고 한다. 그리고 이걸 동사로 표현하면 Serialize,Deserialize

이러한 Serialization과 Deserialization은 모든 프로그래밍 언어에서 중요하게 다뤄지는 개념이다. 
왜냐하면 어떤 언어든지 리퀘스트를 보내거나 리스폰스를 받을 때 이런 작업을 수행해줘야 하기 때문이다.
*/



// 1. string타입의 JSON 데이터 vs 자바스크립트 객체
const obj = { x: 1, y: 2 }; // 자바스크립트의 객체 {x: 1, y: 2}
const jsonString = JSON.stringify(obj); // Serialize한 결과 "{"x":1,"y":2}"
/* obj 객체는 자바스크립트 객체로서, 기본 내장 객체들도 존재한다. 이러한 것들은 서버에는 보낼 필요가 없는
것들이다. 서버에서 인식 가능하도록 보낼 방법도 없다. 그러한 이유 때문에 obj가 가진 데이터만을 string
타입으로 변환하는 Serialization 작업을 해야하는 것이다. */


const jsonString2 = '{"x": 1, "y": 2}';
const obj2 = JSON.parse(jsonString2);
console.log(obj.y);
/* 굳이 string 타입의 값에서 문자열을 파싱해 힘들게 추출하기 보단 자바스크립트 객체로 변환해 편하게
가져오면 되는것이다 */





// 2. text 메소드 말고 json 메소드도 있어요.

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { const users = JSON.parse(result); });
/* 이 코드에서는 text()로 리스폰스의 내용을 추출하고 그 리턴값인 JSON데이터 (실제론 JSON 데이터를 품은
  Promise객체)를 Deserialize( JSON.parse(result) ) 해서 생성한 객체를 users에 할당했다.
그런데 여기서 코드의 양을 줄일 수 있는 방법이 있다. */

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { const users = result; });
/* text 메소드 대신 json 메소드를 호출하면 리스폰스의 내용이 JSON 데이터일 경우 바로 Deserialization까지
수행해 준다. 이렇게 json 메소드를 사용하면 result 파라미터엔 Deserilazation의 결과로 생성된 자바스크립트
객체가 넘어가게 되는데, 그래서 두번째 콜백 안에서 JSON.parse를 해주지 않아도 result를 바로 자바스크립트
객체로 사용할 수 있는 것이다. 물론 리스폰스의 내용이 JSON 데이터에 해당하지 않으면 에러를 뿜는다 */
