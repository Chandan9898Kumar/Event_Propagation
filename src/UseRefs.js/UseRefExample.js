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

  const count = useRef(0);
  const inputDom = useRef("");
  const ThirdInput = useRef("Desi");

  const fourthInput=useRef('input')

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
    console.log(count,'count >>>>>>>>>>>>>>>>')
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

  return (
    console.log(
      "RE Render                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    ),
    (
      <>
        <div style={{ textAlign: "center" }}>
          {/* Below we are setting state,so at each value,page will render,and useEffect will call
        and count will increase */}
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
          <span>Third Input element</span><br />
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
          here we are not setting any state. just useRef */}
          <span>Fourth Input element</span><br />
          <input
          placeholder="Type your query"
          type="text"
          value={fourthInput.current.value}
          ref={fourthInput}
          onChange={(e)=>{
            fourthInput.current.value=e.target.value
          }}
          />
        </div>
      </>
    )
  );
}
