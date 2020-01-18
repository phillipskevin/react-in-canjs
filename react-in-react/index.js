import React, { useState } from "react";
import ReactDOM from "react-dom";
import { List } from "../list-component";

function App() {
    const [ list, setList ] = useState([{ name: "Sleepy" }, { name: "Dopey" }]);
    const [ name, setName ] = useState("Dwarves");

    const changeName = () => {
        setName("Dwarfs");
    };

    const changeItemOneName = () => {
        setList([ { name: "Grumpy" }, ...list.slice(1) ]);
    };

    return (
        <div>
            <p>
                <button onClick={changeName}>
                    Change list name
                </button> <b>This works</b>
            </p>
            <p>
                <button onClick={changeItemOneName}>
                    Change item 0's name
                </button> <b>This also works</b>
            </p>
            <List name={name} list={list} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("div"));
