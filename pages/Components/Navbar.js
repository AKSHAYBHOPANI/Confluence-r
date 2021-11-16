import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
	return (

<header className="header">
  <a href="/" className="logo"><Image src="/logo.png" width="150px" height="50%"/></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><Link href="/">HOME</Link></li>
  <li><Link href="/about">ABOUT US</Link></li>
    <li><Link href="/our-work">OUR WORK</Link></li>
    <li><Link href="/services">SERVICES</Link></li>
    <li><Link href="/case-studies">CASE STUDIES</Link></li>
    <li><Link href="/contact">CONTACT US</Link></li>
  </ul>
</header>


)}