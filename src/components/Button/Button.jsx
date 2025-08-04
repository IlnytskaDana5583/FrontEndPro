import "./styles.css";

function Button({ buttonName = "Login", onClick = () => {}, type = "button"}) {
  return (
    <button className="button_component" 
    onClick={onClick}
    type={type}
    >
      {buttonName}
      {/* {buttonName ? "" : buttonName}

      {!children && buttonName}
      {children} */}
    </button>
  );
}
export default Button;

