import {useState, useEffect} from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image'

export default function Serp() {

const axios = require('axios').default;
const [url, seturl] = useState("");
const [Keyword, setKeyword] = useState("");
const [Results, setResults] = useState(null);

function Search(e) {
e.preventDefault();
document.getElementById('logo').style.display="block"
const options = {
  method: 'POST',
  url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': '52710cf555mshb56a0572752d388p15061cjsn8c2f34cf0d65',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com'
  },
  data: {query: `q=${Keyword}&num=100`, website: `${url}`}
};

axios.request(options).then(function (response) {
  setResults(response);
  document.getElementById('logo').style.display="none";           
        

}).catch(function (error) {
  console.error(error);
  
});

}


  return (
  	<>
 {!Results ? (
<div className="audit">
<h2 style={{color:"white;"}}>Analyze Your Website&apos;s Search Engine Page Ranking [SERP]</h2>
<form onSubmit={Search}>
<input id="keyword" type="text" name="" placeholder="Keyword" value={Keyword} onChange={(e)=> setKeyword(event.target.value)}/>
<input id="url" type="text" name="" placeholder="URL" value={url} onChange={(e)=> seturl(event.target.value)}/>
<button type="submit" >Go</button>
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
</form>
<p id="position"></p>
</div>
    ) : (
	<div className="audit">
	 <h2>You Rank at Position {Results.data.position} for Keyword {Keyword} as checked in {Results.data.searched_results} search results</h2>
	 <p>We can help you improve your Google Search Rankings with our Website Solutions</p><br/>
	 <a href='./contact' className='button'>Contact Us</a>;
	</div>
)}
		</>
  	)
}