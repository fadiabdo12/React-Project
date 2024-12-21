import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.root}>
      <h3 className={classes.h3}>Sekiro 2D</h3>
      <div class={classes.footerBottom}>
        copyright &copy;2023 SSDT2D . Designed by Fadi Abdo
      </div>
    </footer>
  );
};
