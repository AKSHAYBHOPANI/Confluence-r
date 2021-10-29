import Image from 'next/image';
import styles from '../styles/services.module.css';
import Link from "next/link"
export default function Services() {
	return (
	<>



<br/>

<div className="page">
<h1>SERVICES</h1>

<div className={styles.home}>
<Link href="/Services/Mountain"><a href="https://retreeve.club/" className={`${styles.box} ${styles.white}`}>
	<img layout="fill" className={styles.icon} src={`/Services/i1.png`}/>
		<div className={styles.middle}>
    <div className={styles.text} id="about">MOUNTAIN</div>
  </div>
	</a></Link>
<a href="/Services/Meander" className={`${styles.box2} ${styles.yellow} ${styles.main}`}>
		<img layout="fill" className={styles.icon} src={`/Services/i2.png`}/><div className={styles.middle}>
    <div className={styles.text} id="home">MEANDER</div>
  </div></a>
<Link href="/Services/Ocean"><a href="https://www.panandthedream.com/" className={`${styles.box3} ${styles.lightblue} ${styles.main}`}>
	<img layout="fill" className={styles.icon} src={`/Services/i3.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>OCEAN</div>
  </div></a></Link>
  <Link href="/Services/Confluence"><a href="https://shop.gehnajewellers.com/" className={`${styles.box4} ${styles.orange} ${styles.main}`}>
	<img layout="fill" className={styles.icon} src={`/Services/i4.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>CONFLUENCE</div>
  </div></a></Link>

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