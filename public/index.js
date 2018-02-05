var app = function(){



var loadAlj = document.getElementById('alj');
loadAlj.addEventListener('click',function(){
var url =  'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=e703a1cb92574b5aafa1c3532618f877';
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&APPID=da841806f8f70173b9b09d2daef3dc7e&units=metric';
// var newsItem =JSON.parse(localStorage.getItem('newsItem'));
makeRequest(url, requestComplete);
window.alert("loading aljazeera headlines");
});

var loadNextpage = document.getElementById('next');
loadNextpage.addEventListener('click', function(){
  var url2 = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=e703a1cb92574b5aafa1c3532618f877';
  makeRequest(url2, requestComplete);
  window.alert("loading cnn headlines");
});

var seeweather = function(){
   var url3 = 'http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&APPID=da841806f8f70173b9b09d2daef3dc7e&units=metric';
   makeNewRequest(url3, requestNewComplete);
 };



}




var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load',callback);
  request.send();
}

var makeNewRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load',callback);
  request.send();
}


var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var news = JSON.parse(jsonString);
  // var newsItem = news[0];
  // console.log(news.articles[8].title);
  // console.log(news);


  populate(news);
}


var requestNewComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var weather = JSON.parse(jsonString);



    weatherdisplay(weather);
}







var populate = function(news){
  var ul = document.getElementById('news-list');
  var news = news.articles;

  news.forEach(function(item){
    var li = document.createElement('li');
    li.innerText = item.title;
    ul.appendChild(li);
    ul.style.listStyleType = "none";
    li.style.textTransform = 'uppercase';
    li.style.color ="grey";
    li.style.fontSize = '18px'
    var p = document.createElement('p');
    p.innerText = item.description;
    p.style.textTransform = "capitalize"
    p.style.color ="black"
    p.style.fontSize = '15px'
    li.appendChild(p);
    var image = document.createElement('img');
    image.src = item.urlToImage;
    li.appendChild(image);
    image.width = 320;
    image.height = 200;
    image.style.border



  });

}



var weatherdisplay = function(weather){
  var ul = document.getElementById('weather_ul');

    var li = document.createElement('li');
    li.innerText = weather.name;
    ul.appendChild(li1);
    var li = document.createElement('li');
    li.innerText = weather.main.temp;
    ul.appendChild(li);
     ul.style.listStyleType = "none";

  };




window.addEventListener('load', app);
