// Задание
// Создайте компонент Feedback в папке components, в самом компоненте будут храниться:

// кнопка “Like” и справа от него количество лайков
// кнопка “Dislike" и справа от него количество дизлайков
// Кнопка “Reset Results”, при клике на которую, лайки и дизлайки обнуляются
// Требования:

// Для кнопок используйте компонент Button
// При нажатии на кнопку “Like” - количество лайков увеличивается на 1
// При нажатии на кнопку “Dislike - количество дизлайков увеличивается на 1
// При нажатии на кнопку “Reset Results” - колличество лайков и дизлайков обнуляются
// Стили: на ваше усмотрение(предлагаю сделать что-то похожее на компонент Counter)

import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const reset = () => {
    setLikes(0);
    setDislikes(0);
  };

  const onLikes = () => {
    setLikes((prev) => {
      return prev + 1;
    });
  };

  const onDisLikes = () => {
    setDislikes((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="counter_wrapper">
      <div className="button_click">
        <Button name="_" onClick={onLikes}>
          Like
        </Button>
        <p className="count">{likes}</p>
      </div>

      <div className="button_click">
        <Button name="_" onClick={onDisLikes}>
          Dislike
        </Button>
        <p className="count">{dislikes}</p>
      </div>

      <div className="reset_button">
        <Button name="_" onClick={reset}>
          <span className="reset"> Reset</span>
        </Button>
      </div>
    </div>
  );
}
export default Feedback;
