import React from "react";

type InputProps = {
  id: string;
  labelText?: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

function Input(props: InputProps) {
    return (
      <div className={props.className ? props.className : ""}>
        {props.labelText ? (
          <label htmlFor={props.id}>{props.labelText}</label>
        ) : null}
        <input
          id={props.id}
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder ? props.placeholder : ""}
        />
      </div>
    );
  }
  
  export default Input;
