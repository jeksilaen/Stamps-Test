// Display the weather forecast for Jakarta for the next 5 days
// 1. Please use the API provided at http://openweathermap.org.
// 2. Display the output as the weather forecast for Jakarta for the next 5 days.
// 3. Only show one temperature per day.
// 4. This task does not require a paid account.

fetch('http://api.openweathermap.org/data/2.5/forecast?lat=-6.21462&lon=106.84513&units=metric&appid=00fd3e7adf2d2a9ad3cefd55be410b2f')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Weather Forecast:')
    formatWeatherOutput(data)
  })


function formatWeatherOutput(data){
    listWeather = data.list

    for (let i = 0; i < listWeather.length; i++) {
        const date = new Date(listWeather[i].dt_txt)

        // filter only at 9 AM
        if (date.getHours() === 9) {
            const options = {
                weekday: 'short', 
                day: '2-digit', 
                month: 'long',  
                year: 'numeric' 
            };
    
            const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
            const temp = listWeather[i].main.temp
    
            console.log(`${formattedDate}: ${temp}`)
        }
    }
}