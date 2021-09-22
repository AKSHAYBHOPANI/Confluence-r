import {useState, useEffect} from 'react';
import '../styles/globals.css'
import Navbar from "/pages/Components/Navbar"
import Footer from "/pages/Components/Footer"
import ThemeSwitch from './ThemeSwtch.js';

function MyApp({ Component, pageProps }) {
	const [theme, settheme] = useState("");
  return (
  <>
  <Navbar/>
  <Component {...pageProps} theme={theme} settheme={settheme}/>
  <ThemeSwitch theme={theme} settheme={settheme}/>
  <Footer/>
  </>
  )
}

export default MyApp
