import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div className="blog-div text-dark">
        <h2>Differences between uncontrolled and controlled components?</h2>
        <p>
          Controlled components are those that are designed to be actively
          monitored and adjusted in order to maintain a desired outcome. These
          components are typically subject to a set of predetermined rules or
          guidelines that dictate their behavior. Examples of controlled
          components include the thermostats in HVAC systems, the engine control
          units in automobiles, and the valves in a chemical processing plant.
          <br />
          <br />
          Uncontrolled components, on the other hand, are those that are not
          actively monitored or adjusted to maintain a specific outcome. They
          operate according to their natural behavior or the laws of physics,
          and their behavior may be influenced by external factors such as
          temperature, pressure, or humidity. Examples of uncontrolled
          components include the wind and waves in a natural environment, the
          flow of water in a river, and the behavior of organisms in an
          ecosystem.
        </p>
        <br />
        <h2>How to validate React props using PropTypes?</h2>
        <p>
          React PropTypes is a feature that enables you to specify the type and
          structure of props that are expected to be passed into a React
          component. PropTypes can help you catch errors in your code early by
          providing warnings when the wrong type of data is passed into a
          component. <br /> 
          To validate React props using PropTypes, you can follow
          these steps: <br /><br />
          1. Import the PropTypes module from the 'prop-types' package <br />
          2. Define the expected types and structure of your props using the PropTypes object. You can specify a variety of data types including strings, numbers, booleans, objects, arrays, and more. <br />
          3. If a prop doesn't meet the defined requirements, React will log a warning in the console <br /> <br />
          By using PropTypes to validate React props, you can catch errors early and ensure that your components are receiving the correct data types and structures.
        </p>
        <br />
        <h2>Tell us the difference between nodejs and express js.?</h2>
        <p>
        Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It uses an event-driven, non-blocking I/O model, making it a great fit for building scalable and high-performance applications. Node.js provides a range of core modules that can be used for tasks such as file system operations, networking, and cryptography. <br /> <br />
        Express.js, on the other hand, is a web framework that is built on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and template engines. Express.js allows developers to build web applications more easily and quickly by providing a simpler and more streamlined way to handle HTTP requests and responses.
        </p>
        <br />
        <h2>What is a custom hook, and why will you create a custom hook?</h2>
        <p>
        In React, a custom hook is a reusable function that allows you to encapsulate logic and stateful behavior that can be shared between components. Custom hooks are written using the same syntax as a regular JavaScript function, but with a few specific rules that enable them to be used in the context of a React component. <br /> <br />
        Custom hooks are useful because they allow you to separate concerns and encapsulate functionality into a single reusable unit. This can help you to write cleaner and more maintainable code, and avoid duplicating code across different components. Custom hooks can also help you to abstract away implementation details and make your components more declarative and expressive. <br /> <br />
        You might create a custom hook in React when you find yourself writing the same code over and over again across different components. By extracting this code into a custom hook, you can reuse the logic and stateful behavior across your application and make your code more modular and reusable. Custom hooks can also help to make your code more readable and maintainable by encapsulating complexity and making your components more focused and declarative.
        </p>
      </div>
    </>
  );
};

export default Blog;
