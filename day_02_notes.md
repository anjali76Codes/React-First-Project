# React Documentation

- react.dev

# React Core Library

- for web development - react dom
- for app development - react native

# Node

npm - node package manager - allows to install libraries
npx - node package executer -
create-react-app -> it is a utility / software - it is a very bulky utility - gives things that are not required

# Creating react project using basics

- npx create-react-app basic_project

# package.json

- 1. react & react dom are the two core libraries
- 2. web-vitals - checks the speed of the application
- 3. scripts - used for running the application
  - start - to run application in browser
  - build - to convert react to html css js
  - test - to run all the necessary test cases
  - eject - export react project and then use other framework on it
- 4. linting - not error but not allowed cases underline
- 5. browser list - chrome, firefox,etc

# Run the project

- npm run start
- npm run build - creates a build folder static, css, js , etc files
  -- in production this build folder is served to the user and not the src folder

# Create react project using vite

- 1. npm create vite@latest
  - select all the options (name, react, javascript)
- 2. as we don't have node modules installed -> npm install
- 3. running -> npm run dev
- package.json:
  - dev dependencies - don't go in production just for our development