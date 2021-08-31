


/*
var scienceLvls = {
    {"Biology", "Honors Biology"},
    {"Chemistry", "Hon Chemistry"},
    {"Physics", "Hon Physics", "AP Chemistry", "AP Biology", "Meteorology", "Environmental Science", "Astronomy"},
    {}
}

for (i = 0; i < scienceLvls.length; i++) {

    for (j = 0; j < scienceLvls[i].length; j++) {
        var course = document.createElement("div");
        course.className = "course science";
        course.id = scienceLvls[i][j];
        course.innerHTML = scienceLvls[i][j];
        console.log(course);
        body.appendChild(course);
    }
}
*/
console.log(document.getElementById("Astronomy"));



$(".course").draggable({snap: ".courseCell *"});

$("#spanish4").mouseleave( function() {
    console.log($('#spanish4').offset().left);
    console.log($('#spanish4').offset().top);
    if ($('#spanish4').offset().left == 514) {
        if ($('#spanish4').offset().top == 1750) {
            $('#spanish4').css("outline", "3px solid red");
            document.getElementById("spanish4").innerHTML = "Spanish IV (Missing Spanish III)";
            }
    }

});


//elements pop out when hovered over/dragged
/*
$(".course").on( "mouseenter", function() {


    $(".course").css( "width", 122 + 'px')
    $(".course").css( "height", 122 + 'px')
    $(".course").css( "font-size", 80 + '%')
    $(".course").css( "line-height", 80 + 'px')
    $(".course").css( "transform", 'translate(-50%, -50%)')

});

$(".course").on( "mouseleave", function() {


    $(".course").css( "width", 61 + 'px')
    $(".course").css( "height", 61 + 'px')
    $(".course").css( "font-size", 40 + '%')
    $(".course").css( "line-height", 40 + 'px')

});
*/

// snaping courses to courseGrid



















