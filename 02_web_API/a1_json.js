// JSON에서는 각 프로퍼티의 이름을 반드시 큰 따옴표(")로 감싸줘야 한다
// JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 한다.
const member = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};

// JSON에서는 표현할 수 없는 값들이 있다.
/* undefined, NaN, Infinity 등을 사용할 수 없다. 언어나 환경에 종속되지 않고
언제 어디서든 사용할 수 있는 데이터 포맷이 되는것이 탄생 목적이였기에 자바스크립트의
문법에서만 유효한 개념을 JSON에서는 나타낼 수 없다. */

// JSON에서는 주석을 추가할 수 없다.
/* JSON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없다. */