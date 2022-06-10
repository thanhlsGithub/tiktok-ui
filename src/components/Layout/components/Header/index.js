import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon, } from '~/components/icons';
import Image from '~/components/image';
import Search from '~/components/Layout/Search';
import routesConfig from '~/config/routes';

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

                },


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

    const currentUser = true;



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

            <Link to={routesConfig.home} className={cx('logo')}>
                <img src={images.logo} alt="logo" />
            </Link>

            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload Video" placement='bottom'>
                            <button>
                                <UploadIcon className={cx('upload-btn')} />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Message" placement='bottom'>
                            <button>
                                <MessageIcon className={cx('message-btn')} />
                            </button>
                        </Tippy>

                        <Tippy delay={[0, 200]} content="Inbox" placement='bottom'>
                            <button>
                                <InboxIcon className={cx('inbox-btn')} />
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
                        <Image
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