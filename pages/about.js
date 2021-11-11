import {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../styles/about.module.css';
import Link from "next/link"
export default function About() {
useEffect(() => {
function UpdateTitleM() {

	let aboutm = document.getElementById("aboutm");
	aboutm.innerText = "Our team is made up of dedicated, driven, and daring individuals all chasing one goal - your success. We believe in the RIVER - Reliability, Integrity, Versatility, Efficiency, and Refreshing ideas.";
}
function UpdateTitleMR() {

	let aboutm = document.getElementById("aboutm");
	aboutm.innerText = "Where People Meet Strategy";
}
function UpdateTitleMe() {

	let aboutme = document.getElementById("aboutme");
	aboutme.innerText = "Our purpose is to provide you with the most efficient and creative product catered specifically to your industry, target demographic, and company vision. With our talents, you are sure to reach all the goals you had for your company and more.";
}
function UpdateTitleMeR() {

	let aboutm = document.getElementById("aboutme");
	aboutm.innerText = "Where Purpose Meets People";
}
function UpdateTitleC() {

	let aboutc = document.getElementById("aboutc");
	aboutc.innerText = "WHERE STRATEGY MEETS CREATIVITY";
}
function UpdateTitleCR() {

	let aboutm = document.getElementById("aboutc");
	aboutm.innerText = "CONFLUENCE-R";
}
function UpdateTitleO() {

	let abouto = document.getElementById("abouto");
	abouto.innerText = "Just as the confluence of a river is where different channels meet to form a single stream of purpose, Confluene-r is the meeting point between you and your customer. We not only fulfil your requirements, but also go over and above the need of the hour to give you something you can be proud of.";
}
function UpdateTitleOR() {

	let aboutm = document.getElementById("abouto");
	aboutm.innerText = "Where Marketing Meets Purpose";
}
document.getElementById("aboutm").addEventListener("mouseenter",UpdateTitleM)
document.getElementById("aboutm").addEventListener("mouseleave",UpdateTitleMR);
document.getElementById("aboutme").addEventListener("mouseenter",UpdateTitleMe);
document.getElementById("aboutme").addEventListener("mouseleave",UpdateTitleMeR);
document.getElementById("aboutc").addEventListener("mouseenter",UpdateTitleC);
document.getElementById("aboutc").addEventListener("mouseleave",UpdateTitleCR);
document.getElementById("abouto").addEventListener("mouseenter",UpdateTitleO);
document.getElementById("abouto").addEventListener("mouseleave",UpdateTitleOR);
});
	return (
	<>



<br/>

<div className="page">
<br/><br/>
<h1>ABOUT US</h1>

<div className={styles.home}>
<a className={`${styles.box} ${styles.white}`}>
	{<div className={styles.iconn}><i class="far fa-handshake"></i></div>}
		<div className={styles.middle}>
    <div className={styles.text} id="aboutm">Where People Meet Strategy</div>
  </div>
	</a>
<a className={`${styles.box2} ${styles.yellow} ${styles.main}`}>
		{<div className={styles.iconn}><i class="far fa-check-circle"></i></div>}<div className={styles.middle}>
    <div className={styles.text} id="aboutme">Where Purpose Meets People</div>
  </div></a>
<a  className={`${styles.box3} ${styles.lightblue} ${styles.main}`}>
	{<div className={styles.iconn}><i class="far fa-chart-bar"></i></div>}
	<div className={styles.middle}>
    <div className={styles.text} id="abouto">Where Marketing Meets Purpose</div>
  </div></a>
  <a  className={`${styles.box4} ${styles.orange} ${styles.main}`}>
	{<div className={styles.iconn}><i class="fab fa-confluence"></i></div>}
	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">CONFLUENCE-R</div>
  </div></a>

{/*<div className={styles.home}>
<Link href="/Services/Mountain"><a href="https://retreeve.club/" className={`${styles.box} ${styles.white}`}>
	<Image layout="fill" src={`/Services/1.png`}/>
		<div className={styles.middle}>
    <div className={styles.text} id="about">MOUNTAIN</div>
  </div>
	</a></Link>
<a href="https://www.cbhogilal.in/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
		<Image layout="fill" src={`/Services/2.png`}/><div className={styles.middle}>
    <div className={styles.text} id="home">MEANDER</div>
  </div></a>
<Link href="https://www.panandthedream.com/"><a href="https://www.panandthedream.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Services/3.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>OCEAN</div>
  </div></a></Link>
  <Link href="https://shop.gehnajewellers.com/"><a href="https://shop.gehnajewellers.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Services/4.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>CONFLUENCE</div>
  </div></a></Link>*/}
	
  
</div>

{/*<div>*/}
	{/*<br/>
<a href="../Websites"><img class="Services" src="./Services/1.png" title="Mountain" alt="Mountain - Websites Services"/></a>
<a href="../SocialMedia"><img class="Services" src="./Services/2.png" title="Meander" alt="Meander - Social Media Services"/></a>
<a href="../Content"><img class="Services" src="./Services/3.png" title="Confluence" alt="Confluence - Content Services"/></a>
<a href="../Event"><img class="Services" src="./Services/4.png" title="Ocean" alt="Ocean - Event Services"/></a>
</div>
<br/>*/}

</div>

	</>

)}