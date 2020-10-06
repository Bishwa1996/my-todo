import React from "react";

const List = (props) => {
    props.preventDefault();
    return (
    <div>
    <li>{props.text}</li>
    <button onClick={() => {props.onSelect(props.id)}}> Delete </button>
    </div>
)};

export default List;
