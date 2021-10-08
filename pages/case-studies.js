import Image from 'next/image';
import styles from '../styles/gallery.module.css';
import Link from "next/link"
export default function OurWork() {
	return (
	<>



<br/><br/><br/>

<div className="page">
<h1>CASE STUDIES</h1>

<div className={styles.gallery} id={styles.gallery}>
<img layout="fill" src="/Clients/Logos/retreeve.png"/>
<img layout="fill" src="/Clients/Logos/dynamatics.png"/>
<img layout="fill" src="/Clients/Logos/cbc.png"/>
<img layout="fill" src="/Clients/Logos/surgems.png"/>
<img layout="fill" src="/Clients/Logos/aastha.png"/>
</div>

</div>

	</>

)}