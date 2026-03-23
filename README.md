# Ps119

This project should stay simple.

Do not make this pie-in-the-sky complicated.
Do not add extra layers just because we can.
Do not turn this into a feature pile.
Keep it clear, readable, and easy for a 10-year-old to use.
We can embellish later if we want.

## What the app does

- Shows the Psalm 119 reading for the current day in the 77-day plan
- Lets the user move backward or forward one day at a time
- Keeps the screen focused on the verses only
- Uses large left and right arrows for iPad, iPhone, Mac, and PC
- Defaults to NIV and includes a bottom-right NIV / ESV toggle
- Switches the whole page into dark mode when ESV is selected
- Lets the user highlight verse text, tap `Prayer of Application`, and save a short prayer on that day
- Remembers the last day opened on that device

## Study plan

The schedule follows Ken Aram's blueprint from June 21, 2026 through September 5, 2026.

## Run locally

```bash
cd "/Users/tanoshi/Documents/GitHub/Ps119"
python3 -m http.server 8000
```

Open [http://localhost:8000/index.html](http://localhost:8000/index.html).

## Notes

- The app automatically opens to today's scheduled day when the date matches the plan.
- If today is before June 21, 2026, it opens to Day 1.
- If today is after September 5, 2026, it opens to the last day.
- The app now uses the NIV and ESV Psalm 119 text provided for this project.
- NIV is the default view.
- ESV switches the whole page into dark mode.
- The prayer area saves in the browser on that device, one entry per day.
- The app reopens to the last day the user was on.
