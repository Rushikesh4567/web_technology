    let sentence = "JavaScript is powerful and fun";
    alert("Type this sentence exactly:\n\n" + sentence);

    let startTime = new Date().getTime();

    let userInput = prompt("Start typing:");

    let endTime = new Date().getTime();

    let timeTaken = (endTime - startTime) / 1000; // seconds

    let words = sentence.split(" ").length;
    let wpm = (words / timeTaken) * 60;

    if (userInput === sentence) {
        alert("Correct!\nTime: " + timeTaken + " seconds\nSpeed: " + Math.round(wpm) + " WPM");
    } 
    else {
        alert("Incorrect typing.\nTime: " + timeTaken + " seconds");
    }



