exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 9573:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ sidebar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./utils/mediaQueryHelper.jsx

function useMediaQuery(query) {
  const {
    0: matches,
    1: setMatches
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}
const useIsSM = () => useMediaQuery('(min-width: 480px)');
const useIsMD = () => useMediaQuery('(min-width: 768px)');
const useIsLG = () => useMediaQuery('(min-width: 1024px)');
const useIsXL = () => useMediaQuery('(min-width: 1280px)');
// EXTERNAL MODULE: ./pages/components/sidebar.module.css
var sidebar_module = __webpack_require__(6215);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
;// CONCATENATED MODULE: ./pages/components/sidebar.jsx

// import React } from 'react';





function Sidebar(props) {
  const {
    navToggle,
    onRight,
    close_sidebar,
    reset_sidebar_side,
    children
  } = props;
  const isMD = useIsLG();
  const xOffset = -400 + 800 * onRight;
  const sidebarVariants = {
    sidebarOpen: {
      width: isMD ? '30vw' : '75vw',
      transition: {
        when: 'beforeChildren'
      }
    },
    sidebarClosed: {
      width: '',
      transition: {
        when: 'afterChildren'
      }
    }
  };
  const childrenVariants = {
    sidebarOpen: {
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut'
      },
      duration: 0.2,
      opacity: 1
    },
    sidebarClosed: {
      x: xOffset,
      transition: {
        type: 'tween',
        ease: 'easeInOut'
      },
      duration: 0.2,
      opacity: 0
    }
  }; // For handling clicks outside the sidebar

  const node = (0,external_react_.useRef)(null);

  const handleClickOutside = e => {
    console.log('clicking anywhere');

    if (node.current.contains(e.target)) {
      // inside click
      return;
    } // outside click


    close_sidebar();
  };

  (0,external_react_.useEffect)(() => {
    if (navToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navToggle]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
    ref: node,
    className: `${(sidebar_module_default()).sidebar} ${onRight ? (sidebar_module_default()).sidebarRight : (sidebar_module_default()).sidebarLeft}`,
    animate: navToggle ? 'sidebarOpen' : 'sidebarClosed',
    onAnimationComplete: navToggle ? null : reset_sidebar_side,
    variants: sidebarVariants,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      className: (sidebar_module_default()).children,
      variants: childrenVariants,
      children: children
    })
  });
}

/* harmony default export */ var sidebar = (Sidebar);

/***/ }),

/***/ 6215:
/***/ (function(module) {

// Exports
module.exports = {
	"sidebarRight": "sidebar_sidebarRight__3Tzi2",
	"sidebarLeft": "sidebar_sidebarLeft__bcJF_",
	"sidebar": "sidebar_sidebar__b8WYE",
	"children": "sidebar_children__hGExT"
};


/***/ })

};
;