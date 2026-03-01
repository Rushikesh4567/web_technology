document.getElementById("focusForm").addEventListener("submit", function(event) {

    event.preventDefault(); 

    let study = parseFloat(document.getElementById("study").value);
    let phone = parseFloat(document.getElementById("phone").value);
    let sleep = parseFloat(document.getElementById("sleep").value);

    let focusScore = (study * 10) + (sleep * 5) - (phone * 8);

    if (focusScore < 0) focusScore = 0;
    if (focusScore > 100) focusScore = 100;

    let resultBox = document.getElementById("resultBox");

    if (focusScore >= 70) {
        resultBox.style.backgroundColor = "#28a745";
        resultBox.style.color = "white";
        resultBox.innerHTML = "🔥 High Focus! Score: " + focusScore;
    }
    else if (focusScore >= 40) {
        resultBox.style.backgroundColor = "#ffc107";
        resultBox.style.color = "black";
        resultBox.innerHTML = "⚡ Moderate Focus. Score: " + focusScore;
    }
    else {
        resultBox.style.backgroundColor = "#dc3545";
        resultBox.style.color = "white";
        resultBox.innerHTML = "⚠️ Low Focus! Score: " + focusScore;
    }

});