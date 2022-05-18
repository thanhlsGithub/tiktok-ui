
import className from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e4b78c5a2cbc2a568c96fdcda6c24c33~c5_100x100.jpeg?x-expires=1652875200&x-signature=XwvcOKsURRD9BlOQ2M0EpZskdD0%3D" alt="A" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;