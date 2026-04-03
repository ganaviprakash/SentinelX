# SentinelX

SentinelX is a real-time, responsive disaster awareness and alert platform. Built entirely as a frontend application, it simulates an AI-driven safety engine that analyses local risk scores, provides status alerts, and delivers actionable safety recommendations based on your location. 

Designed with a sleek, futuristic glassmorphism style, it serves as a top-tier hackathon-level demonstration of what modern web UI combined with smart mock data should look like.

## Features
- **🌐 Location Engine:** Choose a manual city input or utilize the HTML5 Geolocation API for automatic location tracking.
- **🚨 Simulated AI Risk Analysis:** Generates Risk Scores (0-100) dynamically depending on simulated hazard conditions (Flood, Earthquake, Wildfire, Cyclone).
- **🗺️ Interactive Dashboard Map:** Built-in Leaflet maps display dynamic threat radius overlays near your location.
- **🔊 Smart Voice Alerts:** Uses browser text-to-speech engine to read critical warning notifications aloud.
- **🎨 Glassmorphism & Dark Mode:** Uses Tailwind CSS for a premium 'Futuristic Protection System' aesthetic with dark mode support.
- **🦺 Safety Recommendation Matrix:** Automatically lists survival/safety guidelines based on whichever disasters are currently flagged.

## Technology Stack
- **Frontend Framework:** React 18 (via CDN)
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Inline SVGs (Lucide-inspired)
- **Maps:** Leaflet & OpenStreetMap (Standard CDN config)
- **Build System:** None! (Babel standalone compilation for pure rapid zero-dependency prototyping)

## How to Run

1. Simply pull this folder to your local machine:
   `SentinelX/`
2. Open `index.html` in your favorite modern browser (Chrome, Edge, Firefox, etc.)
   *Note: Using a tool like `Live Server` in VS Code is recommended to avoid any local CORS restrictions with the map tiles, but it is standardly plug-and-play.*

## File Overview
- `index.html`: Bootstraps standard configuration, React, and Tailwind.
- `app.jsx`: The core React logic and simulation engine, containing mapping components and the AI mock state handling.
- `styles.css`: Implements intricate details like glass filters and custom map layer properties.

## Architecture Highlights
The application relies on `MOCK_LOCATIONS` to simulate different states. For example:
- **Tokyo** triggers a moderate/high Earthquake warning.
- **Miami** triggers Floods and Cyclones.
- Random unknown inputs like ZIP Codes will randomize a plausible scenario to test out the UI's resilience.
