import React from 'react';
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className={'header'}>
            <MenuButton/>
            <Navbar/>
        </header>
    );
};

export default Header;