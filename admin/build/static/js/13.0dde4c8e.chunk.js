(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[13],{663:function(e,t,r){e.exports=function(){var e={433:function(e,t,r){"use strict";var a=r(642);function c(){}function n(){}n.resetWarningCache=c,e.exports=function(){function e(e,t,r,c,n,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:c};return r.PropTypes=r,r}},74:function(e,t,r){e.exports=r(433)()},642:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},368:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var c=r(1),n=a.n(c),o=a(74);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,e);var t,r,a,c=(r=o,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(a){var c=l(this).constructor;e=Reflect.construct(t,arguments,c)}else e=t.apply(this,arguments);return _(this,e)});function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=c.call(this,e)).state={isVisible:!0},t.hide=t.hide.bind(d(t)),t.resumeTimer=t.resumeTimer.bind(d(t)),t.pauseTimer=t.pauseTimer.bind(d(t)),t}return(t=[{key:"componentDidMount",value:function(){var e=this.props.duration;this.remaining=e,this.resumeTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"resumeTimer",value:function(){window.clearTimeout(this.timer),this.start=new Date,this.timer=setTimeout(this.hide,this.remaining)}},{key:"pauseTimer",value:function(){this.props.persistOnHover&&(clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"render",value:function(){var e=this.state.isVisible,t=this.props.children;return e?n().createElement("div",{onMouseEnter:this.pauseTimer,onMouseLeave:this.resumeTimer},t):null}}])&&function(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(o.prototype,t),o}(c.Component);p.defaultProps={duration:5e3,children:null,persistOnHover:!0},p.propTypes={children:o.node,duration:o.number,persistOnHover:o.bool};var h=p}},t={};function a(r){if(t[r])return t[r].exports;var c=t[r]={exports:{}};return e[r](c,c.exports,a),c.exports}return a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(368)}()},665:function(e,t,r){"use strict";var a=r(73),c=r(1),n=r(68),o=r(8),i=r(664),s=r.n(i),_=r(663),d=r.n(_),l=r(177),p=r(6);t.a=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),r=t[0],i=t[1],_=Object(c.useState)(""),h=Object(a.a)(_,2),g=h[0],b=h[1],j=Object(c.useState)(0),u=Object(a.a)(j,2),m=u[0],O=u[1],x=Object(c.useState)("false"),f=Object(a.a)(x,2),y=f[0],v=f[1],k=Object(c.useState)(!0),C=Object(a.a)(k,2),w=C[0],S=C[1],T=Object(c.useState)("false"),N=Object(a.a)(T,2),H=N[0],D=N[1],P=Object(c.useState)(!1),R=Object(a.a)(P,2),I=R[0],U=R[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(o.f,{className:"btn-primary",onClick:function(){U(!I)},children:"Upload Image"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(o.o,{show:I,children:Object(p.jsx)(o.g,{className:"mt-3",children:Object(p.jsxs)(o.h,{children:[Object(p.jsxs)(o.g,{style:{width:"50vw"},children:["true"===y?Object(p.jsxs)("div",{children:[Object(p.jsxs)(o.a,{width:"1",color:"success",children:[Object(p.jsx)("strong",{children:"Uploaded"})," Successfully..."]}),Object(p.jsx)(d.a,{duration:3e3,children:"Uploaded Successfully..."})]}):Object(p.jsx)("p",{}),Object(p.jsxs)(o.h,{children:[Object(p.jsx)(o.m,{children:"Upload Image"}),Object(p.jsxs)(o.N,{children:[Object(p.jsx)(o.T,{className:"mb-3",children:Object(p.jsx)(o.U,{value:m})}),Object(p.jsx)("progress",{value:m,max:"100"})]}),Object(p.jsxs)(o.N,{children:[Object(p.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(i(e.target.files[0]),S(!1))}}),Object(p.jsx)(o.f,{color:"secondary",onClick:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,c=e.getFullYear(),o=(new Date).getTime();"".concat(t).concat(a).concat(c,"T").concat(o);v("false"),n.b.ref("images/".concat(r.name)).put(r).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);O(t)}),(function(e){console.log(e)}),(function(){n.b.ref("images").child(r.name).getDownloadURL().then((function(e){b(e),console.log("image: ",r),console.log("URL: "+e);var t={url:e};s.a.post("".concat(l.a,"/api/postImgToGallery"),t).then((function(e){return console.log(e)})),v("true"),S(!0)}))}))},disabled:w,children:"Upload"}),Object(p.jsxs)(o.l,{children:[Object(p.jsx)("strong",{children:" Image URL: "}),g]})]}),Object(p.jsxs)(o.N,{children:["true"===H?Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{duration:2e3,children:"Copied To Clipboard..."})}):Object(p.jsx)("p",{}),Object(p.jsx)(o.f,{color:"secondary",onClick:function(){D("false"),navigator.clipboard.writeText(g),console.log(g),D("true")},children:"Copy Image URL to Clipboard"})]})]})]}),Object(p.jsx)("img",{className:"uploadedImg",src:g||"http://via.placeholder.com/300",alt:"firebase-image"})]})})})]})}},666:function(e,t,r){},667:function(e,t,r){"use strict";var a=r(73),c=r(1),n=r(6);var o=function(e){return Object(n.jsx)("svg",{className:e.className,height:e.height,width:e.width,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(n.jsx)("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})};r(666);t.a=function(e){var t=Object(c.useState)(""),r=Object(a.a)(t,2),i=r[0],s=r[1],_=Object(c.useState)("0px"),d=Object(a.a)(_,2),l=d[0],p=d[1],h=Object(c.useState)("accordion__icon"),g=Object(a.a)(h,2),b=g[0],j=g[1],u=Object(c.useRef)(null);return Object(n.jsxs)("div",{className:"accordion__section",children:[Object(n.jsxs)("button",{type:"button",className:"accordion ".concat(i),onClick:function(){s(""===i?"active":""),p("active"===i?"0px":"".concat(u.current.scrollHeight,"px")),j("active"===i?"accordion__icon":"accordion__icon rotate")},children:[Object(n.jsx)("p",{className:"accordion__title",children:e.title}),Object(n.jsx)(o,{className:"".concat(b),width:10,fill:"#777"})]}),Object(n.jsx)("div",{ref:u,style:{maxHeight:"".concat(l)},className:"accordion__content",children:Object(n.jsx)("div",{className:"accordion__text",children:e.content})})]})}},808:function(e,t,r){"use strict";r.r(t);var a=r(183),c=r(178),n=r(179),o=r(182),i=r(181),s=r(180),_=r(1),d=r(8),l=r(667),p=r(665),h=r(664),g=r.n(h),b=r(663),j=r.n(b),u=r(177),m=r(6),O=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={visible:!1,activeKey:0,edited:!1,submitClass:"disabled",submitDisable:!0,image:"...",url:"...",progress:"...",ld1_section_display:!0,name:"...",prog_card_1_img:"...",prog_card_1_link:"...",prog_card_1_type:"...",prog_card_1_header:"...",prog_card_2_img:"...",prog_card_2_link:"...",prog_card_2_type:"...",prog_card_2_header:"...",prog_card_3_img:"...",prog_card_3_link:"...",prog_card_3_type:"...",prog_card_3_header:"...",prog_card_4_img:"...",prog_card_4_link:"...",prog_card_4_type:"...",prog_card_4_header:"..."},a.onChange=a.onChange.bind(Object(o.a)(a)),a.toggleCheckbox=a.toggleCheckbox.bind(Object(o.a)(a)),a.onSubmit=a.onSubmit.bind(Object(o.a)(a)),a}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u.a,"/api/getLensDesigns1")).then((function(t){var r=t.data,a=r.ld1_section_display,c=r.name,n=r.prog_card_1_img,o=r.prog_card_1_link,i=r.prog_card_1_type,s=r.prog_card_1_header,_=r.prog_card_2_img,d=r.prog_card_2_link,l=r.prog_card_2_type,p=r.prog_card_2_header,h=r.prog_card_3_img,g=r.prog_card_3_link,b=r.prog_card_3_type,j=r.prog_card_3_header,u=r.prog_card_4_img,m=r.prog_card_4_link,O=r.prog_card_4_type,x=r.prog_card_4_header;e.setState({ld1_section_display:a,name:c,prog_card_1_img:n,prog_card_1_link:o,prog_card_1_type:i,prog_card_1_header:s,prog_card_2_img:_,prog_card_2_link:d,prog_card_2_type:l,prog_card_2_header:p,prog_card_3_img:h,prog_card_3_link:g,prog_card_3_type:b,prog_card_3_header:j,prog_card_4_img:u,prog_card_4_link:m,prog_card_4_type:O,prog_card_4_header:x})})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){var t,r=e.target,c=r.name,n=r.value;this.setState((t={},Object(a.a)(t,c,n),Object(a.a)(t,"submitClass","primary"),Object(a.a)(t,"submitDisable",!1),Object(a.a)(t,"edited",!1),t))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,ld1_section_display:this.state.ld1_section_display,prog_card_1_img:this.state.prog_card_1_img,prog_card_1_link:this.state.prog_card_1_link,prog_card_1_type:this.state.prog_card_1_type,prog_card_1_header:this.state.prog_card_1_header,prog_card_2_img:this.state.prog_card_2_img,prog_card_2_link:this.state.prog_card_2_link,prog_card_2_type:this.state.prog_card_2_type,prog_card_2_header:this.state.prog_card_2_header,prog_card_3_img:this.state.prog_card_3_img,prog_card_3_link:this.state.prog_card_3_link,prog_card_3_type:this.state.prog_card_3_type,prog_card_3_header:this.state.prog_card_3_header,prog_card_4_img:this.state.prog_card_4_img,prog_card_4_link:this.state.prog_card_4_link,prog_card_4_type:this.state.prog_card_4_type,prog_card_4_header:this.state.prog_card_4_header};console.log(t),g.a.post("".concat(u.a,"/api/postLensDesigns1"),t).then((function(e){return console.log(e)})),this.setState({edited:!0,submitClass:"disabled",submitDisable:!0})}},{key:"toggleCheckbox",value:function(e){e.preventDefault(),this.setState({ld1_section_display:!this.state.ld1_section_display,submitClass:"primary",submitDisable:!1,edited:!1})}},{key:"render",value:function(){return Object(m.jsxs)(d.V,{children:[!0===this.state.edited?Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{duration:3e3}),Object(m.jsx)(d.hb,{children:Object(m.jsx)(d.gb,{show:!0,autohide:1e3,fade:!0,header:"CToast fixed component",children:Object(m.jsxs)(d.a,{width:"1",color:"success",dismissible:"".concat(!0),children:[Object(m.jsx)("strong",{children:"Updated"})," Successfully..."]})},this.state.fixedToasts)})]}):Object(m.jsx)("p",{}),Object(m.jsx)(d.n,{xs:"12",children:Object(m.jsxs)(d.y,{onSubmit:this.onSubmit,children:[Object(m.jsx)(d.z,{children:Object(m.jsx)("a",{className:"show_design_link",href:"#",role:"button",onClick:this.toggleCheckbox,children:Object(m.jsxs)("label",{className:"show_design",children:[Object(m.jsx)("input",{className:"label__checkbox",id:"show_design",name:"show_design",type:"checkbox",checked:this.state.ld1_section_display,readOnly:!0}),Object(m.jsx)("span",{className:"label__text",children:Object(m.jsx)("span",{className:"label__check",children:Object(m.jsx)("i",{className:"fa fa-check icon"})})}),Object(m.jsx)("label",{className:"show_design_label",htmlFor:"show_design",children:"Show Section"})]})})}),Object(m.jsx)("h6",{children:this.state.name}),Object(m.jsx)(l.a,{title:"Card A",content:Object(m.jsx)("div",{children:Object(m.jsxs)(d.z,{children:[Object(m.jsxs)(d.I,{className:"mb-3",children:[Object(m.jsx)(d.K,{id:"basic-addon3",children:"Paste Image URL"}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_1_img",name:"prog_card_1_img",placeholder:"prog_card_1_img",value:this.state.prog_card_1_img,onChange:this.onChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_1_link",name:"prog_card_1_link",placeholder:"prog_card_1_link",value:this.state.prog_card_1_link,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_1_type",name:"prog_card_1_type",placeholder:"prog_card_1_type",value:this.state.prog_card_1_type,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_1_header",name:"prog_card_1_header",placeholder:"prog_card_1_header",value:this.state.prog_card_1_header,onChange:this.onChange})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{title:"Card B",content:Object(m.jsx)("div",{children:Object(m.jsxs)(d.z,{children:[Object(m.jsxs)(d.I,{className:"mb-3",children:[Object(m.jsx)(d.K,{id:"basic-addon3",children:"Paste Image URL"}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_2_img",name:"prog_card_2_img",placeholder:"prog_card_2_img",value:this.state.prog_card_2_img,onChange:this.onChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_2_link",name:"prog_card_2_link",placeholder:"prog_card_2_link",value:this.state.prog_card_2_link,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_2_type",name:"prog_card_2_type",placeholder:"prog_card_2_type",value:this.state.prog_card_2_type,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_2_header",name:"prog_card_2_header",placeholder:"prog_card_2_header",value:this.state.prog_card_2_header,onChange:this.onChange})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{title:"Card C",content:Object(m.jsx)("div",{children:Object(m.jsxs)(d.z,{children:[Object(m.jsxs)(d.I,{className:"mb-3",children:[Object(m.jsx)(d.K,{id:"basic-addon3",children:"Paste Image URL"}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_3_img",name:"prog_card_3_img",placeholder:"prog_card_3_img",value:this.state.prog_card_3_img,onChange:this.onChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_3_link",name:"prog_card_3_link",placeholder:"prog_card_3_link",value:this.state.prog_card_3_link,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_3_type",name:"prog_card_3_type",placeholder:"prog_card_3_type",value:this.state.prog_card_3_type,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_3_header",name:"prog_card_3_header",placeholder:"prog_card_3_header",value:this.state.prog_card_3_header,onChange:this.onChange})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{title:"Card D",content:Object(m.jsx)("div",{children:Object(m.jsxs)(d.z,{children:[Object(m.jsxs)(d.I,{className:"mb-3",children:[Object(m.jsx)(d.K,{id:"basic-addon3",children:"Paste Image URL"}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_4_img",name:"prog_card_4_img",placeholder:"prog_card_4_img",value:this.state.prog_card_4_img,onChange:this.onChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_4_link",name:"prog_card_4_link",placeholder:"prog_card_4_link",value:this.state.prog_card_4_link,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_4_type",name:"prog_card_4_type",placeholder:"prog_card_4_type",value:this.state.prog_card_4_type,onChange:this.onChange}),Object(m.jsx)("br",{}),Object(m.jsx)(d.H,{type:"text",id:"prog_card_4_header",name:"prog_card_4_header",placeholder:"prog_card_4_header",value:this.state.prog_card_4_header,onChange:this.onChange})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)(d.z,{children:Object(m.jsx)(d.H,{type:"submit",id:"submit",name:"submit",placeholder:"submit",className:"bg-".concat(this.state.submitClass," text-white bold"),value:"SUBMIT",disabled:this.state.submitDisable})})]})}),Object(m.jsx)(p.a,{})]})}}]),r}(_.Component);t.default=O}}]);
//# sourceMappingURL=13.0dde4c8e.chunk.js.map