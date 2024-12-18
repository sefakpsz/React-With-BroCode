// import Card from "./Card/Card.jsx";
// import Button from "./Button/Button.jsx";
// import Student from "./Student/Student.jsx";
// import UserGreeting from "./UserGreeting/UserGreeting.jsx";
// import List from "./List/List.jsx";
// import ProfilePicture from "./ProfilePicture/ProfilePicture";
// import MyComponent from "./MyComponent/MyComponent";
// import Counter from "./Counter/Counter";
// import OnChangeEventHandler from "./OnChangeEventHandler/OnChangeEventHandler";
// import ColorPicker from "./ColorPicker/ColorPicker";
// import CounterV2 from "./CounterV2/CounterV2";
// import UpdatingStateOfObject from "./UpdatingStateOfObject/UpdatingStateOfObject";
// import UpdatingStateOfArray from "./UpdatingStateOfArray/UpdatingStateOfArray";

import UpdatingStateOfArrayOfObject from "./UpdatingStateOfArrayOfObject/UpdatingStateOfArrayOfObject";

function App() {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pineapple", calories: 37 },
  // ];

  // const vegetables = [
  //   { id: 6, name: "potatoes", calories: 110 },
  //   { id: 7, name: "celery", calories: 15 },
  //   { id: 8, name: "carrots", calories: 25 },
  //   { id: 9, name: "corn", calories : 63 },
  //   { id: 10, name: "broccoli", calories: 50 },
  // ];

  return (
    <>
      <UpdatingStateOfArrayOfObject />
      {/*
      <UpdatingStateOfArray />
      <UpdatingStateOfObject />
      <CounterV2 />
      <ColorPicker />
      <OnChangeEventHandler />
      <MyComponent />
      <Counter />
      <ProfilePicture />
      <Button />
      <Card />
      {fruits.length && <List items={fruits} category="Fruits" />}
      {vegetables.length && <List items={vegetables} category="Vegetables" />}
      <Student name="StudentName" age={24} isStudent={true} />
      <Student name="StudentName2" />
      <Student />
      <UserGreeting isLoggedIn={true} username="MSK" /> */}
    </>
  );
}

export default App;
