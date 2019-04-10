/*
Hunter Harris
April 9, 2019
INFO 2220
Jon Holmes
Assignment 9
Purpose: This is a JS page used for manipulating and using local storage in various ways
*/
var people = [];

$(document).ready(function () {

    //Check for any remembered username
    var remembered = localStorage.getItem("username");
    $("#txtUserName").val(remembered);
    if (remembered !== null) {
        $("#chkRemember").prop("checked", "true");
    }

    //Check for people in storage
    people = JSON.parse(localStorage.getItem("people"));
    if (people !== null) {
        displayPeople();
    } else {
        people = [];
    }

    //Validate login info and check if we need to remember the username
    $("#btnLogin").on("click", function () {
        var username = $("#txtUserName").val();
        var password = $("#txtPassword").val();
        if (username === "weaver" && password === "tester") {
            alert("You logged in");
            if ($("#chkRemember").prop("checked")) {
                localStorage.setItem("username", username);
            } else {
                localStorage.removeItem("username");
            }
        } else {
            alert("Login failed");
        }
        location.reload();
    });

    //Remove any remembered usernames from storage
    $("#btnForget").on("click", function () {
        localStorage.removeItem("username");
    });

    //Add a person
    $(".btnAdd").on("click", addPerson);

    //Clear the people
    $("#btnClear").on("click", function () {
        localStorage.removeItem("people");
        location.reload();
    });

    //Save edited person
    $(".btnSave").on("click", savePerson);


    function addPerson() {
        people.push({
            "name": $("#txtName").val(),
            "age": $("#nmbAge").val(),
            "phone": $("#txtPhone").val(),
            "group": $("input[name='group']:checked").val()
        });
        storePeople();
        resetForm();
        displayPeople();
    }

    function editPerson(e) {
        e = e || window.event;
        var trg = $(e.target) || $(event.srcElement);
        var index = trg.data("index");
        var person = people[index];
        $("#txtName").val(person.name);
        $("#txtPhone").val(person.phone);
        $("#nmbAge").val(person.age);
        $("input[name='group'][value=" + "'" + person.group + "'" + "").prop("checked", true);
        $(".btnAdd").text("Save Changes");
        $(".btnAdd").data("index", index);
        $(".btnAdd").off("click").on("click", savePerson);
    }

    function savePerson(e) {
        e = e || window.event;
        var trg = $(e.target) || $(event.srcElement);
        var index = trg.data("index");
        people[index].name = $("#txtName").val();
        people[index].phone = $("#txtPhone").val();
        people[index].age = $("#nmbAge").val();
        people[index].group = $("input[name='group']:checked").val()
        trg.removeData("index");
        trg.text("Add Person");
        trg.off("click").on("click", addPerson);
        storePeople();
        resetForm();
        displayPeople();
    }

    function displayPeople() {
        var list = $("#peopleInStorage");
        list.html("");
        $.each(people, function (ndx, person) {
            //Create the contact cards and add them to the list
            var item = $("<li>").addClass("cntctList");
            var card = $("<div>").addClass("cntctCard");
            card.append($("<img>").attr("src", "images/contact-photo.png").addClass("cntctPhoto"));
            card.append($("<p>").text(person.name).addClass("cntctName").addClass("cntctGroupColor" + person.group));
            card.append($("<p>").text(person.age).addClass("cntctAge"));
            card.append($("<p>").text(person.phone).addClass("cntctPhone"));
            card.append($("<p>").text(person.group).addClass("cntctGroup" + person.group).addClass("cntctGroupColor" + person.group));
            if (document.getElementById("main") !== null) {
                card.append($("<button type='button'>").text("Edit").addClass("btnEdit").data("index", ndx).on("click", editPerson));
            }
            item.append(card);
            list.append(item);
        });
    }

    function resetForm() {
        //Remove data from form
        $("#txtName").val("");
        $("#txtPhone").val("");
        $("#nmbAge").val("");
        $("input[name='group']").prop("checked", false);
    }

    function storePeople() {
        localStorage.setItem("people", JSON.stringify(people));
    }
});