$(document).ready(function () {
    $("select").change(function () {
        var str = "";
        str = $(this).find(":selected").text();
        $(this).next(".out").text(str);
    }).trigger('change');
})