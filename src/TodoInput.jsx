import { useState } from "react";

export const TodoInput = (props) => {
    const [input, setInput] = useState("");
    const updateInput = (ev) => setInput(ev.target.value);

    const onAddButtonClick = () => {
        props.onSubmitInput(input);
        setInput("");
    }

    return (
        <div>
            <input type="text" value={input} onChange={updateInput}/>
            <button onClick={onAddButtonClick}>Add</button>
        </div>
    );
}