/**
 * Created by robertopreste on 29/05/2016.
 */

var col1, col2, col3, hex1, hex2, hex3, hexCol, decCol;

function createColor() {
    col1 = Math.floor(Math.random() * 255);
    col2 = Math.floor(Math.random() * 255);
    col3 = Math.floor(Math.random() * 255);

    hex1 = col1.toString(16).toUpperCase();
    hex2 = col2.toString(16).toUpperCase();
    hex3 = col3.toString(16).toUpperCase();

    if (hex1.length == 1) {
        hex1 = "0" + hex1;
    } else if (hex2.length == 1) {
        hex2 = "0" + hex2;
    } else if (hex3.length == 1) {
        hex3 = "0" + hex3;
    }

    hexCol = "#" + hex1 + hex2 + hex3;
    decCol = "rgb(" + col1 + "," + col2 + "," + col3 + ")";

    document.body.style.backgroundColor = hexCol;

    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = hexCol;
        links[i].setAttribute("onmouseover", "this.style.color='white'");
        links[i].setAttribute("onmouseout", "this.style.color='" + hexCol + "'");
    }

    var rgbVal = document.getElementById("rgbVal");
    var hexVal = document.getElementById("hexVal");
    rgbVal.innerText = decCol;
    hexVal.innerText = hexCol;
}

function showContent() {
    var content = document.getElementById("content");
    if (content.classList.contains("hide")) {
        content.classList.remove("hide");
    } else {
        content.classList.add("hide");
    }
}

createColor();
