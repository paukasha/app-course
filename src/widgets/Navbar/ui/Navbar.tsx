import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line no-undef
    const [isAuthModal, setIsAuthModal] = useState(false);

    const OnToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={OnToggleModal}
            >
                {t('Войти')}
                {/* <AppLink to="/" theme={AppLinkTheme.PRIMARY}>Главная</AppLink> */}
                {/* <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>О нас</AppLink> */}
            </Button>

            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet aut blanditiis delectus dolor error
                    et
                    fugiat fugit ipsa iste libero
                    minima modi nesciunt nobis, numquam obcaecati officia perferendis
                    quidem
                    quis quo ratione reprehenderit
                    sequi sit suscipit temporibus, unde. Autem commodi
                    error est facilis
                    id
                    impedit minima modi nesciunt reiciendis repudiandae.

                </div>
            </Modal>
        </div>
    );
};
