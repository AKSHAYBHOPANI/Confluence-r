import Image from 'next/image';
import styles from '../../styles/casestudy.module.css';
import link from "next/link"
import Head from "next/head"

export default function Dynamatics() {
	return (
	<>
	<Head>
  <divnk href="https://cdnjs.cloudflare.com/ajax/divbs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
<br/><br/><br/>

<div className={styles.page}>
<h1 className={styles.title}>MEANDER
<h2 className={styles.titlep}>Social Media Solutions</h2></h1>
<br/>


{/*<div class={styles.wrapcontainer}>
<h2>Basic Service:<hr/></h2>
 <div className={styles.flex}>
<img  src="/SocialMedia/B1.png" alt="Social Media Accounts" width="100%"/>
<div>Creating social media accounts and regulating posts</div></div>
<div className={styles.flex}>
<div>Integration of all social media platforms</div>
<img  src="/SocialMedia/B2.png" alt="Integrating Social Media Platforms" width="100%"/>
</div>
<div className={styles.flex}>
<img  src="/SocialMedia/B3.png" alt="Designing Social Media Campaign" width="100%"/>
<div>Designing a strategic campaign</div>
  </div>
</div>
<br/><br/>

<div class="wrap">
	<div class={styles.wrapcontainer}>
		<h2>Premium Service:<hr/></h2>
<div className={styles.flex}>
<img  src="/SocialMedia/B1.png" alt="Social Media Accounts" width="100%" />	
<div>Creating social media accounts and regulating posts</div></div>
<div className={styles.flex}>
<div>Integration of all social media platforms</div>
<img src="/SocialMedia/B2.png" alt="Integrating Social Media Platforms" width="100%"/>
</div>
<div className={styles.flex}>
<img  src="/SocialMedia/B3.png" alt="Designing Social Media Campaign" width="100%"/>
<div>Designing a strategic campaign</div></div>
<div className={styles.flex}>
<div>Pay per cdivck analysis</div>
<img  src="/SocialMedia/P1.png" alt="PPC Analysis" width="100%"/>
</div>
<div className={styles.flex}>
<img  src="/SocialMedia/P3.png" alt="Commercials For Promotion" width="100%"/>
<div>Creating commercials for promotion through digital media</div></div>
<div className={styles.flex}>
<div>Influencer acquisition and paid partnerships</div>
<img  src="/SocialMedia/P2.png" alt="Influencer Partnerships" width="100%"/>
</div>
</div>
</div>*/}

<h2>Basic Service:<hr/></h2>

<img  src="/SocialMedia/1.png" alt="Social Media Accounts" width="100%"/>
<div class="wrap-container">

<div class="text-wrapper">
<div>Creating social media accounts and regulating posts</div>
<div>Integration of all social media platforms</div>
<div>Designing a strategic campaign</div>


</div>
  </div>
<br/><br/><br/>
<h2>Premium Service:<hr/></h2>

<img  src="/SocialMedia/2.png" alt="Social Media Accounts" width="100%"/>
<div class="wrap-container">

<div class="text-wrapper">

<div>Pay per click analysis</div>
<div>Creating commercials for promotion through digital media</div>
<div>Influencer acquisition and paid partnerships</div>
</div>
  </div>

</div>
<br/><br/><br/><br/><br/>
	</>
)};