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
  <title>Confluence-r</title>
  <link rel="icon" href="/favicon.png" />
  <meta name="description" content="We define ourselves as a digital marketing agency that is made up of dynamic thinkers, creative producers, and new age content developers who are able to understand and analyse demographics and real world user experiences."/>
  <link rel="canonical" href="https://confluence-r.com"/>
  <meta name="keywords" content="Digital Marketing Agency Services, Best Digital Marketing Agency In Mumbai, Digital Marketing Services In Mumbai, Digital Marketing Agency For Small Business"/>
  </Head>
  <Navbar/>
  <Component {...pageProps} theme={theme} settheme={settheme}/>
  <ThemeSwitch theme={theme} settheme={settheme}/>
  <Footer/>
  </>
  )
}

export default MyApp
