import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
//bind object styles tra ra function cx de dung class viet classname
//duoi dau gach ngang

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
