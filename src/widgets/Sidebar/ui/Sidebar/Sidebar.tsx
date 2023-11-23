import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { IconButton, IconButtonSize, IconColor } from 'shared/ui/IconButton/ui/IconButton';
import MenuCloseIcon from 'shared/assets/icons/menuClose.svg';
import { AppLink } from 'shared/ui/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <IconButton
                data-testid="Sidebar-toggle"
                onClick={onToggle}
                size={IconButtonSize.M}
                color={IconColor.SECONDARY}
            >
                <MenuCloseIcon />
            </IconButton>
        </div>

    );
};
