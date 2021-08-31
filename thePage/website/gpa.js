


function updateAvgs() {

    var elements = document.getElementsByClassName("foreign-language-past-grade");
    var avg = (elements[0].value/3 + elements[1].value/3 + elements[2].value/3).toFixed(2);
    document.querySelector("#avgrade1").innerHTML = avg;
    document.querySelector("#discrepancy1").innerHTML = (avg - document.getElementById("desiredGrade1").value).toFixed(2);

    var elements = document.getElementsByClassName("science-past-grade");
    var avg = (elements[0].value/3 + elements[1].value/3 + elements[2].value/3).toFixed(2);
    document.querySelector("#avgrade2").innerHTML = avg;
    document.querySelector("#discrepancy2").innerHTML = (avg - document.getElementById("desiredGrade2").value).toFixed(2);

    var elements = document.getElementsByClassName("history-past-grade");
    var avg = (elements[0].value/3 + elements[1].value/3 + elements[2].value/3).toFixed(2);
    document.querySelector("#avgrade3").innerHTML = avg;
    document.querySelector("#discrepancy3").innerHTML = (avg - document.getElementById("desiredGrade3").value).toFixed(2);

    var elements = document.getElementsByClassName("english-past-grade");
    var avg = (elements[0].value/3 + elements[1].value/3 + elements[2].value/3).toFixed(2);
    document.querySelector("#avgrade4").innerHTML = avg;
    document.querySelector("#discrepancy4").innerHTML = (avg - document.getElementById("desiredGrade4").value).toFixed(2);

    var elements = document.getElementsByClassName("maths-past-grade");
    var avg = (elements[0].value/3 + elements[1].value/3 + elements[2].value/3).toFixed(2);
    document.querySelector("#avgrade5").innerHTML = avg;
    document.querySelector("#discrepancy5").innerHTML = (avg - document.getElementById("desiredGrade5").value).toFixed(2);


}
updateAvgs();



var years = 4;

var year1;
var year2;
var year3;
var year4;

function addYear() {

    if (years == 1) {
        $("#gradeCalculator").append(year2);
        years++;
        $("#right_analysis").css("left", "+=60");
    }
    else if (years == 2) {
        $("#gradeCalculator").append(year3);
        years++;
        $("#right_analysis").css("left", "+=60");
    }
    else if (years == 3) {
        $("#gradeCalculator").append(year4);
        years++;
        $("#right_analysis").css("left", "+=60");
    }

}

function removeYear() {

    if (years == 2) {
        year2 = $(".year2").detach();
        years--;
        $("#right_analysis").css("left", "-=60");
    }
    if (years == 3) {
        year3 = $(".year3").detach();
        years--;
        $("#right_analysis").css("left", "-=60");
    }
    if (years == 4) {
        year4 = $(".year4").detach();
        years--;
        $("#right_analysis").css("left", "-=60");
    }

}








