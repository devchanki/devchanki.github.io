(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a0028c9"],{"159b":function(t,r,a){var n=a("da84"),o=a("fdbc"),e=a("17c2"),c=a("9112");for(var i in o){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==e)try{c(u,"forEach",e)}catch(l){u.forEach=e}}},"17c2":function(t,r,a){"use strict";var n=a("b727").forEach,o=a("a640"),e=a("ae40"),c=o("forEach"),i=e("forEach");t.exports=c&&i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"21f9":function(t,r,a){},4160:function(t,r,a){"use strict";var n=a("23e7"),o=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4e82":function(t,r,a){"use strict";var n=a("23e7"),o=a("1c0b"),e=a("7b0b"),c=a("d039"),i=a("a640"),s=[],u=s.sort,l=c((function(){s.sort(void 0)})),f=c((function(){s.sort(null)})),h=i("sort"),d=l||!f||!h;n({target:"Array",proto:!0,forced:d},{sort:function(t){return void 0===t?u.call(e(this)):u.call(e(this),o(t))}})},"8fb5":function(t,r,a){"use strict";a.r(r);var n=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"main"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"rankboard"},[t._v(" 자신의 순위를 확인해보세요. "),t._l(t.userData,(function(r,n){return a("div",{staticClass:"rank-user"},[t._v(" "+t._s(n+1)+"등 : "+t._s(r.name)+" "),a("br"),t._v(" "+t._s(r.answerPaper.length)+"개 맞춤 ")])}))],2)]),a("div",{staticClass:"question-list"},[t._v(" 문제를 다시한번 확인해보세요! "),t._l(t.questionData.questions,(function(r,n){return a("div",{staticClass:"question"},[t._v(" "+t._s(n+1)+"번 문제 : "+t._s(r.question)+" ")])}))],2),a("div",{staticClass:"chart-wrap"},[a("GChart",{attrs:{type:"PieChart",data:t.chartData,options:t.chartOptions}})],1)])},o=[],e=(a("a4d3"),a("e01a"),a("d28b"),a("4160"),a("4e82"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("56d7")),c={data:function(){return{userData:[],randomString:"",chartData:[],chartOptions:{title:"많이 맞춘 문제"},questionData:{}}},created:function(){var t=this;this.randomString=this.$route.query.id,console.log(this.randomString);var r=e["db"].collection("user").doc(this.randomString).collection("user");r.get().then((function(r){r.forEach((function(r){t.userData.push(r.data())})),t.userData.sort((function(t,r){return r.answerPaper.length-t.answerPaper.length}));new Array;var a=["Questions","개수"];t.chartData.push(a);for(var n=0;n<t.userData[0].answerList.length;n++)t.chartData.push(["Q"+(n+1),0]);var o=!0,e=!1,c=void 0;try{for(var i,s=t.userData[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value,l=!0,f=!1,h=void 0;try{for(var d,v=u.answerPaper[Symbol.iterator]();!(l=(d=v.next()).done);l=!0){var p=d.value;t.chartData[p][1]++}}catch(g){f=!0,h=g}finally{try{l||null==v["return"]||v["return"]()}finally{if(f)throw h}}}}catch(g){e=!0,c=g}finally{try{o||null==s["return"]||s["return"]()}finally{if(e)throw c}}}))["catch"]((function(t){console.log("Error getting document:",t)}));var a=e["db"].collection("maker").doc(this.randomString);a.get().then((function(r){t.questionData=r.data(),console.log(t.questionData)}))["catch"]((function(t){console.log("Error getting document:",t)}))}},i=c,s=(a("ce10"),a("2877")),u=Object(s["a"])(i,n,o,!1,null,"08f80d20",null);r["default"]=u.exports},a640:function(t,r,a){"use strict";var n=a("d039");t.exports=function(t,r){var a=[][t];return!!a&&n((function(){a.call(null,r||function(){throw 1},1)}))}},ce10:function(t,r,a){"use strict";var n=a("21f9"),o=a.n(n);o.a}}]);