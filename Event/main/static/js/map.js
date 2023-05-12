
var myMap;

ymaps.ready(init);

function init(){

    var map = new ymaps.Map('map', {
center: [57.15101250184789,65.5378306104507],
zoom : 17,
behaviors: ['default', 'scrollZoom']
},{
  searchControlProvider: 'yandex#search'
});

var placemark = new ymaps.Placemark([57.15252642017175,65.53638864151911], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/header/arrow.png",
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -20]
});

map.geoObjects.add(placemark);

// map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

}

function loadJson(selector) {
    return JSON.parse(document.querySelector(selector).getAttribute('data-json'));
  }

var jsonData = loadJson('#jsonData');

for (var i = 0; i < jsonData.length; i++) {
    // console.log(jsonData[i].fields.name)
    
}
var x = 0;
var y = 0;

ymaps.ready(init);

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
    x = crd.latitude
    y = crd.longitude
    console.log(x, y)
    
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
