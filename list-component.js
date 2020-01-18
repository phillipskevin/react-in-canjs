import React from "react";

export const List = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            {props.list.map((item) =>
                <p key={item.name}>{item.name}</p>
            )}
        </div>
    );
};
