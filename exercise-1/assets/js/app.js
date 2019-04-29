var color = "black";

$(".bar").click(function() {
    if ($(this).hasClass("selected"))
        $(this).removeClass(`selected ${color}`);
    else
        $(this).addClass(`selected ${color}`);
});