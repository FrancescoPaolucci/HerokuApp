(this["webpackJsonpbrowser-side"]=this["webpackJsonpbrowser-side"]||[]).push([[0],{41:function(t,n,e){"use strict";e.r(n);var r=e(16),c=e.n(r),o=e(7),a=e(4),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(u.jsxs)("li",{children:[n.content,Object(u.jsx)("button",{onClick:e,children:r})]})},d=e(3),j=e.n(d),f="https://polar-river-83415.herokuapp.com/api/notes",b=function(){var t=j.a.get(f),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},l=function(t){return j.a.post(f,t).then((function(t){return t.data}))},p=function(t,n){return j.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],c=Object(i.useState)(""),d=Object(a.a)(c,2),j=d[0],f=d[1],h=Object(i.useState)(!1),m=Object(a.a)(h,2),O=m[0],v=m[1];Object(i.useEffect)((function(){b().then((function(t){r(t)}))}),[]);var x=O?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return v(!O)},children:["show ",O?"important":"all"]})}),Object(u.jsx)("ul",{children:x.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});p(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){alert("the note '".concat(n.content,"' was already deleted from server")),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()>.5};l(n).then((function(t){r(e.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b7ba93b6.chunk.js.map