import "./App.css";
import Lesson_02 from "./lessons/Lesson_2/Lesson_02"; //Lesson
import Card from "./components/Card/Card";



//Homeworks

function App() {
  return (
    <div className="app">
      {/* {Lesson_02} */}
      <Lesson_02 />

      {/* {Homeworks} */}
      <Card/>
      <Card/>
      <Card/>
      
      
    </div>
  );
}

export default App;
