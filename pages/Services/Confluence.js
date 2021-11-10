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
<h1 className={styles.title}>CONFLUENCE
<h2 className={styles.titlep}>Content and Graphics Solutions</h2></h1>
<br/>

<div class="wrap">
	<div class="wrap-container">
		<p  ><h2>Basic Service:<hr/></h2></p><br/><br/>
  <img src="/Content/Basic.png" alt="Confluence Content Basic Service"/>
</div>
<div class="wrap-container">
  <br/>

	<div class="text-wrapper">
	
<p  >Create Logo and Brand Image (for<br/> Packaging, Digital Presence, etc).</p>
<p >Use Industry Researched Colours and<br/>  Hues to Initiate Pull Marketing</p>
<p >Create Content for Social Media</p>
 </div>
</div>
  </div>
<br/><br/>
<div class="wrap">
	<div class="wrap-container">
		<p  ><h2>Premium Service:<hr/></h2></p><br/><br/>

			
			<div class="text-wrapper">



</div>
<img  src="/Content/Premium.png" alt="Confluence Content Premium Service"/>
	<div class="text-wrapper">
<p  >Create / Change User Interface<br/>  for any Digital Platform</p>
<p  >Create Informercials, Ads,<br/>  Videos for Promotion</p>
<p >Music Videos, Product Videos,<br/>  Animations, etc.</p>

</div><br/>
<br/>


</div>
</div>
<br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>

<a href="/our-work" className="button">See Our Work  </a>
<a href="/contact" className="button">Request a Quote  </a>
</div>
<br/><br/><br/>
</div>
<br/><br/><br/><br/><br/>
	</>
)};