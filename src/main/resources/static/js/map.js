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

  // return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
  return response.json(); //나머지 경우에 사용
})
//fetch 통신 후 실행 영역
.then((data) => {//data -> controller에서 리턴되는 데이터!
  
})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
  alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
  console.log(err);
});


const container = document.querySelector('#map');
const options = {
  center: new kakao.maps.LatLng(37.0000, 126.0000),
  level: 3
};

const map = new kakao.maps.Map(container, options);


// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
  {
      title: '방배4동 작은도서관', 
      latlng: new kakao.maps.LatLng(37.4889, 126.9923)
  },
  {
      title: '서초동물사랑센터', 
      latlng: new kakao.maps.LatLng(37.4764, 127.0381)
  },
  {
      title: '삼호3차가온어린이집', 
      latlng: new kakao.maps.LatLng(37.4977, 126.9868)
  },
  {
      title: '서리풀문화광장',
      latlng: new kakao.maps.LatLng(37.4904, 127.0048)
  }
];


  
for (var i = 0; i < positions.length; i ++) {

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });
}