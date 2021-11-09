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
<h1 className={styles.title}>OCEAN
<h2 className={styles.titlep}>Event Solutions</h2></h1>
<br/>

<p ><h2>Basic Service:<hr/></h2></p>
{/*<div class={styles.wrapcontainer}>
<div class="event-wrapper">
	<div class="event-text-wrapper"><h2>Time</h2>Create  anticipating countdown with gifs and graphic along with necessary teasers and hints.</div>
<img  src="/Event/1.png" alt="Time Teasers"/>
</div>
<br/>
<div class="event-wrapper">
	<img  src="/Event/2.png" alt="Event Page"/>
	<div class="event-text-wrapper"><h2>Venue</h2>Create event page on facebook or instagram with relevant buzz creating hashtag.</div>
</div>
<br/>
<div class="event-wrapper">
	<div class="event-text-wrapper"><h2>Code</h2>Create filters on Snapchat or instagram for specific event with logos and theme related colors..</div>
<img  src="/Event/3.png" alt="Snapchat and Instagram Filters"/>
</div>
<br/><br/></div>
<p  ><h2>Premium Service:<hr/></h2>
<br/><br/>
<div class={styles.wrapcontainer}>
<div class="event-wrapper">
	<div class="event-text-wrapper"><h2>Gift Policy</h2>Help coordinate and manage product and service giveaways</div>
<img  src="/Event/4.png" alt="Manage Giveaways"/>
</div>
<br/>
<div class="event-wrapper">
	<img  src="/Event/5.png" alt="Email and Social Media Invites"/>
	<div class="event-text-wrapper"><h2>Invite</h2>Sending invites via email and social media to necessary attendees, help to conduct interviews for reviews, etc.</div>

</div>
<br/>
<div class="event-wrapper">
	<div class="event-text-wrapper"><h2> Itinerary</h2>Help with creating live events (interviews, auctions, meet and greet, etc)</div>
<img  src="/Event/6.png" alt="Live Events"/></div>
</div></p>*/}

<img src="/Event/Basic.png" alt="Confluence Content Basic Service" width="100%"/>

<div class="wrap-container">
  <br/>

	<div class="text-wrapper">
	
<div  >Create  anticipating countdown with gifs and graphic along with necessary teasers and hints.</div>
<div >Create event page on facebook or instagram with relevant buzz creating hashtag.</div>
<div  >Create filters on Snapchat or instagram for specific event with logos and theme related colors.</div>
 </div>
</div>
 <br/>

<p ><h2>Premium Service:<hr/></h2></p>


<br/><br/>
<img src="/Event/Premium.png" alt="Confluence Content Basic Service" width="100%"/>

<div class="wrap-container">
  <br/>

	<div class="text-wrapper">
	
<div  >Help coordinate and manage product and service giveaways</div>
<div >Sending invites via email and social media to necessary attendees, help to conduct interviews for reviews, etc.</div>
<div  >Help with creating live events (interviews, auctions, meet and greet, etc).</div>
 </div>
</div>
 <br/>
</div>
<br/><br/><br/><br/><br/>
	</>
)};