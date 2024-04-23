
const container = document.querySelector('#map');
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};

const map = new kakao.maps.Map(container, options);


// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
  {
      title: '카카오', 
      latlng: new kakao.maps.LatLng(33.450705, 126.570677)
  },
  {
      title: '생태연못', 
      latlng: new kakao.maps.LatLng(33.450936, 126.569477)
  },
  {
      title: '텃밭', 
      latlng: new kakao.maps.LatLng(33.450879, 126.569940)
  },
  {
      title: '근린공원',
      latlng: new kakao.maps.LatLng(33.451393, 126.570738)
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