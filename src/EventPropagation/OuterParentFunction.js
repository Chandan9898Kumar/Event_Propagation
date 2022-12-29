import React, { Fragment, useState } from "react";
import "./styles.css";
const FunctionTV = () => {
  const [channel, setChannel] = useState(1);
  const [shouldTurnOffTV, setTurnOffTV] = useState(false);

  // the parent div triggered if TV is turned OFF
  // clicking change channel or turning off TV won't trigger at the same time
  // because of event.stopPropagation() here
  const handleTurnOnTV = (event) => {
    console.log("In HandleTurnOnTV");

    if (shouldTurnOffTV) {
      event.stopPropagation();

      // I do not reset the channel by 1,Preserving the old value here.
      setTurnOffTV(false);
      //   setChannel(1);
    }
  };

  // the child change channel button triggered if TV is turned ON
  // clicking the parent div, or turning off TV won't trigger at the same time
  // because of event.stopPropagation() here
  const handleChangeChannel = (event) => {
    console.log("In HandleChangeChannel");

    if (!shouldTurnOffTV) {
      event.stopPropagation();

      // I increase the channel by 1, but you can do whatever you need here
      setChannel(channel + 1);
    }
  };

  // the turn off TV button is triggered
  // clicking the parent div or changing the channel won't trigger at the same time
  // because of event.stopPropagation() here
  const handleTurnOffTV = (event) => {
    console.log("In HandleTurnOffTV");

    event.stopPropagation();

    setTurnOffTV(true);
  };

  const renderChannel = () => {
    if (shouldTurnOffTV) {
      return (
        <div className="Hovering">
          That's it, no more TV time! {"         "}
          <br /> <button>Turn ON TV</button>
        </div>
      );
    }

    return (
      <Fragment>
        <div>Current Channel: {channel}</div>
        <button onClick={handleTurnOffTV}>Turn Off TV</button>
      </Fragment>
    );
  };

  return (
    <div className="OuterTrigger" onClick={handleTurnOnTV}>
      {renderChannel()}
      <hr />
      <button
        disabled={shouldTurnOffTV}
        className=" "
        onClick={handleChangeChannel}
      >
        Change Channel
      </button>
    </div>
  );
};

export default FunctionTV;

// And here’s what happens when we run the code:

// When we click Change Channel, the channel is increased. Notice that the other two event handlers do not run.
// When we click Turn Off TV, the UI changes and if we try to click anywhere outside the parent div, the other two event handlers do not run.
// When we click inside the outer parent div when the TV is turned off, only one event handler is run.
// Please note: In my example above I’m using state = {} instead of constructor(){...}. This is because when Babel (a JavaScript compiler) converts your React code, it spits out a constructor with everything inside.
