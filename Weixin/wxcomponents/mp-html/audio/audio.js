(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/mp-html/audio/audio"],{"0546":function(t,i,n){"use strict";var e=n("c741"),a=n.n(e);a.a},"1b70":function(t,i,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("a8bb")),o={data:function(){return{error:!1,playing:!1,time:"00:00",value:0}},props:{aid:String,name:String,author:String,poster:String,autoplay:[Boolean,String],controls:[Boolean,String],loop:[Boolean,String],src:String},watch:{src:function(t){this.setSrc(t)}},mounted:function(){var i=this;this._ctx=t.createInnerAudioContext(),this._ctx.onError((function(t){i.error=!0,i.$emit("error",t)})),this._ctx.onTimeUpdate((function(){var t=i._ctx.currentTime,n=parseInt(t/60),e=Math.ceil(t%60);i.time=(n>9?n:"0"+n)+":"+(e>9?e:"0"+e),i.lastTime||(i.value=t/i._ctx.duration*100)})),this._ctx.onEnded((function(){i.loop||(i.playing=!1)})),a.default.set(this.aid,this),this.setSrc(this.src)},beforeDestroy:function(){this._ctx.destroy(),a.default.remove(this.aid)},onPageShow:function(){this.playing&&this._ctx.paused&&this._ctx.play()},methods:{setSrc:function(t){this._ctx.autoplay=this.autoplay,this._ctx.loop=this.loop,this._ctx.src=t,this.autoplay&&!this.playing&&(this.playing=!0)},play:function(){this._ctx.play(),this.playing=!0,this.$emit("play",{target:{id:this.aid}})},pause:function(){this._ctx.pause(),this.playing=!1,this.$emit("pause")},playbackRate:function(t){this._ctx.playbackRate=t},seek:function(t){this._ctx.seek(t)},_buttonTap:function(){this.playing?this.pause():this.play()},_seeking:function(t){if(!(t.timeStamp-this.lastTime<200)){var i=Math.round(t.detail.value/100*this._ctx.duration),n=parseInt(i/60),e=i%60;this.time=(n>9?n:"0"+n)+":"+(e>9?e:"0"+e),this.lastTime=t.timeStamp}},_seeked:function(t){this.seek(t.detail.value/100*this._ctx.duration),this.lastTime=void 0}}};i.default=o}).call(this,n("543d")["default"])},"53ce":function(t,i,n){"use strict";n.r(i);var e=n("f836"),a=n("ef2a");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("0546");var s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=c.exports},c741:function(t,i,n){},ef2a:function(t,i,n){"use strict";n.r(i);var e=n("1b70"),a=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},f836:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/mp-html/audio/audio-create-component',
    {
        'wxcomponents/mp-html/audio/audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("53ce"))
        })
    },
    [['wxcomponents/mp-html/audio/audio-create-component']]
]);
