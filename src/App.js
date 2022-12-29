import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import LoaderSpinner from "./Header/Loader";
const NavLinks = lazy(() => import("./Header/NavLink"));
const EventBubbling = lazy(() => import("./EventPropagation/EventBubbling"));
const EventCapturing = lazy(() => import("./EventPropagation/EventCapturing"));
const EventDelegation = lazy(() =>
  import("./EventPropagation/EventDelegation")
);

function App() {
  return (
    <div className="">
      <Suspense fallback={<LoaderSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<NavLinks />} />
            <Route exact path="/EventBubbling" element={<EventBubbling />} />
            <Route exact path="/EventCapturing" element={<EventCapturing />} />
            <Route
              exact
              path="/EventDelegation"
              element={<EventDelegation />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
