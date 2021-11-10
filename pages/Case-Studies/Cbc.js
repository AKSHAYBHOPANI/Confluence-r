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
<h1>C Bhogilal & Co</h1>
<br/>
<div className={`${styles.responsive}`}>
{<img className={styles.responsiveimg} src="/Clients/Logos/cbc.png"/>}
<br/>
<div className={styles.textArea} style={{fontSize:'1.5rem'}}>
<p className={styles.responsivep}>Since 1914, C Bhogilal & Co. Fort (CBC) has helped create spaces that have ensured a luxurious start every morning. From humble beginnings as a tiles and marble provider, CBC has evolved into a premium lifestyle destination synonymous with innovation and exclusivity. Founded by Mr. Bhogilal Nanalal Shah, CBC has successfully thrived under the subsequent management of Mr. Kantilal Bhogilal Shah, and presently under Mr. Pinakin Shah and Mr. Viral Pinakin Shah. Being one of the oldest lifestyle brands of the city, CBC is proud to have introduced Mumbai to the world of global luxury.<br/><br/>
</p></div>

<div style={{textAlign:'center'}}>
<h2>Feature Highlights</h2>
</div>
<div className={styles.textArea}>
<p>
<ul className={styles.ulp} >
<li><i class="fas fa-palette icons"></i> State of the Art design</li>
<br/>
<li><i class="fas fa-tachometer-alt icons"></i> Page Speed Optimization</li>


</ul>
<ul className={styles.ulp}>
<li><i class="fas fa-history icons"></i> Custom Timeline View</li>
<br/>
<li><i class="fab fa-searchengin icons"></i> SEO Friendly</li>


</ul>

</p>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://cbhogilal.in/" className="button">Visit Website <i class="fas fa-directions"></i> </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Case Study <i class="fas fa-download"></i> </a>

</div>
</div>
</div>
</div>
<br/><br/><br/><br/><br/>
	</>
)};