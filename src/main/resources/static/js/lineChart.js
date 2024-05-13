// 라인차트

const temAndHum = () =>{
    fetch('/temAndHum/selectTemAndHum', { //요청경로
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
        console.log(data)

        let maxTemperature = [];
        let minTemperature = [];
        let maxHumidity = [];
        let minHumidity = [];
        

        console.log(minHumidity)

        data.forEach(e => {
            maxHumidity.push(e.maxHumidity);
            maxTemperature.push(e.maxTemperature);
            minHumidity.push(e.minHumidity);
            minTemperature.push(e.minTemperature);
            console.log (e.maxHumidity)
        });
        console.log(maxHumidity)

        let lineChart = echarts.init(document.querySelector("#lineChart-div"));
        option = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {},
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['9시', '10시' , '11시', '12시', '13시', '14시', '15시', '16시', '17시']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} °C(%)'
              }
            },
            series: [
              {
                name: '실내최저온도',
                type: 'line',
                data: minTemperature,
                markPoint: {
                  data: [
                    { type: 'min', name: 'Min' }
                  ]
                },
                // markLine: {
                //   data: [{ type: 'average', name: 'Avg' }]
                // }
              },
              {
                name: '실내최저습도',
                type: 'line',
                data: minHumidity,
                markPoint: {
                    data: [
                        { type: 'min', name: 'Min' },
                    ]
                },
                // markLine: {
                //   data: [
                //     { type: 'average', name: 'Avg' },
                //     [
                //       {
                //         symbol: 'none',
                //         x: '90%',
                //         yAxis: 'max'
                //       },
                //       {
                //         symbol: 'circle',
                //         label: {
                //           position: 'start',
                //           formatter: 'Max'
                //         },
                //         type: 'max',
                //         name: '最高点'
                //       }
                //     ]
                //   ]
                // }
              },
              {
                name: '실내최고습도',
                type: 'line',
                data: maxHumidity,
                markPoint: {
                  data: [
                    { type: 'max', name: 'Max' },
                  ]
                },
                // markLine: {
                //   data: [{ type: 'average', name: 'Avg' }]
                // }
              },
              {
                name: '실내최고온도',
                type: 'line',
                data: maxTemperature,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                    ]
                },
              }
            ],
          };

            lineChart.setOption(option);
        })
            //fetch 통신 실패 시 실행 영역
        .catch(err=>{
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });
        }

temAndHum()

function drawChart () { 

    var myChart = echarts.init(document.getElementById('chart')); // echarts init 메소드로 id=chart인 DIV에 차트 초기화
    
    option = { // 차트를 그리는데 활용 할 다양한 옵션 정의
                xAxis: {
                    type: 'category',
                    data: xAxisData // 위에서 정의한 X축 데이터
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: seriesData, // 위에서 정의한 값 데이터
                    type: this.value // 버튼의 value 데이터 ('line' or 'bar')
                    }
                ]
                    };
    
    myChart.setOption(option); // 차트 디스플레이
}