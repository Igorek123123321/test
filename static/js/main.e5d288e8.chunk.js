(this.webpackJsonplikebot=this.webpackJsonplikebot||[]).push([[0],{218:function(e,t,a){e.exports=a(317)},317:function(e,t,a){"use strict";a.r(t);a(219),a(245),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287);var n=a(0),c=a.n(n),r=a(81),o=a.n(r),l=a(54),i=a.n(l),s=a(42),u=a.n(s),p=a(60),d=a(66),m=a(45),b=a(76),f=(a(296),a(55)),E=a(49),h=a(64),v=a(59),k=a(74),g=a(73),C=a(318),j=a(319),O=function(e){var t=e.id,a=e.go,n=e.fetchedUser,r=e.properties;return c.a.createElement(f.a,{id:t},c.a.createElement(E.a,null,"\u0412\u0430\u0448\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),n&&c.a.createElement(h.a,{title:"User Data Fetched with VK Bridge and API DataBase"},c.a.createElement(v.a,{before:n.photo_200?c.a.createElement(g.a,{src:n.photo_200}):null,description:r.vk&&"\ud83c\udd94 ".concat(r.vk)},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.a,{title:"Navigation Block"},c.a.createElement(k.a,null,c.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"info",expandable:!0,before:c.a.createElement(C.a,null)},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0431\u0430\u043b\u043b\u044b?"),c.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"shop",expandable:!0,before:c.a.createElement(j.a,null)},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"))))},w=a(20),x=a(75),y=a(137),D=a.n(y),A=a(138),B=a.n(A),I=a(136),K=a.n(I),S=Object(w.j)();function U(e,t,a,n,c){return _.apply(this,arguments)}function _(){return(_=Object(p.a)(u.a.mark((function e(t,a,n,c,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://likebot.ru/change?token=".concat(t,"&id=").concat(a,"&balance=").concat(n,"&change=").concat(c,"&type=").concat(r)).then((function(e){console.log(e.status),console.log(e.data)})).catch((function(e){console.log("ERROR SYKa BLYAT: ",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(e){return c.a.createElement(f.a,{id:e.id},c.a.createElement(E.a,{left:c.a.createElement(x.a,{onClick:e.go,"data-to":"home"},S===w.c?c.a.createElement(D.a,null):c.a.createElement(B.a,null))},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0442\u0438\u043f"),c.a.createElement("button",{type:"button",onClick:Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"C4D52C8426DAC",1,U("C4D52C8426DAC",e.properties.vk,e.properties.balance,1,"take");case 3:case"end":return t.stop()}}),t)}))),style:{padding:20,backgroundColor:"red",cursor:"pointer"}},"\u041e\u0442\u043d\u044f\u0442\u044c \u0431\u0430\u043b\u043b"),c.a.createElement("button",{type:"button",onClick:Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"C4D52C8426DAC",1,U("C4D52C8426DAC",e.properties.vk,e.properties.balance,1,"give");case 3:case"end":return t.stop()}}),t)}))),style:{padding:20,backgroundColor:"green",cursor:"pointer"}},"\u0414\u0430\u0442\u044c \u0431\u0430\u043b\u043b"),c.a.createElement("p",null,"\u0411\u0430\u043b\u0430\u043d\u0441 \u0442\u0432\u043e\u0439: ",e.properties.balance))},z=a(320),P=a(321),R=Object(w.j)(),W=function(e){return c.a.createElement(w.e,{id:e.id},c.a.createElement(w.i,{activePanel:"info-row"},c.a.createElement(w.e,{id:"info-row"},c.a.createElement(w.f,{left:c.a.createElement(w.g,{onClick:e.go,"data-to":"home"},R===w.c?c.a.createElement(z.a,null):c.a.createElement(P.a,null))},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0442\u0438\u043f"),c.a.createElement(w.a,null,c.a.createElement(w.h,null,c.a.createElement(w.d,{header:"\u041e\u0431\u0449\u0438\u0439 \u0431\u044e\u0434\u0436\u0435\u0442"},"3000 \u0440."))),c.a.createElement(w.a,null,c.a.createElement(w.b,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"),c.a.createElement(w.h,{multiline:!0},c.a.createElement(w.d,{header:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"},"30 \u044f\u043d\u0432\u0430\u0440\u044f 1993")),c.a.createElement(w.h,null,c.a.createElement(w.d,{header:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0433\u043e\u0440\u043e\u0434"},"\u0415\u0440\u0435\u0432\u0430\u043d")),c.a.createElement(w.h,null,c.a.createElement(w.d,{header:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"))))))},J=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),l=Object(d.a)(o,2),s=l[0],f=l[1],E=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(d.a)(E,2),v=h[0],k=h[1],g=Object(n.useState)([{vk:void 0,balance:void 0,rub:void 0,points:void 0}]),C=Object(d.a)(g,2),j=C[0],w=C[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,f(t),e.next=6,fetch("https://likebot.ru/data?token=".concat("C4D52C8426DAC","&id=").concat(t.id));case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,k(null),w({vk:n.vk,balance:n.balance,rub:n.rub,points:n.points});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[j]);var x=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(m.a,{activePanel:a,popout:v},c.a.createElement(O,{id:"home",fetchedUser:s,properties:j,go:x}),c.a.createElement(V,{id:"shop",go:x,properties:j}),c.a.createElement(W,{id:"info",go:x}))};i.a.send("VKWebAppInit"),o.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.e5d288e8.chunk.js.map