(this["webpackJsonpreact-exe-1"]=this["webpackJsonpreact-exe-1"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":"12564","date":"01.01.2021","name":"John Doe","location":"Tel-Aviv"},{"id":"7894654","date":"05.01.2021","name":"Many Dong","location":"Haifa"},{"id":"54689746","date":"06.01.2021","name":"Say Tang","location":"Jerusalem"}]')},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),o=n(7),r=n.n(o),s=n(17),d=n(4),u=n(3),j=(n(24),function(e){var t=e.onSave,n=e.editingMode,i=e.editingItem,o=Object(a.useState)(""),r=Object(u.a)(o,2),s=r[0],d=r[1],j=Object(a.useState)(""),l=Object(u.a)(j,2),b=l[0],O=l[1],f=Object(a.useState)(""),m=Object(u.a)(f,2),v=m[0],x=m[1];Object(a.useEffect)((function(){n&&(d(i.date),O(i.name),x(i.location))}),[i,n]);return Object(c.jsxs)("form",{onSubmit:function(){t(n?{id:i.id,name:b,date:s,location:v}:{date:s,name:b,location:v})},children:[Object(c.jsx)("input",{required:!0,className:"form-input",placeholder:"Date",type:"text",value:s,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("input",{required:!0,className:"form-input",placeholder:"Name",type:"text",value:b,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("input",{required:!0,className:"form-input",placeholder:"Location",type:"text",value:v,onChange:function(e){return x(e.target.value)}}),Object(c.jsx)("button",{className:"form-button",type:"submit",children:n?"Update":"Save"})]})}),l=n(15),b=n.n(l),O=n(13),f=n.n(O),m=function(e){var t=e.info,n=e.onEdit,a=e.onDelete;return Object(c.jsxs)("div",{className:"list-item",children:[Object(c.jsx)("div",{children:t.index}),Object(c.jsx)("div",{children:t.date}),Object(c.jsx)("div",{children:t.name}),Object(c.jsx)("div",{children:t.location}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{color:"secondary",variant:"filled",onClick:function(){return n(t)},children:Object(c.jsx)(f.a,{})}),Object(c.jsx)("button",{color:"secondary",variant:"filled",onClick:function(){return a(t)},children:Object(c.jsx)(b.a,{})})]})]})},v=function(e){var t=e.listItems,n=e.onDelete,a=e.onEdit;return Object(c.jsx)("div",{className:"list",children:t.map((function(e,t){return Object(c.jsx)(m,{info:Object(d.a)(Object(d.a)({},e),{},{index:t+1}),onDelete:n,onEdit:a},e.id)}))})},x=n(16);var h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),r=Object(u.a)(o,2),l=r[0],b=r[1],O=Object(a.useState)({}),f=Object(u.a)(O,2),m=f[0],h=f[1];return Object(a.useEffect)((function(){i(x)}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"main-section",children:[Object(c.jsx)(v,{listItems:n,onEdit:function(e){b(!0),h(e)},onDelete:function(e){var t=n.filter((function(t){return t.id!==e.id&&t}));i(t)}}),Object(c.jsx)(j,{onSave:function(e){if(l){var t=n.map((function(t){return t.id===e.id?e:t}));i(t),b(!1)}else{var c=Object(d.a)(Object(d.a)({},e),{},{id:1e3*Math.random()});i([].concat(Object(s.a)(n),[c]))}},editingMode:l,editingItem:m})]}),Object(c.jsx)("div",{className:"car-modal"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.409a9c01.chunk.js.map