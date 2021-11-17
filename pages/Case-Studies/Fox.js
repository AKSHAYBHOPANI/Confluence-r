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
<h1>Fox and Fifth Consultancy</h1>
<p style={{textAlign:'center'}}>Dubai, UAE</p>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/fox.png"/>}
<div className={styles.textArea} style={{fontSize:'1.1rem'}}>
<p className={styles.responsivep}>We began this company to create a unique buyer/seller platform by utilising our distinguished network to its maximum capability. We work as commission agents, deal sources, and the first line of command for diligence and excellence for all our clients.<br/><br/>
</p></div>

<div className="icon-cont">
<h2>Feature Highlights</h2>

<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> Classic Design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>


</ul>
<ul className={styles.ulp}>
<li><i class="fab fa-mailchimp icons"></i> Mailchimp Newsletter Subscription</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>


</ul>

</p></div>
<br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://foxandfifth-consulting.com" className="button">Visit Website <i class="fas fa-directions"></i> </a>
{/*<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>*/}

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};