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
<br/><br/><br/>

<div className={styles.page}>
<h1 className={styles.title}>MEANDER
<h2 className={styles.titlep}>Social Media Solutions</h2></h1>
<br/>


<div class={styles.wrapcontainer}>
 
<h2>Basic Service:<hr/></h2>
<img  src="/SocialMedia/B1.png" alt="Social Media Accounts" width="100%"/>
<li>Creating social media accounts and regulating posts</li>
<img  src="/SocialMedia/B2.png" alt="Integrating Social Media Platforms" width="100%"/>
<li>Integration of all social media platforms</li>
<img  src="/SocialMedia/B3.png" alt="Designing Social Media Campaign" width="100%"/>
<li>Designing a strategic campaign</li>
  </div>

<br/><br/>
<div class="wrap">
	<div class={styles.wrapcontainer}>
		<h2>Premium Service:<hr/></h2>
<img  src="/SocialMedia/B1.png" alt="Social Media Accounts" width="100%" />	
<li>Creating social media accounts and regulating posts</li>
<img src="/SocialMedia/B2.png" alt="Integrating Social Media Platforms" width="100%"/>
<li>Integration of all social media platforms</li>
<img  src="/SocialMedia/B3.png" alt="Designing Social Media Campaign" width="100%"/>
<li>Designing a strategic campaign</li>
<img  src="/SocialMedia/P1.png" alt="PPC Analysis" width="100%"/>
<li>Pay per click analysis</li>
<img  src="/SocialMedia/P3.png" alt="Commercials For Promotion" width="100%"/>
<li>Creating commercials for promotion through digital media</li>
<img  src="/SocialMedia/P2.png" alt="Influencer Partnerships" width="100%"/>
<li>Influencer acquisition and paid partnerships</li>

</div>
</div>

</div>
<br/><br/><br/><br/><br/>
	</>
)};