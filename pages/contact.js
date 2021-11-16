import Image from 'next/image';
import Link from "next/link"
import styles from '../styles/contact.module.css';

export default function Contact() {
return (
		<>
		<br/><br/><br/>
		<h1>CONTACT US</h1>
		<div className={styles.home}>
		<a className={`${styles.box2} ${styles.one}`}>
<div className={`${styles.center}`}>
		
<h3>MESSAGE US</h3>
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>

<div id="mc_embed_signup" className="contactus">
<form action="https://confluence-r.us10.list-manage.com/subscribe/post?u=2cfd9f1913facf1cb06c7fe7d&amp;id=b604712386" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
	
<div className="mc-field-group">
	
	<input type="text"  name="MMERGE3"  id="mce-MMERGE3" placeholder="Name"/>
</div>
<div className="mc-field-group">
	
	<input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email" />
</div>
<div className="mc-field-group">
	
	<input type="text" name="MMERGE1" className="" id="mce-MMERGE1" placeholder="Phone" />
</div>
<div className="mc-field-group">
	
	<input type="text"  name="MMERGE2" className="" id="mce-MMERGE2" placeholder="Message" style={{height: '100px'}}/>
</div>
<div className="mc-field-group">
	<label htmlFor="mce-MMERGE4" style={{textAlign: 'left'}}>Which Package Interests You?</label>
	<select name="MMERGE4" className="" id="mce-MMERGE4">
	<option value=""></option>
	<option value="Mountain">Mountain</option>
<option value="Meander">Meander</option>
<option value="Confluence">Confluence</option>
<option value="Ocean">Ocean</option>
<option value="No idea">No idea</option>

	</select>
</div>
	<div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" ></div>
		<div className="response" id="mce-success-response" ></div>
	</div>    
    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_2cfd9f1913facf1cb06c7fe7d_b604712386" tabIndex="-1" value=""/></div>
    <div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
    </div>
</form>
</div>




</div></a>

<a className={`${styles.boxf} ${styles.six}`}>
<div className={`${styles.center}`}>

	<div className="contact" >
<h3>FIND US ON MAP</h3>
    <div style={{textAlign: 'center'}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30183.92334290335!2d72.79920630301116!3d18.976030581875307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf22b7208253%3A0x5f086a6559658997!2sConfluence-r!5e0!3m2!1sen!2sin!4v1609585891421!5m2!1sen!2sin" width="95%" height="250" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe><br/><br/><br/></div>
</div>
</div></a>

<a className={`${styles.box} ${styles.seven}`}>
<h3>ADDRESS</h3>
<div style={{paddingLeft: '5%', position:'relative', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>

<div style={{textAlign: 'left', lineHeight: 'unset'}}>
<br/>
<i  className="fas fa-map-marker-alt fa-lg" style={{paddingRight:'10px'}}><span> Address : Sunville Building, Lamington Road, Mumbai 400004.
</span></i>

<i className="fas fa-mobile fa-lg" style={{paddingRight:'10px'}}><span>  Phone : <a href="tel:+919820202145">+91 9820202145</a></span></i>
<i className="fas fa-envelope fa-lg" style={{paddingRight:'10px'}} ><span>    E-Mail : <a href="mailto:info@confluence-r.com">info@confluence-r.com</a></span></i>
<i className="fas fa-clock fa-lg" style={{paddingRight:'10px'}} > <span>  Mon - Sat  : 11am to 5pm (Sunday Closed)</span></i>
<br/><br/><br/><br/><br/><br/>
</div></div>
</a>

</div>
		</>
	)
}