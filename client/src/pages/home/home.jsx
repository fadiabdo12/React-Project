import classes from "./home.module.css";
export const Home = () => {
  return (
    <div className={classes.root}>
      <div className={classes.about}>
        <h1 className={classes.h1}>About the Game</h1>
        <br></br>
        <p className={classes.p}>
          Sekiro: Shadows Die Twice 2D is an action-adventure game with RPG
          elements. the game is a single player experience with a set storyline
          based in the Sengoku period in Japan. Explore late 1500s Sengoku
          Japan, a brutal period of constant life and death conflict, as you
          come face to face with larger than life foes in a dark and twisted
          world. Unleash an arsenal of deadly prosthetic tools and powerful
          ninja abilities while you blend stealth, vertical traversal, and
          visceral head to head combat in a bloody confrontation.
        </p>
        <br></br>
        <br></br>
        <p>
          Rated M for Mature - Content Descriptors: Blood and Gore, Violence
        </p>
        <p>
          "This is an action-adventure game in which players assume the role of
          a disgraced shinobi on a quest to rescue his kidnapped lord in ancient
          Japan. Players use swords and a prosthetic arm to battle members of an
          enemy clan and supernatural demons in frenetic combat. Large
          blood-splatter effects occur as enemies are killed; some attacks
          result in decapitation and/or dismemberment. Cutscenes depict
          additional acts of violence: a man impaled through the chest with a
          sword; a child stabbed with a sword off screen."
        </p>
        <br></br>
        <h3 className={classes.h3}>Game Story Overview</h3>
        <br></br>
        <p>
          "In Sekiro: Shadows Die Twice you are the “one-armed wolf”, a
          disgraced and disfigured warrior rescued from the brink of death.
          Bound to protect a young lord who is the descendant of an ancient
          bloodline, you become the target of many vicious enemies, including
          the dangerous Ashina clan. When the young lord is captured, nothing
          will stop you on a perilous quest to regain your honor, not even death
          itself."
        </p>
      </div>
    </div>
  );
};
