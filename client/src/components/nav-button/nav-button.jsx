import classes from "./nav-button.module.css";

export const NavButton = ({ route, name }) => {
  return (
    <a
      href={route}
      className={classes.a}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, "", route);
        const navEvent = new PopStateEvent("navigate");
        window.dispatchEvent(navEvent);
      }}
    >
      {name}
    </a>
  );
};
