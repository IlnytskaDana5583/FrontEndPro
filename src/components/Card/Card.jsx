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
// import { data } from "./data";
import "./styles.css";

//props обєкт.с помощью которого передаем даніе из род. в дочерний
function Card({avatarURL= "",firstName= "Name",lastName ="Last Name",occupation= "_",hobby="_",}) {
  return (
    <div>
      <div className="sympson_card">
        <img
          className="avatar_sympson"
          src={avatarURL}
          alt="Foto Sypmson"
        />
        <p className="card_info">FirstName:{firstName} </p>
        <p className="card_info">LastName:{lastName} </p>
        <p className="card_info">Occupation:{occupation}</p>
        <p className="card_info">Hobby:{hobby}</p>
      </div>
    </div>
  );
}

export default Card;
