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
	
<div  >Create Logo and Brand Image (for Packaging, Digital Presence, etc).</div>
<div >Use Industry Researched Colours and Hues to Initiate Pull Marketing</div>
<div  >Create Content for Social Media</div>
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
<div  >Create / Change User Interface for any Digital Platform</div>
<div  >Create Informercials, Ads, Videos for Promotion</div>
<div  >Music Videos, Product Videos, Animations, etc.</div>

</div><br/>
<br/>


</div>
</div>

</div>
<br/><br/><br/><br/><br/>
	</>
)};