import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [evenDetector, setEvenDetector] = useState(true);

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    const incrementedAge = age + 1;

    setAge(incrementedAge);

    if (incrementedAge % 2 == 0) setEvenDetector(true);
    else setEvenDetector(false);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is age is an even number ? --&gt; {evenDetector.toString()}</p>
    </div>
  );
}

export default MyComponent;
