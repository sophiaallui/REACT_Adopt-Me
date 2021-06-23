# Intro to React:

Project is from Frontend Masters: Completed Intro to React, v5. The goal of taking this course is to understand/be exposed to the basics of React for my internship project. Just this past quarter, I was first introduced to Javascript, HTML, and CSS, along side with ShadowDOM, and jest/unit testing/puppeteer from my SP '21 course: CSE 110 Software Engineering. From my brief expose to Javascript and now React, I was able to understand most of the structure, and learned more about React.

## Some Issues I Had...

1. minor issues with the syntax that led to an hour worth of debugging

2. Dependancies:

   a. @babel:javascript compiler: The issue I encountered was that it was missing a plugin. I arrived to this conclusion by checking out inspect, and saw this error message:

   > regeneratorRuntime is not defined

   Searched through Stack Overflow, and found from [this post](https://stackoverflow.com/questions/53477466/react-referenceerror-regeneratorruntime-is-not-defined) that I should install another babel plugin:

   `npm install @babel/plugin-transform-runtime`

   which meant, I also needed to add this to the dependancies:

   .babelrc > plugins:
   ` "@babel/plugin-transform-runtime"`

   Additionally, I used [this GitHub issue](https://github.com/btholt/complete-intro-to-react-v5/issues/58) from the course to confirm the fix after I saw the suggestion from Stack Overflow.

## Interesting Findings:

1.  Error Boundary: Used to catch errors, code is from [reactjs.org](reactjs.org/docs/error-boundaries.html)

    Spread Operator: `...`

    This is used for props inside of
    [Details.js](https://github.com/sophiaallui/REACT_Adopt-Me/blob/main/src/Details.js).

    ErrorBoundary was called inside of Details.js to catch the errors from the different components, specifically when the class is exported. If ErrorBoundary was called inside of the Details class component, the error can probably be caught up until the carousel, and not the rest since there are many nested parts within details due to it not being under its child component tree. In order to catch the errors from the overall class, ErrorBoundary is called when the class is exported so that it can be applied to all of Details.

2.  Unary plus `+`:

    I briefly learned about unary operations from one of my course, and it was cool to see it used in practice. In this project, it was used to convert the string value of the index that was collected from the API source into an actual digit so it can be used to find the index on my end.

    ```
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        });
    };
    ```

3.  Hook

4.  Context

5.  Miscellanious:
    Arrow functions for hooks and event listeners
