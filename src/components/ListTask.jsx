/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {

  const list = useSelector((state) => state.task);

//   console.log(list)

  return (
    list.map((x, idx) => (
        <Task key={idx} id={x.id} title={x.title} description={x.description} isDone={x.isDone}/>
    ))
  )
}

export default ListTask;
