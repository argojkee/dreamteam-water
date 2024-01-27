/*! For license information please see 637.94a1c17b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdreamteam_water=self.webpackChunkdreamteam_water||[]).push([[637],{3549:function(e,r,a){var s=a(4420),i=a(7689),d=a(5705),l=a(8007),o=a(5983),n=a(9507),t=a(184);r.Z=function(){var e=(0,s.I0)(),r="/registration"===(0,i.TH)().pathname,a=(0,d.TA)({initialValues:{email:"",password:"",repeatPassword:""},validationSchema:l.Ry(r?{email:l.Z_().matches(/\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]+@\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]+\.\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]/,{message:"Invalid email"}).required("'Email' field is required"),password:l.Z_().min(8,"Must be 8 characters or more").required("'Password' field is required"),repeatPassword:l.Z_().min(8,"Must be 8 characters or more").required("'RepeatPassword' field is required").oneOf([l.iH("password"),null],"Passwords must match")}:{email:l.Z_().matches(/\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]+@\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]+\.\w+[a-zA-Z\u0430-\u044f\u0410-\u042f]/,{message:"Invalid email"}).required("'Email' field is required"),password:l.Z_().min(8,"Must be 8 characters or more").required("'Password' field is required")}),onSubmit:function(a){e(r?(0,n.Z)({email:a.email,password:a.password}):(0,o.Z)({email:a.email,password:a.password}))}});return(0,t.jsx)("div",{children:(0,t.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,t.jsx)("label",{htmlFor:"email",children:"Enter your email"}),(0,t.jsx)("input",{id:"email",name:"email",type:"email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email}),(0,t.jsx)("label",{htmlFor:"password",children:"Enter your password"}),(0,t.jsx)("input",{id:"password",name:"password",type:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password}),r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:"repeatPassword",children:"Repeat password"}),(0,t.jsx)("input",{id:"repeatPassword",name:"repeatPassword",type:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.repeatPassword})]}),(0,t.jsx)("div",{style:{color:"orange"},children:a.touched.email&&a.errors.email?a.errors.email:a.touched.password&&a.errors.password?a.errors.password:a.touched.repeatPassword&&a.errors.repeatPassword?a.errors.repeatPassword:""}),(0,t.jsx)("button",{type:"submit",children:"Submit"})]})})}},3637:function(e,r,a){a.r(r);var s=a(3549),i=a(9985),d=a(184);r.default=function(){return(0,d.jsx)("section",{children:(0,d.jsx)(i.Z,{children:(0,d.jsx)(s.Z,{})})})}}}]);
//# sourceMappingURL=637.94a1c17b.chunk.js.map