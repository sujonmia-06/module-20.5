function grade(number){
    if (number >= 80 && number <= 100){
        console.log("You've got 'A+'");
    }
    else if (number >= 70 && number <= 79){
        console.log("You've got 'A'");
    }
    else if (number >= 60 && number <= 69){
        console.log("You've got 'A-'");
    }
    else if (number >= 50 && number <= 59){
        console.log("You've got 'B'");
    }
    else if (number >= 40 && number <= 49){
        console.log("You've got 'C'");
    }
    else if (number >= 33 && number <= 39){
        console.log("You've got 'TeneTunePass / D'");
    }
    else if (number < 33 && number > 0){
        console.log("You've got 'F'");
    }
    else{
        console.log(`Are you sure about that? ${number}?`);
    }
}

grade(110);