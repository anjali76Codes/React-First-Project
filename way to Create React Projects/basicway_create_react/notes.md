# Project Structure Overview

## Two Main Folders:
1. **public**
2. **src**

## public Folder
- **manifest.json**
  - For Progressive Web Apps (PWA).
  - Contains app info like name, icons, and colors for mobile devices.

- **index.html**
  - The main HTML file loaded by the server.
  - Acts as a container for the React app.
  - Has a root `<div>` (usually with id `root`) where the React app gets inserted.

## src Folder
- **index.js**
  - Entry point of the React app.
  - Renders the main component (`App`) into the root DOM node in `index.html`.
  - Imports `React` and `ReactDOM`.

- **App.js**
  - Functional component that serves as the root of the app.
  - Returns JSX (HTML-like code in JavaScript) that defines the app’s structure and content.

## Key Libraries

1. **React**
   - Core library for building user interfaces.
   - Allows creation of components (building blocks of a React app).
   - Uses a virtual DOM to optimize performance.

2. **ReactDOM**
   - Renders React components to the web.
   - Provides methods to render components to specific DOM nodes.



## How React Works

1. **App Component (App.js)**
   - The `App.js` file contains a function that returns HTML-like code (JSX).
   - This function defines what the UI will look like.

2. **Rendering the App (index.js)**
   - The `index.js` file imports `App.js`.
   - It uses `ReactDOM.render` to take the content from `App.js` and display it inside the root `<div>` in `index.html`.



## React-Scripts
- `react-scripts` comes from Create React App (CRA).
- Automatically adds `index.js` to `index.html` and allows adding more scripts.


## Naming Conventions
- **Function and Component Names**
  - Should start with an uppercase letter.
  - Helps React distinguish between HTML elements and custom components.

