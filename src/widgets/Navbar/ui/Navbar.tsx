import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'shared/ui/IconButton';
import { IconButtonSize, IconColor } from 'shared/ui/IconButton/ui/IconButton';
import ProfileIcon from 'shared/assets/icons/UserAuth.svg';
import React, { useState } from 'react';
import { LoginModal } from 'app/features/Authorization';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
}
export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseAuthModal = () => setIsAuthModal(false);
    const onOpenAuthModal = () => setIsAuthModal(true);
    return (
        <div data-testid="Navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Navbar_Container}>

                <AppLink
                    key="main"
                    to="/"
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    className={cls.AnotherLink}
                    key="about"
                    to="/about"
                >
                    {t('О нас')}
                </AppLink>
                <AppLink
                    className={cls.AnotherLink}
                    key="about"
                    to="/words"
                >
                    {t('Словарь')}
                </AppLink>
            </div>
            <div className={cls.icons}>
                <SwitcherTheme className="mr-2" />
                <LangSwitcher />
                <IconButton
                    size={IconButtonSize.L}
                    color={IconColor.MAIN}
                    clear
                    onClick={() => onOpenAuthModal()}
                >
                    <ProfileIcon />
                    <LoginModal isOpen={isAuthModal} onClose={() => onCloseAuthModal()} />
                </IconButton>
            </div>
        </div>
    );
};
