# Gemini Casino Affiliate Redirect

A modern affiliate landing page and tracking backend for Gemini Casino, ready to deploy on Render.

## Features

- Branded Gemini Casino design: bold neon colors, dashboard-style layout
- 6-second countdown auto-redirect to: [https://geminicasino.com/?registration=true&promo=FB888](https://geminicasino.com/?registration=true&promo=FB888)
- Tracks page views and "Proceed" clicks, logging timestamp, IP, and user agent
- Extendable: subaffiliate, UTM tracking, A/B testing, pixel analytics, more

## Project Structure
/
├── index.html       # Landing page (countdown, event/logger script)
├── server.js        # Node.js/Express backend for API/event tracking
├── package.json     # Project definition and Express dependency
├── /logs
│   └── events.json  # (auto-created) stores all tracked events
└── README.md        # This file
## Getting Started (Local)

1. Clone this repository:  
   `git clone https://github.com/YOUR_USERNAME/gemini-affiliate-redirect.git`
2. Install dependencies:  
   `npm install`
3. Start the server:  
   `node server.js`
4. Visit `http://localhost:3000` in your browser.

## Deploying to Render

1. Push your files to GitHub.
2. Go to [Render.com](https://render.com), choose **Web Services**.
3. Connect your GitHub repository.
4. Use `node server.js` as your Start Command.
5. Complete setup—your live affiliate site will be deployed!

## Customization

- Change promo link or styles in `index.html`.
- Add analytics or upgrade backend in `server.js`.

---

**Every redirect is credited to your main affiliate link: [FB888]. All analytics/events are stored in `/logs/events.json`.**
