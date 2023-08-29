import React, {useCallback, useContext, useMemo} from 'react';
import {WrapperCreateContext} from "../Wrapper";
import {MdDarkMode} from "react-icons/md";
import {CiLight} from "react-icons/ci";
import classNames from "classnames";

const ThemeButton = () => {
    const {theme, setTheme} = useContext(WrapperCreateContext)
    const handleEditTheme = useCallback(() => {
        setTheme(!theme)
    }, [theme]);
    const themeText = useMemo(() => {
        return theme ? "Light"  :  "Dark"
    }, [theme])
    return (
        <div className={'theme_container'}>
            <div className={'theme_row'}>
                <div onClick={handleEditTheme} className="theme_button">
                    <span></span>
                </div>
                <p className={classNames({
                    icons_active: theme
                })}>{themeText} Mode {
                    theme ? <span><CiLight/></span>
                        : <span><MdDarkMode/></span>
                }</p>
            </div>
        </div>
    );
};

export default ThemeButton;