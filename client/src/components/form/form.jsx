import classes from "./form.module.css";

export const Form = ({ children, onSubmit }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
