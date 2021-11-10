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
<h1>Aastha Foundations</h1>
<br/>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/aastha.png"/>}
<div className={styles.textArea} style={{fontSize:'1.5rem'}}>
<p className={styles.responsivep}>Since he was three years old, the grandson of Dr. Sheth, Arhan Shah has been part of various charitable organizations either by donating every single birthday gift he has received through the years, or going every week to organizations where he knew he could put his skills to use, he has managed to foster a community of togetherness and generosity within his circles. Since he has been exposed to the meaning of actually helpful charitable work, he has taken the torch from his grandfather to create some modern and useful programs for children in areas of the social service community that require the most help – mental and physical health. Aastha is the platform through which, in these trying times, he is able to bring that community online and make it easier for the children to access information, activities, and funds to which they otherwise have very little access to.<br/><br/>
</p></div>

<div style={{textAlign:'center'}}>
<h2>Feature Highlights</h2>
</div>
<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> Bright Design</li>
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
<li><i class="fas fa-money-check icons"></i> Custom Shipping Charges + COD</li>

</ul>

</p>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://aasthafoundations.com/" className="button">Visit Website <i class="fas fa-directions"></i> </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};