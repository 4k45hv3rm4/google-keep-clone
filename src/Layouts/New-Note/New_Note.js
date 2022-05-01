import "./New_Note.css";
import "../../utils/styles/global.scss";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../utils/store/reducers";
import { useState } from "react";

const NewNote = (props) => {
  const noteCount = useSelector((state) => state.counter.noteCount);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const add = () => {
    if (title.length || content.length) {
      dispatch(
        addNote({
          id: noteCount,
          title: title,
          content: content,
          pinned: false,
        })
      );
      setTitle(null);
      setContent(null);
    }
  };
  return (
    <>
      <div className={(props.shadow ? "note-div " : " ") + "new-note-div"}>
        <div>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="input-element"
            value={title || ""}
            placeholder="Enter Title here"
          />
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content || ""}
            className="textarea-element"
            placeholder="Enter Content here"
          ></textarea>
          <div className="display-flex justify-right">
            <button className="submit-btn" onClick={add}>
              Add Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNote;
