import React from "react";
import "./styles.css";
const EventBubblingPropagation = () => {
  const HandleOne = (e) => {
    // to stop bubbling, we use e.stopPropagation();

    // e.stopPropagation();
    console.log("one");
    alert("clicked Parent div");
  };

  const HandleTwo = (e) => {
    // e.stopPropagation();
    console.log("two");
    alert("clicked second div");
  };
  const HandleThree = (e) => {
    // e.stopPropagation();
    console.log("three");

    alert("Clicked third div");
  };
  return (
    <div>
      <div className="parentProperty" onClick={(e) => HandleOne(e)}>
        <span>This is Parent</span>
        <div className="childProperty" onClick={(e) => HandleTwo(e)}>
          <span> This is second outer</span>
          <div className="childOfChildProperty" onClick={(e) => HandleThree(e)}>
            <span> This is third outer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventBubblingPropagation;

//   Second example of event bubbling.

// import React, { useState } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
//       <button
//         onClick={(event) => {
//           event.stopPropagation();
//           setCounter((prevCounter) => prevCounter + 1);
//         }}
//       >
//         Counter value is: {counter}
//       </button>
//     </div>
//   );
// }

// export default App;
