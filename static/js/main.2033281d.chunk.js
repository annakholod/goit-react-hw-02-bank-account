(window["webpackJsonpgoit-react-hw-02-bank-account"]=window["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{15:function(t,e,a){},2:function(t,e,a){t.exports={controls:"Controls_controls__3rKI_",controlsOverlay:"Controls_controlsOverlay__XroL-",controlsInput:"Controls_controlsInput__2VT4O",controlsBtn:"Controls_controlsBtn__3vona"}},21:function(t,e,a){t.exports=a(40)},26:function(t,e,a){},4:function(t,e,a){t.exports={history:"TransactionHistory_history__1Ay12",tableHeader:"TransactionHistory_tableHeader__2fc_n",tableRow:"TransactionHistory_tableRow__3fp1C",tBodyRow:"TransactionHistory_tBodyRow__253MV TransactionHistory_tableRow__3fp1C"}},40:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(3),l=a.n(o),c=(a(26),a(18)),u=a(11),i=a(12),s=a(19),m=a(13),d=a(20),p=a(14),b=a.n(p),h=a(8),w=(a(35),a(15)),_=a.n(w),f=a(2),y=a.n(f),E=function(t){var e=t.handleChangeInput,a=t.handleSubmit,n=t.inputValue;return r.a.createElement("section",{className:y.a.controls},r.a.createElement("div",{className:y.a.controlsOverlay},r.a.createElement("input",{className:y.a.controlsInput,type:"number",value:n,onChange:e}),r.a.createElement("button",{className:y.a.controlsBtn,type:"button",name:"deposit",onClick:a},"Deposit"),r.a.createElement("button",{className:y.a.controlsBtn,type:"button",name:"withdraw",onClick:a},"Withdraw")))},N=a(7),S=a.n(N),v=function(t){var e=t.balance,a=t.deposit,n=t.withdraw,o=e.toLocaleString("ru-RU"),l=a.toLocaleString("ru-RU"),c=n.toLocaleString("ru-RU");return r.a.createElement("section",{className:S.a.balance},a?r.a.createElement("p",{className:S.a.deposit},r.a.createElement("span",null,"\u2b06 "),l,"$"):null,n?r.a.createElement("p",{className:S.a.withdraw},r.a.createElement("span",null,"\u2b07 "),c,"$"):null,r.a.createElement("span",null,"Balance: ",o,"$"))},g=a(4),B=a.n(g),C=function(t){var e=t.transactions;return r.a.createElement("table",{className:B.a.history},r.a.createElement("thead",{className:B.a.tableHeader},r.a.createElement("tr",{className:B.a.tableRow},r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{className:B.a.tableRow,key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))},O=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0,inputValue:"",deposit:0,withdraw:0},a.handleChangeInput=function(t){var e=t.target;a.setState({inputValue:e.value})},a.handleSubmit=function(t){var e=a.state,n=e.balance,r=e.inputValue,o=t.target.name;t.preventDefault();var l=0;0===Number(r)?a.notifyNotSum():"deposit"===o?(l=n+Number(r),a.handleSubmitSetState(l,o,r)):"withdraw"===o&&(Number(r)>n?a.notifyNoMoney():(l=n-Number(r),a.handleSubmitSetState(l,o,r)))},a.notifyNoMoney=function(){return Object(h.b)("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a.notifyNotSum=function(){return Object(h.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a.handleSubmitSetState=function(t,e,n){a.setState((function(a){return{balance:t,inputValue:"",transactions:[].concat(Object(c.a)(a.transactions),[{id:b.a.generate(),type:e,amount:n,date:(new Date).toLocaleString("en-GB")}])}}),a.changeBalance)},a.changeBalance=function(){var t=a.state.transactions,e=t.reduce((function(t,e){return"deposit"===e.type?t+Number(e.amount):t}),0),n=t.reduce((function(t,e){return"withdraw"===e.type?t+Number(e.amount):t}),0);a.setState({deposit:e,withdraw:n})},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.balance,n=t.inputValue,o=t.deposit,l=t.withdraw;return r.a.createElement("div",{className:_.a.dashboard},r.a.createElement(E,{inputValue:n,handleChangeInput:this.handleChangeInput,handleSubmit:this.handleSubmit}),r.a.createElement(v,{balance:a,deposit:o,withdraw:l}),r.a.createElement(C,{transactions:e}),r.a.createElement(h.a,null))}}]),e}(n.Component),R=function(){return r.a.createElement(O,null)};l.a.render(r.a.createElement(R,null),document.getElementById("root"))},7:function(t,e,a){t.exports={balance:"Balance_balance__1acOZ",deposit:"Balance_deposit___27xi",withdraw:"Balance_withdraw__2WwjM"}}},[[21,1,2]]]);
//# sourceMappingURL=main.2033281d.chunk.js.map