import React from "react";

type InputProps = {
  id: string;
  labelText?: string;
  className?: string;
  type?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({className, labelText, id, type, placeholder, ...rest}:InputProps) {
    return (
      <div className={className ? className : ""}>
        {labelText ? (
          <label htmlFor={id}>{labelText}</label>
        ) : null}
        <input
          id={id}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          {...rest}
        />
      </div>
    );
  }
  
  export default Input;
