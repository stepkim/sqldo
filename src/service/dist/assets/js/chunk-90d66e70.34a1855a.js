(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90d66e70"],{"361a":function(e,t,a){},"36bd":function(e,t,a){"use strict";var r=a("4bf8"),i=a("77f1"),n=a("9def");e.exports=function(e){var t=r(this),a=n(t.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,a),l=s>2?arguments[2]:void 0,u=void 0===l?a:i(l,a);while(u>o)t[o++]=e;return t}},"54e5":function(e,t,a){"use strict";a("361a")},"6c7b":function(e,t,a){var r=a("5ca1");r(r.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},dc3f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header"},[a("Row",{attrs:{type:"flex",justify:"start",align:"middle"}},[a("Col",{attrs:{span:"2"}},[a("a",{staticClass:"navbar-brand"},[e._v(" "+e._s(e.$t("version"))+": "+e._s(e.$config.version)+" ")])]),a("Col",{attrs:{span:"1"}})],1)],1),a("div",{staticClass:"div-a",staticStyle:{"z-index":"100"}},[a("Row",{attrs:{type:"flex"}},[a("Col",{attrs:{span:"3",offset:"2"}},[a("div",{staticStyle:{margin:"100px 500px",width:"300px"}},[a("Form",{attrs:{"label-position":"center"}},[a("FormItem",[a("span",{staticStyle:{"font-size":"50px"}},[e._v("SQLDo"),a("span")])]),a("FormItem",[a("Input",{staticStyle:{opacity:"0.6"},attrs:{placeholder:e.$t("account")},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),a("FormItem",[a("Input",{staticStyle:{opacity:"0.6"},attrs:{placeholder:e.$t("password"),type:"password"},nativeOn:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.is_verify=!0}},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}})],1),a("FormItem",[a("Checkbox",{model:{value:e.is_open,callback:function(t){e.is_open=t},expression:"is_open"}},[a("span",{staticStyle:{color:"#FFFFFF"}},[e._v(e._s(e.$t("ldap")))])])],1),a("FormItem",[a("Button",{staticStyle:{margin:"0px 10px"},on:{click:function(t){e.is_verify=!0}}},[e._v(" 登录")]),e.switchCode?a("Button",{staticStyle:{"z-index":"9999",margin:"0px 10px"},on:{click:function(t){e.register=!0}}},[e._v("\n                                "+e._s(e.$t("sign"))+"\n                            ")]):e._e()],1)],1)],1)])],1)],1),a("div",{staticClass:"footer"},[a("Row",{staticStyle:{"z-index":"999",margin:"0px 500px"},attrs:{type:"flex",justify:"start",align:"bottom"}},[a("Col",{attrs:{span:"2"}},[a("a",{staticStyle:{color:"#FFFFFF"},attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.en.html"}},[e._v("\n                    "+e._s(e.$t("license"))+"\n                ")])]),a("Col",{attrs:{span:"18"}},[a("div",{staticStyle:{color:"#FFFFFF"}},[e._v(e._s(e.$t("tips")))])])],1)],1),a("div",{staticClass:"homepage-hero-module"},[a("div",{staticStyle:{background:"#ccc"}},[a("div",{staticClass:"filter",style:e.fixStyle})])]),a("Modal",{attrs:{width:"340",transfer:"","footer-hide":"",title:"拼图验证",draggable:"",styles:{top:"150px"}},model:{value:e.is_verify,callback:function(t){e.is_verify=t},expression:"is_verify"}},[a("slide-verify",{ref:"slideblock",attrs:{l:42,r:10,w:310,h:155,"slider-text":"向右滑动"},on:{success:e.onSuccess,fail:function(){return e.$Message.error("验证失败")}}})],1),a("Modal",{attrs:{title:e.$t("sign"),"ok-text":e.$t("sign"),"mask-closable":!1},on:{"on-ok":e.LoginRegister},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[a("Form",{ref:"user_reg",attrs:{model:e.userinfo,rules:e.userInfoValidate}},[a("FormItem",{attrs:{label:e.$t("sign_userInfo.username"),prop:"username"}},[a("Input",{model:{value:e.userinfo.username,callback:function(t){e.$set(e.userinfo,"username",t)},expression:"userinfo.username"}})],1),a("FormItem",{attrs:{label:e.$t("sign_userInfo.password"),prop:"password"}},[a("Input",{attrs:{type:"password"},model:{value:e.userinfo.password,callback:function(t){e.$set(e.userinfo,"password",t)},expression:"userinfo.password"}})],1),a("FormItem",{attrs:{label:e.$t("sign_userInfo.confirm"),prop:"confirm_password"}},[a("Input",{attrs:{type:"password"},model:{value:e.userinfo.confirm_password,callback:function(t){e.$set(e.userinfo,"confirm_password",t)},expression:"userinfo.confirm_password"}})],1),a("FormItem",{attrs:{prop:"real_name",label:e.$t("sign_userInfo.real")}},[a("Input",{model:{value:e.userinfo.real_name,callback:function(t){e.$set(e.userinfo,"real_name",t)},expression:"userinfo.real_name"}})],1),a("FormItem",{attrs:{prop:"department",label:e.$t("sign_userInfo.department")}},[a("Input",{model:{value:e.userinfo.department,callback:function(t){e.$set(e.userinfo,"department",t)},expression:"userinfo.department"}})],1),a("FormItem",{attrs:{prop:"email",label:e.$t("sign_userInfo.mail")}},[a("Input",{model:{value:e.userinfo.email,callback:function(t){e.$set(e.userinfo,"email",t)},expression:"userinfo.email"}})],1)],1)],1)],1)},i=[],n=(a("2397"),a("d225")),s=a("b0b4"),o=a("4e2b"),l=a("308d"),u=a("6bb5"),c=a("9ab4"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"s-canvas"},[a("canvas",{staticStyle:{opacity:"0.6","border-radius":"3px","margin-top":"1px"},attrs:{id:"s-canvas",width:e.contentWidth,height:e.contentHeight}})])},f=[],m=(a("6c7b"),a("c5f6"),{name:"SIdentify",props:{replace:{type:Boolean,default:!1},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:32},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:0},colorMax:{type:Number,default:80},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:150},contentHeight:{type:Number,default:33}},data:function(){return{checkCode:""}},methods:{createCode:function(){for(var e="",t=5,a=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),r=0;r<t;r++){var i=Math.floor(36*Math.random());e+=a[i]}this.identifyCode=e,this.$emit("identifyCode",e)},randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},randomColor:function(e,t){var a=this.randomNum(e,t),r=this.randomNum(e,t),i=this.randomNum(e,t);return"rgb("+a+","+r+","+i+")"},drawPic:function(e){this.createCode();var t=e.getContext("2d");t.textBaseline="bottom",t.fillStyle="#FFFFFF",t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var a=0;a<this.identifyCode.length;a++)this.drawText(t,this.identifyCode[a],a);this.drawLine(t),this.drawDot(t)},drawText:function(e,t,a){e.fillStyle=this.randomColor(this.colorMin,this.colorMax),e.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var r=(a+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5),n=this.randomNum(-45,45);e.translate(r,i),e.rotate(n*Math.PI/180),e.fillText(t,0,0),e.rotate(-n*Math.PI/180),e.translate(-r,-i)},drawLine:function(e){for(var t=0;t<0;t++)e.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),e.beginPath(),e.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.stroke()},drawDot:function(e){for(var t=0;t<0;t++)e.fillStyle=this.randomColor(0,255),e.beginPath(),e.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),e.fill()}},watch:{identifyCode:function(){this.drawPic()},replace:function(){var e=document.getElementById("s-canvas");this.drawPic(e)}},mounted:function(){var e=this,t=document.getElementById("s-canvas");this.drawPic(t),t.addEventListener("mousedown",(function(){e.drawPic(t)}))}}),p=m,h=a("2877"),g=Object(h["a"])(p,d,f,!1,null,null,null),v=g.exports,y=a("60a3"),b=a("afe3"),_=a("028f"),w=a("3e4a"),x=a("927c");function I(e){var t=k();return function(){var a,r=Object(u["a"])(e);if(t){var i=Object(u["a"])(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Object(l["a"])(this,a)}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(o["a"])(a,e);var t=I(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.valid_password=function(t,a,r){a!==e.userinfo.password?r(new Error(b["a"].t("sign_up_validate.twice"))):r()},e.regExp_password=function(e,t,a){var r=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;r.test(t)?a():a(new Error(b["a"].t("sign_up_validate.regexp")))},e.is_verify=!1,e.switchCode=!1,e.sponsorship=!1,e.register=!1,e.userinfo={username:"",password:"",confirm_password:"",email:"",real_name:"",department:""},e.userInfoValidate={username:[{required:!0,message:b["a"].t("sign_up_validate.username"),trigger:"blur"}],password:[{required:!0,message:b["a"].t("sign_up_validate.password"),trigger:"blur"},{min:6,message:b["a"].t("sign_up_validate.min"),trigger:"blur"},{max:32,message:b["a"].t("sign_up_validate.max"),trigger:"blur"},{validator:e.regExp_password,trigger:"blur"}],confirm_password:[{required:!0,message:b["a"].t("sign_up_validate.confirm"),trigger:"blur"},{validator:e.valid_password,trigger:"blur"}],real_name:[{required:!0,message:b["a"].t("sign_up_validate.real"),trigger:"blur"}],department:[{required:!0,message:b["a"].t("sign_up_validate.department"),trigger:"blur"}],email:[{required:!0,message:b["a"].t("sign_up_validate.mail"),trigger:"blur"},{type:"email",message:b["a"].t("sign_up_validate.mail_format"),trigger:"blur"}]},e.formInline={user:"",password:""},e.vedioCanPlay=!1,e.fixStyle="",e}return Object(s["a"])(a,[{key:"onSuccess",value:function(){this.$Message.success("验证成功!"),this.signIn(),this.is_verify=!1;var e=this.$refs.slideblock;e.reset()}},{key:"LoginRegister",value:function(){var e=this,t=this.$refs["user_reg"];t.validate((function(t){t?w["a"].post("/register",e.userinfo).finally((function(){return e.resetFields("user_reg")})):e.$config.notice(b["a"].t("sign_up_validate.sign_fail"))}))}},{key:"signIn",value:function(){var e=this;Object(x["a"])(this.is_open,{username:this.formInline.user,password:this.formInline.password}).then((function(t){if(1301!==t.data.payload.code){w["a"].defaults.headers.common["Authorization"]="Bearer "+t.data.payload.token,sessionStorage.setItem("jwt","Bearer "+t.data.payload.token),sessionStorage.setItem("user",e.formInline.user),sessionStorage.setItem("auth",t.data.payload.permissions),sessionStorage.setItem("real_name",t.data.payload.real_name);var a=t.data.payload.permissions;"guest"===a?sessionStorage.setItem("access","1"):"admin"===a||"perform"===a?sessionStorage.setItem("access","2"):"super"===a&&sessionStorage.setItem("access","3"),e.$router.push({name:"home_index"})}}))}},{key:"canplay",value:function(){this.vedioCanPlay=!0}},{key:"mask",value:function(){var e,t,a=document.body.clientWidth,r=document.body.clientHeight,i=r/a;i<.5625?(e=a,t=.5625*e,this.fixStyle={height:.5625*a+"px",width:a+"px","margin-bottom":(r-t)/2+"px","margin-left":"initial"}):(t=r,e=t/.5625,this.fixStyle={height:r+"px",width:r/.5625+"px","margin-left":(a-e)/2+"px","margin-bottom":"initial"})}},{key:"mounted",value:function(){var e=this;window.onresize=function(){e.mask()},this.mask(),w["a"].get("/fetch").then((function(t){e.switchCode=t.data.payload.reg}))}}]),a}(Object(y["b"])(_["a"]));C=Object(c["b"])([Object(y["a"])({components:{SIdentify:v}})],C);var S=C,F=S,$=(a("54e5"),Object(h["a"])(F,r,i,!1,null,"710b0c46",null));t["default"]=$.exports}}]);