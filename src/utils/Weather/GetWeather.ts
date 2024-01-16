const getWeather = (AMap) => {
    AMap.plugin('AMap.Weather', function () {
        const weather = new AMap.Weather();
        // map.addControl(weather);
        //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        weather.getLive('朝阳区', function (err, data) {
            if (err) {
                console.log('天气', err)
            } else {
                console.log('天气', data)
            }
        });
        //未来4天天气预报
        weather.getForecast('朝阳区', function (err, data) {
            if (err) {
                console.log('天气', err)
                return;
            } else {
                console.log('天气', data)
            }
            const str = [];
            let i = 0, dayWeather;
            for (; i < data.forecasts.length; i++) {
                dayWeather = data.forecasts[i];
                str.push(dayWeather.date + ' <span class="weather">' + dayWeather.dayWeather + '</span> ' + dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
            }
            document.getElementById('forecast').innerHTML = str.join('<br>');
        });
    });
}


export default getWeather;
