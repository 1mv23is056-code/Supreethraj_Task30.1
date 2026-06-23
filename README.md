# Task30 — Simple React Router App (student version)

This is a small app I built to learn React Router. It's intentionally simple — I wrote it myself to practice.

Routes included:
- `/` → Home
- `/dashboard` → Dashboard
- `/login` → Login
- `/signup` → Signup
- Unknown routes show a basic "Page not found" message

How it works (short):
- I use `NavLink` for the menu so the active link gets a different style.
- `Routes` and `Route` map paths to components.
- The `*` route is a fallback that shows a NotFound page.

Run locally:
```bash
npm install
npm run dev
```

If something about React Router confused you, tell me which part and I will explain it in simpler steps.
