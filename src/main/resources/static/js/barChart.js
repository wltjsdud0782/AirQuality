//믹스 차트
new Chart(document.querySelector('#mixed-chart'), {
    type: 'bar',
    data: {
        labels: ["1월", "2월", "3월", "현재"],
        datasets: [{
            label: "실시간 온도",
            type: "line",
            borderColor: "#8e5ea2",
            data: [15,20,23,28],
            fill: false
        }, {
            label: "실시간 습도",
            type: "line",
            borderColor: "#3e95cd",
            data: [30,15,15,20],
            fill: false
        }, {
            label: "평균 온도",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [18,24,21,30],
        }, {
            label: "평균 습도",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [28,21,21,25]
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