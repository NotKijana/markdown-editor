/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import Markdown from "./Markdown";
import Navigation from "./Navigation";
import DeletePopup from "../components/DeletePopup";
import AppContext from "../context/AppContext";

function Layout() {
    const { theme, isMinWidth768 } =  useContext(AppContext);
    useEffect(() => {
        const checkScreenWidth = () =>{
            if(window.innerWidth > 768) {
                isMinWidth768(true);
            } else {
                isMinWidth768(false);
            }
        }
        
        checkScreenWidth(); // Checks the width of the screen on init
        window.addEventListener('resize', checkScreenWidth) // Checks screen size on resize
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, [])
  return (
      <div className={`layout ${theme}`}>
        <DeletePopup />
        <Navigation />
        <Markdown />
      </div>
  );
}

export default Layout;