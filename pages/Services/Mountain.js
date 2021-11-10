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
<h1 className={styles.title}>MOUNTAIN
<h2 className={styles.titlep}>Website Solutions</h2></h1>
<br/>
<p className={styles.titlep}>Basic Service<hr/></p>
<img src="/Website/Basic.png" width="100%" alt="Mountain Basic Service Features"/>

<div class="wrap-container">

<div class="text-wrapper">
<p >Building website with basic SEO and keywords</p>
<p  >Responsive Design Website for all Devices</p>
<p  >Create a Blog, Insights, or other engagement page</p>
</div>
  </div>

<br/><br/><br/><br/>
<div class="wrap">
	<div class="wrap-container">
<p className={styles.titlep}>Premium Service<hr/></p>

			<img  src="/Website/Premium.png" alt="Mountain Premium Service Features" width="100%"/>
	<div class="text-wrapper">

<p>Creating interactive platforms (blogs, forums, posting sites, etc.)</p>
<p> Search Engine Optimization related branding strategies </p>
<p> Google Adword strategy related web development </p>
</div>
<br/><br/><br/><br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://dynamatics.com" className="button">Website Maintenance Quote  </a>
<a href="/our-work" className="button">See Our Work  </a>
<a href="/contact" className="button">Request a Quote  </a>
</div>
<br/><br/><br/>
<p className={styles.titlep}>Why SEO is Important?<hr/></p><br/>
</div>
<br/>
<div style={{textAlign:'center', paddingLeft:'6rem', paddingRight:'6rem'}}><img src="/Website/SEOstats.png" width="50%;" alt="SEO Stats"/>
<br/><p >59% of people click on the first 3 links on Google. Only 2% of people click the 10th link.</p></div>
<br/>
 <img src="/Website/SEOnew.png" width="100%;" alt="Why SEO is Important?"/>
<div class="text-wrapper">

<p>On page SEO refers to the data attached to the various elements on a website (For examplw, images, written content, videos) according to certain relevant keywords to help your websitebe located more easily.</p>
<p >Off page SEO helps to use data from third party websites (such as backlinks, social bookmarks, content based marketing, and online communities) to bring traffic onto your website.</p>
<p >Paid SEO such as PPC and Adwords help to optimize your website based on certain keywords that you spend money to bid on. For example, if you have an e-commerce business, you would invest your advertising budget on the keyword "buy". </p>
</div>
</div>


<br/>
</div>
<br/><br/><br/><br/><br/>
	</>
)};