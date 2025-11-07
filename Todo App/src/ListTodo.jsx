const ListTodo = ({ todo }) => {
  if (!todo.length) return <p className="no-todo">No todos yet!</p>;

  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th colSpan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((item) => (
          <tr key={item.id}>
            <td>{item.task}</td>
            <td>{item.description}</td>
            <td>
              <button className="btn edit-btn">Edit</button>
            </td>
            <td>
              <button className="btn delete-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTodo;
