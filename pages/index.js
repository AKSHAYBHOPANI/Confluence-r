import {useState, useEffect} from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Serp from './serp.js';
import ThemeSwitch from './ThemeSwtch.js';
import Head from "next/head"
import Link from "next/link"

export default function Home(theme) {
  useEffect(() => {
var toggleButton = document.querySelector('.toggle-menu');
var navbar = document.querySelector('.header');
navbar.style.display="none"
// toggleButton.addEventListener('click', function () {
//   navbar.classList.toggle('toggle');
// });
});

  return (
  	<div className={styles.home}>
     <Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
   <div class="container">
{/*<nav class="header__nav nav-bar">
    <div class="toggle-menu">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
    <ul class="nav-list">
      <li class="nav-list-item"><a href="" class="nav-link">Home</a></li>
      <li class="nav-list-item"><a href="./#about" class="nav-link">About</a></li>
      <li class="nav-list-item">
        <a href="" class="nav-link" href="./#blog">Blog</a>
      </li>
      <li class="nav-list-item">
 <a href="./#contact-us" class="nav-link">Contact Us</a>
      </li>
    </ul>
  </nav>*/}
</div>

	<a href="./" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
		<Image layout="fill" src={`/light/uparrow${theme.theme}.gif`}/><div className={styles.middle}>
    <div className={styles.text} id="home">HOME</div>
  </div></a>
	<Link href="./about"><a className={`${styles.box} ${styles.white}`}>
	<Image layout="fill" src={`/light/river${theme.theme}.gif`}/>
		<div className={styles.middle}>
    <div className={styles.text} id="about">ABOUT US</div>
  </div>
	</a></Link>
	<Link href="./our-work"><a href="./" className={`${styles.box2} ${styles.orange}`}>
	<Image layout="fill" src={`/light/button${theme.theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}>OUR WORK</div>
  </div></a></Link>
	<div  className={`${styles.box2} ${styles.pink}`}>
  <Serp/>
  </div>
	<a  href="https://blog.confluence-r.com" className={`${styles.box} ${styles.lightblue}`}>
<Image layout="fill" src={`/light/Arrows${theme.theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text} id="blog">BLOG</div>
  </div></a>
	<div  className={`${styles.box} ${styles.yellow}`}>
<Image layout="fill" src={`/light/confluencer${theme.theme}.gif`}/>
	</div>
	<a className={`${styles.box} ${styles.white}`}>
<Image layout="fill" src={`/light/lines${theme.theme}.png`}/>
  <div className={styles.middle}>
    <div className={styles.text}>REVIEWS</div>
  </div></a>
	<a href="https://www.instagram.com/confluencer_/?hl=en" className={`${styles.box} ${styles.orange}`}>
<Image layout="fill" src={`/light/rings${theme.theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}>SOCIAL MEDIA</div>
  </div></a>
  <Link href="./contact"><a href="./" className={`${styles.box2} ${styles.white}`}>
  <Image layout="fill" src={`/light/logo${theme.theme}.png`}/>
  <div className={styles.middle}>
    <div className={styles.text} id="contact-us">CONTACT US</div>
  </div></a></Link>
 
<a class="arrow" href="#programmes"><i class="fas fa-angle-down"></i></a>
</div>

  	)
}