import Image from 'next/image';
import styles from '../../styles/casestudy.module.css';
import Link from "next/link"
import Head from "next/head"

export default function Dynamatics() {
	return (
	<>
	<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
<br/><br/><br/><br/>

<div className="page">
<h1>Dynamatics Technology Private Limited Case Study</h1>
<br/>
<div className={`${styles.responsive}`}>
<img className={styles.responsiveimg} src="/Clients/Logos/dynamatics.png"/>
<div className={styles.textArea} style={{fontSize:'1.1rem'}}>
<br/>
<p className={styles.responsivep}>Dynamatic Technologies Ltd. is one
of the globally leading designer and
manufacturer of highly engineered
Automotive, Aerospace and
Hydraulic products. Our challenge
was to create a high data and info
website for them and bring their
older design and back end to the
current digitally competitive space.<br/><br/>
</p></div>
<div className="icon-cont">
<h2>Feature Highlights</h2>

<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-video icons"></i> Video First Approach and Responsive Design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>
<br/>
<li><i class="fas fa-book-open icons"></i> Custom Annual Report Book Interface</li>
</ul>
<ul className={styles.ulp}>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>
<br/>
<li><i class="fas fa-server icons "></i> Legacy Features and Pages Support</li>
<br/>
<li><i class="fas fa-tools icons"></i> Maintenance Service</li>

</ul>

</p></div>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://dynamatics.com" className="button">Visit Website <i class="fas fa-directions"></i> </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button" download>Case Study <i class="fas fa-download"></i> </a>

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};