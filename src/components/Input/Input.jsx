//Создайте папку Input в папке components, в папке Input создайте компонент Input:
// Нужно простилизовать компонент Input в соотвтесвии с дизайном
// Компонент Input должен принимать в качестве props:
// name - имеется ввиду атрибут name
// type - имеется ввиду атрибут type
// placeholder - атрибут placeholder
// label - атрибут label

import "./styles.css";

function Input({ name, type = "text", placeholder = "", label = "" }) {
  return (
    <label className="input_wrapper">
      {label}
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
export default Input;
