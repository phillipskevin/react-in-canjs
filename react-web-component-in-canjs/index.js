import { StacheElement, ObservableObject, ObservableArray } from "can";
import React from "react";
import PropTypes from "prop-types";
import { List } from "../list-component";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

List.propTypes = {
    name: PropTypes.string,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string
        })
    )
};

const ListElement= reactToWebComponent(List, React, ReactDOM);
customElements.define("list-element", ListElement);

class App extends StacheElement {
    static props = {
        get list() {
            return new ObservableArray([
                new ObservableObject({ name: "One" }),
                new ObservableObject({ name: "Two" })
            ]);
        },
        name: "Dwarves"
    };

    static view = `
        <div>
            <p>
                <button on:click="this.changeName()">
                    Change list name
                </button> <b>This works</b>
            </p>
            <p>
                <button on:click="this.changeItemOneName()">
                    Change item 0's name
                </button> <b>This doesn't work</b>
            </p>
            <list-element name:bind="this.name" list:from="this.list"></list-element>
        </div>
    `;

    changeName() {
        this.name = "Dwarfs";
    }

    changeItemOneName() {
        this.list[0].name = "One!!!";
    }
}
customElements.define("my-app", App);
