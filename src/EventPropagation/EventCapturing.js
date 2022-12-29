import React from "react";
const EventCapturingPropagation = () => {
  // As we can see, the example below uses ‘onClickCapture’ instead of ‘onClick’,
  // telling React to use event capturing instead of event bubbling.
  // We can see the results in the console:
  function outerHandle() {
    alert("Parent modal called");
    console.log("outer");
  }

  function innerHandle() {
    alert("Child modal called");

    console.log("inner");
  }
  //  To use event Capturing we use onClickCapture handler

  // to use event bubbling we use onClick handler.

  // Note

  // The onClick handler in React enables you to call a function and performs
  // an action when an element is clicked in your app.

  return (
    <div
      onClickCapture={outerHandle}
      style={{ border: "5px red", backgroundColor: "pink" }}
    >
      This is Parent
      <div
        onClickCapture={innerHandle}
        style={{ border: "5px green", backgroundColor: "green" }}
      >
        This is child
      </div>
    </div>
  );
};

export default EventCapturingPropagation;

//                   Each handler can access event object properties:

// event.target – the deepest element that originated the event.
// event.currentTarget (=this) – the current element that handles the event
// (the one that has the handler on it)
// event.eventPhase – the current phase (capturing=1, target=2, bubbling=3).
