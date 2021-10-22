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
<h1>Devi Jewels</h1>
<p style={{textAlign:'center'}}>London, UK</p>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/devi.png"/>}
<div className={styles.textArea} style={{fontSize:'1.5rem'}}>
<p className={styles.responsivep}>Devi Jewels is inspired by a passion, creativity and love for jewellery. Every jewel is made as tresured heirloom, with every stone telling a story and conveying a feeling beyond the sparkel. Devi jewels is a celebration of women. This philosophy is at the core of all Devi Collections , designed as symbolic reminders of our loved ones, our culture and history. Each piece celebrates and brings out the real you; it's a Devi Jewels promise.<br/><br/>
</p></div>

<div style={{textAlign:'center'}}>
<h2>Feature Highlights</h2>
</div>
<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fab fa-instagram icons"></i> Integrated social media strategy</li>
<br/>
<li><i class="far fa-dot-circle icons"></i> Targeted promotions</li>
<br/>
<li><i class="fas fa-tools icons"></i> Website Maintenance Service</li>

</ul>
<ul className={styles.ulp}>
<li><i class="fas fa-camera icons"></i>Product and model photo shoots</li>
<br/>
<li><i class="fas fa-user-clock icons"></i> Increasing Engagement</li>


</ul>

</p>
<br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://www.instagram.com/devijewelsbyradhikac/" className="button">Visit Instagram <i class="fab fa-instagram"></i> </a>
<a href="/Clients/Case-Studies/Devi_Jewelers_Logo.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};