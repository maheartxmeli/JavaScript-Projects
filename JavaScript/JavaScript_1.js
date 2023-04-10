function genre_function() {
    var genre_output;
    var genres = document.getElementById("genre_input").value;
    var genre_string = " is an awesome choice :)";
    switch(genres) {
        case "Alternative":
            genre_output = "Alternative" + genre_string;
        break;
        case "Rock":
            genre_output = "Rock" + genre_string;
        break;
        case "Pop":
            genre_output = "Pop" + genre_string;
        break;
        case "Rap":
            genre_output = "Rap" + genre_string;
        break;
        case "R&B":
            genre_output = "R&B" + genre_string;
        break;
        case "Country":
            genre_output = "Country" + genre_string;
        break;
        case "Jazz":
            genre_output = "Jazz" + genre_string;
        break;
        default:
            genre_output = "Please enter a genre exactly as written in the above list.";
    }
    document.getElementById("output").innerHTML = genre_output;
}

function Hello_World() {
    var x = document.getElementsByClassName("Click");
    x[0].innerHTML = "This is the new text :)";
}

function canvas_Function() {
    var c = document.getElementById("canvas_1");
    var cxt = c.getContext("2d");
    cxt.font = "50px Arial";
    cxt.strokeText("Aloha",10,50);
}

function gradient_canvas() {
    var g = document.getElementById("gradient_canvas");
    var context = g.getContext("2d");
    var gradient_canvas = context.createLinearGradient(0, 0, 170, 0);
    gradient_canvas.addColorStop(0, "black");
    gradient_canvas.addcolorStop(1, "white");
    context.fillStyle = gradient_canvas;
    context.fillRect(20, 20, 150, 100);
}

