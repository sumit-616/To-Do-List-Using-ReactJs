import React, { useState } from "react";

function ToDoItem(props) {

  function markDone() {
    props.onChange(props.id);
  }

  return (
    <li
      onClick={markDone}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
