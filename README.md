## React Blog List (Class-Based)
A simple single-page blog listing app built using React class components, featuring real-time search functionality and styled to match a provided layout.

## Features
Display a list of blog posts

## Each post shows:

Blog image (fetched from Travel Triangle Blog)

Title

Short description

Real-time search functionality (case-insensitive)

Responsive and clean UI layout

## Tech Stack
React (Class Components)

State Management using this.state and lifecycle methods:
componentDidMount
componentDidUpdate

No backend – using a fake REST API (jsonplaceholder)

Styling with plain CSS or inline styles (no CSS frameworks)

## Layout Design
Refer to the provided design layout. The blog page includes:

A "Blog" heading at the top

A search input field

A vertical list of blog cards

Each blog card includes:

An image

A blog title

A short description

## API Details
Blog Posts:
GET https://jsonplaceholder.typicode.com/posts?_limit=10

→ Displayed using <h2> for the title and <p> for the description

## Blog Images:
Random travel-related images from the TravelTriangle blog (stored in a constant array)

## Project Structure

src/
├── components/
│   ├── BlogCard.js         // Renders individual blog cards
│   └── BlogCard.css        // Styling for BlogCard
│
├── pages/
│   ├── BlogList.js         // Class component with state, fetch, and search logic
│   ├── BlogList.css        // Styling for BlogList
│   ├── BlogDetail.js       // Optional: for individual blog post detail
│   └── BlogDetail.css      // Styling for BlogDetail
│
├── config/
│   ├── blogImages.js       // Array of blog image URLs
│   └── apiEndpoints.js     // API endpoint constants
│
├── App.js                  // Main app component
├── index.js                // Entry point
└── index.css               // Global styles
