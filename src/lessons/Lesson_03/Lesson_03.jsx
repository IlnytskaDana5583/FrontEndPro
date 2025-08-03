import "./styles.css";
// import "./data";
// import Homework_2 from "../../homeworks/Homework_2/Homework_2";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";


function Lesson_3() {
  const dataHomer = {
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/250px-Homer_Simpson_2006.png",
    firstName: "Homer",
    lastName: "Simpson",
    Occupation: "Inspektor",
    Hobby: "Drinking",
  };

  const dataMarge = {
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
    firstName: "Marge",
    lastName: "Simpson",
    Occupation: "No Job",
    Hobby: "coocking",
  };

  const dataBart = {
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    firstName: "Bart",
    lastName: "Simpson",
    Occupation: "No job",
    Hobby: "Skate",
  };

// Как мы работали с событиями раньше на базовом курсе
  // const button = document.querySelector("#get-button");

  // button.addEventListener('click', () => {
  //   console.log("Button works")
  // });

  const getUser = () => {
    console.log ("Button works");
  }




  return (
    <div className="homework03_page_wrapper">
      {/* <Homework_2/>
    <Homework_2/>
    <Homework_2/> */}
      <Card
        avatarURL={dataHomer.avatarUrl}
        firstName={dataHomer.firstName}
        lastName={dataHomer.lastName}
        occupation={dataHomer.Occupation}
        hobby={dataHomer.Hobby}
      />
      <Card
        avatarURL={dataMarge.avatarUrl}
        firstName={dataMarge.firstName}
        lastName={dataMarge.lastName}
        occupation={dataMarge.Occupation}
        hobby={dataMarge.Hobby}
      />
      <Card
        avatarURL={dataBart.avatarUrl}
        firstName={dataBart.firstName}
        lastName={dataBart.lastName}
        occupation={dataBart.Occupation}
        hobby={dataBart.Hobby}
      />
      <div className="buttonContainer">
        <Button onClick= {getUser}buttonName= "GetUser"/>
        <Button onClick= {() => {console.log("Send request");
        }}
        buttonName= "Send request"/>   
        <Button><img className= "icon" src="data:image/png;base64,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"/></Button>


          {/* <button id="get-button">Get</button> */}
        {/* <button onClick={getUser}>Get</button> */}

      </div>
       </div>

  );
}

export default Lesson_3;
