import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import styles from './leftSidebar.module.css';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';

function LeftSidebar({ navToggle, onRight, close_sidebar, reset_sidebar_side }) {
    const sidebarProps = {
        navToggle,
        onRight,
        close_sidebar,
        reset_sidebar_side,
    };
    const router = useRouter();
    const { t } = useTranslation('navbar');
    return (
        <Sidebar {...sidebarProps}>
            <div className={styles.sidebar1}>
                <Image
                    src='/images/close_sidebar.png'
                    alt='close'
                    width={30}
                    height={30}
                    onClick={close_sidebar}
                />
                <Link href='/' locale={router.locale === 'en' ? 'ar' : 'en'} passHref>
                    <button>{router.locale === 'en' ? 'AR' : 'EN'}</button>
                </Link>
            </div>
            <div className={styles.sidebar2}>
                <Link href='/kingsley'>
                    <a>{t('kingsley')}</a>
                </Link>
                <Link href='/kingsleyhome'>
                    <a>{t('khome')}</a>
                </Link>
                <Link href='/gifts'>
                    <a>{t('gifts')}</a>
                </Link>
            </div>
            <div className={styles.sidebar3}>
                <p>{t('needhelp')}</p>
            </div>
            <div className={styles.sidebar4}>{t('socialmedia')}</div>
        </Sidebar>
    );
}

LeftSidebar.propTypes = {
    navToggle: PropTypes.bool,
    onRight: PropTypes.bool,
    close_sidebar: PropTypes.func,
    reset_sidebar_side: PropTypes.func,
};

export default LeftSidebar;
