const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let answers = [];

// POST - store answer
app.post("/answers", (req, res) => {
    const { answer } = req.body;

    if (!answer) {
        return res.status(400).json({ message: "Answer is required" });
    }

    const newAnswer = {
        id: answers.length + 1,
        text: answer
    };

    answers.push(newAnswer);

    res.json({
        message: "Answer saved successfully",
        data: newAnswer
    });
});

// GET answers
app.get("/answers", (req, res) => {
    res.json(answers);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});