import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
	return (

<header class="header">
  <a href="/" class="logo"><Image src="/logo.png" width="150px" height="50%"/></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><Link href="/our-work">OUR WORK</Link></li>
    <li><Link href="/services">SERVICES</Link></li>
    <li><Link href="/case-studies">CASE STUDIES</Link></li>
    <li><Link href="/contact">CONTACT US</Link></li>
  </ul>
</header>


)}