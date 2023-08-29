import React, {useCallback, useContext} from 'react';
import {AiOutlineRight} from "react-icons/ai";
import {BsChevronLeft} from "react-icons/bs";
import classNames from "classnames";
import {WrapperCreateContext} from "../Wrapper";

const ShowToHideNavbarButton = ({setActiveNavbar, activeNav}) => {
    const {setInPropNavbar} = useContext(WrapperCreateContext)
    const handleShowNavbar = useCallback(() => {
        setActiveNavbar(true)
    }, [setActiveNavbar])
    const handleCloseAllNavbar = useCallback(() => {
        setInPropNavbar(false)
        setTimeout(() => {
            setActiveNavbar(false)
        }, 400)
    }, [setActiveNavbar, setInPropNavbar])
    return (
        <div className={classNames('show_navbar_button')}>
            {
                !activeNav
                    ? <span onClick={handleShowNavbar}><AiOutlineRight/></span>
                    : <span style={{
                        color: 'red'
                    }} onClick={handleCloseAllNavbar}><BsChevronLeft/></span>
            }
        </div>
    );
};

export default ShowToHideNavbarButton;