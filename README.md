![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=Chandan9898Kumar&how_icons=true)


![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=Chandan9898Kumar&theme=blue-green)



###  Note :                          Event  Propagation

`// The concept of event propagation was introduced to deal with the situations`
`// in which multiple elements in the DOM hierarchy with a parent-child relationship have`
`//  event handlers for the same event, such as a mouse click. Now,`
`//  the question is which element's click event will be handled first when the user clicks`
`// on the inner element: the click event of the outer element, or the inner element`

`                        Event Propagation has three phases:`

`// Capturing Phase - the event starts from the window down until it reaches the event.target(top to bottom)`

`// Target Phase - the event has reached the event.target. The most deeply nested element.`
`// that caused the event is called a target element, accessible as event.target.`

`// Bubbling Phase - the event bubbles up from the event.target element up until it reaches the window,`
`//  meaning: when an event happens on an element, it first runs the handlers on it,`
`// then on its parent, then all the way up on other ancestors.`
`//  That's the reverse of what is happening in the Capturing Phase(bottom to top).`


`                              Note Two`

 ###                       To use bubbling -:
Bubbling is as straightforward as with the normal DOM API;
simply attach a handler to an eventual parent of an element,
and any events triggered on that element will bubble to the parent,
just like in our example in the beginning.

###                       To use capturing -:
Capturing is just as straightforward, but instead of the onClick prop,you have to use onClickCapture on your element.


###                       event.stopImmediatePropagation()

`If an element has multiple event handlers on a single event,`
`then even if one of them stops the bubbling, the other ones still execute.`
`In other words, event.stopPropagation() stops the move upwards,`
`but on the current element all other handlers will run.`
`To stop the bubbling and prevent handlers on the current element from running,`
`there’s a method event.stopImmediatePropagation(). After it no other handlers execute(including parent).`


 ###        Which Events Do Not Bubble and How Are They Handled?

`blur (focusout is the same but it actually bubbles).`
`focus (focusin is the same but it actually bubbles).`
`mouseleave (mouseout is the same but it actually bubbles).`
`mouseenter (mouseover is the same but it actually bubbles).`
`load, unload, abort, error, beforeunload.`

### Add and install react-paginate as a dependency in your app.

$ npm install react-paginate --save
