// 라인차트
new Chart(document.querySelector('#line-chart'), {
    type: 'line',
    data: {
        labels: ['9시', '11시', '13시', '15시', '17시'],
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
                min: -20,
                max: 40
            }
        }
    }
});