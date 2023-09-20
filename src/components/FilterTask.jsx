/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { useState } from "react";

function TaskSort({ title, description }) {
  return (
    <div className="task">
      <div className="taskBody">
        <h2>{title}:</h2>
        <p className="bodyDescription">{description}</p>
      </div>
    </div>
  );
}

function FilterTask() {
  const list = useSelector((state) => state.task);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    e.preventDefault;
    setFilter(e.target.value);
  };

  const filteredList =
    filter === "Done"
      ? list.filter((x) => x.isDone)
      : list.filter((x) => !x.isDone);

  return (
    <div className="filterTask">
      <div className="filterTop">

        <form className="filterRadio">
          <div>
            <input
              id="Done"
              name="taskStatus"
              type="radio"
              value="Done"
              onChange={handleChange}
            />
            <label htmlFor="Done">Done</label>
          </div>
          <div>
            <input
              id="Not Done"
              name="taskStatus"
              type="radio"
              value="Not Done"
              onChange={handleChange}
            />
            <label htmlFor="Not Done">Not Done</label>
          </div>
        </form>
        <h1 className="filterHead">Filter List</h1>
      </div>
      {filter &&
        filteredList.map((x, idx) => (
          <TaskSort key={idx} title={x.title} description={x.description} />
        ))}
    </div>
  );
}

export default FilterTask;
