doughnuthart()

function doughnuthart(){
    fetch('/decibel/decibelPie', { //요청경로
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
        let decibelPercentList = []
        data.forEach(e => {
            console.log(e.decibelPercent)
            decibelPercentList.push(e.decibelPercent)
        });

        new Chart(document.querySelector('#doughnut-chart'), {
            type: 'doughnut',
            data: {
                labels: ["매우좋음", "좋음", "보통", "나쁨", "매우나쁨"],
                datasets: [
                    {
                        label: "소음 등급",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: decibelPercentList
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
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