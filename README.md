# Brown University Coding Exercise

## Running Without Dev Containers

**Note: This project is currently configured on Node v20.17.0 and NPM v10.8.2**

To build this project without Dev Containers, clone this repository and:
```bash
npm install
npm run build
npm run start
```

## Dev Containers

This project is also configured to run using VS Code's Dev Container extension to increase
portability. Cloning this repository manually and running in a Dev Container or using 
the in-built directives to do so allow for simplified containerization.

## Unit Testing

To run unit testing (Jest):
```bash
npm run test
```
Test results will be printed to terminal.

## Running Development Server

To run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Guide

This project generates a table of 100 randomized users. Awaiting API response, a loading circle is supplied.
Errors arising from the fetch call (if any) will be output to browser's console.

Once generated, the table has 3 sortable columns (first name, last name, date of birth). Clicking on these 
column headers, denoted with a bi-directional arrow. Clicking a sortable header will sort the table by that column,
in an ascending (a-z, 0-9) manner. Clicking the same column again will change the sorting order to descending (z-a, 9-0). The bi-directional arrow will change to uni-directional and denote the sorting order of that column.