
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