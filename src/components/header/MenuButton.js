import React, {useCallback, useContext} from 'react';
import {WrapperCreateContext} from "../Wrapper";
import {GiHamburgerMenu} from "react-icons/gi";
import classNames from "classnames";

const MenuButton = () => {
    const {setInPropNavbar, inPropNavbar} = useContext(WrapperCreateContext)
    const handleOpenNavbar = useCallback(() => {
        setInPropNavbar(!inPropNavbar)
    }, [inPropNavbar])
    return (
        !inPropNavbar &&
        <button onClick={handleOpenNavbar} className={classNames({
            active_menu: !inPropNavbar
        })}>
            <GiHamburgerMenu/>
        </button>
    );
};

export default MenuButton;