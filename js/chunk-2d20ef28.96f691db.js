(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ef28"],{b213:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"公用存储指所有用户共用的存储区域，\n        使用 await this.$store.dispatch('d2admin/db/database') 获得存储实例进行操作"}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"d2-mt-0"},[e._v("增加不重复字段")]),a("el-button",{on:{click:e.handleSetRandom}},[e._v("增加")]),a("p",[e._v("增加自定义字段")]),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"字段名"},model:{value:e.keyNameToSet,callback:function(t){e.keyNameToSet=t},expression:"keyNameToSet"}}),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"值"},model:{value:e.valueToSet,callback:function(t){e.valueToSet=t},expression:"valueToSet"}}),a("el-button",{on:{click:e.handleSet}},[e._v("增加")]),a("p",[e._v("删除字段")]),a("el-select",{attrs:{placeholder:"请选择要删除的 key"},model:{value:e.keyNameToDelete,callback:function(t){e.keyNameToDelete=t},expression:"keyNameToDelete"}},e._l(e.keyNameList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("p",[e._v("清空当前用户数据")]),a("el-button",{on:{click:e.handleClear}},[e._v("清空")])],1),a("el-col",{attrs:{span:12}},[a("d2-highlight",{attrs:{code:e.dataDisplay}})],1)],1)],2)},r=[],l=(a("d81d"),a("b64b"),a("96cf"),a("1da1")),s=a("5530"),c=a("60bb"),o=a("5880"),u={data:function(){return{dataDisplay:"",keyNameToSet:"",valueToSet:"",keyNameList:[],keyNameToDelete:""}},watch:{keyNameToDelete:function(e){e&&this.handleDelete(e)}},mounted:function(){this.load()},methods:Object(s["a"])(Object(s["a"])({},Object(o["mapActions"])("d2admin/db",["database","databaseClear"])),{},{load:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.database();case 2:a=t.sent,e.dataDisplay=JSON.stringify(a.value(),null,2),e.keyNameList=Object.keys(a.value()).map((function(e){return{value:e,label:e}}));case 5:case"end":return t.stop()}}),t)})))()},handleDelete:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.database();case 2:n=a.sent,n.unset(e).write(),t.load(),t.keyNameToDelete="";case 6:case"end":return a.stop()}}),a)})))()},handleClear:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.databaseClear();case 2:e.load();case 3:case"end":return t.stop()}}),t)})))()},handleSet:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.keyNameToSet){t.next=3;break}return e.$message.error("字段名不能为空"),t.abrupt("return");case 3:return t.next=5,e.database();case 5:a=t.sent,a.set(e.keyNameToSet,e.valueToSet).write(),e.load();case 8:case"end":return t.stop()}}),t)})))()},handleSetRandom:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(c["uniqueId"])(),t.next=3,e.database();case 3:n=t.sent,n.set("uniqueKey".concat(a),"value".concat(a)).write(),e.load();case 6:case"end":return t.stop()}}),t)})))()}})},i=u,d=a("2877"),p=function(e){e.options.__source="src/views/demo/playground/db/public/index.vue"},m=p,b=Object(d["a"])(i,n,r,!1,null,null,null);"function"===typeof m&&m(b);t["default"]=b.exports}}]);