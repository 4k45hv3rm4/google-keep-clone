import "./Button.css";
import "../../utils/styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  return (
    <>
      <button
        className={
          (props.active ? "active-btn" : "inactive-btn") + " button-global"
        }
      >
        <FontAwesomeIcon icon={props.Icon} />{" "}
        <div className="title">{props.title}</div>
      </button>
    </>
  );
};

export default Button;
