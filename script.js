let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();

    if (filter === "Harlem") {
        $("img").css("filter", "contrast(115%) brightness(120%)");
    } else if (filter === "Bushwick") {
        $("img").css("filter", "contrast(50%) brightness(180%)");

    } else if (filter === "SOMA") {
        $("img").css("filter", "contrast(50%) brightness(180%)");
    } else if (filter === "Sunset") {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    } else {
        alert("This is not a valid filter");
    }






});

$(".reset").click(function() {
    $("img").css("filter", "");
});