import classes from "./input.module.css";

export const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  ...inputProps
}) => {
  return (
    <div className={classes.root}>
      <label>{label}:</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};
