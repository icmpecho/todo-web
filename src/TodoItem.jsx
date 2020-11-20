export const TodoItem = (props) => (
    <tr>
      <td>{props.name}</td>
      <td>{props.isComplete.toString()}</td>
    </tr>
);
