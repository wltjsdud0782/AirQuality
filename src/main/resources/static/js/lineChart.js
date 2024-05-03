// 라인차트

const temAndHum = () =>{
    fetch('/temAndHum/temAndHumSelect', { //요청경로
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

        new Chart(document.querySelector('#line-chart'), {
        type: 'line',
        data: {
            labels: ['9시', '11시', '13시', '15시', '17시'],
            datasets: [
                {
                    data: maxTemperature,
                    label: "실내최고온도",
                    borderColor: "#a71111",
                    fill: false
                }, 
                {
                    data: minTemperature,
                    label: "실내최저온도",
                    borderColor: "#45c3e9",
                    fill: false
                },
                {
                    data: maxHumidity,
                    label: "실내최고습도",
                    borderColor: "rgb(14, 99, 226)",
                    fill: false
                }, 
                {
                    data: minHumidity,
                    label: "실내최저습도",
                    borderColor: "#3e951d",
                    fill: false
                }
            ]
        },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                },
                scales: {
                    y: {
                        min: -10,
                        max: 70
                    }
                }
            }
        });
        })
            //fetch 통신 실패 시 실행 영역
        .catch(err=>{
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });
        }

temAndHum()