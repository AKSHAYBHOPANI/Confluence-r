import Image from 'next/image';
import styles from '../../styles/casestudy.module.css';
import Link from "next/link"
import Head from "next/head"

export default function Pan() {
	return (
	<>
	<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
<br/><br/><br/>

<div className="page">
<h1>PAN & THE DREAM</h1>
<p style={{textAlign:'center'}}>New York, NY</p>
<br/>
<div className={`${styles.responsive}`}>
{/*<img className={styles.responsiveimg} src="/Clients/Logos/dynamatics.png"/>*/}
<div className={styles.textArea} style={{fontSize:'1.1rem'}}>
<br/>
<p className={styles.responsivep}>Pan is an Art and Style print magazine that invites Artists, Writers and Photographers to share their views on a chosen subject.<br/><br/>
</p></div>

<div className="icon-cont">
<h2>Feature Highlights</h2>

<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fab fa-shopify icons"></i> Custom Responsive Design In Shopify</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>


</ul>
<ul className={styles.ulp}>
<li><i class="fas fa-video icons"></i> Custom Instagram Like Video Interface</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>


</ul>

</p></div>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://www.panandthedream.com" className="button">Visit Website <i class="fas fa-directions"></i> </a>{/*
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>
*/}
</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};