(this["webpackJsonpbasket-app"]=this["webpackJsonpbasket-app"]||[]).push([[0],{25:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),r=n(14),i=n.n(r),a=(n(25),n(1)),u=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("i",{className:"fa fa-shopping-basket"}),Object(a.jsx)("h1",{children:"Hello, Basket!"})]})},o=n(10),b=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsx)(o.b,{to:"/",exact:!0,children:"All"})," | "," ",Object(a.jsx)(o.b,{to:"/pending",exact:!0,children:"Pending"})," | "," ",Object(a.jsx)(o.b,{to:"/purchased",exact:!0,children:"Purchased"})]})},l=n(5),j="ADD_TO_BASKET",d="TOGGLE_ITEM_PURCHASE",O="UPDATE_FILTER_TEXT",h=function(t){return{type:d,id:t}},f=Object(l.b)((function(t){return{filterText:t.filterText}}),(function(t){return{updateFilterText:function(e){return t(function(t){return{type:O,text:t}}(e))}}}))((function(t){var e=t.filterText,n=t.updateFilterText;return Object(a.jsx)("nav",{children:Object(a.jsx)("input",{value:e,onChange:function(t){return n(t.target.value)},type:"text",placeholder:"filter for e.g. Apple"})})})),x=Object(l.b)((function(t){return{itemsList:t.itemsList}}))((function(t){var e=t.title,n=t.icon,c=t.list,s=t.type,r=t.itemsList,i=t.onClickHandler;return Object(a.jsxs)("div",{className:"items-list",children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)("i",{className:"fa fa-".concat(n)})," ",e]}),Object(a.jsx)("ul",{className:"list-item-".concat(s),children:Object.keys(c).length?Object.keys(c).map((function(t){var e;return Object(a.jsx)("li",{className:c[t].isPurchased?"striked":"",onClick:function(){return i(t)},children:"".concat(null!==(e=c[t].count)&&void 0!==e?e:""," ").concat(r[t])},t)})):Object(a.jsx)("li",{children:"Your list is empty!"})})]})})),p=Object(l.b)((function(t){return{basketList:t.basketList}}),(function(t){return{toggleItemPurchase:function(e){return t(h(e))}}}))((function(t){var e=t.basketList,n=t.toggleItemPurchase;return Object(a.jsx)(x,{title:"Basket",icon:"shopping-basket",list:e,type:"remove",onClickHandler:n})})),k=Object(l.b)((function(t){return{basketList:t.basketList}}),(function(t){return{toggleItemPurchase:function(e){return t(h(e))}}}))((function(t){var e=t.basketList,n=t.toggleItemPurchase,c={};for(var s in e)e[s].isPurchased||(c[s]=e[s]);return Object(a.jsx)(x,{title:"Basket",icon:"shopping-basket",list:c,type:"remove",onClickHandler:n})})),g=Object(l.b)((function(t){return{basketList:t.basketList}}),(function(t){return{toggleItemPurchase:function(e){return t(h(e))}}}))((function(t){var e=t.basketList,n=t.toggleItemPurchase,c={};for(var s in e)e[s].isPurchased&&(c[s]=e[s]);return Object(a.jsx)(x,{title:"Basket",icon:"shopping-basket",list:c,type:"remove",onClickHandler:n})})),L=n(3),m=Object(l.b)((function(t){return{itemsList:t.itemsList,filterText:t.filterText}}),(function(t){return{addToBasket:function(e){return t(function(t){return{type:j,id:t}}(e))}}}))((function(t){var e=t.itemsList,n=t.filterText,c=t.addToBasket,s={};if(""!==n)for(var r in e)e[r].toLowerCase().includes(n.toLowerCase())&&(s[r]=e[r]);else s=e;return Object(a.jsx)(x,{icon:"leaf",title:"Groceries",list:s,type:"add",onClickHandler:c})}));var v=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)(f,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(m,{}),Object(a.jsxs)(L.c,{children:[Object(a.jsx)(L.a,{path:"/",exact:!0,component:p}),Object(a.jsx)(L.a,{path:"/pending",exact:!0,component:k}),Object(a.jsx)(L.a,{path:"/purchased",exact:!0,component:g})]})]}),Object(a.jsx)(b,{})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),r(t),i(t)}))},T=n(20),_=n(13),y=n(4),C={itemsList:{1:"Strawberry",2:"Blueberry",3:"Orange",4:"Banana",5:"Apple",6:"Carrot",7:"Celery",8:"Mushroom",9:"Green Pepper",10:"Eggs",11:"Cheese",12:"Butter",13:"Chicken",14:"Beef",15:"Pork",16:"Fish",17:"Rice",18:"Pasta",19:"Bread"},basketList:{1:{count:1,isPurchased:!1},6:{count:1,isPurchased:!1},10:{count:1,isPurchased:!1},13:{count:1,isPurchased:!1},17:{count:1,isPurchased:!1}},filterText:""},E=function(t,e){var n={};return n=t.basketList[e]?Object(y.a)(Object(y.a)({},t.basketList[e]),{},{count:t.basketList[e].count+1}):{count:1,isPurchased:!1},Object(y.a)(Object(y.a)({},t),{},{basketList:Object(y.a)(Object(y.a)({},t.basketList),{},Object(_.a)({},e,n))})},B=function(t,e){return Object(y.a)(Object(y.a)({},t),{},{basketList:Object(y.a)(Object(y.a)({},t.basketList),{},Object(_.a)({},e,Object(y.a)(Object(y.a)({},t.basketList[e]),{},{isPurchased:!t.basketList[e].isPurchased})))})},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return E(t,e.id);case d:return B(t,e.id);case O:return Object(y.a)(Object(y.a)({},t),{},{filterText:e.text});default:return t}},w=Object(T.a)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{store:w,children:Object(a.jsx)(v,{})})})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.4deec8d4.chunk.js.map