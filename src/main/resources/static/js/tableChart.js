tableChart()

function tableChart() {
  fetch('/air/tableChart', { //요청경로
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
      if (!response.ok) {
        alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
        return;
      }

      //return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
      return response.json(); //나머지 경우에 사용
    })
    //fetch 통신 후 실행 영역
    .then((data) => {//data -> controller에서 리턴되는 데이터!
      console.log(data)

      const titleChart = document.querySelector('.titleChart');
      titleChart.innerHTML = '';
      let str_1 = '';
      str_1 += `
        <tr>
          <td colspan="3"><h4>서초구 내 가장 쾌적한 곳 1-5위</h4></td>
        </tr>
        <tr>
          <th>순위</th>
          <th>시설명</th>
          <th>통합실내지수</th>
        </tr>
      `;
      titleChart.insertAdjacentHTML('afterbegin', str_1);

      const tableChart = document.querySelector('.tableChart');
      tableChart.innerHTML = '';
      let str = '';
      for (let i = 0; i < data.TOP.length; i++) {
        str += `
        <tr>
          <th scope="row">${i + 1}위</th>
          <td>
            ${data.TOP[i].stationName} 
          </td>
          <td>
            ${data.TOP[i].ciciCode}
          </td>
        </tr>
        `;
      }
      tableChart.insertAdjacentHTML('afterbegin', str);

    })
    //fetch 통신 실패 시 실행 영역
    .catch(err => {
      alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
      console.log(err);
    });
}
