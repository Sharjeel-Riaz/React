import { useState, useEffect } from "react";
import "./App.css";

// There are two types of components in react:
// 1. Functional Components (Used mostly)
// 2. Class Components (Not used anymore)

// Custom static functional component
const Car1 = () => {
  return (
    <>
      <h3>Brand: Audi</h3>
      <h4>Model: A3</h4>
      <h5>Year: 2016</h5>
      <h6>Price: 75 Lac PKR</h6>
    </>
  );
};

// Custom dynamic functional component
const Car2 = (props) => {
  return (
    <>
      <h3>Brand: {props.name}</h3>
      <h4>Model: {props.model}</h4>
      <h5>Year: {props.year}</h5>
      <h6>Price: {props.price}</h6>
    </>
  );
};

// Main Functional Component
const App = () => {
  //Variables
  const name = "John Doe";
  const isName = true;

  //Hook variables
  const [count, setCount] = useState(0);

  // Using useEffect hook to deal with side effects
  useEffect(() => {
    alert("You have updated your count to: " + count);
  }, [count]);

  return (
    <>
      <div className="App">
        <h1>Basics:</h1>
        {/* Using template literals to dynamically render JS inside HTML */}
        <h2>Hello, {name}!</h2>

        {/* Using conditional rendering to render JS inside HTML */}
        {isName ? (
          <>
            <h2>Hello (if true), {name}</h2>
          </>
        ) : (
          <>
            <h2>Hello (if false), someone</h2>
          </>
        )}

        {/* Using custom functional component */}
        <Car1 />

        {/* Using custom functional component with dynamic props */}
        <Car2 name="Toyota" model="Altis" year="2016" price="40 Lac PKR" />

        {/* Using state to create a counter button */}
        <h1>Hooks:</h1>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          +
        </button>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default App;
