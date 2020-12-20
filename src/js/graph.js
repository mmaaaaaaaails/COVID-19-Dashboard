import Chart from 'chart.js';

const ctx = document.querySelector('#chart').getContext('2d');
ctx.canvas.width = 400;
ctx.canvas.height = 270;
const chartConfig = {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Number of cases',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'millions',
                },
            }],
        },
        responsive: false,
        maintainAspectRatio: false,
    },
};

const chart = new Chart(ctx, chartConfig);
const generateRandomTime = () => Math.floor(Math.random() * 20);
const data = Array(12).fill(0).map(() => generateRandomTime());
const user = {
    label: 'cases',
    data,
    backgroundColor: '#ffaa00',
    borderColor: 'transparent',
    borderWidth: 2,
    fill: false,
    barPercentage: 1,
    categoryPercentage: 0.5,
};
chartConfig.data.datasets.push(user);
chart.update();

export {
    chartConfig,
    chart,
};
