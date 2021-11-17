import Image from 'next/image';
import styles from '../../styles/casestudy.module.css';
import Link from "next/link"
import Head from "next/head"

export default function Cbc() {
	return (
	<>
	<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
<br/><br/><br/>

<div className="page">
<h1>Surgems</h1>

<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/Surgems.png"/>}
<div className={styles.textArea} style={{fontSize:'1.1rem'}}>
<p className={styles.responsivep}>Sur Gems (headquartered in Mumbai), has been providing consistent quality services, since 1971. The fibre of Sur Gems is built by starting where others give up. We introduce ourselves as a resource in this globally connected arena. We have a large variety of certified and non certified stones for you to choose from.<br/><br/>
</p></div>

<div className="icon-cont">
<h2>Feature Highlights</h2>

<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> Parallax + Classic Card Design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>


</ul>
<ul className={styles.ulp}>
<li><i class="fas fa-map-marked-alt icons"></i> Google Maps Navigation</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>


</ul>

</p></div>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://surgems.co.in/" className="button">Visit Website <i class="fas fa-directions"></i> </a>
{/*<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>*/}

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};