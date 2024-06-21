<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">TypeScript e React - Information</h3>
  <p align="center">Project created for <strong>Start2Impact</strong> course: <em>TypeScript e React</em></p>
</div>

### Built With

* [React](https://react.dev/)
* [Create React App](https://github.com/facebook/create-react-app)
* [Typescript](https://www.typescriptlang.org/)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#techincal">Technical decisions</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo

```sh
git clone git@github.com:matteorazzanelli/climatequiz-react-typescript.git
```

2. In the project directory you have to run

```sh
npm install && npm start
```

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Type

```sh
npm run build
```

To builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

<!-- USAGE -->
## Usage

- In the main page enter a valid name (at least 3 characters)
- Then press "START THE TEST"
- Select and option for all the 10 questions
- Click 'SHOW RESULTS' to check your result!


<!-- TECHINCAL -->
## Technical

- In order to handle typescript in react project the following command has been chosen

```sh
npx create-react-app my-app --template typescript
```

- The react-router-dom library is used to implement routing functionality among the steps of the application (i.e. login, test, result)
- When necessary a split between pages and components has been used to divide business logic from rendering 
- useState hook is used in Login page to handle user registration and error management in case an invalid name is typed
- A simple form is used in Login page to handle properly the login submission
- A useState hook is used for storing question data and checked or not information about the single answer
- HTML radio buttons are used for representing the multiple choise 
- handleChange function in Test.tsx is used to communicate from child to parent component
- A check on localstorage is used in all the pages to avoid that an unnamed user could fill the test
- Question.tsx component is used to render the single filed set html component with its question and all its possible answers
- A check (```givenAnswers.includes(-1)```) is done to allow the user to have a response only if the test is completed 
- To correctly check the types:
  - an interface ```IQuestionProp``` is used in Question.tsx component to avoid the parent component could send wrong parameter format
  - several type checking are used along the software to avoid improper use and to improve robustness of the application 


<!-- CONTACT -->
## Link & Contact

Matteo Razzanelli - matteo.razzanelli89@gmail.it

Start2impact personal page - https://talent.start2impact.it/profile/matteo-razzanelli