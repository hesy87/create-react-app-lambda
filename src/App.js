import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavbarMenu from "./components/Navbar/navbar";
import DataContextProvider from "./context/dataContextProvider";
import RouterMap from "./router/router";
import { useState,useLayoutEffect } from 'react';

function App() {

  const [scrolled, setScrolled] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = e => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="BackgroundColor">
    <DataContextProvider>
      <NavbarMenu NavBag={scrolled}/>
      <RouterMap/>
      <Footer />
    </DataContextProvider>
    </div>
  );
}

export default App;
