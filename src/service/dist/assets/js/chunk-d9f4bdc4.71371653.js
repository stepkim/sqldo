(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9f4bdc4"],{"0739":function(t,e,n){t.exports=n.p+"assets/img/tpl.65dbb125.svg"},"5b09":function(t,e,n){},"604e":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{attrs:{type:"flex",justify:"center"}},[n("BackTop"),n("Card",{staticStyle:{"min-height":"800px",width:"98%"}},[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"md-trophy"}}),t._v("\n            流程模板\n        ")],1),n("Row",[n("Col",{attrs:{span:15}},[n("Input",{attrs:{placeholder:"根据名称信息搜索",clearable:""},on:{"on-clear":t.clear_data,"on-enter":t.search_data},model:{value:t.find.text,callback:function(e){t.$set(t.find,"text",e)},expression:"find.text"}})],1),n("Col",{attrs:{span:1}},[n("Button",{staticClass:"margin-left-10",attrs:{type:"primary"},on:{click:t.search_data}},[t._v("搜索")])],1)],1),n("div",[n("List",t._l(t.tpl_list,(function(e){return n("ListItem",{key:e.title},[n("ListItemMeta",{attrs:{avatar:t.tpl_logo,title:e.title,description:e.desc}}),n("template",{slot:"action"},[n("li",[n("Button",{attrs:{type:"text"},on:{click:function(n){return t.open_order(e.title)}}},[t._v("编辑")])],1)])],2)})),1)],1)],1),n("Modal",{attrs:{title:"编辑流程模板",width:"1000"},model:{value:t.is_open,callback:function(e){t.is_open=e},expression:"is_open"}},[n("Steps",{attrs:{current:0,size:"small"}},t._l(t.tmp_steps,(function(e,s){return n("Step",{key:s,attrs:{title:e.desc}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v(t._s("相关人员:"+e.auditor))]),0!==s?[n("Poptip",{attrs:{confirm:"",title:"确定要删除该步骤吗？",transfer:""},on:{"on-ok":function(e){return t.del_step(s)}}},[n("Button",{attrs:{type:"text",size:"small"}},[t._v("删除")])],1),n("Button",{staticClass:"margin-left-10",attrs:{type:"text",size:"small"},on:{click:function(n){return t.edit_tpl(e,s)}}},[t._v("编辑")])]:t._e()],2)])})),1),n("Divider",{attrs:{orientation:"left",dashed:""}},[t._v("添加阶段")]),n("div",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Tabs",{attrs:{value:"preview"}},[n("TabPane",{attrs:{label:"预览编辑",name:"preview"}},[n("Form",[n("FormItem",{attrs:{label:"步骤类型"}},[n("Select",{attrs:{transfer:""},model:{value:t.tpl.type,callback:function(e){t.$set(t.tpl,"type",e)},expression:"tpl.type"}},[n("Option",{attrs:{label:"审核",value:0}}),n("Option",{attrs:{label:"执行",value:1}})],1)],1),n("FormItem",{attrs:{label:"相关人员"}},[n("Select",{attrs:{multiple:"",transfer:"",filterable:""},model:{value:t.tpl.auditor,callback:function(e){t.$set(t.tpl,"auditor",e)},expression:"tpl.auditor"}},t._l(t.multi_list,(function(t){return n("Option",{key:t.username,attrs:{value:t.username,label:t.username}})})),1)],1),n("FormItem",{attrs:{label:"阶段名称"}},[n("Input",{attrs:{maxlength:"10","show-word-limit":""},model:{value:t.tpl.desc,callback:function(e){t.$set(t.tpl,"desc",e)},expression:"tpl.desc"}})],1)],1),t.is_tpl_edit?[n("Button",{staticClass:"margin-left-10",attrs:{type:"text",size:"small"},on:{click:function(e){return t.position_adjustment(!0)}}},[t._v("向前移动\n                                ")]),n("Button",{staticClass:"margin-left-10",attrs:{type:"info",size:"small"},on:{click:t.edit_tpl_save}},[t._v("保存\n                                ")]),n("Button",{staticClass:"margin-left-10",attrs:{type:"text",size:"small"},on:{click:function(e){return t.position_adjustment(!1)}}},[t._v("向后移动\n                                ")])]:n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.add_step}},[t._v("添加阶段")])],2)],1)],1),n("Col",{attrs:{span:"11",offset:"1"}},[n("Alert",{attrs:{"show-icon":""}},[t._v("\n                        一点小建议\n                        "),n("Icon",{attrs:{slot:"icon",type:"ios-bulb-outline"},slot:"icon"}),n("template",{slot:"desc"},[t._v("\n                            1.中间审核人最多支持5层\n                            "),n("br"),t._v("\n                            2.仅允许一个执行阶段! 请将审核阶段的参数添加在执行阶段之前。\n                            "),n("br"),t._v("\n                            3.特别注意,如对现有流程进行更改。请确保当前流程下所有工单都已执行完毕，否则将会导致未执行工单流程错乱!\n                        ")])],2)],1)],1)],1),n("template",{slot:"footer"},[n("Button",{attrs:{type:"warning"},on:{click:function(e){t.is_open=!1}}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:t.post_tpl}},[t._v("确定")])],1)],2)],1)},i=[],a=(n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54"),n("2397"),n("7514"),n("ac6a"),n("d225")),r=n("b0b4"),l=n("4e2b"),o=n("308d"),c=n("6bb5"),p=n("9ab4"),u=n("60a3"),f=n("028f"),d=n("dcd5");function _(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=h(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){l=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw a}}}}function h(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function v(t){var e=y();return function(){var n,s=Object(c["a"])(t);if(e){var i=Object(c["a"])(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return Object(o["a"])(this,n)}}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var b=[{desc:"提交阶段",auditor:["提交人"],type:0}],g=function(t){Object(l["a"])(s,t);var e=v(s);function s(){var t;return Object(a["a"])(this,s),t=e.apply(this,arguments),t.tpl_logo=n("0739"),t.tpl_list=[],t.tpl={},t.is_tpl_edit=!1,t.c_idx=0,t.tmp_steps=[],t.source="",t.tpl_list_all=[],t}return Object(r["a"])(s,[{key:"clear_data",value:function(){this.tpl_list=this.tpl_list_all}},{key:"search_data",value:function(){var t=this,e=[];this.tpl_list.forEach((function(n){-1!==n.desc.indexOf(t.find.text)&&e.push(n)})),this.tpl_list=e}},{key:"edit_tpl",value:function(t,e){this.tpl=Object.assign({},t),this.is_tpl_edit=!0,this.c_idx=e}},{key:"position_adjustment",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t){if(1===this.c_idx)return void this.$Message.warning({content:"不可一退再退！"});this.tmp_steps[this.c_idx]=this.tmp_steps.splice(this.c_idx-1,1,this.tmp_steps[this.c_idx])[0],this.c_idx-=1}else{if(this.c_idx===this.tmp_steps.length-1)return void this.$Message.warning({content:"不可一进再进！"});this.tmp_steps[this.c_idx]=this.tmp_steps.splice(this.c_idx+1,1,this.tmp_steps[this.c_idx])[0],this.c_idx+=1}}},{key:"del_step",value:function(t){this.tmp_steps.splice(t,1)}},{key:"edit_tpl_save",value:function(){this.tmp_steps[this.c_idx]=this.tpl,this.is_tpl_edit=!1,this.tpl={}}},{key:"post_tpl",value:function(){var t=this;1===this.tmp_steps[this.tmp_steps.length-1].type?this.is_tpl_edit?this.$Message.error({content:"请先保存被编辑的步骤信息!",duration:5}):Object(d["b"])({steps:this.tmp_steps,source:this.source}).finally((function(){t.is_open=!t.is_open})):this.$Message.error({content:"最后步骤必须为执行类型！保存失败!",duration:5})}},{key:"open_order",value:function(t){var e=this;Object(d["c"])(t).then((function(t){null===t.data.payload.steps?e.tmp_steps=JSON.parse(JSON.stringify(b)):e.tmp_steps=t.data.payload.steps})).finally((function(){e.is_open=!e.is_open,e.source=t,e.tpl={}}))}},{key:"fetch_all_sources",value:function(){var t=this;Object(d["a"])().then((function(e){var n,s=_(e.data.payload);try{for(s.s();!(n=s.n()).done;){var i=n.value;t.tpl_list_all.push({title:i,desc:"".concat(i,"数据源审核流程")}),t.tpl_list=t.tpl_list_all}}catch(a){s.e(a)}finally{s.f()}}))}},{key:"add_step",value:function(){if(1===this.tpl.type){var t,e=_(this.tmp_steps);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(1===n.type)return void this.$Message.warning({content:"执行阶段仅允许添加一次!"})}}catch(s){e.e(s)}finally{e.f()}}7!==this.tmp_steps.length?(this.tmp_steps.push({desc:this.tpl.desc,auditor:this.tpl.auditor,type:this.tpl.type}),this.tpl={}):this.$Message.warning({content:"中间审核环节最多支持5层"})}},{key:"mounted",value:function(){this.fetch_perform(),this.fetch_all_sources()}}]),s}(Object(u["b"])(f["a"]));g=Object(p["b"])([Object(u["a"])({})],g);var x=g,k=x,w=(n("8188"),n("2877")),O=Object(w["a"])(k,s,i,!1,null,null,null);e["default"]=O.exports},8188:function(t,e,n){"use strict";n("5b09")},dcd5:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return o}));var s=n("3c11"),i=n("3e4a"),a={basic:"".concat(s["a"].url,"/manage/tpl")};function r(){return Object(i["a"])({method:"get",url:a.basic})}function l(t){return Object(i["a"])({method:"put",params:{source:t},url:a.basic})}function o(t){return Object(i["a"])({method:"post",data:t,url:a.basic})}}}]);