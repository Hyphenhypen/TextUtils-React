(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(6),c=t.n(o),r=(t(15),t(3)),s=(t(17),t(4));function i(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:""},"Services"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(){var e=Object(l.useState)({color:"black",backgroundColor:"white",border:"2px solid light"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",null,"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne",style:t,"aria-expanded":"true","aria-controls":"collapseOne"},"Analyze your text")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},"This helps us in building textUtils website which tells us basic about react js."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree",style:t,"aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"container my-1"},n.a.createElement("button",{onClick:function(){"white"===t.color?(o({color:"black",backgroundColor:"white"}),m("Enable Dark Mode")):(o({color:"white",backgroundColor:"black"}),m("Enable Light Mode"))},type:"button",className:"btn btn-primary"},i)))}function d(e){var a=Object(l.useState)("Enter text here"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var e=o.toUpperCase();c(e)}},"Convert to Upper Case"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var e=o.toLowerCase();c(e)}},"Convert to Lower Case"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){c("")}},"Clear Text"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){console.log("I am copy");var e=document.getElementById("myBox");e.select(),e.setSelectionRange(0,9999),navigator.clipboard.writeText(e.value)}},"Copy to Clipboard"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var e=o.split(/[ ] + /);c(e.join(" "))}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Your text summary"),n.a.createElement("p",null,o.split(" ").filter(function(e){return 0!=e.length}).length," words and ",o.length," characters"),n.a.createElement("p",null,.008*(o.split(" ").length-1)," minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o)))}function u(e){return e.alert&&n.a.createElement("div",{className:"alert alert--".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type),": ",e.alert.msg,n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}i.defaultProps={title:"Set title here"};var b=t(0);var h=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),h=Object(r.a)(c,2),p=h[0],g=h[1],E=function(e,a){g({msg:e,type:a})};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(i,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="grey",E("Dark Mode has been enabled","Success"),setInterval(function(){document.title="TextUtils is amazing"},1500),setInterval(function(){document.title="Install TextUtils now"},2e3)):(o("light"),document.body.style.backgroundColor="white",E("Light Mode has been enabled","Success"),document.title="TextUtils-Light Mode")}}),n.a.createElement(u,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",element:n.a.createElement(d,{showAlert:E,heading:"Enter the text to analyze below",mode:t})}),n.a.createElement(b.a,{exact:!0,path:"/about",element:n.a.createElement(m,null)})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,20)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),p()},7:function(e,a,t){e.exports=t(19)}},[[7,3,2]]]);
//# sourceMappingURL=main.9569d27a.chunk.js.map