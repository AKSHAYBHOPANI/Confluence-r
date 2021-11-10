import Image from 'next/image';
import styles from '../../styles/casestudy.module.css';
import Link from "next/link"
import Head from "next/head"

export default function Retreeve() {
	return (
	<>
	<Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
<br/><br/><br/>

<div className="page">
<h1>Retreeve Club</h1>
<br/>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/retreeve.png"/>}
<br/>
<div className={styles.textArea} style={{fontSize:'1.5rem'}}>
<p className={styles.responsivep}>
Today, the need for the hour is to reduce, reuse, and recycle. Keeping with this, “Retreeve” has a range of sustainable and eco-friendly bedding that gives nature a chance to breathe. Experience a low impact life, without compromising on the quality of sleep. It takes about 2,000 chemicals (including carcinogens), many gallons of water, and tons of solid waste to transform raw materials into a few meters of fabric.“Retreeve” recycles pre-consumer waste to save our precious natural resources and minimize our ecological footprint.<br/><br/>
</p></div>

<div style={{textAlign:'center'}}>
<h2>Feature Highlights</h2>
</div>
<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> Parallax + Eco Friendly Design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>
<br/>
<li><i class="fas fa-language icons"></i> 13 Languages Translation</li>


</ul>
<ul className={styles.ulp}>
<li><i class="fab fa-wordpress icons"></i> Wordpress Blog</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>


</ul>

</p>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://retreeve.club/" className="button">Visit Website <i class="fas fa-directions"></i> </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};