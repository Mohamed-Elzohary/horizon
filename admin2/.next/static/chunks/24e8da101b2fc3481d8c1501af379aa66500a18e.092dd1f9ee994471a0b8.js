(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/vxL":function(e,t,a){e.exports={list:"ProfileSettings_list__3x9ld"}},EBW8:function(e,t,a){e.exports={col:"WebsiteSettings_col__1S92p",buttons:"WebsiteSettings_buttons__MV1cu"}},F4it:function(e,t,a){e.exports={menu:"TimezoneSetting_menu__2MXLs",button:"TimezoneSetting_button__1qvuC"}},"HB+M":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return et}));var s=a("nKUr"),n=a("q1tI"),c=a("80PL"),r=a("20a2"),l=a("CUtM"),i=a("sgb8"),j=a("kriW"),o=a("TSYQ"),b=a.n(o),d=a("pjx/"),u=a("79oC"),O=a("4qaV"),f=a("tfvX"),x=a("Rnrp"),p=a("cpVT"),m=a("vJKn"),h=a.n(m),g=a("rg98"),v=a("KYPV"),w=a("PhFv"),y=a("ZfXW"),M=a("YSmr"),S=a("/97x");function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={name:"",domain:"",public:!1},k=function(e){var t=e.name,a=e.domain,n={};return t||(n.name=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),a?M.h.test(a)||(n.domain=Object(s.jsx)(j.a,{id:"label.invalid-domain",defaultMessage:"Invalid domain"})):n.domain=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"}),n};function D(e){var t=e.values,a=e.onSave,c=e.onClose,r=(Object(S.a)(),Object(n.useState)()),l=r[0],i=r[1],o=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("===================================="),console.log("Values: ",t),console.log("===================================="),ok?a():i(data||Object(s.jsx)(j.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(w.e,{children:Object(s.jsx)(v.d,{initialValues:P(P(P({},_),t),{},{enable_share_url:!(null===t||void 0===t||!t.share_id)}),validate:k,onSubmit:o,children:function(){return Object(s.jsxs)(v.c,{children:[Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"name",children:Object(s.jsx)(j.a,{id:"label.name",defaultMessage:"Name"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"name",type:"text"}),Object(s.jsx)(w.b,{name:"name"})]})]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"domain",children:Object(s.jsx)(j.a,{id:"label.domain",defaultMessage:"Domain"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"domain",type:"text",placeholder:"example.com"}),Object(s.jsx)(w.b,{name:"domain"})]})]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{}),Object(s.jsx)(v.b,{name:"enable_share_url",children:function(e){var t=e.field;return Object(s.jsx)(y.a,P(P({},t),{},{label:Object(s.jsx)(j.a,{id:"label.enable-share-url",defaultMessage:"Enable share URL"})}))}})]}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(O.a,{type:"submit",variant:"action",children:Object(s.jsx)(j.a,{id:"label.save",defaultMessage:"Save"})}),Object(s.jsx)(O.a,{onClick:c,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(s.jsx)(w.c,{children:l})]})}})})}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z="RESET",q=function(e){var t=e.confirmation,a={};return t!==z&&(a.confirmation=t?Object(s.jsx)(j.a,{id:"label.invalid",defaultMessage:"Invalid"}):Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),a};function L(e){var t=e.values,a=e.onSave,c=e.onClose,r=Object(S.a)(),l=Object(n.useState)(),i=l[0],o=l[1],b=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,c,l,i,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,c=t.id,e.next=3,r("/api/".concat(n,"/").concat(c,"/reset"));case 3:l=e.sent,i=l.ok,b=l.data,i?a():o(b||Object(s.jsx)(j.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(w.e,{children:Object(s.jsx)(v.d,{initialValues:R({confirmation:""},t),validate:q,onSubmit:b,children:function(e){return Object(s.jsxs)(v.c,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{id:"message.confirm-reset",defaultMessage:"Are your sure you want to reset {target}'s statistics?",values:{target:Object(s.jsx)("b",{children:t.name})}})}),Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{id:"message.reset-warning",defaultMessage:"All statistics for this website will be deleted, but your tracking code will remain intact."})}),Object(s.jsx)("p",{children:Object(s.jsx)(j.a,{id:"message.type-reset",defaultMessage:"Type {reset} in the box below to confirm.",values:{reset:Object(s.jsx)("b",{children:z})}})}),Object(s.jsx)(w.d,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"confirmation",type:"text"}),Object(s.jsx)(w.b,{name:"confirmation"})]})}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(O.a,{type:"submit",variant:"danger",disabled:e.values.confirmation!==z,children:Object(s.jsx)(j.a,{id:"label.reset",defaultMessage:"Reset"})}),Object(s.jsx)(O.a,{onClick:c,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(s.jsx)(w.c,{children:i})]})}})})}var F=a("b0Y2"),N=a("dhJC");function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=Object(s.jsx)(j.a,{id:"label.copy-to-clipboard",defaultMessage:"Copy to clipboard"});var W=function(e){var t=e.element,a=Object(N.a)(e,["element"]),c=Object(n.useState)(V),r=c[0],l=c[1];return Object(s.jsx)(O.a,A(A({},a),{},{onClick:function(){null!==t&&void 0!==t&&t.current&&(t.current.select(),document.execCommand("copy"),l(Object(s.jsx)(j.a,{id:"message.copied",defaultMessage:"Copied!"})),window.getSelection().removeAllRanges())},children:r}))};function U(e){var t=e.values,a=e.onClose,c=Object(n.useRef)(),l=Object(r.useRouter)().basePath;return Object(s.jsxs)(w.e,{children:[Object(s.jsx)("p",{children:Object(s.jsx)(j.a,{id:"message.track-stats",defaultMessage:"To track stats for {target}, place the following code in the {head} section of your website.",values:{head:"<head>",target:Object(s.jsx)("b",{children:t.name})}})}),Object(s.jsx)(w.d,{children:Object(s.jsx)("textarea",{ref:c,rows:3,cols:60,spellCheck:!1,defaultValue:'<script async defer data-website-id="'.concat(t.website_uuid,'" src="').concat(document.location.origin).concat(l,'/horizon.js"><\/script>'),readOnly:!0})}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(W,{type:"submit",variant:"action",element:c}),Object(s.jsx)(O.a,{onClick:a,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]})]})}function I(e){var t=e.values,a=e.onClose,c=Object(n.useRef)(),l=Object(r.useRouter)().basePath,i=t.name,o=t.share_id;return Object(s.jsxs)(w.e,{children:[Object(s.jsx)("p",{children:Object(s.jsx)(j.a,{id:"message.share-url",defaultMessage:"This is the publicly shared URL for {target}.",values:{target:Object(s.jsx)("b",{children:t.name})}})}),Object(s.jsx)(w.d,{children:Object(s.jsx)("textarea",{ref:c,rows:3,cols:60,spellCheck:!1,defaultValue:"".concat(document.location.origin).concat(l,"/share/").concat(o,"/").concat(encodeURIComponent(i)),readOnly:!0})}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(W,{type:"submit",variant:"action",element:c}),Object(s.jsx)(O.a,{onClick:a,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]})]})}var Y,B=a("TY48"),K=a("TOCn"),J=a("3Sbm"),H=a("ZJFB"),X=a("qUCo"),Z=a("xX61"),G=a("D/21"),Q=a("tiMs");function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var ee,te=function(e){return n.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},e),Y||(Y=n.createElement("path",{d:"M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"})))};function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var se=function(e){return n.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),ee||(ee=n.createElement("path",{d:"M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 004.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 00-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 01-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 014.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"})))},ne=a("0Kmt"),ce=a("EBW8"),re=a.n(ce);function le(){var e=Object(n.useState)(),t=e[0],a=e[1],c=Object(n.useState)(),r=c[0],l=c[1],i=Object(n.useState)(),o=i[0],p=i[1],m=Object(n.useState)(),h=m[0],g=m[1],v=Object(n.useState)(),w=v[0],y=v[1],M=Object(n.useState)(),S=M[0],C=M[1],P=Object(n.useState)(0),_=P[0],k=P[1],E=Object(n.useState)(),R=E[0],z=E[1],q=Object(ne.a)("/api/websites",{},[_]).data,N=[{key:"name",label:Object(s.jsx)(j.a,{id:"label.name",defaultMessage:"Name"}),className:"col-6 col-xl-4",render:function(e){var t=e.website_id,a=e.name,n=e.domain;return Object(s.jsxs)(d.a,{href:"/website/[...id]",as:"/website/".concat(t,"/").concat(a),children:[Object(s.jsx)(H.a,{domain:n}),a]})}},{key:"domain",label:Object(s.jsx)(j.a,{id:"label.domain",defaultMessage:"Domain"}),className:"col-6 col-xl-4"},{key:"action",className:b()(re.a.buttons,"col-12 col-xl-4 pt-2 pt-xl-0"),render:function(e){return Object(s.jsxs)(K.a,{align:"right",children:[e.share_id&&Object(s.jsx)(O.a,{icon:Object(s.jsx)(se,{}),size:"small",tooltip:Object(s.jsx)(j.a,{id:"message.get-share-url",defaultMessage:"Get share URL"}),tooltipId:"button-share-".concat(e.website_id),onClick:function(){return C(e)}}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(te,{}),size:"small",tooltip:Object(s.jsx)(j.a,{id:"message.get-tracking-code",defaultMessage:"Get tracking code"}),tooltipId:"button-code-".concat(e.website_id),onClick:function(){return y(e)}}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(X.a,{}),size:"small",onClick:function(){return a(e)},children:Object(s.jsx)(j.a,{id:"label.edit",defaultMessage:"Edit"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(G.a,{}),size:"small",onClick:function(){return l(e)},children:Object(s.jsx)(j.a,{id:"label.reset",defaultMessage:"Reset"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(Z.a,{}),size:"small",onClick:function(){return p(e)},children:Object(s.jsx)(j.a,{id:"label.delete",defaultMessage:"Delete"})})]})}}];function T(){k((function(e){return e+1})),z(Object(s.jsx)(j.a,{id:"message.save-success",defaultMessage:"Saved successfully."})),A()}function A(){g(null),a(null),l(null),p(null),y(null),C(null)}if(!q)return null;var V=Object(s.jsx)(B.a,{msg:Object(s.jsx)(j.a,{id:"message.no-websites-configured",defaultMessage:"You don't have any websites configured."}),children:Object(s.jsx)(O.a,{icon:Object(s.jsx)(Q.a,{}),size:"medium",onClick:function(){return g(!0)},children:Object(s.jsx)(j.a,{id:"label.add-website",defaultMessage:"Add website"})})});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{id:"label.websites",defaultMessage:"Websites"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(Q.a,{}),size:"small",onClick:function(){return g(!0)},children:Object(s.jsx)(j.a,{id:"label.add-website",defaultMessage:"Add website"})})]}),Object(s.jsx)(u.a,{columns:N,rows:q,empty:V}),t&&Object(s.jsxs)(x.a,{title:Object(s.jsx)(j.a,{id:"label.edit-website",defaultMessage:"Edit website"}),children:[console.log("EditWebsite: ",t),Object(s.jsx)(D,{values:t,onSave:T,onClose:A})]}),h&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.add-website",defaultMessage:"Add website"}),children:Object(s.jsx)(D,{onSave:T,onClose:A})}),r&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.reset-website",defaultMessage:"Reset statistics"}),children:Object(s.jsx)(L,{values:{type:"website",id:r.website_id,name:r.name},onSave:T,onClose:A})}),o&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.delete-website",defaultMessage:"Delete website"}),children:Object(s.jsx)(F.a,{values:{type:"website",id:o.website_id,name:o.name},onSave:T,onClose:A})}),w&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.tracking-code",defaultMessage:"Tracking code"}),children:Object(s.jsx)(U,{values:w,onClose:A})}),S&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.share-url",defaultMessage:"Share URL"}),children:Object(s.jsx)(I,{values:S,onClose:A})}),R&&Object(s.jsx)(J.a,{message:R,onClose:function(){return z(null)}})]})}var ie=a("YFqc"),je=a.n(ie),oe=a("atwx");function be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?be(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue={username:"",password:""},Oe=function(e){var t=e.user_id,a=e.username,n=e.password,c={};return a||(c.username=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),t||n||(c.password=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),c};function fe(e){var t=e.values,a=e.onSave,c=e.onClose,r=Object(S.a)(),l=Object(n.useState)(),i=l[0],o=l[1],b=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/account",t);case 2:n=e.sent,c=n.ok,l=n.data,c?a():o(l||Object(s.jsx)(j.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(w.e,{children:Object(s.jsx)(v.d,{initialValues:de(de({},ue),t),validate:Oe,onSubmit:b,children:function(){return Object(s.jsxs)(v.c,{children:[Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"username",children:Object(s.jsx)(j.a,{id:"label.username",defaultMessage:"Username"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"username",type:"text"}),Object(s.jsx)(w.b,{name:"username"})]})]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"password",children:Object(s.jsx)(j.a,{id:"label.password",defaultMessage:"Password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"password",type:"password"}),Object(s.jsx)(w.b,{name:"password"})]})]}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(O.a,{type:"submit",variant:"action",children:Object(s.jsx)(j.a,{id:"label.save",defaultMessage:"Save"})}),Object(s.jsx)(O.a,{onClick:c,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(s.jsx)(w.c,{children:i})]})}})})}var xe,pe=a("yeKw");function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var he=function(e){return n.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),xe||(xe=n.createElement("path",{d:"M497.6 0L334.4.17a14.4 14.4 0 00-14.4 14.4v33.31a14.4 14.4 0 0014.69 14.4l73.63-2.72 2.06 2.06-278.86 278.87a12 12 0 000 17l23 23a12 12 0 0017 0l278.86-278.87 2.06 2.06-2.72 73.63a14.4 14.4 0 0014.4 14.69h33.31a14.4 14.4 0 0014.4-14.4L512 14.4A14.4 14.4 0 00497.6 0zM432 288h-16a16 16 0 00-16 16v154a6 6 0 01-6 6H54a6 6 0 01-6-6V118a6 6 0 016-6h154a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V304a16 16 0 00-16-16z"})))},ge=a("IY3P"),ve=a.n(ge);function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Me(){var e=Object(n.useState)(),t=e[0],a=e[1],c=Object(n.useState)(),r=c[0],l=c[1],i=Object(n.useState)(),o=i[0],d=i[1],p=Object(n.useState)(0),m=p[0],h=p[1],g=Object(n.useState)(),v=g[0],w=g[1],y=Object(ne.a)("/api/accounts",{},[m]).data,M=[{key:"username",label:Object(s.jsx)(j.a,{id:"label.username",defaultMessage:"Username"}),className:"col-4 col-md-3"},{key:"is_admin",label:Object(s.jsx)(j.a,{id:"label.administrator",defaultMessage:"Administrator"}),className:"col-4 col-md-3",render:function(e){return e.is_admin?Object(s.jsx)(oe.a,{icon:Object(s.jsx)(pe.a,{}),size:"medium"}):null}},{key:"dashboard",label:Object(s.jsx)(j.a,{id:"label.dashboard",defaultMessage:"Dashboard"}),className:"col-4 col-md-3",render:function(e){return Object(s.jsx)(je.a,{href:"/dashboard/".concat(e.user_id,"/").concat(e.username),children:Object(s.jsx)("a",{children:Object(s.jsx)(oe.a,{icon:Object(s.jsx)(he,{})})})})}},{key:"actions",className:b()(ve.a.buttons,"col-12 col-md-3 pt-2 pt-md-0"),render:function(e){return"admin"!==e.username?Object(s.jsxs)(K.a,{align:"right",children:[Object(s.jsx)(O.a,{icon:Object(s.jsx)(X.a,{}),size:"small",onClick:function(){return l(e)},children:Object(s.jsx)(j.a,{id:"label.edit",defaultMessage:"Edit"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(Z.a,{}),size:"small",onClick:function(){return d(e)},children:Object(s.jsx)(j.a,{id:"label.delete",defaultMessage:"Delete"})})]}):null}}];function S(){h((function(e){return e+1})),w(Object(s.jsx)(j.a,{id:"message.save-success",defaultMessage:"Saved successfully."})),C()}function C(){l(null),a(null),d(null)}return y?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{id:"label.accounts",defaultMessage:"Accounts"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(Q.a,{}),size:"small",onClick:function(){return a(!0)},children:Object(s.jsx)(j.a,{id:"label.add-account",defaultMessage:"Add account"})})]}),Object(s.jsx)(u.a,{columns:M,rows:y}),r&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.edit-account",defaultMessage:"Edit account"}),children:Object(s.jsx)(fe,{values:ye(ye({},r),{},{password:""}),onSave:S,onClose:C})}),t&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.add-account",defaultMessage:"Add account"}),children:Object(s.jsx)(fe,{onSave:S,onClose:C})}),o&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.delete-account",defaultMessage:"Delete account"}),children:Object(s.jsx)(F.a,{values:{type:"account",id:o.user_id,name:o.username},onSave:S,onClose:C})}),v&&Object(s.jsx)(J.a,{message:v,onClose:function(){return w(null)}})]}):null}var Se=a("/MKj");function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function Pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _e={current_password:"",new_password:"",confirm_password:""},ke=function(e){var t=e.current_password,a=e.new_password,n=e.confirm_password,c={};return t||(c.current_password=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),a||(c.new_password=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"})),n?a!==n&&(c.confirm_password=Object(s.jsx)(j.a,{id:"label.passwords-dont-match",defaultMessage:"Passwords don't match"})):c.confirm_password=Object(s.jsx)(j.a,{id:"label.required",defaultMessage:"Required"}),c};function De(e){var t=e.values,a=e.onSave,c=e.onClose,r=Object(S.a)(),l=Object(n.useState)(),i=l[0],o=l[1],b=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/account/password",t);case 2:n=e.sent,c=n.ok,l=n.data,c?a():o(l||Object(s.jsx)(j.a,{id:"message.failure",defaultMessage:"Something went wrong."}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(w.e,{children:Object(s.jsx)(v.d,{initialValues:Pe(Pe({},_e),t),validate:ke,onSubmit:b,children:function(){return Object(s.jsxs)(v.c,{children:[Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"current_password",children:Object(s.jsx)(j.a,{id:"label.current-password",defaultMessage:"Current password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"current_password",type:"password"}),Object(s.jsx)(w.b,{name:"current_password"})]})]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"new_password",children:Object(s.jsx)(j.a,{id:"label.new-password",defaultMessage:"New password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"new_password",type:"password"}),Object(s.jsx)(w.b,{name:"new_password"})]})]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)("label",{htmlFor:"confirm_password",children:Object(s.jsx)(j.a,{id:"label.confirm-password",defaultMessage:"Confirm password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(v.b,{name:"confirm_password",type:"password"}),Object(s.jsx)(w.b,{name:"confirm_password"})]})]}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(O.a,{type:"submit",variant:"action",children:Object(s.jsx)(j.a,{id:"label.save",defaultMessage:"Save"})}),Object(s.jsx)(O.a,{onClick:c,children:Object(s.jsx)(j.a,{id:"label.cancel",defaultMessage:"Cancel"})})]}),Object(s.jsx)(w.c,{children:i})]})}})})}var Ee=a("xvhg"),Re=a("/2DS"),ze=a("dB/W"),qe=a("TdLA"),Le=a("rIuf"),Fe=a("F4it"),Ne=a.n(Fe);function Te(){var e=Object(qe.a)(),t=Object(Ee.a)(e,2),a=t[0],n=t[1],c=Object(Re.listTimeZones)().map((function(e){return{label:e,value:e}}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ze.a,{menuClassName:Ne.a.menu,value:a,options:c,onChange:n}),Object(s.jsx)(O.a,{className:Ne.a.button,size:"small",onClick:function(){n(Object(Le.f)())},children:Object(s.jsx)(j.a,{id:"label.reset",defaultMessage:"Reset"})})]})}var Ae=a("1ETy"),Ve=a("/vxL"),We=a.n(Ve),Ue=a("NC3K"),Ie=a("G8Ct"),Ye=a("eWqP"),Be=a.n(Ye),Ke=a("nsFc");function Je(){var e=Object(Ke.a)().locale,t=Object(Ie.a)(),a=Object(Ee.a)(t,2),n=a[0],c=a[1],r=n.startDate,l=n.endDate,i=n.value;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ue.a,{value:i,startDate:r,endDate:l,onChange:c}),Object(s.jsx)(O.a,{className:Be.a.button,size:"small",onClick:function(){c(Object(Le.d)(M.d,e))},children:Object(s.jsx)(j.a,{id:"label.reset",defaultMessage:"Reset"})})]})}function He(){var e=Object(Se.c)((function(e){return e.user})),t=Object(n.useState)(!1),a=t[0],c=t[1],r=Object(n.useState)(),l=r[0],i=r[1],o=e.user_id;return function(e){var t=Object(n.useCallback)((function(t){27===t.keyCode&&e(t)}),[]);Object(n.useEffect)((function(){return document.addEventListener("keydown",t,!1),function(){document.removeEventListener("keydown",t,!1)}}),[t])}((function(){c(!1)})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{id:"label.profile",defaultMessage:"Profile"})}),Object(s.jsx)(O.a,{icon:Object(s.jsx)(Ae.a,{}),size:"small",onClick:function(){return c(!0)},children:Object(s.jsx)(j.a,{id:"label.change-password",defaultMessage:"Change password"})})]}),Object(s.jsxs)("dl",{className:We.a.list,children:[Object(s.jsx)("dt",{children:Object(s.jsx)(j.a,{id:"label.username",defaultMessage:"Username"})}),Object(s.jsx)("dd",{children:e.username}),Object(s.jsx)("dt",{children:Object(s.jsx)(j.a,{id:"label.timezone",defaultMessage:"Timezone"})}),Object(s.jsx)("dd",{children:Object(s.jsx)(Te,{})}),Object(s.jsx)("dt",{children:Object(s.jsx)(j.a,{id:"label.default-date-range",defaultMessage:"Default date range"})}),Object(s.jsx)("dd",{children:Object(s.jsx)(Je,{})})]}),a&&Object(s.jsx)(x.a,{title:Object(s.jsx)(j.a,{id:"label.change-password",defaultMessage:"Change password"}),children:Object(s.jsx)(De,{values:{user_id:o},onSave:function(){c(!1),i(Object(s.jsx)(j.a,{id:"message.save-success",defaultMessage:"Saved successfully."}))},onClose:function(){return c(!1)}})}),l&&Object(s.jsx)(J.a,{message:l,onClose:function(){return i(null)}})]})}var Xe="/analysis/settings",Ze="/analysis/settings/accounts",Ge="/analysis/settings/profile";function Qe(){var e=Object(Se.c)((function(e){return e.user})),t=Object(n.useState)(Xe),a=t[0],c=t[1],o=Object(r.useRouter)().pathname,b=[{label:Object(s.jsx)(j.a,{id:"label.websites",defaultMessage:"Websites"}),value:Xe},{label:Object(s.jsx)(j.a,{id:"label.accounts",defaultMessage:"Accounts"}),value:Ze,hidden:!(null!==e&&void 0!==e&&e.is_admin)},{label:Object(s.jsx)(j.a,{id:"label.profile",defaultMessage:"Profile"}),value:Ge}];return Object(s.jsx)(l.a,{children:Object(s.jsxs)(i.a,{menu:b,selectedOption:a,onMenuSelect:c,children:[o===Xe&&Object(s.jsx)(le,{}),o===Ze&&Object(s.jsx)(Me,{}),o===Ge&&Object(s.jsx)(He,{})]})})}var $e=a("IA1E");function et(){return Object($e.a)().loading?null:Object(s.jsx)(c.a,{children:Object(s.jsx)(Qe,{})})}},IY3P:function(e,t,a){e.exports={buttons:"AccountSettings_buttons__otTH8"}},eWqP:function(e,t,a){e.exports={button:"DateRangeSetting_button__1unZO"}}}]);