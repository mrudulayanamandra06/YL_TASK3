# EcoTrace | Enterprise Sustainability Dashboard

## Project Overview
"EcoTrace" is an enterprise-grade sustainability tracking interface developed for the Frontend Web Developer Internship. This project demonstrates the progression from a static responsive layout (Week 2) to a fully interactive, stateful web application using Vanilla JavaScript (Week 3). The dashboard utilizes a modern "Biophilic" design concept, integrating natural imagery with frosted glass overlays to create a calm, data-focused user experience.

## Key Features
*Interactive SPA Routing: Utilizes Vanilla JavaScript event listeners to simulate a Single Page Application (SPA). Users can seamlessly transition between Overview, Analytics, and Reports tabs without page reloads.
*Dynamic Impact Simulator: An interactive CO2 offset calculator that captures user inputs, performs strict form validation (handling empty or negative inputs), calculates environmental impact in real-time, and reveals results using the Web Animations API.
*Biophilic UI/UX: Features a custom earthy color palette, elegant typography pairings (Lora & Nunito Sans), and modern CSS3 techniques including `backdrop-filter` to create a readable "frosted glass" effect over a high-resolution nature background.
*Fully Responsive: Adapts flawlessly to mobile, tablet, and desktop viewports using a mobile-first CSS architecture utilizing CSS Grid and Flexbox.

## Tech Stack
*HTML5: Semantic structure ensuring accessibility and clean DOM hierarchy.
*CSS3: Custom styling, Media Queries (`@media`), CSS Variables, and advanced pseudo-elements (`::before`).
*Vanilla JavaScript: DOM manipulation, event handling, form validation, and native web animations. No external libraries or frameworks were used.

## File Structure
* `index.html` - The core semantic layout and structural foundation.
* `style.css` - All visual styling, responsive breakpoints, and frosted-glass background integration.
* `script.js` - The logical engine powering the SPA tab routing and the interactive Impact Simulator.

## How to Run
This project requires no build tools, package managers, or external dependencies. 
1. Download or clone the repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in any modern web browser to view the dashboard.
