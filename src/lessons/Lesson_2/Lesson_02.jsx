import "./styles.css";
import getPlanteaterStatus, {hello,animal} from "./data";
import Button from '../../components/Button/Button.jsx';

function Lesson_02() {
  return (
    <div>
      {/*<p>{hello}</p> */}

      <div className="animal_card">
        <h3 className="card_title">Animal card: {animal.type}</h3>
        <img className="avatar" src={animal.avatarUrl} alt="Animal image" />
        <p className="card_info">Name: {animal.fullName} </p>
        <p className="card_info">Age: {animal.age} </p>
        <p className="card_info">Color: {animal.color}</p>
        <p className="card_info">
          Is planteater? {getPlanteaterStatus(animal.isPlanteater)}{" "}
        </p>
        {/* <p className="card_info">
          Is planteater? {animal.isPlanteater ? "Yes" : "No" }
          </p> */}
        <Button />
      </div>
      <div className="button_container">
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;
