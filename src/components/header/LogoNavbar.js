import React, {useEffect, useState} from 'react';
import classNames from "classnames";


const LogoNavbar = ({activeNav}) => {
    const [activeLogo, setActiveLogo] = useState(false)
    useEffect(() => {
        if (activeNav) {
            setTimeout(() => {
                setActiveLogo(true)
            }, 300)
        } else {
            setActiveLogo(false)
        }
    }, [activeNav])
    console.log(activeLogo)
    return (
        <div className={'logo_navbar_block'}>
            <div className={classNames('logos', {
                active_logo: activeLogo
            })}>
                <h1>H.G</h1>
                <h2>Coding <span>Addict</span></h2>
            </div>
        </div>
    );
};

export default LogoNavbar;