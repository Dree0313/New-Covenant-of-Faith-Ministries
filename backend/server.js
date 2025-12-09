const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/events", (req, res) => {
    res.json([
        { title: "Sunday Worship", date: "2025-12-07", time: "10:00 AM", location: "Main Sanctuary" },
        { title: "Sunday Worship", date: "2025-12-14", time: "10:00 AM", location: "Main Sanctuary" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
