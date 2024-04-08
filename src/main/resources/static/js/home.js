// 라인차트
new Chart(document.querySelector('#line-chart'), {
    type: 'line',
    data: {
        labels: ['a', 'b', 'c', 'd', 'e'],
        datasets: [
            {
                data: [10.5, 11.5, 15.7, 8.5, 13.0],
                label: "최고기온",
                borderColor: "#c45850",
                fill: false
            }, 
            {
                data: [3.1, 5.7, 1.2, 2.4, 3.5],
                label: "최저기온",
                borderColor: "#3e95cd",
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
                min: 0,
                max: 20
            }
        }
    }
});

//믹스 차트
new Chart(document.querySelector('#mixed-chart'), {
    type: 'bar',
    data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "실시간 온도",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false
        }, {
            label: "실시간 습도",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false
        }, {
            label: "평균 온도",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408, 547, 675, 734],
        }, {
            label: "평균 습도",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478]
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false }
    }
});


// 원그래프
new Chart(document.querySelector('#pie-chart'), {
    type: 'pie',
    data: {
        labels: ["매우좋음", "좋음", "보통", "나쁨", "매우나쁨"],
        datasets: [{
            label: "미세먼지 등급",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [10, 20, 50, 15, 5]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});