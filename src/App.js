import { useState } from "react";
import "./App.css";
import TodoListTable from "./components/todoListTable/TodoListTable";
import UserDetails from "./components/userDetails/UserDetails";

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
 

  /* here we have defined handle view user function to-
   view the user details and we have passed- as props into the todolist table component */
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

