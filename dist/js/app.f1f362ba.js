(function(t){function e(e){for(var n,d,l=e[0],s=e[1],c=e[2],a=0,p=[];a<l.length;a++)d=l[a],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&p.push(i[d][0]),i[d]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,l=1;l<o.length;l++){var s=o[l];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},i={app:0},r=[];function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/todo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("md-app",[o("md-app-toolbar",{staticClass:"md-primary"},[o("span",{staticClass:"md-title"},[t._v("Todo App")])]),o("md-app-content",[o("md-list",{staticClass:"todos"},[o("md-list-item",[o("md-field",[o("md-input",{attrs:{placeholder:"Add a todo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}})],1)],1),t._l(t.todos,(function(e){return o("span",{key:e.id},[o("todoItem",{attrs:{todo:e},on:{"toggle-completed":function(o){return t.toggleTodo(e)},remove:function(o){return t.removeTodo(e)},"toggle-editing":function(o){return t.toggleEditing(e)},"finish-editing":t.pushEditChanges}})],1)}))],2)],1)],1)},r=[],d=(o("c975"),o("a434"),o("3835")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.todo.isEditing?t._e():o("md-list-item",[o("i",{staticClass:"material-icons",on:{click:function(e){return t.$emit("toggle-completed")}}},[t._v(t._s(t.todo.completed?"check_box":"check_box_outline_blank"))]),o("span",{class:{isComplete:t.todo.completed},on:{dblclick:function(e){return t.$emit("toggle-editing")}}},[t._v(t._s(this.todo.label))]),o("i",{staticClass:"material-icons",on:{click:function(e){return t.$emit("remove")}}},[t._v("close")])]),t.todo.isEditing?o("md-list-item",[o("md-field",[o("md-input",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("finish-editing",[t.todo,t.newLabel])}},model:{value:t.newLabel,callback:function(e){t.newLabel=e},expression:"newLabel"}})],1)],1):t._e()],1)},s=[],c={props:{todo:Object},data:function(){return{newLabel:this.todo.label}},name:"todoItem"},u=c,a=o("2877"),p=Object(a["a"])(u,l,s,!1,null,null,null),f=p.exports,m={name:"app",components:{todoItem:f},data:function(){return{todos:[],currentTodo:""}},methods:{addTodo:function(){this.currentTodo&&(this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,isEditing:!1}),this.currentTodo="")},removeTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},toggleEditing:function(t){var e=this.todos.indexOf(t);this.todos[e].isEditing=!this.todos[e].isEditing},pushEditChanges:function(t){var e=Object(d["a"])(t,2),o=e[0],n=e[1],i=this.todos.indexOf(o);this.todos[i].label=n,this.toggleEditing(o)},toggleTodo:function(t){var e=this.todos.indexOf(t);this.todos[e].completed=!this.todos[e].completed}}},h=m,g=(o("034f"),Object(a["a"])(h,i,r,!1,null,null,null)),b=g.exports,v=o("43f9"),y=o.n(v);o("51de"),o("0759");n["default"].use(y.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.f1f362ba.js.map