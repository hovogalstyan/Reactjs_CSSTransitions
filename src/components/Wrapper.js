import React, {createContext, useState} from 'react';
import {Helmet} from "react-helmet";
import Header from "./header/Header";
import classNames from 'classnames'

export const WrapperCreateContext = createContext(null)
const Wrapper = ({children, helmetTitle}) => {
    const [theme, setTheme] = useState(false);
    const [inPropNavbar, setInPropNavbar] = useState(false);
    return (
        <WrapperCreateContext.Provider value={{
            inPropNavbar,
            setInPropNavbar,
            theme,
            setTheme
        }}>
            <div
                className={classNames('wrapper',
                    {theme}
                )}>
                <Helmet>
                    <title>
                        {helmetTitle}
                    </title>
                </Helmet>
                <Header/>
                <div
                    className={'container'}>
                    {children}
                </div>
            </div>
        </WrapperCreateContext.Provider>
    );
};

export default Wrapper;