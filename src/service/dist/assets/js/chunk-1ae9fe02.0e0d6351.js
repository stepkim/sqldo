(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae9fe02"],{"119b":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[2===t.order.status?r("Form",[0===t.c_flag?r("FormItem",[r("Select",{staticStyle:{width:"20%"},attrs:{placeholder:"请选择下一级审核人"},model:{value:t.personal,callback:function(e){t.personal=e},expression:"personal"}},t._l(t.p_flag,(function(t){return r("Option",{key:t,attrs:{value:t,label:t}})})),1)],1):t._e(),r("FormItem",[r("Button",{attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return t.testTo()}}},[t.loading?r("span",[t._v("检测中")]):r("span",[t._v("检测")])]),r("Button",{staticClass:"margin-left-10",attrs:{type:"error"},on:{click:function(e){return t.reject()}}},[t._v("驳回")]),0===t.c_flag?r("Button",{staticClass:"margin-left-10",attrs:{type:"success",disabled:t.summit},on:{click:function(e){return t.agreed()}}},[t._v("\n                同意\n            ")]):r("Button",{staticClass:"margin-left-10",attrs:{type:"success",disabled:t.summit},on:{click:function(e){return t.perform()}}},[t._v("执行")])],1),r("FormItem",[r("Table",{attrs:{columns:t.sql_columns,data:t.testing_sql,"max-height":300,"no-data-text":"点击 检测 按钮获取检测结果"}})],1)],1):t._e(),r("reject",{model:{value:t.is_open,callback:function(e){t.is_open=e},expression:"is_open"}})],1)},o=[],a=(r("2397"),r("ac6a"),r("d225")),c=r("b0b4"),i=r("4e2b"),u=r("308d"),s=r("6bb5"),l=r("9ab4"),f=r("60a3"),p=r("6d8f"),d=r("74e3"),b=r("476e"),h=r("a334"),y=r("9a29");function _(t){var e=v();return function(){var r,n=Object(s["a"])(t);if(e){var o=Object(s["a"])(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(u["a"])(this,r)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(i["a"])(r,t);var e=_(r);function r(){var t;return Object(a["a"])(this,r),t=e.apply(this,arguments),t.auth=sessionStorage.getItem("auth"),t.summit=!0,t.wap_col=[{title:"当前检查的sql",key:"sql",tooltip:!0,width:120,fixed:"left"},{title:"阶段",key:"status",tooltip:!0,width:100},{title:"错误等级",key:"level",tooltip:!0,width:100},{title:"错误信息",key:"error",tooltip:!0,width:100},{title:"影响行数",key:"affect_rows",tooltip:!0,width:100}],t.sql_columns=[{type:"expand",width:50,render:p["a"].expand},{title:"当前检查的sql",key:"sql",render:p["a"].sub_sql},{title:"阶段",key:"status",width:"150"},{title:"错误等级",key:"level",width:"100"},{title:"错误信息",key:"error",tooltip:!0},{title:"影响行数",key:"affect_rows",width:"120"}],t.personal="",t.testing_sql=[],t}return Object(c["a"])(r,[{key:"c_flag",get:function(){var t=this.order.current_step;return h["a"].order_step.length<=1?h["a"].order_step[0].type:t>=h["a"].order_step.length?h["a"].order_step[t-1].type:h["a"].order_step[t].type}},{key:"p_flag",get:function(){var t=this.order.current_step;return h["a"].order_step.length<=1?h["a"].order_step[0].auditor:t<h["a"].order_step.length?h["a"].order_step[t+1].auditor:h["a"].order_step[t].auditor}},{key:"reject",value:function(){this.is_open=!this.is_open}},{key:"agreed",value:function(){var t=this;""!==this.personal?Object(y["c"])({work_id:this.order.work_id,flag:this.order.current_step,perform:this.personal,tp:"agree"}).finally((function(){t.$router.go(-1),t.summit=!t.summit})):this.$Message.error({content:"请选择下一级审核人!"})}},{key:"perform",value:function(){var t=this;Object(y["a"])({work_id:this.order.work_id}).finally((function(){t.summit=!t.summit,t.$router.go(-1)}))}},{key:"testTo",value:function(){var t=this;this.loading=!0,Object(y["d"])({work_id:this.order.work_id}).then((function(e){t.testing_sql=e.data.payload;var r=0;t.testing_sql.forEach((function(t){0!==t.level&&(r+=1)})),t.summit=0!==r})).finally((function(){t.loading=!1}))}},{key:"mounted",value:function(){this.mobile&&(this.sql_columns=this.wap_col)}}]),r}(Object(f["b"])(d["a"]));Object(l["b"])([Object(f["c"])({required:!1,type:Boolean,default:!1})],m.prototype,"mobile",void 0),m=Object(l["b"])([Object(f["a"])({components:{reject:b["a"]}})],m);var j=m,O=j,k=(r("d08c"),r("2877")),g=Object(k["a"])(O,n,o,!1,null,null,null);e["a"]=g.exports},1424:function(t,e,r){},"476e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Modal",{on:{"on-ok":t.rejectText,"on-cancel":t.cancel},model:{value:t.is_open,callback:function(e){t.is_open=e},expression:"is_open"}},[r("p",{staticStyle:{color:"#f60","font-size":"16px"},attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"information-circled"}}),r("span",[t._v("SQL工单驳回理由说明")])],1),r("Input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},placeholder:"请填写驳回说明"},model:{value:t.reject,callback:function(e){t.reject=e},expression:"reject"}})],1)},o=[],a=(r("2397"),r("d225")),c=r("b0b4"),i=r("4e2b"),u=r("308d"),s=r("6bb5"),l=r("9ab4"),f=r("60a3"),p=r("028f"),d=r("a334"),b=r("9a29");function h(t){var e=y();return function(){var r,n=Object(s["a"])(t);if(e){var o=Object(s["a"])(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(u["a"])(this,r)}}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var _=function(t){Object(i["a"])(r,t);var e=h(r);function r(){var t;return Object(a["a"])(this,r),t=e.apply(this,arguments),t.reject="",t}return Object(c["a"])(r,[{key:"get_visible",value:function(t){this.is_open=t}},{key:"order",get:function(){return d["a"].order_item}},{key:"rejectText",value:function(){var t=this;Object(b["c"])({work_id:this.order.work_id,text:this.reject,tp:"reject"}).then((function(){t.$router.go(-1)}))}},{key:"cancel",value:function(){this.$emit("input",!1)}}]),r}(Object(f["b"])(p["a"]));Object(l["b"])([Object(f["c"])({type:Boolean,required:!0,default:!1})],_.prototype,"value",void 0),Object(l["b"])([Object(f["e"])("value")],_.prototype,"get_visible",null),_=Object(l["b"])([Object(f["a"])({components:{}})],_);var v=_,m=v,j=r("2877"),O=Object(j["a"])(m,n,o,!1,null,"217053d6",null);e["a"]=O.exports},"6d8f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("code",[t._v(t._s(t.row))])},o=[],a=(r("2397"),r("d225")),c=r("4e2b"),i=r("308d"),u=r("6bb5"),s=r("9ab4"),l=r("60a3"),f=r("028f");function p(t){var e=d();return function(){var r,n=Object(u["a"])(t);if(e){var o=Object(u["a"])(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(i["a"])(this,r)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(c["a"])(r,t);var e=p(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return r}(Object(l["b"])(f["a"]));Object(s["b"])([Object(l["c"])({type:String,required:!0,default:""})],b.prototype,"row",void 0),b=Object(s["b"])([Object(l["a"])({components:{}})],b);var h=b,y=h,_=r("2877"),v=Object(_["a"])(y,n,o,!1,null,"7badc0aa",null),m=v.exports,j={tag:function(t,e){},backup:function(t,e){},queryExport:function(t,e){},type:function(t,e){},expand:function(t,e){},sub_sql:function(t,e){},query_tag:function(t,e){}};j.query_tag=function(t,e){var r=e.row,n="",o="";return 2===r.query_per?(n="primary",o="待审核"):0===r.query_per?(n="error",o="驳回"):1===r.query_per?(n="success",o="同意/查询"):(n="warning",o="查询结束"),t("Tag",{props:{type:"dot",color:n}},o)},j.tag=function(t,e){var r=e.row,n="",o="";return 2===r.status?(n="primary",o="审核中"):0===r.status?(n="error",o="驳回"):1===r.status?(n="success",o="已执行"):4===r.status?(n="error",o="执行失败"):5===r.status?(n="primary",o="待执行"):(n="warning",o="执行中"),t("Tag",{props:{type:"dot",color:n}},o)},j.backup=function(t,e){var r=e.row,n="否";return 1==r.backup&&(n="是"),t("span",{},n)},j.queryExport=function(t,e){var r=e.row,n="否";return 1==r.export&&(n="是"),t("span",{},n)},j.type=function(t,e){var r=e.row,n="DDL";return 1==r.type&&(n="DML"),t("span",{},n)},j.expand=function(t,e){return t(m,{props:{row:e.row.sql}})},j.sub_sql=function(t,e){var r=e.row.sql.substring(0,80);return r.length>80&&(r+="..."),t("span",r)};e["a"]=j},"74e3":function(t,e,r){"use strict";r("2397");var n=r("d225"),o=r("b0b4"),a=r("4e2b"),c=r("308d"),i=r("6bb5"),u=r("9ab4"),s=r("60a3"),l=r("028f"),f=r("a334"),p=r("edd3");function d(t){var e=b();return function(){var r,n=Object(i["a"])(t);if(e){var o=Object(i["a"])(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c["a"])(this,r)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var h=function(t){Object(a["a"])(r,t);var e=d(r);function r(){var t;return Object(n["a"])(this,r),t=e.apply(this,arguments),t.columns=[{title:"sql语句",key:"sql"},{title:"状态",key:"state"},{title:"错误信息",key:"error",tooltip:!0},{title:"影响行数",key:"affect_row",width:100},{title:"执行时间/秒",key:"time"}],t.results=[],t.switch_args={reload_sql:!1,is_more:"10"},t.collapse=["results","sql"],t}return Object(o["a"])(r,[{key:"sqls",get:function(){return f["a"].order_sql},set:function(t){f["a"].fetch_order_sql(t)}},{key:"order",get:function(){return f["a"].order_item}},{key:"fetch_post_sql",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10";this.$Spin.show(),Object(p["a"])("sql",{work_id:this.order.work_id,limit:e}).then((function(t){f["a"].fetch_order_sql(t.data.payload.sqls)})).finally((function(){t.$Spin.hide()}))}},{key:"open_form",value:function(){this.is_open=!0}},{key:"delOrder",value:function(t){var e=this;Object(p["a"])("undo",{work_id:t}).then((function(){e.$router.go(-1)}))}},{key:"current_page",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(p["a"])("detail",{work_id:this.order.work_id,status:this.order.status,page:e}).then((function(e){t.results=e.data.payload.record,t.page_number=e.data.payload.count}))}}]),r}(Object(s["b"])(l["a"]));h=Object(u["b"])([Object(s["a"])({components:{}})],h),e["a"]=h},"9a29":function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return s}));var n=r("3c11"),o=r("3e4a"),a={admin:"".concat(n["a"].url,"/audit/order")};function c(t){return Object(o["a"])({method:"post",url:"".concat(a.admin,"/test"),data:t})}function i(t){return Object(o["a"])({method:"post",url:"".concat(a.admin,"/execute"),data:t})}function u(t){return Object(o["a"])({method:"post",url:"".concat(a.admin,"/state"),data:t})}function s(t){return Object(o["a"])({method:"post",url:"".concat(a.admin,"/kill"),data:t})}},d08c:function(t,e,r){"use strict";r("1424")}}]);