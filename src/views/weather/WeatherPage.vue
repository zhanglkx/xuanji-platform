<script  lang="ts">
window._AMapSecurityConfig = {
  securityJsCode:'29041903c48537cb27497684fae5ec76',
}
</script>

<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import getWeather from "@/utils/Weather/GetWeather.ts";


let map: any = null;

onMounted(() => {
  AMapLoader.load({
    key: "35f1e035c31965c8aa204cee119c8ae6", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Weather'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
      .then((AMap) => {
        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置

        });

        map.plugin('AMap.ToolBar', function () {//异步加载插件
          let toolbar = new AMap.ToolBar();
          map.addControl(toolbar);
        });

        AMap.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认：true
            timeout: 10000, // 设置定位超时时间，默认：无穷大
            offset: [10, 20],  // 定位按钮的停靠位置的偏移量
            zoomToAccuracy: true,  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            position: 'RB' //  定位按钮的排放位置,  RB表示右下
          })

          map.addControl(geolocation);

          geolocation.getCurrentPosition(<PositionCallback>function (status, result) {
            if (status === 'complete') {
              onComplete(result)
            } else {
              onError(result)
            }
            console.log(status, result)
          });

          function onComplete(data) {
            // data是具体的定位信息
            console.log(data)
          }

          function onError(data) {
            // 定位出错
            console.log(data)
          }
        });


        AMap.plugin('AMap.CitySearch', function () {
          var citySearch = new AMap.CitySearch()
          citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              console.log('定位')
              console.log(status)
              console.log(result)
            }
          })
        })

        getWeather(AMap)

        //加载天气查询插件
        // AMap.plugin('AMap.Weather', function () {
        //   const weather = new AMap.Weather();
        //   // map.addControl(weather);
        //   //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        //   weather.getLive('朝阳区', function (err, data) {
        //     if (err) {
        //       console.log('天气',err)
        //     }else {
        //       console.log('天气',data)
        //     }
        //   });
        //   //未来4天天气预报
        //   weather.getForecast('朝阳区', function (err, data) {
        //     if (err) {
        //       console.log('天气',err)
        //       return;
        //     }else {
        //       console.log('天气',data)
        //     }
        //     var str = [];
        //     for (var i = 0, dayWeather; i < data.forecasts.length; i++) {
        //       dayWeather = data.forecasts[i];
        //       str.push(dayWeather.date + ' <span class="weather">' + dayWeather.dayWeather + '</span> ' + dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
        //     }
        //     document.getElementById('forecast').innerHTML = str.join('<br>');
        //   });
        // });

      })
      .catch((e) => {
        console.log(e);
      });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div>
    <div id="container"></div>
    <div id="forecast"></div>
    <div class="info">
      <p id='info'></p>
    </div>
  </div>

</template>

<style scoped lang="scss">
#container {
  width: 100%;
  height: 800px;
}

</style>
