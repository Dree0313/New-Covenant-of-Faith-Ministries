const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Always prevent caching
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

/**
 * PURE function
 * No global state
 * Always generates fresh Sundays based on TODAY
 */
function generateSundays() {
    const events = [];
    const today = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);

    let current = new Date(today);
    const daysUntilSunday = (7 - current.getDay()) % 7;
    current.setDate(current.getDate() + daysUntilSunday);

    while (current <= oneMonthLater) {
        events.push({
            title: "Sunday Worship",
            date: current.toISOString().split("T")[0],
            time: "10:00 AM",
            location: "Main Sanctuary"
        });
        current.setDate(current.getDate() + 7);
    }

    return events;
}

/**
 * EVENTS ENDPOINT
 * Always fresh
 * No memory
 * No stale data
 */
app.get("/events", (req, res) => {
    const events = generateSundays();
    res.json(events);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
