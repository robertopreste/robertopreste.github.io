/**
 * Created by robertopreste on 04/05/2016.
 */


// Switch from the black theme to the white one

$("#switch_btn").on("click", function () {
    $("body").toggleClass("switch_class_body");
    $(".pannello").toggleClass("switch_class_pann");
    $(".class_hr").toggleClass("switch_class_hr");
    $(".w3-pale-red").toggleClass("w3-pale-blue");
});
