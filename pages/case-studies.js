import Image from 'next/image';
import styles from '../styles/gallery.module.css';
import Link from "next/link";
import Head from "next/head";
export default function OurWork(theme) {
	return (
	<>
<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  <title>Confluence-r | Case Studies</title>
  <link rel="icon" href="/favicon.png" />
  <meta name="description" content="We define ourselves as a digital marketing agency that is made up of dynamic thinkers, creative producers, and new age content developers who are able to understand and analyse demographics and real world user experiences."/>
  <link rel="canonical" href="https://confluence-r.com/case-studies"/>
  <meta name="keywords" content="Digital Marketing Agency Services, Best Digital Marketing Agency In Mumbai, Digital Marketing Services In Mumbai, Digital Marketing Agency For Small Business"/>
  </Head>


<br/><br/><br/>

<div className="page">
<h1>CASE STUDIES</h1>

<div className={styles.home}>

<Link href="/Case-Studies/Dynamatics"><a className={`${styles.box2} ${styles.one}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={300} height={60} src="/Clients/Logos/dynamatics.png"/>
</div>
</a></Link>
<Link href="/Case-Studies/Pan"><a className={`${styles.box2} ${styles.two}`}>
<h1 style={{fontSize:'2rem', position:'relative',top:'40%', left:'50%', transform:'translate(-50%,-50%)'}} >PAN & THE DREAM</h1>
<p style={{position:'absolute',top:'59%', left:'50%', transform:'translate(-50%,-50%)'}} >New York, NY</p>
</a></Link>
<Link href="/Case-Studies/Cbc"><a className={`${styles.box} ${styles.seven}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={100}  src="/Clients/Logos/cbc.png"/>
</div>
</a></Link>
<Link href="/Case-Studies/Gehna"><a className={`${styles.box} ${styles.five}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} src="/Clients/Logos/gehna.png"/>
</div></a></Link>
<Link href="/Case-Studies/Aastha"><a className={`${styles.box} ${styles.six}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} className="${styles.yellow}" src="/Clients/Logos/aastha.png"/>
</div></a></Link>
<Link href="/Case-Studies/Fox"><a className={`${styles.box} ${styles.three} `}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} src="/Clients/Logos/fox.png"/>
</div></a></Link>
<Link href="/Case-Studies/Retreeve"><a href="./" className={`${styles.box} ${styles.four} ${styles.main}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} src="/Clients/Logos/retreeve.png"/>
</div></a></Link>
<Link href="/Case-Studies/Surgems"><a className={`${styles.box} ${styles.eight}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} src="/Clients/Logos/surgems.png"/>
</div>
</a></Link>
<Link href="/Case-Studies/Devi"><a className={`${styles.box} ${styles.nine}`}>
<div className={`${styles.center}`}>
<Image layout="fixed" width={250} height={150} src="/Clients/Logos/devi.png"/>
</div>
</a></Link>

</div>


</div>

	</>

)}