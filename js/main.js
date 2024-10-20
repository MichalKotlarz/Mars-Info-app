const timeField = document.querySelector('.clock');

url = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'

let getInfo = () => {
    
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const maxTemp = data[''];
            const minTemp = data['min_temp'];
            showTime(maxTemp, minTemp);

            console.log(data);
            
            
        })

        
}

let showTime = (maxTemp, minTemp) => {
    console.log(maxTemp);
    console.log(minTemp);
}

getInfo();