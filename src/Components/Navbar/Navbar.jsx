import React, {useRef, useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import navlogo from '../../assets/navlogo.jpg'
import menu_open from '../../assets/menu.png'
import menu_close from '../../assets/menuclose.png'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={navlogo} alt="Logo"/>
        <img src={menu_open} onClick={openMenu} alt="Menu Open" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="Menu Close" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={()=>setMenu("experience")}>Experience</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#certifications'><p onClick={()=>setMenu("certifications")}>Certifications</p></AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar