# Desafio Latam: Testing

The Nanacao Cafeteria has failures in its administration system, so it requests that tests be carried out to verify that all functionalities are working correctly.

In this challenge, testing must be performed to test the different routes existing in the REST API with JEST and the supertest package.

The server provides the following routes:

- `GET: /cafes` : Returns an array of objects
- `GET: /cafes/:id`: Returns a specific coffee
- `POST: /cafes/:id` : Allows to add a new coffee
- `PUT: /cafes/:id` : Allows to update the information of a coffee
- `DELETE: /cafes/:id` : Allows to delete a coffee from the json file

<br>

jest.config.js + ES6 modules
-------

JEST must be configured to be used with ES6 Modules, for that a file containing the configuration must be created.

The file is `jest.config.js` and must be at the root of the project.

``` js
export default {
    testEnvironment: "jest-environment-node",
    transform: {},
};
```

<br>

TESTING
-------
Inside the "tests" folder is the file that performs the tests to verify the different routes of the REST API.

To execute the tests run: `npm run test-exit` in the terminal.

<br>

Backend
-------

- [Node.js](https://nodejs.dev/)


Dependencies
-------

- Framework [Express](https://expressjs.com/es/)
- JavaScript Testing Framework: [Jest](https://jestjs.io/)
- Library for testing node.js HTTP servers: [Supertest](https://www.npmjs.com/package/supertest)
- To install dependencies run: `npm install` 
- Tu run the server: `npm start`
- To run test: `npm run test-exit`

<br>

**Important: You do not have to run the server in order to run the tests, because the test package does it by itself.**
