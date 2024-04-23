doughnutChart()

function doughnutChart() {
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
                decibelPercentList.push(e.decibelPercent)
            });

            new Chart(document.querySelector('#doughnut-chart1'), {
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
                        text: '현재 소음 등급 비율'
                    }
                }
            });
        })
        //fetch 통신 실패 시 실행 영역
        .catch(err => {
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });

    // //////////////////////////////////////////////////////////////////////////////////////////////////// //

    fetch('/air/doughnutChart', { //요청경로
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
            console.log(data);

            //미세먼지 데이터 넣기
            const pm = [];
            for (const each of data.PM) {
                pm.push(each.pmPercent);
            }

            //초미세먼지 데이터 넣기
            const fpm = [];
            for (const each of data.FPM) {
                fpm.push(each.fpmPercent);
            }

            //초미세먼지 데이터 넣기
            const cici = [];
            for (const each of data.CICI) {
                cici.push(each.ciciPercent);
            }

            //등급
            const grade = ["좋음", "보통", "나쁨", "매우 나쁨"];

            //미세먼지
            new Chart(document.querySelector('#doughnut-chart2'), {
                type: 'doughnut',
                data: {
                    labels: grade,
                    datasets: [
                        {
                            label: "미세먼지(㎍/㎥)",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                            data: pm
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: '미세먼지 등급'
                    }
                }
            });

            //초미세먼지
            new Chart(document.querySelector('#doughnut-chart3'), {
                type: 'doughnut',
                data: {
                    labels: grade,
                    datasets: [
                        {
                            label: "초미세먼지(㎍/㎥)",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                            data: fpm
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: '초미세먼지 등급'
                    }
                }
            });

            //통합실내지수
            new Chart(document.querySelector('#doughnut-chart4'), {
                type: 'doughnut',
                data: {
                    labels: grade,
                    datasets: [
                        {
                            label: "통합실내지수",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                            data: cici
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'CICI 등급'
                    }
                }
            });

            //미세먼지
            new Chart(document.querySelector('#doughnut-chart5'), {
                type: 'doughnut',
                data: {
                    labels: grade,
                    datasets: [
                        {
                            label: "미세먼지(㎍/㎥)",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                            data: pm
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: '미세먼지 등급'
                    }
                }
            });
        })
        //fetch 통신 실패 시 실행 영역
        .catch(err => {
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });

}




// 슬라이드 //////////////////////////
let cnt = 0;

const wrap = document.querySelector(".wrap");
const s1 = document.querySelectorAll(".s1");

const sliderClone = wrap.firstElementChild.cloneNode(true); //복사
wrap.appendChild(sliderClone); //붙여넣기

let play = setInterval(() => {
    cnt++

    wrap.style.marginLeft = (-cnt * 100) + "%";
    wrap.style.transition = "all 0.6s";

    if (cnt == 4) {
        setTimeout(() => {
            wrap.style.transition = "0s";
            wrap.style.marginLeft = "0";

            cnt = 0;
        }, 700)
    }

}, 2500)


wrap.addEventListener('mouseover', (event) => { clearInterval(play) })
wrap.addEventListener('mouseout', (event) => {
    play = setInterval(() => {
        cnt++
        wrap.style.marginLeft = (-cnt * 100) + "%";
        wrap.style.transition = "all 0.6s";

        if (cnt == 4) {
            setTimeout(() => {
                wrap.style.transition = "0s";
                wrap.style.marginLeft = "0";

                cnt = 0;
            }, 700)
        }

    }, 2000)
})
