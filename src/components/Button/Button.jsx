import "./styles.css";
// Homework _03
// function Button({ buttonName = "Login", onClick = () => {}, type = "button"}) {
//   return (
//     <button className="button_component" 
//     onClick={onClick}
//     type={type}
//     >
//         {/* {children ? "" : buttonName} */}
//       {/* Улосвный рендеринг */}
//       {!children && name}
//       {children}
    
//     </button>
//   );
// }
// export default Button;

//Lesson_04

function Button({ type = "button", name = "Send", onClick = () => {}, children }) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {/* Улосвный рендеринг */}
      {!children && name}
      {children}
    </button>
  );
}

export default Button;

