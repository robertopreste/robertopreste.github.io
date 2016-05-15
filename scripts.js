/**
 * Created by robertopreste on 04/05/2016.
 */


// Switch from the black theme to the white one

$("#switch_btn").on("click", function () {
    if (document.getElementById("bodytag").classList.contains("class_body")) {
        document.getElementById("bodytag").classList.remove("class_body");
        document.getElementById("bodytag").classList.add("switch_class_body");
    } else {
        document.getElementById("bodytag").classList.remove("switch_class_body");
        document.getElementById("bodytag").classList.add("class_body");
    }
    
    for (var i = 0, x = document.getElementsByClassName("main_panel"), j = document.getElementsByClassName("main_panel").length; i < j; i++) {
        if (x[i].classList.contains("pannello")) {
            x[i].classList.add("switch_class_pann");
            x[i].classList.add("w3-border-teal");
            x[i].classList.remove("pannello");
            x[i].classList.remove("w3-border-orange");
        } else {
            x[i].classList.add("pannello");
            x[i].classList.add("w3-border-orange");
            x[i].classList.remove("switch_class_pann");
            x[i].classList.remove("w3-border-teal");
        }
    }

    for (var i = 0, x = document.getElementsByClassName("cont_panel"), j = document.getElementsByClassName("cont_panel").length; i < j; i++) {
        if (x[i].classList.contains("w3-border-orange")) {
            x[i].classList.add("w3-border-teal");
            x[i].classList.add("w3-pale-blue");
            x[i].classList.remove("w3-border-orange");
            x[i].classList.remove("w3-pale-red");
        } else {
            x[i].classList.add("w3-border-orange");
            x[i].classList.add("w3-pale-red");
            x[i].classList.remove("w3-border-teal");
            x[i].classList.remove("w3-pale-blue");
        }
    }

    for (var i = 0, x = document.getElementsByClassName("app_panel"), j = document.getElementsByClassName("app_panel").length; i < j; i++) {
        if (x[i].classList.contains("w3-border-orange")) {
            x[i].classList.add("w3-border-teal");
            x[i].classList.add("w3-pale-blue");
            x[i].classList.remove("w3-border-orange");
            x[i].classList.remove("w3-pale-red");
        } else {
            x[i].classList.add("w3-border-orange");
            x[i].classList.add("w3-pale-red");
            x[i].classList.remove("w3-border-teal");
            x[i].classList.remove("w3-pale-blue");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("hr"), j = document.getElementsByTagName("hr").length; i < j; i++) {
        if (x[i].classList.contains("class_hr")) {
            x[i].classList.add("switch_class_hr");
            x[i].classList.remove("class_hr");
        } else {
            x[i].classList.add("class_hr");
            x[i].classList.remove("switch_class_hr");
        }
    }

    for (var i = 0, x = document.getElementsByClassName("w3-btn"), j = document.getElementsByClassName("w3-btn").length; i < j; i++) {
        if (x[i].classList.contains("w3-border-deep-orange")) {
            x[i].classList.add("w3-border-indigo");
            x[i].classList.add("w3-hover-blue");
            x[i].classList.add("w3-teal");
            x[i].classList.remove("w3-border-deep-orange");
            x[i].classList.remove("w3-hover-red");
            x[i].classList.remove("w3-orange");
        } else {
            x[i].classList.add("w3-border-deep-orange");
            x[i].classList.add("w3-hover-red");
            x[i].classList.add("w3-orange");
            x[i].classList.remove("w3-border-indigo");
            x[i].classList.remove("w3-hover-blue");
            x[i].classList.remove("w3-teal");
        }
    }

    if (document.getElementById("temp_value").classList.contains("w3-text-deep-orange")) {
        document.getElementById("temp_value").classList.add("w3-text-indigo");
        document.getElementById("temp_value").classList.remove("w3-text-deep-orange");
    } else {
        document.getElementById("temp_value").classList.add("w3-text-deep-orange");
        document.getElementById("temp_value").classList.remove("w3-text-indigo");
    }

    for (var i = 0, x = document.getElementsByTagName("h1"), j = document.getElementsByTagName("h1").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("h2"), j = document.getElementsByTagName("h2").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("h3"), j = document.getElementsByTagName("h3").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("h4"), j = document.getElementsByTagName("h4").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("h5"), j = document.getElementsByTagName("h5").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

    for (var i = 0, x = document.getElementsByTagName("h6"), j = document.getElementsByTagName("h6").length; i < j; i++) {
        if (x[i].classList.contains("w3-text-deep-orange")) {
            x[i].classList.add("w3-text-indigo");
            x[i].classList.remove("w3-text-deep-orange");
        } else if (x[i].classList.contains("w3-text-indigo")) {
            x[i].classList.add("w3-text-deep-orange");
            x[i].classList.remove("w3-text-indigo");
        } else if (x[i].classList.contains("w3-text-orange")) {
            x[i].classList.add("w3-text-teal");
            x[i].classList.remove("w3-text-orange");
        } else {
            x[i].classList.add("w3-text-orange");
            x[i].classList.remove("w3-text-teal");
        }
    }

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