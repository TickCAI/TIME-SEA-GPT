(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/master/master"],{"0b97":function(e,n,t){"use strict";var r=t("fbc9"),o=t.n(r);o.a},1542:function(e,n,t){"use strict";(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("2eee")),a=r(t("c973")),i=t("a074"),u=t("68f3"),s={data:function(){return{btnLoading:!1}},methods:{handleLogin:function(){var n=this;e.vibrateShort(),n.btnLoading=!0,e.login({success:function(t){return(0,a.default)(o.default.mark((function r(){var a;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.wechatLogin)({code:t.code});case 3:a=r.sent,(0,u.setToken)(a),n.$parent.isLogin=!0,setTimeout((function(){n.$parent.loadingPersonal()}),10),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0),e.showToast({icon:"none",duration:6e3,title:r.t0});case 13:return r.prev=13,n.btnLoading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,9,13,16]])})))()}})}}};n.default=s}).call(this,t("543d")["default"])},"30c6":function(e,n,t){"use strict";t.r(n);var r=t("d978"),o=t("43b9");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("41bf");var i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports},"41bf":function(e,n,t){"use strict";var r=t("6881"),o=t.n(r);o.a},"43b9":function(e,n,t){"use strict";t.r(n);var r=t("e13f"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},4648:function(e,n,t){"use strict";t.r(n);var r=t("779b"),o=t("504f");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("0b97");var i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"23b45043",null,!1,r["a"],void 0);n["default"]=u.exports},"48e8":function(e,n,t){"use strict";(function(e,n){var r=t("4ea4");t("48aa");r(t("66fd"));var o=r(t("c0ae"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"48fb":function(e,n,t){"use strict";t.r(n);var r=t("7877"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},5011:function(e,n,t){"use strict";t.r(n);var r=t("999e"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"504f":function(e,n,t){"use strict";t.r(n);var r=t("1542"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"5c74":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={customWaterfallsFlow:function(){return t.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow").then(t.bind(null,"be01"))},uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"50c5"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.userInfo.avatar?e.conversionImage(e.userInfo.avatar):null),r=e.userData.list.length,o=!e.isFlushed&&0===e.userData.list.length,a=e.publicData.list.length,i=!e.isFlushed&&0===e.publicData.list.length,u=e.userInfoForm.avatar?e.conversionImage(e.userInfoForm.avatar):null;e._isMounted||(e.e0=this.$parent.watchVideo,e.e1=function(e){return this.$refs.personalInfoPopup.open("center")},e.e2=function(e){return this.$refs.personalInfoPopup.close()}),e.$mp.data=Object.assign({},{$root:{m0:t,g0:r,g1:o,g2:a,g3:i,m1:u}})},a=[]},"5cc4":function(e,n,t){"use strict";var r=t("66a2"),o=t.n(r);o.a},"66a2":function(e,n,t){},6881:function(e,n,t){},"6b47":function(e,n,t){"use strict";t.r(n);var r=t("5c74"),o=t("48fb");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("5cc4");var i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports},"6f44":function(e,n,t){"use strict";t.r(n);var r=t("ded7"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"779b":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},o=[]},7877:function(e,n,t){"use strict";(function(e,r){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("2eee")),i=o(t("448a")),u=o(t("c973")),s=t("1623"),c=o(t("0ad6")),f=t("68f3"),l=t("29d7"),d=o(t("30c6")),p=t("a6cf"),h=t("60b2"),v={components:{DisconnectComponent:function(){t.e("wxcomponents/components/disconnectComponent").then(function(){return resolve(t("715c"))}.bind(null,t)).catch(t.oe)},LoadingDataComponent:d.default,EmptyComponent:function(){t.e("wxcomponents/components/emptyComponent").then(function(){return resolve(t("e53b"))}.bind(null,t)).catch(t.oe)}},computed:{env:function(){return c.default}},data:function(){return{isFlushed:!1,userInfo:{},userInfoForm:{userName:""},userData:{list:[],isPublic:0,current:1},publicData:{list:[],isPublic:1,current:1},active:0,isAppreciate:!0}},methods:{conversionImage:h.conversionImage,refreshAppreciate:function(){var e=this.$refs.appreciateFlowRef;e&&(this.publicData.list=[],this.publicData.current=1,this.getPublicOps(),e.refresh())},refreshCreation:function(){var e=this.$refs.creationFlowRef;e&&(this.userData.list=[],this.userData.current=1,this.getUserOps(),e.refresh())},onLoadShow:function(){this.getUserInfo(),this.getUserOps()},toDrawingDetail:function(n){e.navigateTo({url:"/pages/drawing/drawingResultView?drawingId="+n.value.drawingId})},getUserOps:function(){var e=(0,u.default)(a.default.mark((function e(){var n,t,r,o,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this.userData,t=n.current,r=n.isPublic,e.next=4,this.getOps(t,r);case 4:o=e.sent,o.length>0&&((u=this.userData.list).push.apply(u,(0,i.default)(o)),this.userData.current=t+1),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getPublicOps:function(){var e=(0,u.default)(a.default.mark((function e(){var n,t,r,o,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this.publicData,t=n.current,r=n.isPublic,e.next=4,this.getOps(t,r);case 4:o=e.sent,o.length>0&&((u=this.publicData.list).push.apply(u,(0,i.default)(o)),this.publicData.current=t+1),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getOps:function(){var n=(0,u.default)(a.default.mark((function n(t,r){var o,i,u=this;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,this.isFlushed=!0,n.next=4,(0,p.getDrawingOpsResult)(t,r);case 4:return o=n.sent,i=o.records,i.length>0&&i.forEach((function(e){e.image=c.default.imageBaseUrl+e.image;var n=e.value.prompt.toString(),t=n.split(/[,，]/);Array.isArray(t)&&(e.value.prompt=t.slice(0,4))})),n.abrupt("return",i);case 10:n.prev=10,n.t0=n["catch"](0),e.showToast({icon:"none",duration:4e3,title:n.t0});case 13:return n.prev=13,setTimeout((function(){u.isFlushed=!1}),1e3),n.finish(13);case 16:case"end":return n.stop()}}),n,this,[[0,10,13,16]])})));return function(e,t){return n.apply(this,arguments)}}(),toLayoutPage:function(){e.navigateTo({url:"/pages/layout/layoutView"})},onChangeTabs:function(e){this.isAppreciate&&1===e.detail.index&&(this.isAppreciate=!0,this.getPublicOps())},signIn:function(){var n=(0,u.default)(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.showLoading(),n.next=4,(0,l.userSignInReward)();case 4:n.sent,e.hideLoading(),e.showToast({icon:"none",duration:3e3,title:"签到成功"}),e.$emit("master_userInfo"),n.next=15;break;case 10:n.prev=10,n.t0=n["catch"](0),e.hideLoading(),console.log(n.t0),e.showToast({icon:"none",duration:6e3,title:n.t0});case 15:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),getUserInfo:function(){var e=(0,u.default)(a.default.mark((function e(){var n,t;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$parent,e.prev=1,n.openShowAnimation(),e.next=5,(0,s.getCurrentUserInfo)();case 5:t=e.sent,t&&(this.userInfo=t,(0,f.setUser)(this.userInfo),this.userInfoForm=JSON.parse(JSON.stringify(this.userInfo))),n.isConnection=!0,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),n.isConnection=!1;case 14:return e.prev=14,setTimeout((function(){n.closeShowAnimation()}),200),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,10,14,17]])})));return function(){return e.apply(this,arguments)}}(),refreshUserInfo:function(){var e=(0,u.default)(a.default.mark((function e(){var n,t;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$parent,e.prev=1,n.isConnection=!0,e.next=5,(0,s.getCurrentUserInfo)();case 5:t=e.sent,t&&(this.userInfo=t,(0,f.setUser)(this.userInfo),this.userInfoForm=JSON.parse(JSON.stringify(this.userInfo))),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0),n.isConnection=!1;case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),onNickName:function(e){this.userInfoForm.userName=e.detail.value},uploadAvatar:function(){var n=(0,u.default)(a.default.mark((function n(t){var o,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=this,i=c.default.baseUrl+"/user/upload/avatar",e.showLoading({title:"正在上传",mask:!0}),r.uploadFile({url:i,filePath:t.detail.avatarUrl,name:"avatar",header:{token:(0,f.getToken)()},success:function(){o.getUserInfo(),e.hideLoading(),e.showToast({title:"上传头像成功",icon:"none",duration:2e3})},fail:function(n){console.log(n),e.hideLoading(),e.showToast({title:"上传头像失败,请稍后重试",icon:"none",duration:2e3})}});case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}(),uploadName:function(){var n=(0,u.default)(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=this.userInfoForm.userName,t.length>0){n.next=4;break}return e.showToast({title:"昵称不能为空",icon:"none",duration:2e3}),n.abrupt("return");case 4:return n.prev=4,e.showLoading({title:"正在修改 ing~",mask:!0}),n.next=8,(0,s.uploadName)(t);case 8:return n.next=10,this.getUserInfo();case 10:e.hideLoading(),e.showToast({title:"修改昵称成功",icon:"none",duration:2e3}),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](4),e.showToast({title:"昵称不合法!",icon:"none",duration:2e3});case 17:case"end":return n.stop()}}),n,this,[[4,14]])})));return function(){return n.apply(this,arguments)}}(),copyOpenId:function(){var n=(0,u.default)(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.setClipboardData({data:this.userInfo.openId,success:function(n){e.showToast({title:"已复制粘贴板",icon:"none",duration:2e3})}});case 1:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),onImageLoad:function(e){this.imageList[e].defaultUrl=""}}};n.default=v}).call(this,t("543d")["default"],t("bc2e")["default"])},"793b":function(e,n,t){},"7cd4":function(e,n,t){},"8b5b":function(e,n,t){"use strict";t.r(n);var r=t("e77f"),o=t("6f44");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("9cce");var i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports},"999e":function(e,n,t){"use strict";(function(e,r){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("2eee")),i=o(t("c973")),u=o(t("8b5b")),s=o(t("4648")),c=o(t("6b47")),f=t("68f3"),l=o(t("0ad6")),d=t("29d7"),p=t("6879"),h=t("e4f2"),v=null,m={components:{DisconnectComponent:function(){t.e("wxcomponents/components/disconnectComponent").then(function(){return resolve(t("715c"))}.bind(null,t)).catch(t.oe)},LoadingComponent:function(){t.e("wxcomponents/components/loadingComponent").then(function(){return resolve(t("7e70"))}.bind(null,t)).catch(t.oe)},PersonalView:c.default,LoginView:s.default,HomeView:u.default,MenuComponent:function(){Promise.all([t.e("common/vendor"),t.e("pages/master/components/menuComponent")]).then(function(){return resolve(t("ef89"))}.bind(null,t)).catch(t.oe)}},onLoad:function(n){var t=this.$refs.personalRef;n.swiperIndex&&(this.swiperIndex=n.swiperIndex),this.loadingPersonal(),e.$on("master_userInfo",(function(){t&&t.refreshUserInfo()})),e.$on("master_creation",(function(){t&&t.refreshCreation()})),e.$on("master_appreciate",(function(){t&&t.refreshAppreciate()})),this.adLoad()},onUnload:function(){e.$off("master_userInfo"),e.$off("master_appreciate"),e.$off("master_creation"),v&&v.destroy()},data:function(){return{swiperIndex:0,isLogin:!1,announcement:{},isAnnouncement:!1,isConnection:!0}},created:function(){this.handleIsLogin(),this.getAnnouncement()},methods:{conversionTime:h.conversionTime,loadingPersonal:function(){(0,f.getToken)()&&this.$refs.personalRef.onLoadShow()},adLoad:function(){var n=this,t=l.default.motivationalAdvertisingId;r.createRewardedVideoAd&&(v=r.createRewardedVideoAd({adUnitId:t}),v.onError((function(e){console.log(e)})),v.onClose((function(t){if(t&&t.isEnded||void 0===t)try{(0,d.useVideoReward)();e.showToast({title:"奖励已发放",icon:"none"}),n.$refs.personalRef.getUserInfo()}catch(r){console.log(r),e.showToast({title:"获取奖励失败",icon:"none"})}else e.showToast({icon:"none",duration:3e3,title:"请重新观看视频获得奖励"})})))},watchVideo:function(){v&&v.show().catch((function(){v.load().then((function(){v.show()}))}))},handleIsLogin:function(){return this.isLogin=(0,f.getToken)(),this.isLogin},changeSwiper:function(n){e.vibrateShort(),this.swiperIndex=n.detail.current},getAnnouncement:function(){var e=(0,i.default)(a.default.mark((function e(){var n,t,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.getAnnouncementData)();case 3:n=e.sent,n&&(t=n.logotypeId,r=(0,f.getAnnouncement)(),r&&t===r.logotypeId||(this.announcement=n,(0,f.setAnnouncement)(n),this.isAnnouncement=!0)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("获取公告失败");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),openShowAnimation:function(){this.$refs.loadingRef.openShow()},closeShowAnimation:function(){this.$refs.loadingRef.closeShow()}}};n.default=m}).call(this,t("543d")["default"],t("bc2e")["default"])},"9cce":function(e,n,t){"use strict";var r=t("7cd4"),o=t.n(r);o.a},ab0e:function(e,n,t){"use strict";var r=t("793b"),o=t.n(r);o.a},c0ae:function(e,n,t){"use strict";t.r(n);var r=t("f375"),o=t("5011");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("ab0e");var i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports},d978:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},o=[]},ded7:function(e,n,t){"use strict";(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("0ad6")),a=r(t("8bec")),i=t("68f3"),u={computed:{menu:function(){return a.default.menu},env:function(){return o.default}},methods:{toFunctionPage:function(n){(0,i.getToken)()?e.navigateTo({url:n}):e.reLaunch({url:"/pages/master/master?swiperIndex=1"})},toCustomPage:function(n){(0,i.getToken)()?((0,i.setChat)(n),e.navigateTo({url:"/pages/dialogue/customDialogueView"})):e.reLaunch({url:"/pages/master/master?swiperIndex=1"})}}};n.default=u}).call(this,t("543d")["default"])},e13f:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{}}}},e77f:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},o=[]},f375:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.conversionTime(e.announcement.createdTime));e._isMounted||(e.e0=function(e){this.isAnnouncement=!1},e.e1=function(n){e.isAnnouncement=!1}),e.$mp.data=Object.assign({},{$root:{m0:t}})},o=[]},fbc9:function(e,n,t){}},[["48e8","common/runtime","common/vendor"]]]);