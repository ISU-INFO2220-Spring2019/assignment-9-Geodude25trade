/*
Hunter Harris
March 31, 2019
INFO 2220
Jon Holmes
Assignment 8
Purpose: This is a JS page for practicing AJAX calls
*/
$(document).ready(function () {
    $("#txtSearchInput").on("keyup", function (e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            search();
        }
    });

    $("#btnSearch").on("click", function () {
        search();
    });

    $("#txtSearchPeople").on("keyup", function () {
        searchPeople();
    });

    function search() {
        $.ajax({
            url: "data/books.json",
            success: function (data) {
                //Get the tbody in the table and clear everything in it
                var table = $("#searchResults").children("tbody");
                table.html("");
                var srch = new RegExp($("#txtSearchInput").val(), "i");
                //Loop through all of the data
                $.each(data, function (ndx, obj) {
                    var totalString = (obj.title + " " + obj.isbn + " " + obj.author.first + " " + obj.author.middle + " " + obj.author.last + " ");
                    for (var i = 0; i < obj.tags.length; i++) {
                        totalString += obj.tags[i] + " ";
                    }
                    //supports regular expressions
                    if (totalString.search(srch) != -1) {
                        //create the results
                        var row = $("<tr>");
                        row.append($("<td>").text(obj.title));
                        row.append($("<td>").text(obj.isbn));
                        row.append($("<td>").text(obj.author.last + ", " + obj.author.first + " " + obj.author.middle));
                        var tags = $("<ul>");
                        for (var i = 0; i < obj.tags.length; i++) {
                            tags.append($("<li>").text(obj.tags[i]));
                        }
                        row.append($("<td>").append(tags));
                        table.append(row);
                    }
                });
            },
            error: function (o, e) {
                alert(e);
            }
        });
    }

    function searchPeople() {
        $.ajax({
            url: "data/people.json",
            success: function (data) {
                //Get the list and clear its contents
                var list = $("#peopleOutput");
                list.html("");
                var srch = new RegExp($("#txtSearchPeople").val(), "i");
                $.each(data, function (ndx, obj) {
                    var totalString = (obj.name + " " + obj.phone);
                    //supports regular expressions
                    if (totalString.search(srch) != -1) {
                        //Create the contact cards and add them to the list
                        var item = $("<li>").addClass("cntctList");
                        var card = $("<div>").addClass("cntctCard");
                        card.append($("<img>").attr("src", "images/contact-photo.png").addClass("cntctPhoto"));
                        card.append($("<p>").text(obj.name).addClass("cntctName").addClass("cntctGroupColor" + obj.group));
                        card.append($("<p>").text(obj.age).addClass("cntctAge"));
                        card.append($("<p>").text(obj.phone).addClass("cntctPhone"));
                        card.append($("<p>").text(obj.group).addClass("cntctGroup" + obj.group).addClass("cntctGroupColor" + obj.group));
                        item.append(card);
                        list.append(item);
                    }
                });
            },
            error: function (o, e) {
                alert(e);
            }
        });
    }
});
