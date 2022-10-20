//This file won't work as its downloaded from the completed remote coursera lab server.
//To make this work, you have to create a fresh pacakage using npm then make the necessary changes
//to see the actual results.

import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>
        Task: Add three Card elements
        <Card h2="First Card's h2" h3="First card's h3" />
        <Card h2="Second Card's h2" h3="Second card's h3" />
        <Card h2="Third Card's h2" h3="Third card's h3" />
      </h1>
    </div>
  );
}

export default App;
