document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Time labels
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 40, 10, 8, 1, 90, 8, 0, 4], // Temperature data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Temperature (°C)'
                    }
                }
            }
        }
    });

/*
    // Function to fetch temperature data
    async function fetchTemperatureData() {
        try {
            const response = await fetch('/api/temperature'); // Replace with your API endpoint
            const data = await response.json();
            const currentTime = new Date();

            // Update chart data
            temperatureChart.data.labels.push(currentTime);
            temperatureChart.data.datasets[0].data.push(data.temperature);

            // Remove data points older than 1 minute for performance
            if (temperatureChart.data.labels.length > 60) {
                temperatureChart.data.labels.shift();
                temperatureChart.data.datasets[0].data.shift();
            }

            temperatureChart.update();
        } catch (error) {
            console.error('Error fetching temperature data:', error);
        }
    }

    // Fetch data every second
    setInterval(fetchTemperatureData, 1000);
*/
});


