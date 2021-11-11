import {useState, useEffect} from 'react';
import '../styles/globals.css'
import Navbar from "/pages/Components/Navbar"
import Footer from "/pages/Components/Footer"
import ThemeSwitch from './ThemeSwtch.js';
import Router from 'next/router';
import Head from "next/head";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
	const [theme, settheme] = useState("");
  return (
  <>
  <Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
  <Navbar/>
  <Component {...pageProps} theme={theme} settheme={settheme}/>
  <ThemeSwitch theme={theme} settheme={settheme}/>
  <Footer/>
  </>
  )
}

export default MyApp
