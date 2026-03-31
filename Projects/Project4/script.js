function startTest() 
{
    let score = 0;

    alert("Welcome to Personality Checker \nAnswer honestly!");

    let q1 = prompt("1. Do you prefer:\nA. Reading a book \nB. Party with friends ");
    if (q1 === "A" || q1 === "a") 
        score++;

    let q2 = prompt("2. When solving problems, you use:\nA. Logic \nB. Emotions ");
    if (q2 === "A" || q2 === "a") 
        score++;

    let q3 = prompt("3. You feel more energetic during:\nA. Night \nB. Morning ");
    if (q3 === "A" || q3 === "a") 
        score++;

    let q4 = prompt("4. You prefer:\nA. Planning everything \nB. Being spontaneous ");
    if (q4 === "A" || q4 === "a") 
        score++;

    let q5 = prompt("5. You enjoy:\nA. Working alone \nB. Working in a team ");
    if (q5 === "A" || q5 === "a") 
        score++;

    let q6 = prompt("6. In free time you choose:\nA. Learning something new \nB. Watching movies ");
    if (q6 === "A" || q6 === "a") 
        score++;

    let q7 = prompt("7. You make decisions based on:\nA. Facts & Data \nB. Gut Feeling");
    if (q7 === "A" || q7 === "a") 
        score++;

    let result;

    if (score >= 6) 
    {
        result = "You are a Highly Logical & Introverted Thinker ";
    }
    else if (score >= 3) 
    {
        result = "You are a Balanced Personality ";
    }
    else
    {
        result = "You are an Energetic & Social Personality ";
    }

    alert("Your Score: " + score + " / 7\n\nResult:\n" + result);
}
