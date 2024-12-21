import "./App.css";
import { useEffect, useState } from "react"; // useState is a hook that we use to store data, it's job is to hold data that we are showing
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Contact } from "./pages/contact/contact";
import { Characters } from "./pages/characters/characters";
import { NavButton } from "./components/nav-button/nav-button";
import { Footer } from "./components/footer/footer";

function App() {
  const [user, setUser] = useState();
  const [pathname, setPathname] = useState(window.location.pathname); // our current url(which window we are at in the current moment)
  //pathname is our current pathname(url) it tracks what our current url is, setPathname is the function to update the pathname, useState(....) is the pathname when the component is first rendered

  // useEffect hook to handle changes in the URL pathname first argument is side effects, and second when to run the side effects
  useEffect(() => {
    // every time our href changes this function takes our current location and puts it in any other state...
    const onLocationChange = () => {
      console.log("onLocationChange");
      setPathname(window.location.pathname); // Update the pathname state when URL changes
    };
    // Add event listener for URL changes, when navigate even is triggered then onLocationChange function will be called
    window.addEventListener("navigate", onLocationChange);
    // Cleanup function to remove the event listener when the component unmounts, it used for security (memory leaks and  avoid unnecessary event handling after the component is no longer in use)
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []); //empty dependencies array so the effect will only run once after the initial render.

  console.log(window.history.length);

  return (
    <div className="App">
      {/* Navigation bar */}
      <nav>
        {/* Render navigation buttons only if the user is logged in */}
        {user && (
          <>
            <NavButton name="Home" route="/home" />
            <NavButton name="Characters" route="/characters" />
            <NavButton name="Contact us" route="/contact" />
          </>
        )}
      </nav>
      {/* Show the Login component if the pathname is root ("/") */}
      {pathname === "/" && (
        <Login setPathname={setPathname} setUser={setUser} />
      )}
      {pathname === "/home" && <Home />}
      {pathname === "/login" && (
        <Login setPathname={setPathname} setUser={setUser} />
      )}
      {pathname === "/register" && <Register setPathname={setPathname} />}
      {pathname === "/contact" && <Contact />}
      {pathname === "/characters" && <Characters />}
      <Footer />
    </div>
  );
}

export default App;
