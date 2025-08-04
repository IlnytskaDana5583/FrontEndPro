// Создайте папку LoginForm в папке components, в папке LoginForm создайте компонент LoginForm:
// Нужно простилизовать компонент LoginForm в соотвтесвии с дизайном
// Импортируйте себе в этот компонент уже заготовленные компоненты Input и Button и переиспользуйте их
// Компонент LoginForm не должен принимать в качестве props ничего

import "./styles.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  const workSubmit = () => {
    console.log("форма отпрвлена");
  };

  return (
    <form className="login_form" onSubmit={workSubmit}>
      <h2 className="logn_titile">Login form</h2>

      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />

      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Button buttonName="Login" type="submit" />
    </form>
  );
}
export default LoginForm;
