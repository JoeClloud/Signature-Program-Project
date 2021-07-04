

var scienceConn = {
    "Biology": ["Chemistry", "Hon Chemistry"],
    "Honors Biology": ["Chemistry", "Hon Chemistry"],
    "Chemistry": ["Physics", "Hon Physics", "AP Chemistry", "AP Biology", "Meteorology", "Environmental Science", "Astronomy"],
    "Hon Chemistry": ["Physics", "Hon Physics", "AP Chemistry", "AP Biology", "Meteorology", "Environmental Science", "Astronomy"],
    "Physics": [],
    "Hon Physics": [],
    "AP Chemistry": [],
    "AP Biology": [],
    "Meteorology": [],
    "Environmental Science": [],
    "Astronomy": []


    };

var scienceLvls = {
    {"Biology", "Honors Biology"},
    {"Chemistry", "Hon Chemistry"},
    {"Physics", "Hon Physics", "AP Chemistry", "AP Biology", "Meteorology", "Environmental Science", "Astronomy"},
    {}
}

for (i = 0; i < scienceLvls.length; i++) {

    for (j = 0; j < scienceLvls[i].length; j++) {}
        var course = document.createElement("div");
        course.className = "course science";
        course.id = scienceLvls[i][j];
        course.innerHTML = scienceLvls[i][j];
        console.log(course);
        body.appendChild(course);
    }
}

console.log(document.getElementById("Astronomy"));





