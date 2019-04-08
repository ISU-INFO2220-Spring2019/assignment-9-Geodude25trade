/*
Hunter Harris
March 7, 2019
INFO 2220
Jon Holmes
Assignment 7
Purpose: This is a js page that is used for practicing jQuery
*/
$(document).ready(function () {
    $("#btnChangeSpan").on("click", function () {
        $("#spnOne").text("New Text for the Span");
    });
    $("#btnAppendToSpan").on("click", function () {
        $("#spnOne").append(" == Text at the back");
    });
    $("#btnPrependToSpan").on("click", function () {
        $("#spnOne").prepend("Text at the front -- ");
    });
    $("#btnBeforeSpan").on("click", function () {
        $("#spnOne").before("Text Before ++ ");
    });
    $("#btnAfterSpan").on("click", function () {
        $("#spnOne").after(" @@ Text After");
    });
    $("#btnShowSpan").on("click", function () {
        alert($("#spnOne").text());
    });
    $("#btnNumberPs").on("click", function () {
        var numPs = $("#divNumbers").children("p");
        for (var i = 0; i < numPs.length; i++) {
            numPs[i].prepend(i + ". ");
        }
    });
    $("#btnClassPSuccess").on("click", function () {
        var classPs = $("#divClass").children("p");
        for (var i = 0; i < classPs.length; i++) {
            $(classPs[i]).addClass("success");
        }
    });
    $("#btnClassPError").on("click", function () {
        var classPs = $("#divClass").children("p");
        for (var i = 0; i < classPs.length; i++) {
            if (i % 2 === 0) {
                $(classPs[i]).removeClass("success");
                $(classPs[i]).addClass("error");
            }
        }
    });
    $("#btnClassPWarning").on("click", function () {
        var classPs = $("#divClass").children("p");
        for (var i = 0; i < classPs.length; i++) {
            $(classPs[i]).removeClass();
            $(classPs[i]).addClass("warning");
        }
    });
    $("#btnAddLastNames").on("click", function () {
        var bff = $(".bff");
        bff.prev().append("<strong> Flinstone </strong>");
        bff.next().append("<del> the Dinosaur</del>");
        bff.append("<em> Rubble </em>");
    });
    $("#btnRemoveLarry").on("click", function () {
        $(".first").remove();
    });
    $("#btnClearCurly").on("click", function () {
        $(".second").text("");
    });
    $("#btnRemoveMoeLastName").on("click", function () {
        $(".third").children("span").remove();
    });
    $("#btnRemoveShempLastName").on("click", function () {
        $(".third").next("li").children("span").remove();
    });
    $("#btnChangeText").on("click", function () {
        //The span's parent's next sibling's second child of element type span
        $("#spnTwo").parent().next().children("span").eq(1).text("I was Changed");
    });
    $("#btnTogglePs").on("click", function () {
        var btnToggle = $("#btnTogglePs");
        $("p").toggle();
        //Uses class toggle as indicator of what button text should be
        btnToggle.toggleClass("itemsHid");
        if (btnToggle.hasClass("itemsHid")) {
            btnToggle.text("Show All Ps");
        } else {
            btnToggle.text("Hide All Ps");
        }
    });
});