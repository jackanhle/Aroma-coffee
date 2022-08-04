(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{102:function(e,t,n){},109:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),s=(n(102),n(3)),o=n(17),l=n(10),j=n(91),d=n(131),u=n(133),b=n(127),O=n(89),h=(n(37),n(119)),p=n(120),m=n(86),x=n(121),f=n(122),g=n(1);var v=function(e){return Object(g.jsx)(h.a,{fluid:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{className:"text-center",children:[Object(g.jsx)(x.a,{src:"./images/menu.jpg",alt:"display",fluid:!0}),Object(g.jsx)("h1",{className:"mt-5",children:"Welcome to Aroma Mocha"}),Object(g.jsx)(f.a,{className:"mt-3",variant:"dark",href:"/menu",size:"lg",children:"Order"})]})})})},k=n(9);function y(e,t){return 1===t?e:e+"s"}function w(e,t,n){return new Promise((function(a,r){var c,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("drinks",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(c=o.result,i=c.transaction(e,"readwrite"),s=i.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),a(n);break;case"get":var l=s.getAll();l.onsuccess=function(){a(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){c.close()}}}))}var N=n(5),_=n(35),C="UPDATE_DRINKS",E="ADD_TO_CART",T="ADD_MULTIPLE_TO_CART",S="REMOVE_FROM_CART",A="UPDATE_CART_QUANTITY",D="TOGGLE_CART",L="UPDATE_CATEGORIES",I="UPDATE_CURRENT_CATEGORY",$=function(e,t){switch(t.type){case C:return Object(s.a)(Object(s.a)({},e),{},{drinks:Object(_.a)(t.drinks)});case E:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(_.a)(e.cart),[t.drink])});case T:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(_.a)(e.cart),Object(_.a)(t.drinks))});case A:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case S:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case D:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case L:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(_.a)(t.categories)});case I:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var Q=["value"],R=Object(a.createContext)(),F=R.Provider,P=function(e){e.value;var t,n=Object(N.a)(e,Q),r=(t={drinks:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)($,t)),c=Object(k.a)(r,2),i=c[0],o=c[1];return Object(g.jsx)(F,Object(s.a)({value:[i,o]},n))},q=function(){return Object(a.useContext)(R)};var U,G,M,W,B,z=function(e){var t=q(),n=Object(k.a)(t,2),a=n[0],r=n[1],c=e.image,i=e.name,l=e._id,j=e.price,d=e.quantity,u=a.cart;return Object(g.jsxs)("div",{className:"card px-1 py-1",children:[Object(g.jsxs)(o.b,{to:"/drinks/".concat(l),children:[Object(g.jsx)("img",{alt:i,src:"/images/".concat(c)}),Object(g.jsx)("p",{children:i})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[d," ",y("item",d)," in stock"]}),Object(g.jsxs)("span",{children:["$",j]})]}),Object(g.jsx)(f.a,{type:"button",vairant:"dark",onClick:function(){var t=u.find((function(e){return e._id===l}));t?(r({type:A,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),w("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(r({type:E,drink:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),w("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},Y=n(92),H=n(36),J=n(132),K=Object(J.a)(U||(U=Object(H.a)(["\n  query getDrinks($category: ID) {\n    drinks(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),V=Object(J.a)(G||(G=Object(H.a)(["\n  query getCheckout($drinks: [ID]!) {\n    checkout(drinks: $drinks) {\n      session\n    }\n  }\n"]))),X=(Object(J.a)(M||(M=Object(H.a)(["\n  {\n    drinks {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(J.a)(W||(W=Object(H.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),Z=Object(J.a)(B||(B=Object(H.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        drinks {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),ee=n.p+"static/media/spinner.7e729fec.gif";var te=function(){var e=q(),t=Object(k.a)(e,2),n=t[0],r=t[1],c=n.currentCategory,i=Object(Y.b)(K),s=i.loading,o=i.data;return Object(a.useEffect)((function(){o?(r({type:C,drinks:o.drinks}),o.drinks.forEach((function(e){w("drinks","put",e)}))):s||w("drinks","get").then((function(e){r({type:C,drinks:e})}))}),[o,s,r]),Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsx)("h2",{children:"Our Drinks:"}),n.drinks.length?Object(g.jsx)("div",{className:"flex-row",children:(c?n.drinks.filter((function(e){return e.category._id===c})):n.drinks).map((function(e){return Object(g.jsx)(z,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(g.jsx)("h3",{children:"You haven't added any drinks yet!"}),s?Object(g.jsx)("img",{src:ee,alt:"loading"}):null]})};var ne=function(){var e=q(),t=Object(k.a)(e,2),n=t[0],r=t[1],c=n.categories,i=Object(Y.b)(X),s=i.loading,o=i.data;return Object(a.useEffect)((function(){o?(r({type:L,categories:o.categories}),o.categories.forEach((function(e){w("categories","put",e)}))):s||w("categories","get").then((function(e){r({type:L,categories:e})}))}),[o,s,r]),Object(g.jsx)(h.a,{children:Object(g.jsx)(p.a,{className:"text-center",children:Object(g.jsx)(m.a,{children:c.map((function(e){return Object(g.jsx)(f.a,{type:"button",variant:"dark",lineHeight:"1",size:"lg",className:"m-2",onClick:function(){var t;t=e._id,r({type:I,currentCategory:t})},children:e.name},e._id)}))})})})},ae=n(25),re=n(41),ce=n(88),ie=n(124),se=function(e){var t=e.item,n=q(),a=Object(k.a)(n,2)[1];return Object(g.jsxs)("div",{className:"flex-row",children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[t.name,", $",t.price]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"Qty:"}),Object(g.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:S,_id:t._id}),w("cart","delete",Object(s.a)({},t))):(a({type:A,_id:t._id,purchaseQuantity:parseInt(n)}),w("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(g.jsx)(f.a,{onClick:function(){return function(e){a({type:S,_id:e._id}),w("cart","delete",Object(s.a)({},e))}(t)},type:"button",variant:"secondary",children:"Remove"})]})]})]})},oe=n(50),le=n(51),je=n(77),de=n.n(je),ue=new(function(){function e(){Object(oe.a)(this,e)}return Object(le.a)(e,[{key:"getProfile",value:function(){return de()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return de()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),be=(n(109),Object(ce.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),Oe=function(){var e=q(),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(ie.a)(V),i=Object(k.a)(c,2),s=i[0],o=i[1].data;function l(){r({type:D})}return Object(a.useEffect)((function(){o&&be.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(a.useEffect)((function(){function e(){return(e=Object(re.a)(Object(ae.a)().mark((function e(){var t;return Object(ae.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("cart","get");case 2:t=e.sent,r({type:T,drinks:Object(_.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,r]),n.cartOpen?Object(g.jsxs)("div",{className:"cart",children:[Object(g.jsx)("div",{className:"close",onClick:l,children:"Close"}),Object(g.jsx)("h2",{children:"Drink cart"}),n.cart.length?Object(g.jsxs)("div",{children:[n.cart.map((function(e){return Object(g.jsx)(se,{item:e},e._id)})),Object(g.jsxs)("div",{className:"flex-row space-between",children:[Object(g.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ue.loggedIn()?Object(g.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{drinks:e}})},children:"Checkout"}):Object(g.jsx)("span",{children:"(log in to check out)"})]})]}):Object(g.jsx)("h3",{children:"Your cart is empty!"})]}):Object(g.jsx)("div",{className:"cart-closed",onClick:l,children:Object(g.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},he=function(){return Object(g.jsx)(h.a,{fluid:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)(ne,{}),Object(g.jsx)(te,{}),Object(g.jsx)(Oe,{})]})})})};var pe,me,xe,fe=function(){var e=q(),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(l.g)().id,i=Object(a.useState)({}),j=Object(k.a)(i,2),d=j[0],u=j[1],b=Object(Y.b)(K),O=b.loading,h=b.data,p=n.drinks,m=n.cart;return Object(a.useEffect)((function(){p.length?u(p.find((function(e){return e._id===c}))):h?(r({type:C,drinks:h.drinks}),h.drinks.forEach((function(e){w("drinks","put",e)}))):O||w("drinks","get").then((function(e){r({type:C,drinks:e})}))}),[p,h,O,r,c]),Object(g.jsxs)(g.Fragment,{children:[d&&m?Object(g.jsxs)("div",{className:"container my-1",children:[Object(g.jsx)(o.b,{to:"/",children:"\u2190 Back to Drinks"}),Object(g.jsx)("h2",{children:d.name}),Object(g.jsx)("p",{children:d.description}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Price:"}),"$",d.price," ",Object(g.jsx)(f.a,{type:"button",variant:"dark",onClick:function(){var e=m.find((function(e){return e._id===c}));e?(r({type:A,_id:c,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),w("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(r({type:E,drink:Object(s.a)(Object(s.a)({},d),{},{purchaseQuantity:1})}),w("cart","put",Object(s.a)(Object(s.a)({},d),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(g.jsx)(f.a,{disabled:!m.find((function(e){return e._id===d._id})),onClick:function(){r({type:S,_id:d._id}),w("cart","delete",Object(s.a)({},d))},type:"button",variant:"dark",children:"Remove from Cart"})]}),Object(g.jsx)("img",{src:"/images/".concat(d.image),alt:d.name})]}):null,O?Object(g.jsx)("img",{src:ee,alt:"loading"}):null,Object(g.jsx)(Oe,{})]})},ge=function(){return Object(g.jsx)(h.a,{fluid:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{className:"text-center",children:[Object(g.jsx)("h1",{children:"404 Page Not Found"}),Object(g.jsx)("h1",{children:Object(g.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})},ve=n(11),ke=n(125),ye=Object(J.a)(pe||(pe=Object(H.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),we=Object(J.a)(me||(me=Object(H.a)(["\n  mutation addOrder($drinks: [ID]!) {\n    addOrder(drinks: $drinks) {\n      purchaseDate\n      drinks {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Ne=Object(J.a)(xe||(xe=Object(H.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),_e=n(130);var Ce=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(k.a)(t,2),r=n[0],c=n[1],i=Object(ke.a)(ye),o=Object(k.a)(i,2),l=o[0],j=o[1].error,d=function(){var e=Object(re.a)(Object(ae.a)().mark((function e(t){var n,a;return Object(ae.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:r.email,password:r.password}});case 4:n=e.sent,a=n.data.login.token,ue.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,a=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(ve.a)({},n,a)))};return Object(g.jsxs)(h.a,{children:[Object(g.jsx)(f.a,{className:"m-4",variant:"dark",href:"/signup",size:"lg",fluid:!0,children:"Back to Signup"}),Object(g.jsx)(p.a,{className:"justify-content-md-center",children:Object(g.jsxs)(_e.a,{onSubmit:d,children:[Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"email",children:"Email"}),Object(g.jsx)(_e.a.Control,{type:"email",placeholder:"Enter your email",name:"email",onChange:u,value:r.email,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your email"})]}),Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"password",children:"Password"}),Object(g.jsx)(_e.a.Control,{type:"password",placeholder:"Enter your password",name:"password",onChange:u,value:r.password,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your password"})]}),j?Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(g.jsx)(f.a,{disabled:!(r.email&&r.password),type:"submit",variant:"dark",children:"Login"})]})})]})};var Ee=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(k.a)(t,2),r=n[0],c=n[1],i=Object(ke.a)(Ne),o=Object(k.a)(i,1)[0],l=function(){var e=Object(re.a)(Object(ae.a)().mark((function e(t){var n,a;return Object(ae.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,a=n.data.addUser.token,ue.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,a=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(ve.a)({},n,a)))};return Object(g.jsxs)(h.a,{children:[Object(g.jsx)(f.a,{className:"m-4",variant:"dark",href:"/login",size:"lg",fluid:!0,children:"Go to Login"}),Object(g.jsx)(p.a,{className:"justify-content-md-center",children:Object(g.jsxs)(_e.a,{onSubmit:l,children:[Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"firstName",children:"Firstname"}),Object(g.jsx)(_e.a.Control,{type:"text",placeholder:"Enter your first name",name:"firstName",onChange:j,value:r.firstName,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your first name"})]}),Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"lastName",children:"Lastname"}),Object(g.jsx)(_e.a.Control,{type:"text",placeholder:"Enter your last name",name:"lastName",onChange:j,value:r.lastName,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your last name"})]}),Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"email",children:"Email"}),Object(g.jsx)(_e.a.Control,{type:"email",placeholder:"Enter your email",name:"email",onChange:j,value:r.email,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your email"})]}),Object(g.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(g.jsx)(_e.a.Label,{htmlFor:"password",children:"Password"}),Object(g.jsx)(_e.a.Control,{type:"password",placeholder:"Enter your password",name:"password",onChange:j,value:r.password,required:!0}),Object(g.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Enter your password"})]}),Object(g.jsx)(f.a,{disabled:!(r.email&&r.password&&r.firstName&&r.lastName),type:"submit",variant:"dark",children:"Sign Up"})]})})]})},Te=n(128),Se=n(129);var Ae=function(e){return ue.loggedIn()?Object(g.jsx)(Te.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(Te.a.Brand,{as:o.b,to:"/",children:"Aroma Mocha"}),Object(g.jsx)(Te.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(Te.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(Se.a,{className:"me-auto",children:[Object(g.jsx)(Se.a.Link,{as:o.b,to:"/menu",children:"Menu"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/cart",children:"Cart"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/profile",children:"Profile"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/",onClick:function(){return ue.logout()},children:"Logout"})]})})]})}):Object(g.jsx)(Te.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(Te.a.Brand,{as:o.b,to:"/",children:"Aroma Mocha"}),Object(g.jsx)(Te.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(Te.a.Collapse,{id:"responsive-navbar-nav"}),Object(g.jsxs)(Se.a,{className:"me-auto",children:[Object(g.jsx)(Se.a.Link,{as:o.b,to:"/menu",children:"Menu"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/cart",children:"Cart"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/signup",children:"Signup"}),Object(g.jsx)(Se.a.Link,{as:o.b,to:"/login",children:"Login"})]})]})})};var De=function(){var e=Object(ke.a)(we),t=Object(k.a)(e,1)[0];return Object(a.useEffect)((function(){function e(){return(e=Object(re.a)(Object(ae.a)().mark((function e(){var n,a,r,c;return Object(ae.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("cart","get");case 2:if(n=e.sent,!(a=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{drinks:a}});case 7:r=e.sent,c=r.data,c.addOrder.drinks.forEach((function(e){w("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(g.jsx)(h.a,{fluid:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{className:"text-center",children:[Object(g.jsx)("h1",{className:"mt-4",children:"Your order has been submitted!"}),Object(g.jsx)("h2",{className:"mt-4",children:"Thank you"})]})})})};var Le=function(){var e,t=Object(Y.b)(Z).data;return t&&(e=t.user),Object(g.jsx)(h.a,{children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(m.a,{className:"text-center",children:[Object(g.jsx)(f.a,{className:"m-4",variant:"secondary",href:"/menu",size:"lg",fluid:!0,children:"Order Drinks"}),e?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(g.jsx)("div",{className:"flex-row",children:e.drinks.map((function(e,t){var n=e._id,a=e.image,r=e.name,c=e.price;return Object(g.jsxs)("div",{className:"card px-1 py-1",children:[Object(g.jsxs)(o.b,{to:"/drinks/".concat(n),children:[Object(g.jsx)("img",{alt:r,src:"/images/".concat(a)}),Object(g.jsx)("p",{children:r})]}),Object(g.jsx)("div",{children:Object(g.jsxs)("span",{children:["$",c]})})]},t)}))})]},e._id)}))]}):null]})})})},Ie=n(134);var $e=function(){return Object(g.jsx)(Ie.a,{className:"text-center",children:Object(g.jsx)(Ie.a.Footer,{className:"text-muted",children:"Made by Anh Le"})})},Qe=Object(j.a)({uri:"/graphql"}),Re=Object(O.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),Fe=new d.a({link:Re.concat(Qe),cache:new u.a});var Pe=function(){return Object(g.jsx)(b.a,{client:Fe,children:Object(g.jsx)(o.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(P,{children:[Object(g.jsx)(Ae,{}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",element:Object(g.jsx)(v,{})}),Object(g.jsx)(l.a,{path:"/menu",element:Object(g.jsx)(he,{})}),Object(g.jsx)(l.a,{path:"/login",element:Object(g.jsx)(Ce,{})}),Object(g.jsx)(l.a,{path:"/signup",element:Object(g.jsx)(Ee,{})}),Object(g.jsx)(l.a,{path:"/success",element:Object(g.jsx)(De,{})}),Object(g.jsx)(l.a,{path:"/orderHistory",element:Object(g.jsx)(Le,{})}),Object(g.jsx)(l.a,{path:"/drinks/:id",element:Object(g.jsx)(fe,{})}),Object(g.jsx)(l.a,{path:"*",element:Object(g.jsx)(ge,{})})]}),Object(g.jsx)($e,{})]})})})})},qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Pe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");qe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ue(t,e)}))}}()}},[[112,1,2]]]);
//# sourceMappingURL=main.d51b3e9d.chunk.js.map