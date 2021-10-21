import Image from 'next/image';
import styles from '../styles/gallery.module.css';
import Link from "next/link"

export default function OurWork(theme) {
	return (
	<>



<br/><br/><br/>

<div className="page">
<h1>CASE STUDIES</h1>

<div className={styles.home}>

<Link href="/Case-Studies/Dynamatics"><a className={`${styles.box2} ${styles.one}`}>
<div className={`${styles.center}`}>
<Image layout="responsive" width={80} height={15} src="/Clients/Logos/dynamatics.png"/>
</div>
</a></Link>
<Link href="/Case-Studies/Pan"><a className={`${styles.box2} ${styles.two}`}>
<h1 style={{fontSize:'3.1rem', position:'relative',top:'40%', left:'50%', transform:'translate(-50%,-50%)'}} >PAN & THE DREAM</h1>
</a></Link>
<Link href="/Case-Studies/Cbc"><a className={`${styles.box} ${styles.seven}`}>
<div className={`${styles.center}`}>
<Image layout="responsive" width={50} height={20}  src="/Clients/Logos/cbc.png"/>
</div>
</a></Link>
<a className={`${styles.box} ${styles.five}`}>
<Image layout="fill" src="/Clients/Logos/gehna.png"/>
</a>
<a className={`${styles.box} ${styles.six}`}>
<Image layout="fill" className="${styles.yellow}" src="/Clients/Logos/aastha.png"/>
</a>
<a className={`${styles.box} ${styles.three} `}>
<Image layout="fill" src="/Clients/Logos/fox.png"/>
</a>
<a href="./" className={`${styles.box} ${styles.four} ${styles.main}`}>
<Image layout="fill" src="/Clients/Logos/retreeve.png"/>
</a>
<a className={`${styles.box} ${styles.eight}`}>
<div className={`${styles.center}`}>
<Image layout="responsive" width={95} height={80} src="/Clients/Logos/surgems.png"/>
</div>
</a>
<a className={`${styles.box} ${styles.nine}`}>
<div className={`${styles.center}`}>
<Image layout="responsive" width={30} height={13} src="/Clients/Logos/devi.png"/>
</div>
</a>
</div>


</div>

	</>

)}