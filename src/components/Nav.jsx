import { useState,useRef } from "react";
import './nav.css';

export const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();
  const refIcon = useRef();

  const handleToggle = ()=>{
      if(menuToggle){
          setMenuToggle(false)
          refMenu.current.style.top = '-100%'
          refIcon.current.classList.replace('bi-x-lg','bi-list')
      }else{
          setMenuToggle(true)
          const calculate = refNav.current.offsetTop + refNav.current.clientHeight -1;
          refMenu.current.style.top = calculate+'px'
          refIcon.current.classList.replace('bi-list','bi-x-lg')
      }
  }
  
  return (
      <div className="navContainer">
        <nav ref={refNav} className="nav">
            <button onClick={handleToggle} ref={refBtnToggle} className="btnToggle">
                <i ref={refIcon} className="bi bi-list fs-1"></i>
            </button>
            <ul className="ul" ref={refMenu}>
                <li><a href=""><img className="imgLogo" width={'100px'} src="https://cdn.pixabay.com/photo/2018/06/16/03/15/cup-coffee-3478127_960_720.png" alt="" /></a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Categorys</a></li>
            </ul>
        </nav>
      </div>
  )
}
