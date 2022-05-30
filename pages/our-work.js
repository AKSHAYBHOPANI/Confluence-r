import Image from 'next/image';
import styles from '../styles/work.module.css';
import Link from "next/link";
import Head from 'next/head';

export default function OurWork() {
	return (
	<>
<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  <title>Confluence-r | Our Work</title>
  <link rel="icon" href="/favicon.png" />
  <meta name="description" content="Our purpose is to provide you with the most efficient and creative product catered specifically to your industry, target demographic, and company vision."/>
  <link rel="canonical" href="https://confluence-r.com/our-work"/>
  <meta name="keywords" content="Digital Marketing Agency Services, Best Digital Marketing Agency In Mumbai, Digital Marketing Services In Mumbai, Digital Marketing Agency For Small Business, Confluence-r work"/>
  </Head>


<br/><br/><br/>

<div className="page">
<h1>OUR WORK</h1>


<div className={styles.home}>
<Link href="https://retreeve.club/"><a href="https://retreeve.club/" className={`${styles.box} ${styles.white}`}>
	<Image layout="fill" src={`/Clients/retreeve.png`}/>
		<div className={styles.middle}>
    <div className={styles.text} id="about">RETREEVE</div>
  </div>
	</a></Link>
<a href="https://www.cbhogilal.in/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
		<Image layout="fill" src={`/Clients/Cbhogilal.png`}/><div className={styles.middle}>
    <div className={styles.text} id="home">CBHOGILAL</div>
  </div></a>
<Link href="https://www.panandthedream.com/"><a href="https://www.panandthedream.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/pan.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>PAN & THE DREAMS</div>
  </div></a></Link>
  <Link href="https://shop.gehnajewellers.com/"><a href="https://shop.gehnajewellers.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/gehna.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>GEHNA</div>
  </div></a></Link>
	<Link href="https://surgems.co.in/"><a href="https://surgems.co.in/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/Surgems.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>SURGEMS</div>
  </div></a></Link>
<Link href="https://dynamatics.com/"><a href="https://dynamatics.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/dynamatics.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>DYNAMATICS</div>
  </div></a></Link>
  {/*<Link href="https://aasthafoundations.com/"><a href="https://aasthafoundations.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/aastha.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>AASTHA</div>
  </div></a></Link>*/}
<Link href="https://foxandfifth-consulting.com/"><a href="https://foxandfifth-consulting.com/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/FoxandFifth.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>FOX & FIFTH</div>
  </div></a></Link>
  <Link href="https://beta.confluence-r.com/IELTS%20I%20Can/"><a href="https://beta.confluence-r.com/IELTS%20I%20Can/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/IELTS.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>IELTS</div>
  </div></a></Link>
  <Link href="https://www.instagram.com/devijewelsbyradhikac/"><a href="https://www.instagram.com/devijewelsbyradhikac/" className={`${styles.box} ${styles.yellow} ${styles.main}`}>
	<Image layout="fill" src={`/Clients/Devi.png`}/>
	<div className={styles.middle}>
    <div className={styles.text}>DEVI</div>
  </div></a></Link>
</div>

</div>

	</>

)}