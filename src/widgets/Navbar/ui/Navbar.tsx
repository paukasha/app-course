import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line no-undef
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                    {/* <AppLink to="/" theme={AppLinkTheme.PRIMARY}>Главная</AppLink> */}
                    {/* <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>О нас</AppLink> */}
                </Button>

                <LoginModal isOpen={isAuthModal} onClose={onClose} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
                {/* <AppLink to="/" theme={AppLinkTheme.PRIMARY}>Главная</AppLink> */}
                {/* <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>О нас</AppLink> */}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </div>
    );
};
