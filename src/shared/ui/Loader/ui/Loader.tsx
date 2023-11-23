import { FC } from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?:string;
}

export const Loader:FC<LoaderProps> = () => (
    <div className={cls.loader}>
        <div className={cls.face}>
            <div className={cls.circle} />
        </div>
        <div className={cls.face}>
            <div className={cls.circle} />
        </div>
    </div>

);
