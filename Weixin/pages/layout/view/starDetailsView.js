(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/layout/view/starDetailsView"],{"11a9":function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("2eee")),r=a(n("c973")),i=a(n("1994")),u=n("1623"),s=n("68f3"),c={computed:{md:function(){return i.default}},components:{LoadingComponent:function(){n.e("wxcomponents/components/loadingComponent").then(function(){return resolve(n("7e70"))}.bind(null,n)).catch(n.oe)},mpHtml:function(){Promise.all([n.e("common/vendor"),n.e("wxcomponents/mp-html/mp-html")]).then(function(){return resolve(n("aa68"))}.bind(null,n)).catch(n.oe)}},data:function(){return{issue:"",answer:"",starId:void 0}},onLoad:function(t){var e=this.$refs.loadingRef;e.openShow(),this.starId=t.starId,this.getUserStarDetail(),setTimeout((function(){e.closeShow()}),500)},methods:{toGptDialogue:function(){(0,s.setChat)({question:this.issue,answer:this.answer,isSucceed:!0,starId:this.starId}),t.navigateTo({url:"/pages/dialogue/gptDialogueView?continue=true"})},getUserStarDetail:function(){var e=(0,r.default)(o.default.mark((function e(){var n,a,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.getUserStarDetail)(this.starId);case 3:n=e.sent,n&&(a=n.issue,r=n.answer,n.starId,this.issue=a,this.answer=r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.showToast({title:e.t0,icon:"none",duration:2e3});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}};e.default=c}).call(this,n("543d")["default"])},"16c6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},"6fdf":function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("48aa");a(n("66fd"));var o=a(n("cb88"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"98db":function(t,e,n){"use strict";n.r(e);var a=n("11a9"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"9df3":function(t,e,n){},a99f:function(t,e,n){"use strict";var a=n("9df3"),o=n.n(a);o.a},cb88:function(t,e,n){"use strict";n.r(e);var a=n("16c6"),o=n("98db");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("a99f");var i=n("f0c5"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports}},[["6fdf","common/runtime","common/vendor"]]]);