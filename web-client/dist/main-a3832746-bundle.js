!function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={2:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+"-a3832746-bundle.js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}n[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([274,1,0]),r()}({274:function(e,t,r){e.exports=r(479)},479:function(e,t,r){"use strict";r.r(t);var a=r(229),n=r(511),o=r(512),i=r(1),l=r.n(i),s={typography:{fontFamily:"'Montserrat', sans-serif",h1:{fontFamily:"'Ubuntu', sans-serif",fontSize:44,fontWeight:700},h2:{fontFamily:"'Ubuntu', sans-serif",fontSize:34,fontWeight:700},h3:{fontFamily:"'Ubuntu', sans-serif",fontSize:28,fontWeight:700},body1:{fontSize:14,fontWeight:400},body2:{fontSize:12,fontWeight:700},subtitle1:{fontSize:18,fontWeight:700,lineHeight:1.4},subtitle2:{fontSize:16,fontWeight:300}},variables:{colors:{black:"#000",white:"#fff",border:"#EFEFEF",borderDark:"#7491AA",text:"#222222",action:"#34836C",link:"#455D73",right:"#7EB356",wrong:"#F81215"},shadows:{button:"0px 4px 20px rgba(52, 131, 108, 0.5)",insight:"0px 0px 6px 0px rgba(54, 72, 89, 0.25)",widget:"0px 0px 8px 0px rgba(54, 72, 89, 0.25)"},borders:{content:6,large:12},fonts:{size:{s:14,m:18,l:24,xl:44},weight:{light:300,regular:400,bold:600,dark:700}},layout:{sidebarWidth:200},effectsSpeed:{fast:"0.1s ease-in-out",medium:"0.3s ease-in-out",slow:"0.6s ease-in-out"}},overrides:{MuiListItem:{gutters:{paddingLeft:0}}}},c=function(e){var t=e.children,r=Object(a.a)(s);return l.a.createElement(n.a,{theme:r},l.a.createElement(o.a,null),t)},u=r(57),p=r(61),f=r(513),h=r(79),m=l.a.createContext(""),d=m.Provider,g=(m.Consumer,/\/(en|ru)\//);var b=function(e){var t=e.children,r=e.resources,a=e.preLangBasename,n=void 0===a?"":a;!function(e){u.a.use(p.e).init({resources:e,lng:"en",keySeparator:".",interpolation:{escapeValue:!1}})}(r);var o,i=(o=window.location.pathname.match(g))?o[1]:"",s="";if(i)s="/"+i+"/",u.a.language!==i&&u.a.changeLanguage(i);else{var c=navigator.language.split("-")[0];u.a.languages.indexOf(c)>-1&&u.a.language!==c&&u.a.changeLanguage(c)}return l.a.createElement(f.a,{i18n:u.a},l.a.createElement(d,{value:n},l.a.createElement(h.a,{basename:""+n+s},t)))},y={en:{translation:{pageNames:{home:"Home",me:"Me",document:"Document"},interfaceLabels:{loading:"Loading",template:"Found in templates",score:"Score",more:"More",issues:"Issues",neutral:"Neutral",right:"Right"},captions:{myContacts:"My contracts"}}},ru:{translation:{pageNames:{home:"Домашняя",me:"Я",document:"Документ"},interfaceLabels:{loading:"Загрузка",template:"Найдено в шаблонах",score:"Оценка",more:"Подробней",issues:"Проблемы",neutral:"Нейтрально",right:"Правильно"},captions:{myContacts:"Мои контракты"}}}},v=r(234),w=r(514),E=r(42),O=r(526),x=r(523),j=(Object(v.a)((function(e){e.variables,e.spacing;return{root:{display:"block"}}})),Object(E.c)((function(e){var t=e.message,r=e.mode,a=e.removeNotification,n=l.a.useState(!0),o=n[0],i=n[1];return l.a.createElement(O.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o,autoHideDuration:5e3,onClose:function(){i(!1),a()}},l.a.createElement(x.a,{elevation:6,variant:"filled",severity:r},t))}))),D=Object(v.a)((function(e){e.variables,e.spacing;return{root:{display:"block"}}})),z=Object(E.c)((function(){D();var e=Object(w.b)();return l.a.createElement(l.a.Fragment,null,e.requestErrors.map((function(t,r){return l.a.createElement(j,{message:t,mode:"error",key:r,removeNotification:function(){return e.removeError(r)}})})))})),P=r(519),S=r(521),k=r(516),C=Object(v.a)((function(e){var t=e.variables;e.spacing;return{logo:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},logoC:{color:t.colors.right},logoDot:{color:t.colors.wrong}}})),L=function(){var e=C();return l.a.createElement(S.a,{className:e.logo},l.a.createElement(k.a,{variant:"h1",className:e.logoC},"Conta"),l.a.createElement(k.a,{variant:"h1",className:e.logoDot},"."))},N=r(518),R=r(522),W=r(517),M=r(527),F=r(528),I=Object(v.a)((function(e){var t=e.variables,r=e.spacing;return{drawerRoot:{width:t.layout.sidebarWidth},drawerPaper:{width:t.layout.sidebarWidth,padding:r(0,2)},logo:{margin:r(4,0,2,0)}}})),q=function(){var e=I(),t=Object(F.a)().t;return l.a.createElement(R.a,{variant:"permanent",classes:{root:e.drawerRoot,paper:e.drawerPaper}},l.a.createElement(S.a,{className:e.logo},l.a.createElement(L,null)),l.a.createElement(W.a,null,l.a.createElement(M.a,null,l.a.createElement(N.a,{to:P.b,text:t("pageNames.home")})),l.a.createElement(M.a,null,l.a.createElement(N.a,{to:P.c,text:t("pageNames.me")}))))},_=Object(v.a)((function(){return{root:{display:"flex",flex:1,flexDirection:"column",overflow:"hidden",alignItems:"center",justifyContent:"center"},text:{textAlign:"center"}}})),A=function(){var e=_(),t=Object(F.a)().t;return l.a.createElement(S.a,{className:e.root},l.a.createElement(k.a,{className:e.text,variant:"h2"},t("interfaceLabels.loading")))},H=r(17),T=l.a.lazy((function(){return Promise.all([r.e(1),r.e(0),r.e(3)]).then(r.bind(null,534))})),B=l.a.lazy((function(){return r.e(4).then(r.bind(null,532))})),U=l.a.lazy((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,533))})),J=Object(v.a)((function(){return{root:{display:"flex",flexDirection:"column",overflow:"hidden",height:"100vh"},pageLayout:{display:"grid",gridTemplateColumns:"200px 1fr",overflow:"hidden",height:"100vh"}}})),V=function(){var e=J(),t=Object(w.a)();return l.a.useEffect((function(){t.init()}),[]),l.a.createElement(S.a,{className:e.root},l.a.createElement(S.a,{className:e.pageLayout},l.a.createElement(z,null),l.a.createElement(q,null),l.a.createElement(l.a.Suspense,{fallback:l.a.createElement(A,null)},l.a.createElement(H.d,null,l.a.createElement(H.a,{exact:!0,from:"/",to:P.c}),l.a.createElement(H.b,{path:P.b,component:B}),l.a.createElement(H.b,{path:P.c,component:U}),l.a.createElement(H.b,{path:P.a+"/:id",exact:!0,component:T}),l.a.createElement(H.a,{from:"*",to:"/"})))))},G=r(3);var K,Q,X,Y,Z,$,ee,te,re,ae,ne,oe,ie,le,se,ce,ue,pe,fe,he,me,de,ge,be,ye,ve=r(14),we=r.n(ve),Ee=r(10),Oe=r.n(Ee),xe=(r(78),r(136)),je=r.n(xe),De=r(214),ze=r.n(De),Pe=r(137),Se=r.n(Pe),ke=r(524),Ce=(K=function(e,t){var r=this;we()(this,"paragraph",Q,this),we()(this,"advice",X,this),we()(this,"insights",Y,this),we()(this,"styles",Z,this),we()(this,"key",$,this),Object(G.n)((function(){r.paragraph=e.paragraph,r.advice=e.advice,r.insights=e.insights,r.styles=e.styles,r.key=t}))},Q=Oe()(K.prototype,"paragraph",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=Oe()(K.prototype,"advice",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=Oe()(K.prototype,"insights",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=Oe()(K.prototype,"styles",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=Oe()(K.prototype,"key",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K),Le=(ee=function(){function e(e){var t=this;we()(this,"id",te,this),we()(this,"name",re,this),we()(this,"about",ae,this),we()(this,"amountOfIssues",ne,this),we()(this,"amountOfNeutral",oe,this),we()(this,"amountOfRight",ie,this),we()(this,"paragraphs",le,this),we()(this,"initialDataLoaded",se,this),Object(G.n)((function(){t.id=Object(ke.a)(),t.name="Contract name",t.about="Here will be small text about contract in general. Maybe could be some highlights etc. Here will be small text about contract in general. Maybe could be some highlights etc.",t.amountOfIssues=30,t.amountOfNeutral=80,t.amountOfRight=60,t.paragraphs=[],t.initialDataLoaded=!1,t.setData(e.paragraphs)}))}var t=e.prototype;return t.setData=function(e){var t=this;Object.keys(e).forEach((function(r){return t.addParagraph(e[r],r)})),this.initialDataLoaded=!0},t.addParagraph=function(e,t){this.paragraphs.push(new Ce(e,t))},e}(),te=Oe()(ee.prototype,"id",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=Oe()(ee.prototype,"name",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=Oe()(ee.prototype,"about",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=Oe()(ee.prototype,"amountOfIssues",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=Oe()(ee.prototype,"amountOfNeutral",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=Oe()(ee.prototype,"amountOfRight",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=Oe()(ee.prototype,"paragraphs",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=Oe()(ee.prototype,"initialDataLoaded",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe()(ee.prototype,"setData",[G.f],Object.getOwnPropertyDescriptor(ee.prototype,"setData"),ee.prototype),Oe()(ee.prototype,"addParagraph",[G.f],Object.getOwnPropertyDescriptor(ee.prototype,"addParagraph"),ee.prototype),ee),Ne=(ce=function(){function e(e){var t=this;we()(this,"contracts",ue,this),we()(this,"initialDataLoaded",pe,this),this.uiStore=void 0,Object(G.n)((function(){t.contracts=[],t.initialDataLoaded=!1,t.uiStore=e}))}var t=e.prototype;return t.init=function(){var e=ze()(je.a.mark((function e(){var t;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r="0",Se.a.get("https://api.conta.ai/contract/"+r,{headers:{"content-type":"application/json"}});case 3:t=e.sent,this.setData({0:{paragraphs:t.data},1:{paragraphs:t.data},2:{paragraphs:t.data}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.uiStore.addError(e.t0.message);case 10:case"end":return e.stop()}var r}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t.setData=function(e){var t=this;Object.keys(e).forEach((function(r){return t.addContract(e[r])})),this.initialDataLoaded=!0},t.addContract=function(e){this.contracts.push(new Le(e))},t.getContract=function(e){var t=this.contracts.find((function(t){return t.id===e}));return t||null},e}(),ue=Oe()(ce.prototype,"contracts",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pe=Oe()(ce.prototype,"initialDataLoaded",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe()(ce.prototype,"init",[G.f],Object.getOwnPropertyDescriptor(ce.prototype,"init"),ce.prototype),Oe()(ce.prototype,"setData",[G.f],Object.getOwnPropertyDescriptor(ce.prototype,"setData"),ce.prototype),Oe()(ce.prototype,"addContract",[G.f],Object.getOwnPropertyDescriptor(ce.prototype,"addContract"),ce.prototype),ce),Re=(fe=function(){function e(){var e=this;we()(this,"requestErrors",he,this),we()(this,"paragraphsRefs",me,this),we()(this,"insightsRefs",de,this),Object(G.n)((function(){e.requestErrors=[],e.paragraphsRefs=[],e.insightsRefs=[]}))}var t=e.prototype;return t.addError=function(e){this.requestErrors.push(e)},t.removeError=function(e){this.requestErrors=this.requestErrors.slice().splice(e,1)},t.addParagraphRef=function(e){this.paragraphsRefs.push(e)},t.addInsightRef=function(e){this.insightsRefs.push(e)},e}(),he=Oe()(fe.prototype,"requestErrors",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me=Oe()(fe.prototype,"paragraphsRefs",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),de=Oe()(fe.prototype,"insightsRefs",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe()(fe.prototype,"addError",[G.f],Object.getOwnPropertyDescriptor(fe.prototype,"addError"),fe.prototype),Oe()(fe.prototype,"removeError",[G.f],Object.getOwnPropertyDescriptor(fe.prototype,"removeError"),fe.prototype),Oe()(fe.prototype,"addParagraphRef",[G.f],Object.getOwnPropertyDescriptor(fe.prototype,"addParagraphRef"),fe.prototype),Oe()(fe.prototype,"addInsightRef",[G.f],Object.getOwnPropertyDescriptor(fe.prototype,"addInsightRef"),fe.prototype),fe),We=(ge=function(){var e=this;we()(this,"contractsStore",be,this),we()(this,"uiStore",ye,this),Object(G.n)((function(){e.uiStore=new Re,e.contractsStore=new Ne(e.uiStore)}))},be=Oe()(ge.prototype,"contractsStore",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ye=Oe()(ge.prototype,"uiStore",[G.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge),Me=r(205);Object(G.g)({enforceActions:"always"});var Fe=new We,Ie=Object(E.c)((function(){return l.a.createElement(c,null,l.a.createElement(b,{resources:y},l.a.createElement(E.b,Fe,l.a.createElement(Me.a,{maxSnack:3},l.a.createElement(V,null)))))})),qe=r(11);r.n(qe).a.render(l.a.createElement(Ie,null),document.getElementById("app"))},514:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s}));var a=r(42),n=r(1),o=r.n(n);function i(){return o.a.useContext(a.a)}function l(){return i().contractsStore}function s(){return i().uiStore}},518:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(234),n=r(1),o=r.n(n),i=r(79),l=Object(a.a)((function(e){var t=e.variables;e.spacing;return{root:{fontWeight:t.fonts.weight.bold,color:t.colors.link,textDecoration:"none","&:hover":{textDecoration:"underline"}},active:{textDecoration:"underline"}}})),s=function(e){var t=e.to,r=e.text,a=l();return o.a.createElement(i.b,{className:a.root,to:t,activeClassName:a.active},r)}},519:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var a="/me",n="/home",o="/contract"}});