import { useEffect, useState } from "react";
import "./TodoListTable.css";
import SearchIcon from "@mui/icons-material/Search";
import { fetchTodos } from "../../api-helpers/api-helper";
import { Input, InputAdornment } from "@mui/material";

const TodoListTable = ({ todo, onViewUser }) => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");
  // sorting functionality impleted to sort in ascending and descending order
  const handleSort = () => {
    const newOrder = sortOrder === "ascending" ? "descending" : "ascending";
    setSortOrder(newOrder);
    const sortedTodos = [...todos].sort((a, b) => {
      if (newOrder === "ascending") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    setTodos(sortedTodos);
  };
  //filter functionality implemented to filter it
  const filteredTodos = todos.filter((todo) => {
    const searchText = searchTerm.toLowerCase();
    return (
      todo.id.toString().toLowerCase().includes(searchText) ||
      todo.title.toString().toLowerCase().includes(searchText) ||
      todo.completed.toString().toLowerCase().inclu
    );
  });

  useEffect(() => {
    fetchTodos()
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(todos);

  return (
    <div className="todo-listt-table-container">
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <table className="todo-list-table">
        <thead>
          <tr>
            <th>
              Todo Id
              <button onClick={handleSort}>
                {sortOrder === "ascending" ? "▲" : "▼"}
              </button>
            </th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Complete" : "Incomplete"}staus</td>
              <td>
                <button onClick={() => onViewUser(todo)}>View User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListTable;
