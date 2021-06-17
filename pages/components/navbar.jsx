import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';

function Navbar({ navToggle, open_sidebar }) {
    return (
        <>
            <div
                id='navbar'
                className={`${styles.navbar} ${navToggle ? 'overlayactive' : ''}`}
            >
                <ul className={styles.list}>
                    <li>
                        <Image
                            src='/images/sidebar@2x.png'
                            alt='Menu'
                            width={30}
                            height={20}
                            onClick={() => open_sidebar()}
                        />
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/logo2x.png'
                                    alt='Home'
                                    width={100}
                                    height={30}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.listright}>
                        <Link href='/search'>
                            <a>
                                <Image
                                    src='/images/search2x.png'
                                    alt='Search'
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/user'>
                            <a>
                                <Image
                                    src='/images/user2x.png'
                                    alt='User'
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/cart2x.png'
                                    alt='Cart'
                                    width={20}
                                    height={20}
                                    onClick={() => open_sidebar(true)}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

Navbar.propTypes = {
    navToggle: PropTypes.bool,
    open_sidebar: PropTypes.func,
};

export default Navbar;
