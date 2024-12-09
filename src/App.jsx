import Card from "./Card/Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student/Student.jsx";

function App() {
  return (
    <>
      <Card />
      <Button />
      <Student name="StudentName" age={24} isStudent={true} />
      <Student name="StudentName2" />
      <Student />
    </>
  );
}

export default App;
