import { StacheElement } from "can";
import React from "react";
import { List } from "../list-component";
import ReactDOM from "react-dom";

class App extends StacheElement {
    static props = {
        get list() {
            return [{ name: "One" }, { name: "Two" }];
        },
        name: "Dwarves"
    };

    static view = `
        <div>
            <p>
                <button on:click="this.changeName()">
                    Change list name
                </button> <b>This doesn't work</b>
            </p>
            <p>
                <button on:click="this.changeItemOneName()">
                    Change item 0's name
                </button> <b>This also doesn't work</b>
            </p>
            <div class="list"></div>
        </div>
    `;

    connect() {
        ReactDOM.render(<List name={this.name} list={this.list} />, this.querySelector(".list"));
    }

    changeName() {
        this.name = "Dwarfs";
    }

    changeItemOneName() {
        this.list[0].name = "One!!!";
    }
}
customElements.define("my-app", App);
