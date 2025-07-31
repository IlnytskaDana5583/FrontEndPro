// Создайте компонент "Card" в папке "components". В нем нужно создать карточку с информацией о
// вымышленном пользователе Гомере Симпсоне:

// аватар
// имя и фамилия
// род деятельности
// хобби
// Верстка и стили на ваше усмотрение.
//  Писать нужно на React, используя изученный на лекции синтаксис jsx.
// Затем нужно импортировать компонет Card в компонент Homework02, где переиспользовать его 3 раза.
// В App.jsx отобразить компонент Homework02.
import { data } from "./data";
import "./styles.css";

function Card() {
  return (
    <div>
      <div className="sympson_card">
        <img
          className="avatar_sympson"
          src={data.avatarUrl}
          alt="Foto Sypmson"
        />
        <p className="first_name">FirstName: {data.firstName}</p>
        <p className="last_name">LastName: {data.lastName} </p>
        <p className="occupation">Occupation: {data.Occupation}</p>
        <p className="hobby">Hobby: {data.Hobby} </p>
      </div>
    </div>
  );
}

export default Card;
