import { TodoItem } from "./TodoItem";

export const TodoTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>TodoItem</th><th>Done</th>
            </tr>
        </thead>
        <tbody>
            { props.todos.map(i => <TodoItem {...i} key={i.id} />) }
        </tbody>
    </table>
);
