//                               Event delegation

// Capturing and bubbling allow us to implement one of the most powerful
// event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them –
// we put a single handler(onClick,onChange etc.) on their common ancestor.

// In the handler we get event.target to see where the event actually happened and handle it.

// Here in below example, we gave only one onClick handler to parent instead of giving to buttons.
// We don’t need to write the code to assign a handler to each button.
// Just make a method and put it in the markup.

import React, { useState } from "react";
const EventDelegationPropagation = () => {
  const [counter, setCounter] = useState(0);

  const Adding = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const Subtracting = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const HandleClick = (event) => {
    // Here currentTarget and target results will be different.
    console.log(event.currentTarget, "event.currentTarget");
    console.log(event.target, " event.target");
    console.log(event.target.dataset, "dataset");
    alert(`${event.currentTarget} "event.currentTarget" `);
    alert(`${event.target} , "event.Target"`);
    alert(`${event.target.dataset}, "event.Target.dataset"`);

    let action = event.target.dataset.action;
    if (action === "Adding") {
      Adding();
    } else if (action === "Subtracting") {
      Subtracting();
    } else {
      return;
    }
    console.log(action, "action");
  };
  return (
    <div
      style={{ textAlign: "center", marginTop: "100px" }}
      onClick={(e) => HandleClick(e)}
    >
      Conunt: {counter}
      <br />
      {/*  // Here currentTarget and target results will be same. */}
      {/* <button data-action="Adding" onClick={(e)=>{
        console.log(e.target,'target')
        console.log(e.currentTarget,' current target')

      }}>Add</button> */}
      <button autoFocus data-action="Adding">
        Add
      </button>
      <br />
      <button autoFocus data-action="Subtracting">
        Subtract
      </button>
    </div>
  );
};

export default EventDelegationPropagation;

// It’s often used to add the same handling for many similar elements, but not only for that.

//                   The algorithm:

// Put a single handler on the container.
// In the handler – check the source element event.target.
// If the event happened inside an element that interests us, then handle the event.

//                                event.target & event.currentTarget

// event.target : is the most deeply nested element that caused the event.

// event.currentTarget : is the element that listens to the event
//  (where the event listener is attached to).

// A handler on a parent element can always get the details about where it actually happened.

// The most deeply nested element that caused the event is called a target element, accessible as event.target.

// Note the differences from this (=event.currentTarget):

// event.target – is the “target” element that initiated the event,
// it doesn’t change through the bubbling process.

// this – is the “current” element, the one that has a currently running handler on it.
// For instance, if we have a single handler form.onclick, then it can “catch” all clicks
//  inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.

// In form.onclick handler:

// this (=event.currentTarget) is the <form> element, because the handler runs on it.
// event.target is the actual element inside the form that was clicked.

// Remember: The element that triggers the event is not always the same as
// the element that has the event listener attached to it.
