"use strict";(self.webpackChunkdreamteam_water=self.webpackChunkdreamteam_water||[]).push([[204],{1204:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var o,i,r=t(9439),a=t(4164),d=t(2791),l=t(168),c=t(7924),s=c.ZP.div(o||(o=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: 250ms linear;\n\n  .modal {\n    position: relative;\n    max-width: 90%;\n    max-height: 95%;\n    position: absolute;\n    background-color: white;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 10px;\n    padding: 24px 32px;\n  }\n\n  .close-btn {\n    cursor: pointer;\n    position: absolute;\n    right: 24px;\n    top: 36px;\n    background-color: transparent;\n    transition: 250ms linear;\n    border: none;\n  }\n\n  .close-modal {\n    width: 24px;\n    height: 24px;\n    fill: #407bff;\n  }\n  @media screen and (max-width: 767px) {\n    .modal {\n      width: 80%;\n    }\n  }\n"]))),u=t(484),p=t(184),x=document.getElementById("modal-backdrop"),f=function(n){var e=n.children,t=n.closeModal;(0,d.useEffect)((function(){function n(n){"Escape"===n.code&&t()}document.body.style.overflow="hidden";var e=window.innerWidth-document.body.offsetWidth+"px";return document.body.style.paddingRight=e,window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto",document.body.style.paddingRight="0px"}}),[t]);return(0,a.createPortal)((0,p.jsx)(s,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,p.jsxs)("div",{className:"modal",children:[(0,p.jsx)("button",{type:"button",className:"close-btn",onClick:t,children:(0,p.jsx)(u.bjh,{className:"close-modal",color:"red",size:24})}),e]})}),x)},h=c.ZP.div(i||(i=(0,l.Z)(["\n  .title,\n  .message {\n    color: #2f2f2f;\n    font-weight: 500;\n    margin-bottom: 24px;\n  }\n\n  .title {\n    font-size: 26px;\n    line-height: 1.23;\n  }\n\n  .message {\n    font-size: 18px;\n    line-height: 1.11;\n  }\n\n  .btn-container {\n    display: flex;\n  }\n\n  button {\n    padding-left: 30px;\n    padding-right: 30px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n  }\n\n  .action-btn {\n    background-color: #ef5050;\n    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);\n    color: #fff;\n  }\n\n  .cancel-btn {\n    background-color: #d7e3ff;\n    color: #407bff;\n  }\n\n  @media screen and (max-width: 767px) {\n    .btn-container {\n      flex-direction: column-reverse;\n      row-gap: 32px;\n      margin-left: auto;\n    }\n    button {\n      padding-top: 8px;\n      padding-bottom: 8px;\n      font-size: 16px;\n      line-height: 1.25;\n      width: 100%;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .btn-container {\n      column-gap: 54px;\n      justify-content: flex-end;\n    }\n    button {\n      padding-top: 10px;\n      padding-bottom: 10px;\n      font-size: 18px;\n      line-height: 24px;\n      width: 160px;\n    }\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n  }\n"]))),m=t(4235),b=t(4420),g=function(n){var e=n.closeModal,t=n.id;console.log(e);var o=!!t,i=(0,b.I0)();return(0,p.jsxs)(h,{children:[(0,p.jsx)("h2",{className:"title",children:o?"Delete entry":"Log out"}),(0,p.jsx)("p",{className:"message",children:o?"Are you sure you want to delete the entry?":"Do you really want to leave?"}),(0,p.jsxs)("div",{className:"btn-container",children:[(0,p.jsx)("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),(0,p.jsx)("button",{className:"action-btn",type:"button",onClick:function(){o||i(m.Z.logOut())},children:o?"Delete":"Log out"})]})]})},w=function(){var n=(0,d.useState)(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1],i=(0,d.useState)(!1),a=(0,r.Z)(i,2),l=a[0],c=a[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"MainPage"}),(0,p.jsx)("button",{onClick:function(){return o(!0)},children:"Logout"}),(0,p.jsx)("button",{onClick:function(){return c(!0)},children:"Delete"}),t&&(0,p.jsx)(f,{children:(0,p.jsx)(g,{closeModal:function(){return o(!1)}}),closeModal:function(){return o(!1)}}),l&&(0,p.jsx)(f,{children:(0,p.jsx)(g,{id:1,closeModal:function(){return c(!1)}}),closeModal:function(){return c(!1)}})]})}}}]);
//# sourceMappingURL=204.99c952ae.chunk.js.map