"use strict";(self.webpackChunkdreamteam_water=self.webpackChunkdreamteam_water||[]).push([[364],{5090:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var i,a,r,o=t(9439),d=t(2791),l=t(1413),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=t(1074),h=t(168),f=t(7924),m=f.ZP.div(i||(i=(0,h.Z)(["\n\n  display: flex;\n  gap: 12px;\n  justify-content: end;\n       align-items: center;\n  \n    h2{\n      color:#407BFF;\n      text-align: center;\n      font-family: Roboto;\n      font-size: 16px;\n      line-height: 1.25;\n      min-width: 120px;\n      display: block;\n    }\n\n    button {\n      border: none;\n      background-color: transparent;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #407BFF;\n      width: 14px;\n      height: 14px;\n      padding: 0;\n      cursor: pointer;\n\n      &:disabled {\n       opacity: 0;\n  }\n  }\n\n  div{\n    width: 14px;\n    height: 14px;\n  }\n"]))),u=t(184),x=function(n){var e=n.changeSelectedMonth,t=function(){var n=new Date,e=(0,d.useState)({day:n.getDate(),month:n.getMonth(),year:n.getFullYear()}),t=(0,o.Z)(e,2);return[t[0],t[1]]}(),i=(0,o.Z)(t,1)[0],a=(0,d.useState)(i),r=(0,o.Z)(a,2),h=r[0],f=r[1],x=(0,d.useState)({day:1,month:9,year:2023}),p=(0,o.Z)(x,1)[0];(0,d.useEffect)((function(){var n={day:null,month:h.month,year:h.year};e(n)}),[h,e]);return(0,u.jsxs)(m,{children:[(0,u.jsx)("button",{onClick:function(){0===h.month?f((function(n){return(0,l.Z)((0,l.Z)({},n),{},{month:11,year:n.year-1})})):f((function(n){return(0,l.Z)((0,l.Z)({},n),{},{month:n.month-1})}))},disabled:p.day<=2&&0===p.month&&11===h.month&&p.year===h.year+1||p.day<=2&&p.month-1===h.month&&p.year===h.year||p.day>2&&p.month===h.month&&p.year===h.year,children:(0,u.jsx)(c.YNj,{})}),(0,u.jsxs)("h2",{children:[s[h.month]," ",h.year]}),(0,u.jsx)("button",{onClick:function(){11===h.month?f((function(n){return(0,l.Z)((0,l.Z)({},n),{},{month:0,year:n.year+1})})):f((function(n){return(0,l.Z)((0,l.Z)({},n),{},{month:n.month+1})}))},disabled:h.year>=i.year+5&&h.month===i.month,children:(0,u.jsx)(c.p6n,{})})]})},p=function(){var n=(0,d.useState)({day:null,month:null,year:null}),e=(0,o.Z)(n,2),t=e[0],i=e[1];return console.log(t),(0,u.jsx)("div",{style:{marginTop:"50px",marginLeft:"auto"},children:(0,u.jsx)(x,{changeSelectedMonth:i})})},g=t(9985),y=t.p+"static/media/Bottle-Main-sm.397bdd51a9e0ac4aa81f.png",b=f.ZP.div(a||(a=(0,h.Z)(["\n  background-image: url(",");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  .dailyNormaSection {\n    width: 164px;\n    height: 76px;\n\n    padding: 8px 20px 8px 20px;\n\n    background-color: linear-gradient(0deg, #ffffff, #ffffff),\n      linear-gradient(0deg, #ecf2ff, #ecf2ff);\n    border: 1px solid rgba(236, 242, 255, 1);\n    border-radius: 10px;\n  }\n\n  h2 {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.33;\n\n    text-align: left;\n  }\n\n  span {\n    font-family: Roboto;\n    font-size: 22px;\n    font-weight: 700;\n    line-height: 1;\n\n    text-align: left;\n\n    color: rgba(64, 123, 255, 1);\n  }\n\n  button {\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n\n    border: none;\n    background-color: inherit;\n\n    /* width: 28px;\n    height: 20px; */\n\n    text-align: left;\n\n    color: rgba(139, 174, 255, 1);\n  }\n\n  /* background-image: url('../../images/main-bg/Bottle-Main-sm.png'); */\n"])),y),j=function(){return(0,u.jsx)(b,{children:(0,u.jsxs)("div",{className:"dailyNormaSection",children:[(0,u.jsx)("h2",{children:"My Daily norma"}),(0,u.jsx)("span",{children:"1.5 L"}),(0,u.jsx)("button",{type:"button",children:"Edit"})]})})},w=f.ZP.section(r||(r=(0,h.Z)(["\n  .main-container {\n    width: 100%;\n    display: flex;\n  }\n\n  @media screen and (max-width: 767px) {\n    .left-side {\n      height: 504px;\n      width: 100%;\n    }\n  }\n\n  @media screen and (max-width: 1279px) {\n    .main-container {\n      flex-direction: column;\n    }\n\n    .left-side {\n      width: 100%;\n    }\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    .left-side {\n      height: 548px;\n      width: 100%;\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    .left-side {\n      height: 680px;\n    }\n  }\n"]))),Z=function(){return(0,u.jsx)("main",{children:(0,u.jsx)(w,{children:(0,u.jsx)(g.Z,{children:(0,u.jsxs)("div",{className:"main-container",children:[(0,u.jsxs)("div",{className:"left-side",children:[(0,u.jsx)(j,{}),(0,u.jsx)("div",{className:"statusBar"})]}),(0,u.jsxs)("div",{className:"leftSide",children:[(0,u.jsx)("div",{className:"today"}),(0,u.jsx)(p,{})]})]})})})})}}}]);
//# sourceMappingURL=364.6c080a70.chunk.js.map