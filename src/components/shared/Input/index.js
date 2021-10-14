import "./Input.css";
import IconSearch from "../IconSearch";
import { useEffect, useState } from "react";

export default function Input({
  type = "text",
  placeholder,
  labelText,
  onChange,
  onBlur,
  onFocus,
  value: propValue = "",
  error,
  ...restProps
}) {
  const [value, setValue] = useState("");
  const [localType, setLocalType] = useState(type);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  function _onChange(evt) {
    setValue(evt.target.value);

    if (typeof onChange === "function") {
      onChange(evt);
    }
  }

  function onToggleShowPassword() {
    if (localType === "password") {
      setLocalType("text");
    } else {
      setLocalType("password");
    }
  }

  if (type === "search") {
    return (
      <div className="input-search-wrapper">
        <IconSearch />
        <input
          className="input-search"
          {...restProps}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
    );
  }

  return (
    <div className="form-control">
      {labelText ? <label>{labelText}</label> : null}
      <div style={{ position: "relative" }}>
        {type === "password" ? (
          <i
            onClick={onToggleShowPassword}
            className={
              localType === "password"
                ? "toggle-password ion-eye"
                : "toggle-password ion-eye-disabled"
            }
          />
        ) : null}
        <input type={localType} placeholder={placeholder} onChange={_onChange} value={value} />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}

// Truthy - Falsy
// Falsy: undefined - null - '' - 0 - false - NaN
// Không phải Falsy sẽ là Truthy
