import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/Slice";

/* eslint-disable react/prop-types */
function Task({ id, title, description, isDone }) {
  const [edit, setEdit] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault;
    setEdit(!edit);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault;
    if (newTitle.trim() !== "" || newDescription.trim() !== "") {
      dispatch(
        editTask({ id, title: newTitle, description: newDescription, isDone })
      );
    }
    setEdit(!edit);
  };

  const handleDone = (e) => {
    e.preventDefault;
    dispatch(editTask({ id, title, description, isDone: !isDone }));
  };

  return (
    <div>
      {!isDone && (
        <div className="task">
          <div className="taskBody">
            {!edit && (
              <>
                <h2>{title}:</h2>
                <p className="bodyDescription">{description}</p>
              </>
            )}
            {edit && (
              <form className="taskForm">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={newTitle}
                  placeholder={`${title}:`}
                  className="taskFormTitle"
                  onChange={handleChangeTitle}
                />
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={newDescription}
                  placeholder={description}
                  className="taskFormDescription"
                  onChange={handleChangeDescription}
                />
              </form>
            )}
          </div>
          <div className="taskButton">
            {!edit ? (
              <>
                <button type="button" onClick={handleDone}>
                  Mark as Done
                </button>
                <button type="button" onClick={handleClick}>
                  Edit
                </button>
              </>
            ) : (
              <button type="button" onClick={handleSave}>
                Save Changes
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
