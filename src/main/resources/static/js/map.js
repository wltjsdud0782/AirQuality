//지도로 이동하여 바로 data가지러 감

fetch('/map/selectMap', { //요청경로
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  //컨트롤러로 전달할 데이터
  body: new URLSearchParams({
     // 데이터명 : 데이터값
  })
})
.then((response) => {
  if(!response.ok){
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return ;
  }

  //return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
  return response.json(); //나머지 경우에 사용
})
//fetch 통신 후 실행 영역
.then((data) => {//data -> controller에서 리턴되는 데이터!
  console.log(data);
  drawMap(data);      //데이터를 가지고 지도 그리기 및 마크 만드는 함수호출
 })
//fetch 통신 실패 시 실행 영역
.catch(err=>{
  alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
  console.log(err);
});

 // 지도를 띄우는 코드 작성
function drawMap(data){
    const container = document.querySelector('#map');
    const options = {
    center: new kakao.maps.LatLng(37.4887, 127.0214), //지도의 중심좌표 (햇님어린이집)
    level: 7 //지도의 레벨(확대, 축소 정도) : 숫자가 작을수록 화면확대됨(1:20m 6: 500m, 7: 1km, 15:128km, 7하고 사이즈 조금 더 키우기)
    };
  
    const map = new kakao.maps.Map(container, options);  //지도 생성 및 객체 리턴
  
    //경도 위도 스테이션명 리스트로 만들기
    const positions = [];
    data.forEach((element, idx) => {
      const each = {
        serialNo : element.serialNo,
        title: element.stationName, 
        latlng: new kakao.maps.LatLng(element.lat, element.lon)
      };
      positions.push(each);
    });

  // 마커를 생성합니다
  for (var i = 0; i < positions.length; i ++) {
        var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng,  // 마커를 표시할 위치
        title : positions[i].title,     // 마커에 마우스 포인터 이동시 설명내용(스테이션명)
    });
       // 마크에 클릭이벤트 등록하기
        kakao.maps.event.addListener(marker, 'click', function (){
        var title = this.getTitle();
        document.querySelector('#mark_name').innerHTML=title;
    });
  }
}
 