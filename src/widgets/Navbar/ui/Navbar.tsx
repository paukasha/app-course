import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwither";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>О нас</AppLink>
            </div>
        </div>
    );
};
