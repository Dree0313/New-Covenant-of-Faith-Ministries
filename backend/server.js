const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let events = [];

function generateSundays() {
    const today = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);
    
    let newEvents = [];
    let current = new Date(today);

    current.setDate(current.getDate() + (7 - current.getDay()) % 7);

    while (current <= oneMonthLater) {
        if(current.getDay() === 0) {
            newEvents.push({
                title: "Sunday Worship",
                date: current.toISOString().split("T")[0],
                time: "10:00 AM",
                location: "Main Sanctuary"
            });
        }
        current.setDate(current.getDate() + 1);
    }

    newEvents.forEach(e => {
        if (!events.find(ev => ev.date === e.date)) {
            events.push(e);
        }
    });
}

app.post("/generate-sundays", (req, res) => {
    generateSundays();
    res.json({ message: "Sundays generated for the next month!", events });
});

app.get("/events", (req, res) => {
    console.log("Sending events:", events);
    res.json(events);
});

app.delete("/events/:date", (req, res) => {
    const { date } = req.params;
    events = events.filter(ev => ev.date !== date);
    res.json({ message: "Event deleted", events });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
    generateSundays();
});
