(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{3359:function(e,t,n){"use strict";var r=n(2426);t.__esModule=!0,t.default=void 0;var l=r(n(7294)),i=r(n(2775));const a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function o({res:e,err:t}){return{statusCode:e&&e.statusCode?e.statusCode:t?t.statusCode:404}}class s extends l.default.Component{render(){const{statusCode:e}=this.props,t=this.props.title||a[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:d.error},l.default.createElement(i.default,null,l.default.createElement("title",null,e?`${e}: ${t}`:"Application error: a client-side exception has occurred")),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:d.h1},e):null,l.default.createElement("div",{style:d.desc},l.default.createElement("h2",{style:d.h2},this.props.title||e?t:l.default.createElement(l.default.Fragment,null,"Application error: a client-side exception has occurred (",l.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}t.default=s,s.displayName="ErrorPage",s.getInitialProps=o,s.origGetInitialProps=o;const d={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},4977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(3359)}])}},function(e){e.O(0,[774,888,179],(function(){return t=4977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);