// import React } from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useIsLG as useIsMD } from '../../utils/mediaQueryHelper';
import PropTypes from 'prop-types';
import styles from './sidebar.module.css';

function Sidebar(props) {
    const { navToggle, onRight, close_sidebar, reset_sidebar_side, children } = props;
    const isMD = useIsMD();
    const xOffset = -400 + 800 * onRight;
    const sidebarVariants = {
        sidebarOpen: {
            width: isMD ? '30vw' : '75vw',
            transition: {
                when: 'beforeChildren',
            },
        },
        sidebarClosed: {
            width: '',
            transition: {
                when: 'afterChildren',
            },
        },
    };

    const childrenVariants = {
        sidebarOpen: {
            x: 0,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
            },
            duration: 0.2,
            opacity: 1,
        },
        sidebarClosed: {
            x: xOffset,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
            },
            duration: 0.2,
            opacity: 0,
        },
    };

    // For handling clicks outside the sidebar

    const node = useRef(null);

    const handleClickOutside = (e) => {
        console.log('clicking anywhere');
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        close_sidebar();
    };

    useEffect(() => {
        if (navToggle) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navToggle]);

    return (
        <motion.div
            ref={node}
            className={`${styles.sidebar} ${
                onRight ? styles.sidebarRight : styles.sidebarLeft
            }`}
            animate={navToggle ? 'sidebarOpen' : 'sidebarClosed'}
            onAnimationComplete={navToggle ? null : reset_sidebar_side}
            variants={sidebarVariants}
        >
            <motion.div className={styles.children} variants={childrenVariants}>
                {children}
            </motion.div>
        </motion.div>
    );
}

Sidebar.propTypes = {
    navToggle: PropTypes.bool,
    onRight: PropTypes.bool,
    close_sidebar: PropTypes.func,
    reset_sidebar_side: PropTypes.func,
    children: PropTypes.node,
};

export default Sidebar;
