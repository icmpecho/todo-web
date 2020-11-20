export const TodoItem = (props) => {
    const completeButton = (
        <td>
            <button onClick={() => props.onComplete(props.id)}>complete</button>
        </td>
    );
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.isComplete.toString()}</td>
            { !props.isComplete && completeButton }
        </tr>
    );
};
