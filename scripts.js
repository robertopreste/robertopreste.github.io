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

$(document).ready(function () {
    getQuote();
    setInterval(getQuote, 30000);
});