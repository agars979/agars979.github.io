var color = "black";
var drag = false;
var darkMode = false;

$(".outline").mousedown(function() {
    drag = true;
});

$(".outline").mouseup(function() {
    drag = false;
});

$(".bar").mouseover(function() {
    if (drag) {
        /*if ($(this).hasClass("selected"))
            $(this).removeClass(`selected ${color}`);
        else*/
            $(this).addClass(`selected ${color}`);
    }
});

$(".bar").click(function() {
    if ($(this).hasClass("selected"))
        $(this).removeClass(`selected ${color}`);
    else
        $(this).addClass(`selected ${color}`);
});

$("#toggle-bg").click(function() {
    darkMode = !darkMode;
    
    if (darkMode) {
        $(".outline").removeClass("light").addClass("dark");
        $(this).text("Light Mode");
    }
    else {
        $(".outline").removeClass("dark").addClass("light");
        $(this).text("Dark Mode");
    }
});