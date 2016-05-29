/**
 * Created by robertopreste on 29/05/2016.
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