import express from "express";
const app = express();

app.use(express.json());

app.post("/feedback", (req, res) => {
    console.log(req.body);
    res.send("Feedback received");
});

app.listen(3000);