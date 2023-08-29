import React, {useContext, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import {WrapperCreateContext} from "../Wrapper";
import navData from "../../assets/data/navData";
import {Link} from "react-router-dom";

import classNames from "classnames";
import ShowToHideNavbarButton from "./ShowToHideNavbarButton";
import LogoNavbar from "./LogoNavbar";
import ThemeButton from "./ThemeButton";


const Navbar = () => {
    const [activeNav, setActiveNav] = useState(false)
    const nodeRef = useRef(null);
    const {inPropNavbar} = useContext(WrapperCreateContext)
    return (
        <CSSTransition in={inPropNavbar} timeout={300} classNames="navbar" unmountOnExit>
            <nav ref={nodeRef} className={'navbar'}>
                <div className={classNames('navbar_container', {
                    activeNav
                })}>
                    <LogoNavbar
                        activeNav={activeNav}/>
                    <ShowToHideNavbarButton
                        activeNav={activeNav}
                        setActiveNavbar={setActiveNav}/>
                    <div className={'nav_block'}>
                        <ul>
                            {
                                navData.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/${item.path}`}>
                                            <span>{<item.icons/>}</span>
                                            <small>{item.path}</small>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                        <ThemeButton/>

                    </div>
                </div>
            </nav>
        </CSSTransition>
    );
};

export default Navbar;