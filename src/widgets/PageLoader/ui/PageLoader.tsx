import { Loader } from 'shared/ui/Loader/ui/Loader';
import cls from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={cls.PageLoader}>
        <Loader />
    </div>

);
