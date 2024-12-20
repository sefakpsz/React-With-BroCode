// useEffect() React Hook that tells React to DO THIS CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value
// useEffect(function, [dependencies])
// 1. useEffect(() => { }) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useEffect } from "react";
import { useState } from "react";

function LearnUseEffectMeasure() {
  const [width, setWidth] = useState(window.innerHeight);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${width} x ${height}`;
  }, [height, width]);

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default LearnUseEffectMeasure;
