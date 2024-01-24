fetch('https://friendbook.com/my/newsfeeds')
  .then((response) => response.json()) // -- A
  .then((result) => { // -- B
    const feeds = result;
    // 피드 데이터 가공
    return processedFeeds;
  })
  .catch((error) => { // -- C
    // 미리 저장해둔 일반 뉴스를 보여주기
    const storedGeneralNews = getStoredGeneralNews();
    return storedGeneralNews;
  })
  .then((result) => { /* 화면에 표시 */ }) // -- D
  .catch((error) => { /* 에러 로깅 */ }); // -- E


/*
만약 서버로부터 뉴스피드가 잘 조회됬다면 ABD줄에 코드들이 잘 실행될 것이다.
하지만 무언가의 문제로 fetch 함수가 rejected 됬다면 어떻게 될까

A는 rejected 상태가 되고 에러 정보를 다음 B의 두번째 콜백함수에게 넘긴다.
B는 첫번째 콜백함수 밖에 없으므로 패스한다
C는 catch이므로 첫번째 콜백함수를 실행한다.
 실행결과 : 미리 저장한 뉴스를 출력하는 함수를 반환
           state가 fulfilled가 되고 반환값을 then의 파라미터에 넘긴다.
D는 반환값을 받아 화면에 표시하는 함수를 가지고 적절히 사용한다.출력하든 알아서
만약 D에서의 반환값이 undefined라면 E에 catch문은 무시된다.
만약 D에서 또다른 에러가 발생한다면 그때 E에 catch문이 실행된다.
*/