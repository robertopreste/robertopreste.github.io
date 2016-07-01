/**
 * Created by robertopreste on 01/07/2016.
 */

var ans = "";
var clear = false;
var calc = "";
$(document).ready(function() {
    $("button").click(function() {
        var text = $(this).attr("value");
        if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
            if(clear === false) {
                calc += text;
                $(".display").val(calc);
            } else {
                calc = text;
                $(".display").val(calc);
                clear = false;
            }

        } if(text === "AC") {
            calc = "";
            $(".display").val("");
        } else if(text === "CE") {
            calc = calc.slice(0, -1);
            $(".display").val(calc);
        } else if(text === "=") {
            ans = eval(calc);
            $(".display").val(ans);
            clear = true;
        }
    });
});