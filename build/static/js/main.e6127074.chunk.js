(this["webpackJsonpmtech-app"]=this["webpackJsonpmtech-app"]||[]).push([[0],{23:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(16),r=c.n(i),a=(c(23),c(18)),j=c(3),d=c(6),l=c(17),o=c.n(l),b=c(0),h=function(e){var t=e.product,c=e.onAdd,n=e.btnMode,s=e.onRemove,i=e.cartItems;return Object(b.jsxs)("div",{className:"card",style:{alignItems:"center",height:"350px"},children:[Object(b.jsx)("img",{src:t.image,alt:"Avatar",style:{width:"100px",height:"100px",marginLeft:"32%"}}),Object(b.jsxs)("div",{style:{justifyContent:"center"},children:[Object(b.jsx)("h4",{style:{textAlign:"center",marginTop:"10%"},children:Object(b.jsx)("b",{children:t.title})}),Object(b.jsxs)("p",{style:{textAlign:"center"},children:["BDT ",t.price]})]}),n&&i.find((function(e){return e.id===t.id}))?Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return s(t)},className:"remove",children:"-"})," ",Object(b.jsx)("button",{onClick:function(){return c(t)},className:"add",children:"+"})]}):Object(b.jsx)("button",{style:{marginLeft:"30%"},onClick:function(){c(t)},children:"Add To Cart"})]})};function x(e){var t=e.products,c=e.onAdd,n=e.btnMode,s=e.onRemove,i=e.cartItems;return Object(b.jsxs)("div",{className:"block col-3",children:[Object(b.jsx)("h2",{style:{textAlign:"center",marginTop:"2%",marginBottom:"2%"},children:"Products"}),Object(b.jsx)("div",{className:"row",style:{},children:t&&t.map((function(e){return Object(b.jsx)(h,{product:e,onAdd:c,btnMode:n,onRemove:s,cartItems:i},e.id)}))})]})}var u=function(e){var t=e.countCartItems;return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("img",{src:"m-tech.png",style:{height:"50px",width:"130px"}})})}),t?Object(b.jsxs)("a",{id:"cart",style:{cursor:"pointer"},children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsx)("sup",{className:"badge",children:t})]}):Object(b.jsxs)("a",{id:"cart",style:{cursor:"pointer"},children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsx)("sup",{className:"badge",children:"0"})]})]})},m=function(e){var t=e.cartItems,c=e.onClear,n=t.reduce((function(e,t){return e+t.qty*t.price}),0);return Object(b.jsxs)("div",{className:"sidenav",id:"mySidenav",children:[Object(b.jsx)("a",{href:"#",className:"closebtn",onClick:"closeNav()",children:"\xd7"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{style:{textAlign:"center"},children:"Your Cart"}),0===t.length&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{style:{textAlign:"center",marginTop:"50%"},children:"Cart is empty"})}),t.map((function(e){return Object(b.jsxs)("div",{className:"row1",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("img",{src:e.image,style:{height:"50px",width:"50px",marginTop:"4px",marginLeft:"13px"}})}),Object(b.jsx)("div",{className:"col-3",children:e.title}),Object(b.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x BDT ",e.price.toFixed(2)]})]},e.id)})),0!==t.length&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"row1",children:[Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("strong",{style:{marginLeft:"13px"},children:"Total Price"})}),Object(b.jsx)("div",{className:"col-2 text-right",children:Object(b.jsxs)("strong",{children:["BDT ",n.toFixed(2)]})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row1",children:Object(b.jsx)("button",{className:"paymentBtn",onClick:function(){alert("Payment Completed!"),c()},children:"Payment"})})]})]})]})};c(43);var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),l=r[0],h=r[1],O=Object(n.useState)(!1),p=Object(d.a)(O,2),f=p[0],g=p[1];Object(n.useEffect)((function(){o.a.get("https://fakestoreapi.com/products").then((function(e){return s(e.data)}))}),[]);var v=function(e){g(!0);var t=l.find((function(t){return t.id===e.id}));h(t?l.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(a.a)(l),[Object(j.a)(Object(j.a)({},e),{},{qty:1})]))},y=function(e){var t=l.find((function(t){return t.id===e.id}));1===t.qty?h(l.filter((function(t){return t.id!==e.id}))):h(l.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty-1}):c})))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{countCartItems:l.length}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsx)(x,{products:c,onAdd:v,onRemove:y,btnMode:f,cartItems:l}),Object(b.jsx)(m,{cartItems:l,onClear:function(){h([])},onAdd:v,onRemove:y})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.e6127074.chunk.js.map