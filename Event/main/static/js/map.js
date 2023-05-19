
var myMap;

ymaps.ready(init);
myMap.behaviors.disable('scrollZoom');
function init(){

    var map = new ymaps.Map('map', {
center: [57.15101250184789,65.5378306104507],
zoom : 17,
behaviors: ['default', 'scrollZoom']
},{
  searchControlProvider: 'yandex#search'
});

// var arr = [[57.15214363106919,65.5342632724609], [57.15252642017175,65.53638864151911], [57.15111153528362,65.53768577116394], [57.1503709741668,65.54072203176875]];

// for (let i = 0; i < arr.length; i++) {
//   var placemark = new ymaps.Placemark(arr[i], {
//     balloonContent:`
//     <div class="balloon">
//     <img src = "../img/carousel/s940x3801_hSwZQdX.png"  >
//     <b><div class='name'> Название </div></b>
//     Коротко о мероприятии<br>
//     Адрес и контакты
//     </div>`, 
//   closeButton: false
//   }, {
//     iconLayout: "default#image",
//     iconImageHref: "../img/header/arrow.png",
//     iconImageSize: [50, 50],
//     
// });

// map.geoObjects.add(placemark);

// }


var book_club = new ymaps.Placemark([57.14927406751129,65.5381905], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/book_club_img.png"  >
    <b><div class='name'> ЧИТАТЬ МОДНО </div></b>
    <p>В книжном клубе "Читать модно" 22.05 в 16:00 пройдет первая встреча участников книжного клуба.<br></p>
    Ул. Герцена, 82<br/>
    <a href="tel:+7-345-291-16-07">+7 (345) 291-16-07</a>
    </div>`,
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/book_club.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(book_club);

var bicycle = new ymaps.Placemark([57.15346122386243,65.54200800132749], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/bicycle_img.png"  >
    <b><div class='name'> Велогон </div></b>
    <p>☝🏻13 МАЯ В 11:00 СТАРТУЕТ ВЕСЕННИЙ ФЕСТИВАЛЬ ВЕЛОГОН2023 - ОТКРЫТИЕ ВЕЛОСЕЗОНА. 🚴‍♀🚴‍♂<br></p>
    Центральная площадь<br>
    <a href="tel:+7-3452-38-13-89">+7 (3452) 38-13-89</a>
    </div>`,
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/bicycle.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(bicycle);

var creation = new ymaps.Placemark([57.14004006754807,65.55210549999998], {
  balloonContent:`
  <div class="balloon">
  <img src = "../img/map/creation_img.png"  >
  <b><div class='name'> Romantic Аrt </div></b>
  <p>Приглашаем на мастер-класс «Отмечатки лета»!<br>
  21 мая | 16:30</p>
  улица Салтыкова-Щедрина, 53<br>
  <a href="tel:+7-3452-52-08-48">+7 (3452) 52-08-48</a>
  </div>`, 
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/creation.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(creation);

var nature = new ymaps.Placemark([57.165248704349786,65.47359806937011], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/nature_img.png"  >
    <b><div class='name'> Прогулка в Затюменском! </div></b>
    <p>Приглашаю погулять в парка "Затюменский"</p>
    Экопарк "Затюменский"
    </div>`, 
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/nature.png",
  iconImageSize: [50, 50]
});

map.geoObjects.add(nature);

var party = new ymaps.Placemark([57.156421567499336,65.53271099999995], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/party_img.png"  >
    <b><div class='name'> 27.05 - 18 мне уже! </div></b>
    <p>Тебе уже 18, а это значит что ты можешь отмечать свой праздник 27 мая с нами!</p>
    <a href="tel:+7-3452-39-49-40">+7 (3452) 39-49-40</a>
    </div>`,
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/party.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(party);

var pets = new ymaps.Placemark([57.15810850830889,65.5673765], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/pets_img.png"  >
    <b><div class='name'> Прогулка с собаками </div></b>
    <p>Приглашаю на прогулку с собаками)</p>
    Загородный сад
    </div>`, 
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/pets.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(pets);

var sport = new ymaps.Placemark([57.12130489184062,65.61239361838528], {
  balloonContent:`
    <div class="balloon">
    <img src = "../img/map/sport_img.png"  >
    <b><div class='name'> Игра в футбол </div></b>
    <p>Приходите играть!</p>
    Ул. Республики, 221
    </div>`,
  closeButton: false
}, {
  iconLayout: "default#image",
  iconImageHref: "../img/map/sport.png",
  iconImageSize: [50, 50],
  
});

map.geoObjects.add(sport);

// map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
// map.yandexMapDisablePoiInteractivity('true')

}

// function loadJson(selector) {
//     return JSON.parse(document.querySelector(selector).getAttribute('data-json'));
//   }

// var jsonData = loadJson('#jsonData');

// for (var i = 0; i < jsonData.length; i++) {
//     // console.log(jsonData[i].fields.name)
    
// }
// var x = 0;
// var y = 0;

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

