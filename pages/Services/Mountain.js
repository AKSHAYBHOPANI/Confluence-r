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
<div  >Building website with basic SEO and keywords</div>
<div  >Responsive Design Website for all Devices</div>
<div  >Create a Blog, Insights, or other engagement page</div>
</div>
  </div>

<br/><br/><br/><br/>
<div class="wrap">
	<div class="wrap-container">
<p className={styles.titlep}>Premium Service<hr/></p>

			<img  src="/Website/Premium.png" alt="Mountain Premium Service Features" width="100%"/>
	<div class="text-wrapper">

<div>Creating interactive platforms (blogs, forums, posting sites, etc.)</div>
<div> Search Engine Optimization related branding strategies </div>
<div> Google Adword strategy related web development </div>
</div>
<br/><br/><br/><br/><br/>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<a href="https://dynamatics.com" className="button">Website Maintenance Quote  </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">See Our Work  </a>
<a href="/Clients/Case-Studies/Dynamatics%20Website%20Development%20Business%20Proposal.pdf" className="button">Request a Quote  </a>
</div>
<br/><br/><br/>
<p className={styles.titlep}>Why SEO is Important?<hr/></p><br/>
</div>
<br/>
<div style={{textAlign:'center'}}><img src="/Website/SEOstats.png" width="30%;" alt="SEO Stats"/></div>
<br/><div >59% of people click on the first 3 links on Google. Only 2% of people click the 10th link.</div>
<br/>
 <img src="/Website/SEOnew.png" width="100%;" alt="Why SEO is Important?"/>
<div class="text-wrapper">

<div>On page SEO refers to the data attached to the various elements on a website (For examplw, images, written content, videos) according to certain relevant keywords to help your websitebe located more easily.</div>
<div >Off page SEO helps to use data from third party websites (such as backlinks, social bookmarks, content based marketing, and online communities) to bring traffic onto your website.</div>
<div >Paid SEO such as PPC and Adwords help to optimize your website based on certain keywords that you spend money to bid on. For example, if you have an e-commerce business, you would invest your advertising budget on the keyword "buy". </div>
</div>
</div>


<br/>
</div>
<br/><br/><br/><br/><br/>
	</>
)};