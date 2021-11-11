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

<a href="/our-work" className="button">See Our Work  </a>
<a href="/contact" className="button">Request a Quote  </a>
</div>
<br/>
{/*<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>*/}


{/*<p className={styles.titlep}>Why SEO is Important?<hr/></p><br/>
</div>
<br/>
<div style={{textAlign:'center', paddingLeft:'6rem', paddingRight:'6rem'}}><img src="/Website/SEOstats.png" width="50%;" alt="SEO Stats"/>
<br/><p >59% of people click on the first 3 links on Google. Only 2% of people click the 10th link.</p></div>
<br/>
 <img src="/Website/SEOnew.png" width="100%;" alt="Why SEO is Important?"/>
<div class="text-wrapper">

<p>On page SEO refers to the data attached to the various elements on a website (For examplw, images, written content, videos) according to certain relevant keywords to help your websitebe located more easily.</p>
<p >Off page SEO helps to use data from third party websites (such as backlinks, social bookmarks, content based marketing, and online communities) to bring traffic onto your website.</p>
<p >Paid SEO such as PPC and Adwords help to optimize your website based on certain keywords that you spend money to bid on. For example, if you have an e-commerce business, you would invest your advertising budget on the keyword "buy". </p>*/}
</div>
</div>
</div>
<div style={{clear:'both', display:'flex', justifyContent:'space-around', padding:'1rem'}}>
<p className={styles.titlep}>Website Maintenance<hr/></p>
</div>
<div className={styles.home}>
<a  className={`${styles.box} ${styles.white}`}>
	
		<div className={styles.middle}>
    <div className={styles.text} id="aboutm">Plugin updates</div>
  </div>
	</a>
<a  className={`${styles.box2} ${styles.yellow} ${styles.main}`}>
		<div className={styles.middle}>
    <div className={styles.text} id="aboutme">Wordpress updates/shopify updates</div>
  </div></a>
<a  className={`${styles.box3} ${styles.lightblue} ${styles.main}`}>
	
	<div className={styles.middle}>
    <div className={styles.text} id="abouto">Backups </div>
  </div></a>
 

<a  className={`${styles.box5} ${styles.yellow} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Google Analytics Report </div>
  </div></a>
 <a  className={`${styles.box4} ${styles.orange} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Security </div>
  </div></a>
 <a  className={`${styles.box4} ${styles.lightblue} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Blog posts </div>
  </div></a>

  <a  className={`${styles.box4} ${styles.white} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">SEO updates </div>
  </div></a>


 <a  className={`${styles.box6} ${styles.orange} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Helpdesk Support  </div>
  </div></a>

<a  className={`${styles.box4} ${styles.yellow} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Product Updates </div>
  </div></a>
 <a  className={`${styles.box6} ${styles.lightblue} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Design consultation   </div>
  </div></a>
 <a  className={`${styles.box7} ${styles.orange} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">General/Technical Consultation </div>
  </div></a>


 <a  className={`${styles.box9} ${styles.yellow} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Graphic updates - products, banners, etc </div>
  </div></a>

  <a  className={`${styles.box7} ${styles.white} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">New feature development </div>
  </div></a>

 <a  className={`${styles.box4} ${styles.lightblue} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Critical support  </div>
  </div></a>

 <a  className={`${styles.box8} ${styles.yellow} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Integration and maintenance of third party systems and services </div>
  </div></a>
 <a  className={`${styles.box4} ${styles.orange} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Phone support  </div>
  </div></a>
   <a  className={`${styles.box6} ${styles.lightblue} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Design consultation   </div>
  </div></a>

   <a  className={`${styles.box9} ${styles.white} ${styles.main}`}>

	<div className={styles.middle}>
    <div className={styles.text} id="aboutc">Development of additional features </div>
  </div></a>

  </div>



<br/>

<br/><br/><br/><br/><br/>
	</>
)};