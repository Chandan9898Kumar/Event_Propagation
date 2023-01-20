import { useRef, useState, useEffect } from "react";
import React from "react";

//  UseRef : Basically it store the reference of an element not its value,to store value useState used.

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.
// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).
// It's like doing this: const count = {current: 0}. We can access the count by using count.current.

export default function UseRefExample() {
  const [data, setData] = useState("");
  const [newdata, setNewData] = useState("");
  const [newThirdData, setNewThirdData] = useState("");

  //          Image Builder  App
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  //

  const count = useRef(0);
  const inputDom = useRef("");
  const ThirdInput = useRef("Desi");
  const fourthInput = useRef("input");
  const fifthInput = useRef("input");

  // const [count, setCount] = useState(0);
  // Here if we remove [] from useEffect,then it will
  // go in infinite loop. below

  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  // now to handle it ,we will use useRef.Here we useEffect will run once
  // and also whenever we change state (setData) while typing
  // useEffect will run. if we had used setCount in useEffect
  // then it would created infinite loop. like above ⬆ ️ code.

  useEffect(() => {
    // here count is rendering current as an object and count.current initially is 0, which we have set .
    // here count is not referring to anything, and inputDom ,ThirdInput,fourthInput are referring to
    // input filed (element) bottom 🔽 .
    console.log(count, "count >>>>>>>>>>>>>>>>");
    count.current = count.current + 1;
  });

  //       Or we can use like below :

  // useEffect(() => {
  //   count.current = count.current + 1;
  // },[count.current]);

  //   Now to access dom or manipulate dom we are using useRef. By clicking this function
  //   you can put console at return and check it will not re-render whenever button is hit.
  //   as we have given  "inputDom" as ref to input field.
  //   useRef is used here which prevent re-rendering.

  const handleClick = (e) => {
    // here current is an object and  it is referring to the input element (filed)
    e.preventDefault();
    console.log(inputDom, "inputDom      >>>>>>");
    console.log(e, "       event                >>>>>>");

    // we want to change is background color then :
    inputDom.current.style.backgroundColor = "gray";
    // we want to focus when Inputfield  is clicked then :
    inputDom.current.focus();
    // by clicking setting input field value to 100.
    inputDom.current.value = 100;
  };

  const changeInputThird = (e) => {
    e.target.style.borderRadius = "20px";
    // Here we are again setting state and used event to set style and useRef as well
    setNewThirdData(e.target.value);
    ThirdInput.current.style.backgroundColor = "green";
    ThirdInput.current.style.color = "black";
    ThirdInput.current.focus();
    // we can modify anything like below and above.
    // e.target.disabled=true
  };

  const imageBuilder = () => {
    function handleClick() {
      console.log(isPlaying, "is play");
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);

//   Here useRef can access element video because we put reference their,so any properties 
//   of video element we can access with the help of useRef now, and even we can manipulate the as well.
//   first we change the width property of video from 250 to 100(manipulating).
//   we can add focus to video as well.
//   now we know that ref returns current as an object so we can add any key value pair their.for ex- height.
// as below you can see we used play() event of video,here we are accessing 
// and manipulating it to set state.
// in console you can see addition property we added and manipulated property as well.

      if (nextIsPlaying) {
        ref.current.play();
        ref.current.width='200';
        ref.current.focus();
        ref.current.style.float="center"
        ref.current.height='200'
      } else {
        ref.current.pause();
      }
    }

    return ( console.log(ref.current,'ref in return >>>>>>>>>'),
      <>
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button><br />
        <video
          width="250"
          ref={ref}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      </>
    );
  };

  return (
    console.log(
      "RE Render                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    ),
    (
      <>
        <div style={{ textAlign: "center" }}>
          {/* Below we are setting state,so at each value,page will render,and useEffect will call
        and count will increase */}
          <span>First Input element</span>
          <br />
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <br />
          <span>This Count will keep changing when there state changes</span>
          {"   "}
          <br />
          Count : {count.current}
          <br />
          <br />
          <br />
          {/*  Manipulate or access dom , we put ref (reference) property and with 
      the help of inputDom we can access values of this input field.
      Here also,if we type anything then setNewData function gets called and it will set state
      and hence useEffect gets called and count increases.
      */}
          <span>Second Input element</span>
          <br />
          <input
            ref={inputDom}
            type="text"
            value={newdata}
            onChange={(e) => {
              setNewData(e.target.value);
            }}
          />
          <br />
          <button onClick={handleClick}>Click</button>
          <br />
          <br />
          <br />
          <br />
          <span>Third Input element</span>
          <br />
          <input
            placeholder="Type Here"
            ref={ThirdInput}
            type="text"
            value={newThirdData}
            onChange={changeInputThird}
          />
          <br />
          <br />
          <br />
          <br />
          {/* Here we used input field,and refered it with useRef .
          now whenever we change input it will not render anything in return and 
          here we are not setting any state. just useRef .
          Here below "Your Input" will not show anything because we used useRef,
          hence it is not rendering anything but when we set any other state then it will show
          its value.try typing above input where we are setting state,then you will see changes.
          */}
          <span>Fourth Input element - Controlled</span>
          <br />
          Your Input : {"  "}
          {fourthInput.current.value}
          <br />
          <input
            placeholder="Type your query"
            type="text"
            value={fourthInput.current.value}
            ref={fourthInput}
            onChange={(e) => {
              // console.log(fourthInput.current.value,'fourthInput.current.value')
              fourthInput.current.value = e.target.value;
            }}
          />
          {/* All above examples of input are controlled  because we used "value and onChange event" 
 in the  input filed.
Now below 🔽 we are using uncontrolled  way of handling input with useRef,where no "value and onChange event"
will be given to input field.
when we type something in input filed and want to see its value,so Below we used button.

Here below "Your Input" will not show anything because we used useRef,
hence it is not rendering anything but when we set any other state then it will show
 its value.try typing above input where we are setting state,then you will see changes.
*/}
          <br />
          <br />
          <br />
          <br />
          <span>Fifth Input element - unControlled</span>
          <br />
          Your Input : {"  "}
          {fifthInput.current.value}
          <br />{" "}
          <input placeholder="Type your query" type="text" ref={fifthInput} />
          <br />
          <br />
          <button
            onClick={(e) => {
              console.log(
                fifthInput.current.value,
                "fifth input >>>>>>>>>>>>>"
              );
            }}
          >
            Click Here
          </button>
          <br />
          <br /><br /><br />
           
          {imageBuilder()}
          <br />
          
        </div>
      </>
    )
  );
}
