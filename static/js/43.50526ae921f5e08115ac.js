webpackJsonp([43],{169:function(t,s,i){var n=i(40)(i(258),i(298),null,null,null);t.exports=n.exports},258:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{biaodi:{type:Object}},data:function(){return{list:null}},methods:{investSure:function(){this.$emit("submit")}},mounted:function(){}}},298:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"s_biaotzlist",staticStyle:{display:"none"}},[i("li",[i("span",{staticClass:"lileft"},[t._v("项目名称：")]),t._v(t._s(t.biaodi.name))]),t._v(" "),i("li",[i("span",{staticClass:"lileft"},[t._v("预期年化收益：")]),t._v(t._s(t.biaodi.apr)+"%")]),t._v(" "),i("li",[i("span",{staticClass:"lileft"},[t._v("理财期限：")]),t._v(t._s(t.biaodi.period)+"\n\t\t\t"),0==t.biaodi.periodUnit?i("span",[t._v("个月")]):i("span",[t._v("天")])]),t._v(" "),i("li",[i("span",{staticClass:"lileft"},[t._v("投资金额：")]),i("span",{staticClass:"major"},[t._v(t._s(t.biaodi.investAmount))]),t._v("元")]),t._v(" "),i("li",[i("span",{staticClass:"lileft"},[t._v(" ")]),i("input",{staticClass:"btn",attrs:{type:"button",value:"确认投资"},on:{click:t.investSure}})])])},staticRenderFns:[]}}});