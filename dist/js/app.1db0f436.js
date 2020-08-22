(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.dataSource,(function(t){return a("div",{key:t.name,staticClass:"col-12 col-md-6 col-lg-4 my-2"},[a("DataSource",{attrs:{data:t,modalName:t.name}})],1)})),0),a("div",{staticClass:"d-flex flex-column flex-md-row mt-5"},[a("div",{staticClass:"d-flex flex-column align-items-start"},[a("h4",{staticClass:"mb-0"},[t._v("Integrate Data")]),a("small",{staticClass:"text-muted text-left"},[t._v("Click the button below to integrate data from the selected data sources")]),a("button",{staticClass:"btn btn-primary btn-lg my-3",staticStyle:{width:"170px"},attrs:{disabled:t.isIntegratingData},on:{click:t.integrateData}},[t.isIntegratingData?a("div",{staticClass:"spinner"},[a("div",{staticClass:"bounce1"}),a("div",{staticClass:"bounce2"}),a("div",{staticClass:"bounce3"})]):a("span",[t._v("Integrate Data")])])]),t.doneIntegrating?a("div",{staticClass:"ml-0 ml-md-5 mt-3",staticStyle:{"flex-basis":"60%"}},[a("DataSource",{attrs:{data:t.integratedData,modalName:"integrated"}})],1):t._e()])]),a("modal",{attrs:{name:"integrating"}},[a("div",{staticClass:"w-100 h-100 d-flex flex-column justify-content-center align-items-center"},[a("div",{staticClass:"sk-chase"},[a("div",{staticClass:"sk-chase-dot"}),a("div",{staticClass:"sk-chase-dot"}),a("div",{staticClass:"sk-chase-dot"}),a("div",{staticClass:"sk-chase-dot"}),a("div",{staticClass:"sk-chase-dot"}),a("div",{staticClass:"sk-chase-dot"})]),a("h5",{staticClass:"mt-3"},[t._v(t._s(t.currentProcess))])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-2 mb-3 border-bottom"},[a("h4",{staticClass:"text-left"},[t._v("Data Integration Demo")])])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex border shadow-sm py-3"},[s("img",{attrs:{height:"150",src:a("6a55")}}),s("div",{staticClass:"d-flex flex-column align-items-start my-3 ml-3"},[s("small",{staticClass:"text-muted"},[t._v("Data-Source Name")]),s("h5",{staticClass:"align-self-start"},[t._v(t._s(t.data.name))]),s("button",{staticClass:"btn btn-outline-primary mt-3",on:{click:t.showModal}},[t._v("View Data")])]),s("modal",{attrs:{name:t.modalName}},[s("div",{staticClass:"w-100 h-100 d-flex flex-column justify-content-start m-3"},[s("h5",{staticClass:"align-self-start"},[t._v(t._s(t.data.name))])])])],1)},o=[],c={name:"DataSource",props:{data:Object,modalName:String},methods:{showModal:function(){console.log(this.modalName),this.$modal.show(this.modalName)}}},l=c,d=a("2877"),u=Object(d["a"])(l,i,o,!1,null,null,null),m=u.exports,f=a("c4db"),g=a.n(f),p={name:"App",components:{DataSource:m},data:function(){return{dataSource:g.a,isIntegratingData:!1,dataIntegratingProcesses:["Normalizing Data..","Removing Duplicates...","Integrity Violation Checks..."],currentProcessIndex:0,currentProcess:"",integratedData:{name:"Integrated Data"},doneIntegrating:!1}},methods:{integrateData:function(){var t=this;this.isIntegratingData=!0,this.$modal.show("integrating"),this.currentProcess=this.dataIntegratingProcesses[this.currentProcessIndex];var e=setInterval((function(){2!=t.currentProcessIndex?t.currentProcess=t.dataIntegratingProcesses[++t.currentProcessIndex]:(clearInterval(e),t.$modal.hide("integrating"),t.doneIntegrating=!0,t.isIntegratingData=!1)}),3e3)}}},v=p,h=(a("034f"),Object(d["a"])(v,n,r,!1,null,null,null)),b=h.exports,C=(a("ab8b"),a("1881")),x=a.n(C);s["a"].config.productionTip=!1,s["a"].use(x.a),new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"6a55":function(t,e,a){t.exports=a.p+"img/db.2b6702e3.png"},"85ec":function(t,e,a){},c4db:function(t,e){t.exports=[{name:"Social Media"},{name:"Customer Data"},{name:"Web"}]}});
//# sourceMappingURL=app.1db0f436.js.map