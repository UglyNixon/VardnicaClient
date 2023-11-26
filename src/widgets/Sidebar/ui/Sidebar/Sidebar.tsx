import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import {
    IconButton,
    IconButtonSize,
    IconColor,
} from 'shared/ui/IconButton/ui/IconButton';
import HomeIcon from 'shared/assets/icons/Home.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
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
            <div className={cls.menu}>
                <IconButton
                    size={IconButtonSize.L}
                    color={IconColor.SECONDARY}
                    text={collapsed ? '' : 'Home'}
                    clear={collapsed}
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    size={IconButtonSize.L}
                    color={IconColor.SECONDARY}
                    text={collapsed ? '' : 'Home wqeqwewqeq'}
                    clear={collapsed}
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    size={IconButtonSize.L}
                    color={IconColor.SECONDARY}
                    text={collapsed ? '' : 'Home'}
                    clear={collapsed}
                >
                    <HomeIcon />
                </IconButton>

            </div>

            <Button
                data-testid="Sidebar-toggle"
                onClick={onToggle}
                className={cls.button}
                themeB={ButtonTheme.BACKGROUND}
                size={ButtonSize.XL}
                symbol

            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>

    );
};
