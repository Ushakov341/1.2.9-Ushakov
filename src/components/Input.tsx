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
      <div className={className ? className : ""}>
        {labelText ? (
          <label htmlFor={id}>{labelText}</label>
        ) : null}
        <input
          id={id}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    );
  }
  
  export default Input;
