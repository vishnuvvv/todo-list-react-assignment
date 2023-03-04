import { useState } from "react";
import "./App.css";
import TodoListTable from "./components/todoListTable/TodoListTable";
import UserDetails from "./components/userDetails/UserDetails";

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleViewUser = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="app-container">
      <section className="todoListTable">
        <TodoListTable onViewUser={handleViewUser} />
      </section>
      <section className="user-details">
        {selectedTodo && <UserDetails todo={selectedTodo} />}
      </section>
    </div>
  );
};

export default App;

