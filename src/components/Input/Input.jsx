//Создайте папку Input в папке components, в папке Input создайте компонент Input:
// Нужно простилизовать компонент Input в соотвтесвии с дизайном
// Компонент Input должен принимать в качестве props:
// name - имеется ввиду атрибут name
// type - имеется ввиду атрибут type
// placeholder - атрибут placeholder
// label - атрибут label

import "./styles.css";

function Input({id, name, type = "text", placeholder = "", label = "" }) {
  return (
    <div className="input_wrapper">
      <label className="input_label" htmlFor={id} >
        {label}
      </label>
      <input  className="input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      
      />
    </div>
  );
}
export default Input;
