import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Slice";
import { nanoid } from "@reduxjs/toolkit";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault;
    dispatch(
      addTask({
        id: nanoid(),
        title,
        description,
        isDone: false,
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
    <section>
      <form className="addSection">
        <h1 className="addHead">Add To List</h1>
        <div className="addTitle">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            className="inputTitle"
            onChange={handleChangeTitle}
          />
        </div>

        <div className="addDescription">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            value={description}
            className="inputDescription"
            onChange={handleChangeDescription}
          />
        </div>

        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </section>
  );
}

export default AddTask;
