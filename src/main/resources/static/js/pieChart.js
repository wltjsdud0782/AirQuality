// 원그래프
new Chart(document.querySelector('#pie-chart'), {
    type: 'pie',
    data: {
        labels: ["매우좋음", "좋음", "보통", "나쁨", "매우나쁨"],
        datasets: [{
            label: "미세먼지 등급",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [10, 25, 40, 20, 5]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});