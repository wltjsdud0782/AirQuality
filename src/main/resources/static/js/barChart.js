barChart();

function barChart() {
    fetch('/average/averageBar', { //요청경로
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        //컨트롤러로 전달할 데이터
        body: JSON.stringify({
            // 데이터명 : 데이터값
        })
    })
        .then((response) => {
            //return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
            return response.json(); //나머지 경우에 사용
        })
        //fetch 통신 후 실행 영역
        .then((data) => {//data -> controller에서 리턴되는 데이터!
            //믹스 차트
            let avgDataList = {day : [], temAvg : [], humAvg : [], maxTem : [], minTem : []}

            data.forEach(e => {
                avgDataList.day.push(e.day)
                avgDataList.temAvg.push(e.temAvg)
                avgDataList.humAvg.push(e.humAvg)
                avgDataList.maxTem.push(e.maxTem)
                avgDataList.minTem.push(e.minTem)
            });

            // 실시간온도, 실시간 습도 수정해야함!!!!!!!!!!!!!!!
            new Chart(document.querySelector('#mixed-chart'), {
                type: 'bar',
                data: {
                    labels: avgDataList.day,
                    datasets: [{
                        label: "최고온도",
                        type: "line",
                        borderColor: "#9EA1D4",
                        data: avgDataList.maxTem,
                        fill: false
                    }, {
                        label: "최저온도",
                        type: "line",
                        borderColor: "#987554",
                        data: avgDataList.minTem,
                        fill: false
                    }, {
                        label: "평균 온도",
                        type: "bar",
                        backgroundColor: "#FD8A8A",
                        data: avgDataList.temAvg,
                    }, {
                        label: "평균 습도",
                        type: "bar",
                        backgroundColor: "#ABD1D1",
                        // backgroundColorHover: "#3e95cd",
                        data: avgDataList.humAvg
                    }
                    ]
                },
                options: {
                    // 바 굵기 ▼
                    maxBarThickness : 30,
                    title: {
                        display: true,
                        text: 'Population growth (millions): Europe & Africa'
                    },
                    legend: { display: false }
                }
            });

        })
        //fetch 통신 실패 시 실행 영역
        .catch(err => {
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });
}

