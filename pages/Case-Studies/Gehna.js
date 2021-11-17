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
<br/><br/><br/><br/>

<div className="page">
<h1>Gehna Jewellers</h1>
<br/>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/gehna.png"/>}
<br/>
<div className={styles.textArea} style={{fontSize:'1.1rem'}}>
<p className={styles.responsivep}>It was in 1986, when Mr. Sunil Datwani ventured to establish Gehna Jewellers with an opulent boutique on Turner Road in Bandra, Mumbai, India, becoming a first generation entrepreneur to showcase a collection of jewels that would soon become a landmark in the jewellery industry.<br/><br/>
</p></div>

<div className="icon-cont">
<h2>Feature Highlights</h2>

<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> Classic Black Design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>
<br/>
<li><i class="fas fa-mobile icons"></i> WooCommerce Inventory Management App</li>

</ul>
<ul className={styles.ulp}>
<li><i class="fab fa-wordpress icons"></i> Wordpress + WooCommerce CMS</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>
<br/>
<li><i class="fab fa-cc-paypal icons"></i> Bank Transfer + Paypal Payment Gateway</li>

</ul>

</p></div>
<br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://shop.gehnajewellers.com/" className="button">Visit Website <i class="fas fa-directions"></i> </a>
{/*<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>
*/}
</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};