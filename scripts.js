/**
 * Created by robertopreste on 04/05/2016.
 */


// Switch from the black theme to the white one

$("#switch_btn").on("click", function () {
    $("body").toggleClass("switch_class_body");
    $(".pannello").toggleClass("switch_class_pann");
    $(".class_hr").toggleClass("switch_class_hr");
    $(".w3-border-orange").toggleClass("w3-border-teal");
    $(".w3-pale-red").toggleClass("w3-pale-blue");
});

// Quotes

var currentQuote = '', currentAuthor = '';

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "3H4Ef9jYswmshsaY4uWZctGDnZw4p1HOuyPjsnIPpO9UqGsXRi",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat="famous"',
        success: function (response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;

            $("#quote").text(r.quote);
            $("#author").text(r.author);
        }
    });
}

// Weather

var app = angular.module('Weather', []);

app.factory('WeatherApi', function($http) {
    var obj = {};

    obj.getLoc = function() {
        return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
    };
    obj.getCurrent = function(city) {
        var api = "http://api.openweathermap.org/data/2.5/weather?q=",
            units = "&units=metric",
            appid = "&APPID=061f24cf3cde2f60644a8240302983f2",
            cb = "&callback=JSON_CALLBACK";

        return $http.jsonp(api + city + units+ appid + cb);
    };
    return obj
});

app.controller('MainCtrl', function($scope, WeatherApi) {
    $scope.Data = {};
    $scope.Data.unit ='C';
    $scope.Data.sysChange = false;
    WeatherApi.getLoc().success(function(data) {
        var city = data.city + ',' + data.country;
        $scope.Data.city = data.city;
        $scope.Data.country = data.country;
        WeatherApi.getCurrent(city).success(function(data) {
            CurrentWeather(data)
        });
    });

    function CurrentWeather(data) {
        $scope.Data.temp = Math.round(data.main.temp);
        $scope.Data.Cel = Math.round(data.main.temp);
        $scope.Data.des = data.weather[0].main;
        $scope.Data.Fah = Math.round( ($scope.Data.temp * 9)/5 + 32 );
        return IconGen($scope.Data.des);
    }

    function IconGen(city) {
        var city = city.toLowerCase();
        switch (city) {
            case 'dizzle':
                addIcon(city);
                break;
            case 'clouds':
                addIcon(city);
                break;
            case 'rain':
                addIcon(city);
                break;
            case 'snow':
                addIcon(city);
                break;
            case 'clear':
                addIcon(city);
                break;
            case 'thunderstom':
                addIcon(city);
                break;
            default:
                $('div.clouds').removeClass('hide');
        }
    }

    function addIcon(city) {
        $('div.' + city).removeClass('hide');
    }

    $scope.Data.sys= function(){
        if($scope.Data.sysChange){
            $scope.Data.unit = 'C';
            $scope.Data.temp = $scope.Data.Cel;
            return $scope.Data.sysChange = false;
        }
        $scope.Data.unit ='F';
        $scope.Data.temp = $scope.Data.Fah;
        return $scope.Data.sysChange = true;
    }

});

$(document).ready(function () {
    getQuote();
    setInterval(getQuote, 30000);
});