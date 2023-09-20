import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <>
      <AddTask />
      <div className="sortList">
        <div className="filterList">
          <FilterTask />
        </div>
        <div className="todoList">
          <h1 className="todoListTitle">To-Do List</h1>
          <ListTask />
        </div>
      </div>
    </>
  );
}

export default App;
