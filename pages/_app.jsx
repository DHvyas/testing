import { AnimatePresence, motion } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

import Navbar from './components/navbar';
import LeftSidebar from './compoundComponents/leftSidebar';
function MyApp({ Component, pageProps, router }) {
    const [navToggle, setNavToggle] = useState(false);
    const [onRight, setOnRight] = useState(false);

    const close_sidebar = () => {
        setNavToggle(false);
    };

    const reset_sidebar_side = () => {
        setOnRight(false);
    };

    const open_sidebar = (right = false) => {
        setOnRight(right);
        setNavToggle(true);
    };

    const sidebarProps = {
        navToggle,
        onRight,
        close_sidebar,
        reset_sidebar_side,
    };

    const navbarProps = {
        navToggle,
        open_sidebar,
    };

    return (
        <>
            <LeftSidebar {...sidebarProps} />
            <Navbar {...navbarProps} />

            <motion.div
                key={router.route}
                initial='pageInitial'
                animate={navToggle ? 'overlay' : 'pageAnimate'}
                variants={{
                    pageInitial: {
                        background: '',
                        opacity: 0,
                    },
                    overlay: {
                        opacity: 0.5,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                }}
            >
                <AnimatePresence>
                    <div className='main-container'>
                        <Component {...pageProps} />
                    </div>
                </AnimatePresence>
            </motion.div>
        </>
    );
}

MyApp.propTypes = {
    pageProps: PropTypes.shape({}),
    Component: PropTypes.elementType,
    router: PropTypes.object,
};

export default appWithTranslation(MyApp);
