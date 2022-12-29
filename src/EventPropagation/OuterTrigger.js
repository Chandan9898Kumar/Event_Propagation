import React, { Fragment, Component } from "react";
import "./styles.css";

// Special Edge Case: What If You Need an Outer Parent to Fire too?
// Let’s take everything you learned and fix a special edge case so you can apply it in your next (or current) React app!

// 🤔 Say we want to have both of these work in our app:

// When a user clicks the inner div/button/etc. element, we want that event to trigger only (or in our example below, changing channels on the TV).
// When a user clicks the outer parent div, that parent’s event is triggered (this could be useful for a popup modal. When a user clicks outside the modal, you want the popup to close  –  or in our example below, a TV being turned back on).
// Currently, you know that if you click either the parent/child element, React’s SyntheticEvent system would trigger bubbling.

// You also know to stop this we can use event.stopPropagation().

// But we’re left with a dilemma.

// What if you want one event handler to trigger in one situation (our #1), and another event handler to trigger in another situation (#2)?

// ⚠️ If we use event.stopPropagation(), it would stop one event handler from triggering – but then you would never be able to call the other event handler in another situation. How can we fix this?

class TV extends Component {
  state = { channel: 1, shouldTurnOffTV: false };

  // the parent div triggered if TV is turned OFF
  // clicking change channel or turning off TV won't trigger at the same time
  // because of event.stopPropagation() here
  handleTurnOnTV = (event) => {
    console.log("In HandleTurnOnTV");

    const { shouldTurnOffTV } = this.state;

    if (shouldTurnOffTV) {
      event.stopPropagation();

      // I reset the channel by 1, but you can do whatever you need here
      this.setState({ shouldTurnOffTV: false, channel: 1 });
    }
  };

  // the child change channel button triggered if TV is turned ON
  // clicking the parent div, or turning off TV won't trigger at the same time
  // because of event.stopPropagation() here
  handleChangeChannel = (event) => {
    console.log("In HandleChangeChannel");

    const { channel, shouldTurnOffTV } = this.state;

    if (!shouldTurnOffTV) {
      event.stopPropagation();

      // I increase the channel by 1, but you can do whatever you need here
      this.setState({ channel: channel + 1 });
    }
  };

  // the turn off TV button is triggered
  // clicking the parent div or changing the channel won't trigger at the same time
  // because of event.stopPropagation() here
  handleTurnOffTV = (event) => {
    console.log("In HandleTurnOffTV");

    event.stopPropagation();

    this.setState({ shouldTurnOffTV: true });
  };

  renderChannel = () => {
    const { channel, shouldTurnOffTV } = this.state;

    if (shouldTurnOffTV) {
      return (
        <div className="Hovering">
          That's it, no more TV time! {"      "}
          <br /> <button>Turn ON Tv</button>
        </div>
      );
    }

    return (
      <Fragment>
        <div>Current Channel: {channel}</div>
        <button onClick={this.handleTurnOffTV}>Turn Off TV</button>
      </Fragment>
    );
  };

  render() {
    const { shouldTurnOffTV } = this.state;
    return (
      <div className="OuterTrigger" onClick={this.handleTurnOnTV}>
        {this.renderChannel()}
        <hr />
        <button disabled={shouldTurnOffTV} onClick={this.handleChangeChannel}>
          Change Channel
        </button>
      </div>
    );
  }
}

export default TV;
