// var newapp = function(){
// var url =  'http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&APPID=da841806f8f70173b9b09d2daef3dc7e&units=metric';
// var city =JSON.parse(localStorage.getItem('city'));
// makeRequest(url, requestComplete);
// }
//
//
//
//
// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.addEventListener('load',callback);
//   request.send();
// }
//
//
// var requestComplete = function(){
//   if(this.status !== 200) return;
//   var jsonString = this.responseText;
//   var weather = JSON.parse(jsonString);
//   var city = weather[0];
//   console.log(weather.main.temp);
//   // console.log(news);
//   populate(weather);
// }
//
//
// var populate = function(weather){
//   var ul = document.getElementById('weather_ul');
//
//     var li = document.createElement('li');
//     li.innerText = weather.name;
//     ul.appendChild(li);
//     var li = document.createElement('li');
//     li.innerText = weather.main.temp + ' ˚C';
//     ul.appendChild(li);
//      ul.style.listStyleType = "none";
//
//
//   };
//
//
//
//
// window.addEventListener('load', newapp);
