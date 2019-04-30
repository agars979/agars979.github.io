var color = "black";
var drag = false;

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