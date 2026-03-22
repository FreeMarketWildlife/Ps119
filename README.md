# Ps119

Ps119 is a quiet-time web app starter for studying Psalm 119 one stanza at a time.

This first version is intentionally dependency-free so it can run on this Mac right away without installing Node.

## Run locally

1. Open Terminal.
2. Move into the project:

```bash
cd "/Users/tanoshi/Documents/github/Ps119"
```

3. Start a local server:

```bash
python3 -m http.server 8000
```

4. Visit [http://localhost:8000/index.html](http://localhost:8000/index.html).

You can still use the root URL, but `index.html` is the explicit app entry point.

## What is included

- A guided study flow for all 22 Psalm 119 stanzas
- A daily suggested stanza based on the calendar day
- Reflection prompts, prayer focus, and a simple practice step
- Local journaling saved in your browser with `localStorage`
- A quiet timer for focused time with the passage

## Project files

- `index.html` - the app shell and layout
- `styles.css` - the visual design and responsive layout
- `app.js` - Psalm 119 stanza data, state, rendering, and interactions

## Good next steps

- Add the full text of Psalm 119 in your preferred translation
- Decide whether we want to stay lightweight or migrate to React/Next.js later
- Add features like prayer history, verse memorization, or reading plans
