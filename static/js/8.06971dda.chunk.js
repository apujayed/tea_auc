(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[8],{101:function(e,t,c){"use strict";t.a=c.p+"static/media/message.17f316c9.mp3"},102:function(e,t,c){"use strict";t.a=c.p+"static/media/starttune.99619dc2.mp3"},118:function(e,t,c){},124:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(4),a=c(9),r=c.n(a),i=c(2),d=c.n(i),o=c(6),l=c(5),j=c(93),b=c(10),u=c(7),m=c(17),h=(c(118),c.p+"static/media/trading.c31da198.jpg"),x=c(1);var O=function(e){return e.isOpen,e.onClose,Object(x.jsx)("div",{className:"trading container d-flex justify-content-center align-items-center ",children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("img",{src:h,width:"50%",alt:"Image",className:"img-fluid"}),Object(x.jsx)("h2",{className:"mt-3",children:"Trading has not yet started!!"}),Object(x.jsx)("p",{className:"lead",children:"Please be advised that trading has not yet begun for the day. If you are attempting to place a trade, please wait until trading commences before doing so. Thank you for your patience and understanding."})]})})},f=c(101),p=c(102),v=c(18),g=c(104),y=c(136),N=(c(124),function(e){var t=function(t){27===(t.charCode||t.keyCode)&&e.onClose()};return Object(n.useEffect)((function(){return document.body.addEventListener("keydown",t),function(){document.body.removeEventListener("keydown",t)}}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(y.a,{in:e.show,unmountOnExit:!0,timeout:{enter:0,exit:300},children:Object(x.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(x.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("div",{className:"modal-header",children:Object(x.jsx)("h4",{className:"modal-title",children:e.title})}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("table",{className:"modaltable table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Lot"}),Object(x.jsx)("th",{scope:"col",children:"Factory"}),Object(x.jsx)("th",{scope:"col",children:"Price"}),Object(x.jsx)("th",{scope:"col",children:"Bidder"}),Object(x.jsx)("th",{scope:"col",children:"Status"})]})}),Object(x.jsx)("tbody",{children:e.filteredData.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("h4",{children:t+1})}),Object(x.jsx)("td",{children:Object(x.jsx)("h4",{children:e.lot})}),Object(x.jsx)("td",{children:Object(x.jsx)("h4",{children:e.factory_name})}),Object(x.jsx)("td",{children:Object(x.jsx)("h4",{children:e.maximum_bid})}),Object(x.jsx)("td",{children:Object(x.jsx)("h4",{children:e.buyer_name})}),Object(x.jsx)("td",{children:Object(x.jsx)("span",{className:1===e.sold_status?"hname":(e.sold_status,"rname"),children:1===e.sold_status?"Sold":0===e.sold_status?"Unsold":"Pending"})})]},t)}))})]})}),Object(x.jsx)("div",{className:"modal-footer",children:Object(x.jsx)("button",{onClick:e.onClose,className:"btn btn-danger",children:"Close"})})]})})})})}),I=c(111),k=c.n(I),S=c(98),_=c(44),w=function(e){var t=e.handleKeyPress,c=e.uId,n=(e.openShareBid,e.shareBid),s=(e.sl,e.index),a=(e.time,e.el),r=e.users,i=(e.formatTime,e.manualmode),d=e.selectedIndex,o=e.handleInputChange,l=e.addBid,j=e.handleInc,b=e.disabledButtons,u=e.setSelectedIndex,m=e.setManualmode;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{className:"text-center",children:[a.lot,Object(x.jsx)("br",{}),a.invoice]}),Object(x.jsx)("td",{className:"text-center",children:a.factory_name}),Object(x.jsxs)("td",{className:"text-center",children:[a.price,Object(x.jsx)("br",{}),"(".concat(a.pkgs,")")]}),Object(x.jsxs)("td",{className:"text-center",children:[0!==a.maximum_bid&&Object(x.jsxs)("div",{className:"bidd_name",children:[Object(x.jsx)("p",{className:"highest",children:a.maximum_bid}),Object(x.jsxs)("span",{className:a.buyer==r.link_id?"hname":"rname",children:["(",a.maximum_bid-a.price,")"]})]}),Object(x.jsx)("br",{})]}),Object(x.jsx)("td",{className:"text-center",children:!0===i&&d===s?Object(x.jsx)("div",{className:"mn-bid col-12",children:Object(x.jsx)("input",{className:"form-control m_bid",autoComplete:"off",type:"number",id:"name".concat(a.id),name:"name",value:a.name,onKeyPress:function(e){return t(a,e,s)},onChange:function(e){return o(e,s)}})}):0===a.maximum_bid?Object(x.jsx)("div",{className:"mn-bid col-12",children:Object(x.jsx)("input",{className:"form-control m_bid",autoComplete:"off",type:"number",id:"name".concat(a.id),name:"name",value:a.name,onChange:function(e){return o(e,s)}})}):Object(x.jsx)(x.Fragment,{})}),Object(x.jsxs)("td",{className:"text-center",children:[Number(a.pkgs)>15&&0!==a.buyer&&a.buyer!==c?Object(x.jsx)("i",{onClick:function(){return n(a.id)},className:"bi bi-share",style:{backgroundColor:"blue",color:"white",fontSize:"14px"}},a.id):null,Number(a.pkgs)>15&&0!==a.s_buyer&&a.buyer!==c&&0!==a.maximum_bid&&Object(x.jsx)("div",{className:"bidd_name",children:Object(x.jsxs)("span",{className:"sname",children:[a.s_buyer_name,"(",a.maximum_bid-a.price,")"]})})]}),Object(x.jsx)("td",{className:"text-center",children:0===a.maximum_bid?Object(x.jsx)("button",{disabled:"BIDDER"!==r.type,onClick:function(){return l(a,s)},className:"btn btn-danger square-circle",children:Object(x.jsx)(_.a,{className:"bid"})},a.id+10):Object(x.jsx)("div",{className:"col-12 ",children:Object(x.jsx)("div",{className:"bidcont mb-2 d-flex justify-content-center",children:1===a.sold_status?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("p",{className:"sold_st",children:"SOLD"})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{disabled:b.includes(s),onClick:function(){return j(a,s)},className:" btn-danger square-circle bidbtn",children:"+1"},a.id+11),Object(x.jsx)("button",{onClick:function(){!0===i&&d===s?l(a,s):(m(!0),u(s))},className:" btn-primary square-circle bidbtn",style:{fontSize:"10px"},children:Object(x.jsx)(_.a,{className:"bid"})},a.id)]})})})})]})})},C=function(e){var t=e.handleKeyPress,c=e.uId,n=e.shareBid,s=e.openShareBid,a=e.time,r=e.list,i=e.startIndex,d=e.endIndex,o=e.users,l=e.formatTime,j=e.manualmode,b=e.selectedIndex,u=e.handleInputChange,m=e.addBid,h=e.handleInc,O=e.disabledButtons,f=e.setManualmode,p=e.setSelectedIndex;return Object(x.jsx)(x.Fragment,{children:r.slice(i,d+0).map((function(e,r){return Object(x.jsx)(w,{handleKeyPress:t,uId:c,openShareBid:s,sl:i+r+1,time:a,shareBid:n,el:e,index:r,setManualmode:f,setSelectedIndex:p,users:o,formatTime:l,manualmode:j,selectedIndex:b,handleInputChange:u,addBid:m,handleInc:h,disabledButtons:O},e.id+9)}))})},E=g.a.connect("http://68.183.81.28:3009"),B=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],a="http://68.183.81.28:3009",i=Object(m.b)(),h=Object(m.c)((function(e){return e.auction})).auction_data,g=localStorage.getItem("users"),y=JSON.parse(g),I=Object(n.useState)([]),_=Object(u.a)(I,2),w=_[0],B=_[1],P=Object(n.useState)(""),F=Object(u.a)(P,2),L=(F[0],F[1]),D=Object(n.useState)(""),R=Object(u.a)(D,2),T=R[0],M=R[1],A=Object(n.useState)(""),K=Object(u.a)(A,2),z=K[0],q=K[1],U=Object(n.useState)(),J=Object(u.a)(U,2),G=J[0],V=J[1],H=Object(n.useState)([]),Q=Object(u.a)(H,2),W=Q[0],Y=Q[1],X=Object(n.useState)([]),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ce=Object(u.a)(te,2),ne=(ce[0],ce[1]),se=Object(n.useState)([]),ae=Object(u.a)(se,2),re=ae[0],ie=ae[1],de=Object(n.useState)(null),oe=Object(u.a)(de,2),le=oe[0],je=oe[1],be=Object(n.useState)(0),ue=Object(u.a)(be,2),me=ue[0],he=ue[1],xe=Object(n.useState)(1),Oe=Object(u.a)(xe,2),fe=Oe[0],pe=Oe[1],ve=Object(n.useState)(0),ge=Object(u.a)(ve,2),ye=ge[0],Ne=ge[1],Ie=Object(n.useState)(!1),ke=Object(u.a)(Ie,2),Se=(ke[0],ke[1]),_e=Object(n.useState)(!0),we=Object(u.a)(_e,2),Ce=we[0],Ee=we[1],Be=Object(n.useState)(0),Pe=Object(u.a)(Be,2),Fe=Pe[0],Le=Pe[1],De=Object(n.useState)(!1),Re=Object(u.a)(De,2),Te=Re[0],Me=Re[1],Ae=Object(n.useState)(!1),Ke=Object(u.a)(Ae,2),ze=Ke[0],qe=Ke[1],Ue=Object(n.useState)(!1),Je=Object(u.a)(Ue,2),Ge=Je[0],Ve=Je[1],He=Object(n.useState)(!1),Qe=Object(u.a)(He,2),We=Qe[0],Ye=Qe[1],Xe=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("".concat(a,"/getselectbroker")).then((function(e){E.emit("user",e.data[0].current_brokers)})).catch((function(e){console.log(e)}));case 2:i(v.c),s(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(o.a)(d.a.mark((function e(t,c){var n,s,i,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.maximum_bid,i=s+.5*s,o=null===(n=w[c])||void 0===n?void 0:n.name){e.next=7;break}return Ye(!1),e.abrupt("return");case 7:if(!(0!==s&&o<s)){e.next=10;break}return alert("Bid value should be greater than or equal to the maximum bid."),e.abrupt("return");case 10:if(!(o>i&&0!==s)){e.next=13;break}return alert("You can only bid up to 50% of the maximum bid."),e.abrupt("return");case 13:return Ve(!0),l={id:t.id,bid:o,buyer:y.link_id},e.prev=15,e.next=18,r.a.put("".concat(a,"/manualbid"),l);case 18:E.emit("user",G),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(15),console.log(e.t0);case 24:Ye(!1),Ve(!1);case 26:case"end":return e.stop()}}),e,null,[[15,21]])})));return function(t,c){return e.apply(this,arguments)}}(),$e=Object(S.debounce)((function(){r.a.get("".concat(a,"/getselectbroker")).then((function(e){0===e.data[0].auction?Ee(!0):Ee(!1)})).catch((function(e){console.error("Error fetching data:",e)}))}),300),et=function(){"visible"===document.visibilityState&&$e()},tt=Math.floor(me/1)+1,ct=function(){var e=Object(o.a)(d.a.mark((function e(t,c){var n,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie((function(e){return[].concat(Object(b.a)(e),[c])})),Ve(!0),n=new Audio(f.a),s=W.map((function(e,c){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{maximum_bid:e.maximum_bid+1,buyer:y.link_id,key:c}):Object(j.a)(Object(j.a)({},e),{},{key:c})})),i=s.filter((function(e){return e.id===t.id})),e.prev=5,e.next=8,r.a.put("".concat(a,"/updateauction"),i);case 8:E.emit("user",G),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:return e.prev=14,Y(s),n.play(),ne(!1),Ve(!1),ie((function(e){return e.filter((function(e){return e!==c}))})),e.finish(14);case 21:case"end":return e.stop()}}),e,null,[[5,11,14,21]])})));return function(t,c){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=function(e){Ne(e)},t=function(e){he(e)},c=function(e){pe(e)};return jt(),E.on("newMessage",(function(e){lt(e)})),E.on("activeUsers",e),E.on("startIndex",t),E.on("endIndex",c),E.emit("getObjects"),function(){E.off("activeUsers",e),E.off("startIndex",t),E.off("endIndex",c),E.off("newMessage")}}),[]);var nt=function(){var e=Object(o.a)(d.a.mark((function e(){var t,c,n,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("".concat(a,"/getselectbroker"));case 3:t=e.sent,c=t.data[0],n=c.auction,s=c.current_brokers,i=c.name,o=c.id,Ee(0===n),M(i),q(o),V(s),E.emit("user",s),E.on("user_toggle",(function(e){Se(e===y.link_id)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E.on("startIn",(function(e){he(e)})),E.on("endIn",(function(e){pe(e)}));var e=function(){document.hidden||E.emit("getEndIndex")};document.addEventListener("visibilitychange",e);var t=setInterval((function(){E.emit("getEndIndex")}),5e3);return function(){document.removeEventListener("visibilitychange",e),clearInterval(t)}}),[]),Object(n.useEffect)((function(){var e=!0;qe(!0),setTimeout((function(){qe(!1)}),1e3);var t=function(){Me(!0)},c=function(){Me(!1)},n=function(e){0===e&&new Audio(p.a).play();Le(e)};return E.on("start",t),E.on("stop",c),E.on("time",n),nt(),E.on("users",(function(t){if(e){t.filter((function(e){return 0===e.sold_status}));Y(t),ee(t)}})),E.on("updateIndexes",(function(e){var t=e.startIndex,c=e.endIndex;console.log("Received updated indexes:",t,c),he(t),pe(c)})),E.on("checkname",(function(t){e&&M(t)})),E.on("visibility",(function(e){Ee(e)})),E.on("startIn",(function(e){he(e)})),E.on("endIn",(function(e){pe(e)})),function(){e=!1,E.off("visibility"),E.off("updateIndexes"),E.off("start",t),E.off("stop",c),E.off("time",n),E.off("users"),E.off("checkname"),E.off("user_toggle")}}),[E]),Object(n.useEffect)((function(){var e=function(){Me(!0)},t=function(){Me(!1)},c=function(e){Le(e)};return E.on("updateIndexes",(function(e){var t=e.startIndex,c=e.endIndex;console.log("Received updated indexes:",t,c),he(t),pe(c)})),E.on("start",e),E.on("stop",t),E.on("time",c),document.addEventListener("visibilitychange",et),function(){!1,document.removeEventListener("visibilitychange",et),E.off("start",e),E.off("stop",t),E.off("time",c),E.off("updateIndexes")}}),[]),Object(n.useEffect)((function(){var e;if(Te){var t=Object(S.throttle)((function(){E.emit("tick")}),1e3);e=setInterval(t,1e3)}else clearInterval(e);return function(){return clearInterval(e)}}),[Te]);var st=function(e){var t=Math.floor(e/60).toString().padStart(2,"0"),c=(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(c)},at=$.filter((function(e){return e.buyer===y.link_id})),rt=$.filter((function(e){return e.brokers===z&&0!=e.buyer})),it=Object(n.useState)([]),dt=Object(u.a)(it,2),ot=dt[0],lt=dt[1],jt=function(){r.a.get("".concat(a,"/messages/latest")).then((function(e){lt(e.data)})).catch((function(e){return console.log(e)}))};return Object(x.jsxs)(x.Fragment,{children:[Ge?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"overlay",children:Object(x.jsxs)("div",{className:"spinner-container",children:[Object(x.jsx)("div",{className:"spinner"}),Object(x.jsx)("span",{children:"Verifying data..."})]})})}):"",ze&&""!==y.type?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(k.a,{type:"spin",color:"#007bff",height:50,width:50}),Object(x.jsx)("div",{style:{marginTop:"20px",fontSize:"16px",fontWeight:"bold"},children:"Verifying Data..."})]})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{title:"My Lot",onClose:function(){return s(!1)},show:c,filteredData:"BROKERS"===y.type?rt:at}),Object(x.jsxs)("div",{className:"section-head sec-h",children:[Object(x.jsxs)("p",{className:"br-n",children:["=",T,"="]}),Object(x.jsxs)("div",{className:"row newc",children:[Object(x.jsxs)("div",{className:"col-7 col-md-9 card-btn leftCard",children:[Object(x.jsxs)("h2",{children:["Auction Date:"," ",0===h.length?"":h[0].date," "]}),Object(x.jsxs)("p",{children:["SALE NO - #",0===h.length?"":h[0].sale_no," "]}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("p",{children:["PARTICIPATE - #",ye-1," "]}),"Season - #",0===h.length?"":h[0].season," "]}),Object(x.jsxs)("p",{children:["CURRENT BROKER :"," ",Object(x.jsx)("span",{className:"c_brokers",children:T})," "]}),Object(x.jsx)("div",{className:" row margin-left",children:Object(x.jsx)("button",{type:"button",onClick:Xe,className:"col-5 buttonGroup btn btn-success my-btn",children:"My Lot"})})]}),Object(x.jsx)("div",{className:"col-5 col-md-3 align-items-center justify-content-center mt-5 rCard",children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"row rightCard",children:Object(x.jsxs)("div",{className:" ",children:[Object(x.jsx)("div",{className:"col-md-12 count-t",children:Object(x.jsx)("h2",{className:"text-center mh2",children:st(Fe)})}),Object(x.jsx)("div",{className:"col-md-12 name-t",children:Object(x.jsx)("h2",{className:"mh2 text-center",children:y.short_name})})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"col-md-12 name-t mh3",children:Object(x.jsxs)("h4",{className:" text-center",children:["Total : ",W.length," Lot"]})}),Object(x.jsx)("div",{className:"col-md-12 name-t mh3",children:Object(x.jsxs)("h4",{className:" text-center",children:["Current Page : ",tt]})})]})]})})})]})]}),Object(x.jsx)("div",{className:"card p-3",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6 col-md-3 d-flex justify-content-start align-items-center"}),Object(x.jsxs)("div",{className:"col-6 col-md-9 d-flex justify-content-end",style:{paddingRight:"20px"},children:[Object(x.jsx)("span",{style:{backgroundColor:"black",color:"white",padding:"5px",fontSize:"12px"},children:"Last Message"}),Object(x.jsx)("span",{style:{backgroundColor:"white",color:"black",padding:"5px",fontSize:"12px"},children:ot.message}),Object(x.jsx)("span",{style:{backgroundColor:"#6f6fc4",color:"white",padding:"5px",fontSize:"12px"},children:ot.u_id})]})]})}),Ce&&"BIDDER"===y.type?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h2",{className:"text-center  p-h",children:["-=",y.type," PANEL=-"]}),Object(x.jsx)(O,{})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h2",{className:"text-center p-h",children:["-=",y.type," PANEL=-"]}),Object(x.jsxs)("div",{className:"table-container con",children:[Object(x.jsx)("div",{className:"row g-1 bid-table",children:Object(x.jsxs)("table",{id:"auction",className:"table table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsxs)("th",{scope:"col",children:["Lot ",Object(x.jsx)("br",{}),"Invoice"]}),Object(x.jsxs)("th",{scope:"col",children:["Factory",Object(x.jsx)("br",{}),"Grade"]}),Object(x.jsxs)("th",{scope:"col",children:["Price",Object(x.jsx)("br",{}),"Qty"]}),Object(x.jsxs)("th",{scope:"col",children:["Highest",Object(x.jsx)("br",{})," Buyer"]}),Object(x.jsx)("th",{scope:"col",children:"Bid"}),Object(x.jsx)("th",{scope:"col",children:"Share"}),Object(x.jsx)("th",{scope:"col",children:"Action"})]})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(C,{handleKeyPress:function(e,t,c){"Enter"===t.key&&Ze(e,c)},uId:y.link_id,openShareBid:function(e){var t={id:e,u_id:y.id};r.a.post("".concat(a,"/enableshareauction"),t).then((function(e){E.emit("user",G),console.log(e.data)})).catch((function(e){console.error(e)}))},shareBid:function(e){var t={id:e,u_id:y.id};console.log(t.id),r.a.post("".concat(a,"/updateshareauction"),t).then((function(e){E.emit("user",G),console.log(e.data)})).catch((function(e){console.error(e)}))},time:Fe,list:W,startIndex:me,endIndex:fe,users:y,formatTime:st,manualmode:We,selectedIndex:le,handleInputChange:function(e,t){var c=e.target,n=c.name,s=c.value;B((function(e){var c=Object(b.a)(e);return c[t]=Object(j.a)(Object(j.a)({},c[t]),{},Object(l.a)({},n,s)),c})),L(t)},addBid:Ze,handleInc:ct,disabledButtons:re,setManualmode:Ye,setSelectedIndex:je})})]})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("div",{className:"row",children:W.slice(me-1,fe-1+0).map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"col-12 col-md-12",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsx)("div",{className:0===e.sold_status?"rem-card-x":"rem-card-y",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-8",children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("p",{className:"rem-text",children:[e.factory_name," (",e.lot,")"]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("p",{className:"rem-text",children:[e.buyer_name,"(",e.maximum_bid-e.price,")"]})})]}),Object(x.jsx)("div",{className:"col-4 d-flex align-items-center justify-content-center ".concat(0===e.sold_status?"btcls":"btctik"),children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-12 ",children:Object(x.jsx)("i",{className:0===e.sold_status?"bi bi-x-circle ":"bi bi-check2-circle"})})})})]})})})})})}))})})]})]})]})]})};t.default=function(){var e=Object(s.n)();return Object(n.useEffect)((function(){var t=sessionStorage.getItem("token");e(t?"/bidders":"/")}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("section",{className:"content-header"}),Object(x.jsx)("section",{className:"content",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-xs-12",children:Object(x.jsx)(B,{})})})})]})}},93:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(5);function s(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?s(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}}}]);
//# sourceMappingURL=8.06971dda.chunk.js.map