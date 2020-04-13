import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </button>
    </div>
  );
}

export default Note;
