// Import React and useState hook
import React, { useState } from 'react';

// Define the main App component
function App() {
  // Define a state variable 'count' and a setter 'setCount' with initial value 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and increase count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Display the heading */}
      <h1>Hello, React!</h1>

      {/* Display the current count */}
      <p>You've clicked {count} times</p>

      {/* Button to trigger the handleClick function */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Export the App component as default
export default App;
