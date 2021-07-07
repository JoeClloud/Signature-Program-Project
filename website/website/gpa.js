


function updateGrades() {
    var grade1 = parseInt(document.getElementById("grade1").value);
    var grade2 = parseInt(document.getElementById("grade2").value);
    var grade3 = parseInt(document.getElementById("grade3").value);
    var grade4 = parseInt(document.getElementById("grade4").value);
    var grade5 = parseInt(document.getElementById("grade5").value);
    var grade6 = parseInt(document.getElementById("grade6").value);
    var grade7 = parseInt(document.getElementById("grade7").value);
    var goal = parseInt(document.getElementById("goal").value);

    var num = goal-(grade1+grade2+grade3+grade4+grade5+grade6+grade7)/7;

    document.querySelector(".bob").innerHTML = "Only "+num+" more points on average to get there";
}
