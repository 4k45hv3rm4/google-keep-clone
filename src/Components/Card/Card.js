import "./Card.css";
import "../../utils/styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deleteNote, pinNote } from "../../utils/store/reducers";
import { useDispatch } from "react-redux";

function TrashIcon(props) {
  const isMouseOver = props.MouseOver;

  if (isMouseOver) {
    return (
      <div className="display-flex  icon flex-end">
        <FontAwesomeIcon icon={faTrash} onClick={props.click} />
      </div>
    );
  }
}
function PinIcon(props) {
  const isMouseOver = props.MouseOver;
  if (isMouseOver) {
    return (
      <div className="display-flex  icon flex-end">
        <FontAwesomeIcon icon={faMapPin} onClick={props.click} />
      </div>
    );
  }
}

const Card = (props) => {
  let [MouseOver, setMouseOver] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => setMouseOver(true);
  const handleMouseLeave = () => setMouseOver(false);
  return (
    <>
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
        </div>
        <div className="icon-div">
          <TrashIcon
            MouseOver={MouseOver}
            click={() => {
              dispatch(deleteNote(props.id));
            }}
          />
          <PinIcon
            MouseOver={MouseOver}
            click={() => {
              dispatch(pinNote(props.id));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
