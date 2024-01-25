async function getResponse(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}
// 순차 진행이 상관없는 코드라면 위 코드는 비효율적인 코드이다
/* 각 반복이 실행될때 결과값 출력까지 기달렸다가 실행이 되기 때문이다.
되는데로 바로 다 실행해 버리고 리스폰스가 오는 순서대로 바로 출력하는걸 
원한다면 아래 코드를 보자 */

async function getResponse2(urls) {
  for (const url of urls) {
    (async () => {
      const response = await fetch(url);
      console.log(await response.text());
    })();
  }
}

/* for of 반복문 안에서 async 익명 함수로 한번더 반복 구문을 감싸준다
await을 만나면 해당 async 함수 밖으로 나가 나머지 코드를 실행하는 원리를 
이용한 트릭?인거 같다 */


/* 그치만 결국 await을 만나 밖으로 나와 다시 반복문을 돌리는 트릭이 모두 끝나면
다시 순차적으로 처음 생성한 익명 함수부터 결과값을 가져오고, 그 와중에도
결과값이 오지 않았다면 결국 계속 기다리게 되는데 그럼 큰 차이는 없을거같은데 */