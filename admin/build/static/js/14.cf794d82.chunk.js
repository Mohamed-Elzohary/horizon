(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[14],{631:function(e,t,c){"use strict";var s=c(632),i=c(1),a=c(630);c(637);a.a.initializeApp({apiKey:"AIzaSyCY6qtpw2i46AkPKvTeDy5iAVyaxJhoLoI",authDomain:"horizon-28ad8.firebaseapp.com",projectId:"horizon-28ad8",storageBucket:"horizon-28ad8.appspot.com",messagingSenderId:"533324209164",appId:"1:533324209164:web:39aadbbdd96501a872a229",measurementId:"G-GLCDCLKPEN"});var n=a.a.storage(),o=c(626),l=c(627),r=c.n(l),b=c(628),d=c.n(b),j=c(629),h=c(21);t.a=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),c=t[0],a=t[1],l=Object(i.useState)(""),b=Object(s.a)(l,2),u=b[0],O=b[1],_=Object(i.useState)(0),m=Object(s.a)(_,2),x=m[0],p=m[1],g=Object(i.useState)("false"),f=Object(s.a)(g,2),v=f[0],y=f[1],C=Object(i.useState)(!0),S=Object(s.a)(C,2),w=S[0],k=S[1],I=Object(i.useState)("false"),T=Object(s.a)(I,2),D=T[0],N=T[1],U=Object(i.useState)(!1),z=Object(s.a)(U,2),L=z[0],A=z[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.f,{className:"btn-primary",onClick:function(){A(!L)},children:"Upload Image"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(o.o,{show:L,children:Object(h.jsx)(o.g,{className:"mt-3",children:Object(h.jsxs)(o.h,{children:[Object(h.jsxs)(o.g,{style:{width:"50vw"},children:["true"===v?Object(h.jsxs)("div",{children:[Object(h.jsxs)(o.a,{width:"1",color:"success",children:[Object(h.jsx)("strong",{children:"Uploaded"})," Successfully..."]}),Object(h.jsx)(d.a,{duration:3e3,children:"Uploaded Successfully..."})]}):Object(h.jsx)("p",{}),Object(h.jsxs)(o.h,{children:[Object(h.jsx)(o.m,{children:"Upload Image"}),Object(h.jsxs)(o.O,{children:[Object(h.jsx)(o.U,{className:"mb-3",children:Object(h.jsx)(o.V,{value:x})}),Object(h.jsx)("progress",{value:x,max:"100"})]}),Object(h.jsxs)(o.O,{children:[Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(a(e.target.files[0]),k(!1))}}),Object(h.jsx)(o.f,{color:"secondary",onClick:function(){var e=new Date,t=e.getDate(),s=e.getMonth()+1,i=e.getFullYear(),a=(new Date).getTime();"".concat(t).concat(s).concat(i,"T").concat(a);y("false"),n.ref("images/".concat(c.name)).put(c).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);p(t)}),(function(e){console.log(e)}),(function(){n.ref("images").child(c.name).getDownloadURL().then((function(e){O(e),console.log("image: ",c),console.log("URL: "+e);var t={url:e};r.a.post("".concat(j.a,"/api/postImgToGallery"),t).then((function(e){return console.log(e)})),y("true"),k(!0)}))}))},disabled:w,children:"Upload"}),Object(h.jsxs)(o.l,{children:[Object(h.jsx)("strong",{children:" Image URL: "}),u]})]}),Object(h.jsxs)(o.O,{children:["true"===D?Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{duration:2e3,children:"Copied To Clipboard..."})}):Object(h.jsx)("p",{}),Object(h.jsx)(o.f,{color:"secondary",onClick:function(){N("false"),navigator.clipboard.writeText(u),console.log(u),N("true")},children:"Copy Image URL to Clipboard"})]})]})]}),Object(h.jsx)("img",{className:"uploadedImg",src:u||"http://via.placeholder.com/300",alt:"firebase-image"})]})})})]})}},634:function(e,t,c){},636:function(e,t,c){"use strict";var s=c(632),i=c(1),a=c(21);var n=function(e){return Object(a.jsx)("svg",{className:e.className,height:e.height,width:e.width,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(a.jsx)("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})};c(634);t.a=function(e){var t=Object(i.useState)(""),c=Object(s.a)(t,2),o=c[0],l=c[1],r=Object(i.useState)("0px"),b=Object(s.a)(r,2),d=b[0],j=b[1],h=Object(i.useState)("accordion__icon"),u=Object(s.a)(h,2),O=u[0],_=u[1],m=Object(i.useRef)(null);return Object(a.jsxs)("div",{className:"accordion__section",children:[Object(a.jsxs)("button",{type:"button",className:"accordion ".concat(o),onClick:function(){l(""===o?"active":""),j("active"===o?"0px":"".concat(m.current.scrollHeight,"px")),_("active"===o?"accordion__icon":"accordion__icon rotate")},children:[Object(a.jsx)("p",{className:"accordion__title",children:e.title}),Object(a.jsx)(n,{className:"".concat(O),width:10,fill:"#777"})]}),Object(a.jsx)("div",{ref:m,style:{maxHeight:"".concat(d)},className:"accordion__content",children:Object(a.jsx)("div",{className:"accordion__text",children:e.content})})]})}},638:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(640);var i=c(639);function a(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},816:function(e,t,c){"use strict";c.r(t);var s=c(51),i=c(638),a=c(162),n=c(157),o=c(158),l=c(161),r=c(160),b=c(159),d=c(1),j=c(626),h=c(636),u=c(631),O=c(627),_=c.n(O),m=c(628),x=c.n(m),p=c(629),g=c(21),f=function(e){Object(r.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).state={activeKey:0,edited:!1,submitClass:"disabled",submitDisable:!0,ti_section_display:!0,ti_header:"...",ti_desc:"...",ti_items:[{item_title:"...",item_content:"..."}]},s.onChangeItem=s.onChangeItem.bind(Object(l.a)(s)),s.onChange=s.onChange.bind(Object(l.a)(s)),s.toggleCheckbox=s.toggleCheckbox.bind(Object(l.a)(s)),s.onSubmit=s.onSubmit.bind(Object(l.a)(s)),s}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;_.a.get("".concat(p.a,"/api/getTechnicalInfo")).then((function(t){var c=t.data,s=c.ti_section_display,i=c.ti_header,a=c.ti_desc,n=c.ti_items;e.setState({ti_section_display:s,ti_header:i,ti_desc:a,ti_items:n}),console.log("REQ_STATE:: ",e.state),console.log("______________________________________")})).catch((function(e){console.log(e)}))}},{key:"onSubmit",value:function(e){if(e.preventDefault(),!this.state.submitDisable){var t={ti_section_display:this.state.ti_section_display,ti_header:this.state.ti_header,ti_desc:this.state.ti_desc,ti_items:this.state.ti_items};console.log("POST_STATE:: ",t),_.a.post("".concat(p.a,"/api/postTechnicalInfo"),t).then((function(e){return console.log(e)})),this.setState({edited:!0,submitClass:"disabled",submitDisable:!0})}}},{key:"onChange",value:function(e){var t,c=e.target,s=c.name,i=c.value;this.setState((t={},Object(a.a)(t,s,i),Object(a.a)(t,"submitClass","primary"),Object(a.a)(t,"submitDisable",!1),Object(a.a)(t,"edited",!1),t))}},{key:"onChangeItem",value:function(e,t){var c=e.target,n=c.value,o=c.name;this.setState((function(e){var c=Object(i.a)(e.ti_items);return c[t]=Object(s.a)(Object(s.a)({},c[t]),{},Object(a.a)({},o,n)),{submitClass:"primary",submitDisable:!1,edited:!1,ti_items:c}}))}},{key:"toggleCheckbox",value:function(e){e.preventDefault(),this.setState({ti_section_display:!this.state.ti_section_display,submitClass:"primary",submitDisable:!1,edited:!1})}},{key:"render",value:function(){var e=this,t=this.state.ti_items.map((function(t,c){return Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{title:"Item Info",content:Object(g.jsxs)("div",{children:[Object(g.jsx)(j.H,{type:"text",id:"item_title",name:"item_title",placeholder:"item_title",value:t.item_title,onChange:function(t){return e.onChangeItem(t,c)}}),Object(g.jsx)("br",{}),Object(g.jsx)(j.H,{type:"text",id:"item_content",name:"item_content",placeholder:"item_content",value:t.item_content,onChange:function(t){return e.onChangeItem(t,c)}}),Object(g.jsx)("br",{})]})}),Object(g.jsx)("hr",{})]},c)}));return Object(g.jsxs)(j.W,{children:[!0===this.state.edited?Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a,{duration:3e3}),Object(g.jsx)(j.ib,{children:Object(g.jsx)(j.hb,{show:!0,autohide:1e3,fade:!0,header:"CToast fixed component",children:Object(g.jsxs)(j.a,{width:"1",color:"success",dismissible:"".concat(!0),children:[Object(g.jsx)("strong",{children:"Updated"})," Successfully..."]})},this.state.fixedToasts)})]}):Object(g.jsx)("p",{}),Object(g.jsx)(j.n,{xs:"12",children:Object(g.jsxs)(j.y,{onSubmit:this.onSubmit,children:[Object(g.jsx)(j.z,{children:Object(g.jsx)("a",{class:"show_design_link",href:"#",role:"button",onClick:this.toggleCheckbox,children:Object(g.jsxs)("label",{class:"show_design",children:[Object(g.jsx)("input",{class:"label__checkbox",id:"show_design",name:"show_design",type:"checkbox",checked:this.state.ti_section_display,readOnly:!0}),Object(g.jsx)("span",{class:"label__text",children:Object(g.jsx)("span",{class:"label__check",children:Object(g.jsx)("i",{class:"fa fa-check icon"})})}),Object(g.jsx)("label",{class:"show_design_label",for:"show_design",children:"Show Section"})]})})}),Object(g.jsxs)(j.z,{children:[Object(g.jsx)("h6",{children:this.state.ti_header}),Object(g.jsx)(j.H,{type:"text",id:"ti_header",name:"ti_header",placeholder:"ti_header",value:this.state.ti_header,onChange:this.onChange}),Object(g.jsx)("br",{}),Object(g.jsx)(j.H,{type:"text",id:"ti_desc",name:"ti_desc",placeholder:"ti_desc",value:this.state.ti_desc,onChange:this.onChange}),Object(g.jsx)("hr",{}),t]}),Object(g.jsx)("br",{}),Object(g.jsx)(j.z,{children:Object(g.jsx)(j.H,{type:"submit",id:"submit",name:"submit",placeholder:"submit",className:"bg-".concat(this.state.submitClass," text-white bold"),value:"SUBMIT",disabled:this.state.submitDisable})})]})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("hr",{}),Object(g.jsx)(u.a,{})]})}}]),c}(d.Component);t.default=f}}]);
//# sourceMappingURL=14.cf794d82.chunk.js.map