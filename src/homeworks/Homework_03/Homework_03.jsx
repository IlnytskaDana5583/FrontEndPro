// Задание
// В компоненте Button:
// Нужно простилизовать компонент Button в соотвтесвии с дизайном
// Компонент Button должен принимать в качестве props(помимо buttonName и onClick):
// type - имеется ввиду атрибут type

// Создайте папку Input в папке components, в папке Input создайте компонент Input:
// Нужно простилизовать компонент Input в соотвтесвии с дизайном
// Компонент Input должен принимать в качестве props:
// name - имеется ввиду атрибут name
// type - имеется ввиду атрибут type
// placeholder - атрибут placeholder
// label - атрибут label

// Создайте папку LoginForm в папке components, в папке LoginForm создайте компонент LoginForm:
// Нужно простилизовать компонент LoginForm в соотвтесвии с дизайном
// Импортируйте себе в этот компонент уже заготовленные компоненты Input и Button и переиспользуйте их
// Компонент LoginForm не должен принимать в качестве props ничего

// В папке homeworks, создайте компонент Homework_03. Импортируйте в него LoginForm компонент и 
// расположите его посередине страницы

// Импортируйте компонент Homework_03 в App.jsx и верните его из компонента App(по примеру как мы делали
//  на лекции)
import LoginForm from "../../components/LoginForm/LoginForm";
import "./styles.css";

function Homework_03 () {

    return (

        <div 
        className="homework_container">
            <LoginForm />

            </div>
    );
}

export default Homework_03;

