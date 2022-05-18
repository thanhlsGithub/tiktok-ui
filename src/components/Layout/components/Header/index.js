import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUpload, faCloudArrowUp, faMessage, faUser, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'Ch',
                    title: 'Chinese',
                    type: 'language',

                },
                {
                    code: 'Vi',
                    title: 'Vietnamese',
                    type: 'language',

                }

            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad shortcuts',
    }
];

function Header() {

    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    //Hendle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:

        }
    }

    const userMenu = [

        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@thanh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },

    ];
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo" />
            </div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />

                        </PopperWrapper>
                    </div>
                )}>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload Video" placement='bottom'>
                            <button>
                                <FontAwesomeIcon className={cx('actions-btn')} icon={faCloudArrowUp} />
                            </button>

                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text >Upload</Button>
                        <Button primary >Log in</Button>
                        {/* <Button outline >Register</Button> */}


                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <img
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1b2dc3d4ae3b5b654da9b106a119d07d.jpeg?x-expires=1652954400&x-signature=597Rc93nx9Q9z%2FUX3UToE2r%2BXkg%3D"
                            className={cx('user-avatar')} alt="NguyenVanC" />
                    ) : (
                        <button button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )
                    }
                </Menu>

            </div>


        </div >
    </header >
}

export default Header