!function(e){function t(t){for(var o,r,s=t[0],l=t[1],d=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);m.length;)m.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={0:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([131,1]),n()}({131:function(e,t,n){n(132),e.exports=n(342)},319:function(e,t,n){var o=n(125);e.exports=(o.default||o).template({1:function(e,t,n,o,i){return'        <div class="base-container">\n            <div class="filters-inner">\n                <input class="filter filter-search" type="text" placeholder="Title / Content">\n                <select class="filter" name="status" id="status">\n                    <option class="filter-option" value="open">Open</option>\n                    <option class="filter-option" value="done">Done</option>\n                </select>\n                <select class="filter" name="urgency" id="urgency">\n                    <option value disabled selected>Select importance</option>\n                    <option value="high">High</option>\n                    <option value="normal">Normal</option>\n                    <option value="low">Low</option>\n                </select>\n                <button class="reset-filters" id="resetFilters">Reset</button>\n            </div>\n        </div>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,i){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(a=r(n,"if").call(null!=t?t:e.nullContext||{},null!=t?r(t,"userToken"):t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:18,column:7}}}))?a:""},useData:!0})},335:function(e,t,n){var o=n(125);e.exports=(o.default||o).template({1:function(e,t,n,o,i){return'        <div class="base-container">\n            <div class="header-inner">\n                <a href="#" class="logo"><span>la</span> Hospital</a>\n                <button class="btn btn-secondary add-visit" id="addVisitButton" style="display: block;">Add a visit</button>\n                <button class="login" id="logInButton">Log out</button>\n            </div>\n        </div>\n'},3:function(e,t,n,o,i){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"    "+e.escapeExpression("function"==typeof(a=null!=(a=r(n,"header")||(null!=t?r(t,"header"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"header",hash:{},data:i,loc:{start:{line:10,column:4},end:{line:10,column:14}}}):a)+"\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,i){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(a=r(n,"if").call(null!=t?t:e.nullContext||{},null!=t?r(t,"userToken"):t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.program(3,i,0),data:i,loc:{start:{line:1,column:0},end:{line:11,column:7}}}))?a:""},useData:!0})},336:function(e,t){document.querySelector(".visits-inner").addEventListener("click",(function(e){if(5===e.path[0].id.length&&Number(e.path[0].id)>0){var t=e.path[0].id;console.log(t);var n=document.getElementById(t);n.onmousedown=function(e){var t,o={top:(t=n.getBoundingClientRect()).top+pageYOffset,left:t.left+pageXOffset},i=e.pageX-o.left,a=e.pageY-o.top;function r(e){n.style.left=e.pageX-i+"px",n.style.top=e.pageY-a+"px"}n.style.position="absolute",document.body.appendChild(n),r(e),n.style.zIndex=1e3,document.onmousemove=function(e){r(e)},n.onmouseup=function(){document.onmousemove=null,n.onmouseup=null}},n.ondragstart=function(){return!1}}}))},338:function(e,t){},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);n(123),document.querySelector(".login"),document.querySelector(".sign-up");var o=document.querySelector(".visits-inner"),i=(document.querySelector(".filter-search"),document.getElementById("status"),document.getElementById("urgency"),document.getElementById("resetFilters"),document.getElementById("loginButton"),document.getElementById("signUpButton"),document.querySelector(".modal-button"),document.querySelector(".modal-header"),document.querySelector(".add-visit"),document.querySelector(".add-visit-modal"),document.querySelector(".info-text")),a=(sessionStorage.getItem("token"),"https://xtended.studio"),r=n(124),s="";function l(e,t){return fetch("".concat(a,"/auth/login"),{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();r.error("Incorrect email or password, please try again.")})).then((function(e){sessionStorage.setItem("token",e.token),"Success"===e.status?console.log("User authenticated"):(alert("Incorrect data!"),console.log("Incorrect data!"));var t=e.userId.email.split("@")[0];t=t[0].toUpperCase()+t.slice(1),r.success("Welcome on board, ".concat(t))}))}function d(e){var t;e?"dentist"===(t=e)?(s=new R).render():"cardiologist"===t?(s=new A).render():(s=new H).render():"dentist"===(t=document.getElementById("doctor").value)?((s=new R).delete(),s.render()):"cardiologist"===t?((s=new A).delete(),s.render()):((s=new H).delete(),s.render())}function c(e){e?p(u(e)):p(u())}function u(e){if(!e){var t=document.querySelector(".modal").value;return"dentist"===t?{doctor:document.querySelector(".modal").value,status:"open",name:document.getElementById("modalName").value,surname:document.getElementById("modalSurname").value,reason:document.getElementById("modalReason").value,description:document.getElementById("modalDescription").value,importance:document.getElementById("modalImportance").value,dateOfLastVisit:document.getElementById("dateOfLastVisit").value}:"cardiologist"===t?{doctor:document.querySelector(".modal").value,status:"open",name:document.getElementById("modalName").value,surname:document.getElementById("modalSurname").value,reason:document.getElementById("modalReason").value,description:document.getElementById("modalDescription").value,importance:document.getElementById("modalImportance").value,age:document.getElementById("age").value,normalPressure:document.getElementById("normalPressure").value,bodyMassIndex:document.getElementById("bodyMassIndex").value,cardioDisease:document.getElementById("cardioDisease").value}:{doctor:document.querySelector(".modal").value,status:"open",name:document.getElementById("modalName").value,surname:document.getElementById("modalSurname").value,reason:document.getElementById("modalReason").value,description:document.getElementById("modalDescription").value,importance:document.getElementById("modalImportance").value,age:document.getElementById("age").value}}var n=e.doctor;"dentist"===n?(document.querySelector(".visit-status").value=e.status,document.getElementById("modalName").value=e.name,document.getElementById("modalSurname").value=e.surname,document.getElementById("modalReason").value=e.reason,document.getElementById("modalDescription").value=e.description,document.getElementById("modalImportance").selected=e.importance,document.getElementById("dateOfLastVisit").value=e.dateOfLastVisit):"cardiologist"===n?(document.querySelector(".visit-status").value=e.status,document.getElementById("modalName").value=e.name,document.getElementById("modalSurname").value=e.surname,document.getElementById("modalReason").value=e.reason,document.getElementById("modalDescription").value=e.description,document.getElementById("modalImportance").selected=e.importance,document.getElementById("age").value=e.age,document.getElementById("normalPressure").value=e.normalPressure,document.getElementById("bodyMassIndex").value=e.bodyMassIndex,document.getElementById("cardioDisease").value=e.cardioDisease):(document.querySelector(".visit-status").value=e.status,document.getElementById("modalName").value=e.name,document.getElementById("modalSurname").value=e.surname,document.getElementById("modalReason").value=e.reason,document.getElementById("modalDescription").value=e.description,document.getElementById("modalImportance").selected=e.importance,document.getElementById("age").value=e.age)}function m(e){"open"===e.status?(document.getElementById(e.id).firstChild.firstChild.innerText="open",document.getElementById(e.id).firstChild.firstChild.style.color="red"):"done"===e.status?(document.getElementById(e.id).firstChild.firstChild.innerText="done",document.getElementById(e.id).firstChild.firstChild.style.color="green",document.getElementById(e.id).lastChild.firstChild.style.display="none",document.getElementById(e.id).lastChild.lastChild.style.display="none"):alert("Your card doesn't have a status!")}function p(e){var t,n,o=document.getElementById("status"),i=document.getElementById("urgency"),r=document.querySelector(".filter-search");(t=e,n={token:sessionStorage.getItem("token"),card:t},fetch("".concat(a,"/cards/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).then((function(e){return e.json()})).then((function(e){h(e[e.length-1].visit)})),(s=new V).delete(),y(".info-block","open"),o.value="open",i.value="",r.value=""}function h(e){var t=e.id,n=e.doctor,o=e.name,i=e.surname,a=e.reason,r=e.description,s=e.importance,l=e.age,d=e.dateOfLastVisit,c=e.normalPressure,u=e.bodyMassIndex,p=e.cardioDisease;"dentist"===n?(new j(t,n,o,i,a,r,s,d).render(),m(e)):"cardiologist"===n?(new q(t,n,o,i,a,r,s,l,c,u,p).render(),m(e)):"therapist"===n?(new M(t,n,o,i,a,r,s,l).render(),m(e)):alert("Unfortunatelly, we don't have such a doctor.")}function f(e){var t,n=[];e.forEach((function(e){("flex"===(t=getComputedStyle(e.parentNode)).display||"block"===t.display)&&n.push(e)})),0===n.length&&(i.style.display="block",o.style.display="block")}function y(e,t,n,o){v("1","pointer"),b();var i=document.querySelectorAll(e),a=[];[t,n,o].forEach((function(e){""!==e&&void 0!==e&&a.push(e)})),1===a.length?g(i,a[0]):2===a.length?g(i,a[0],a[1]):3===a.length&&g(i,a[0],a[1],a[2]),f(i)}function g(e,t,n,o){if(t&&n&&o)for(var i=0;i<e.length;i++)e[i].innerText.includes(t)&&e[i].innerText.includes(n)&&e[i].innerText.includes(o)?e[i].parentNode.style.display="flex":e[i].parentNode.style.display="none";else if(t&&n)for(var a=0;a<e.length;a++)e[a].innerText.includes(t)&&e[a].innerText.includes(n)?e[a].parentNode.style.display="flex":e[a].parentNode.style.display="none";else for(var r=0;r<e.length;r++)e[r].innerText.includes(t)?e[r].parentNode.style.display="flex":e[r].parentNode.style.display="none"}function v(e,t){var n=document.getElementById("resetFilters");n.style.opacity=e,n.style.cursor=t}sessionStorage.getItem("token")?fetch("".concat(a,"/cards/show"),{method:"GET",headers:{Authorization:"".concat(sessionStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){e.length>0&&e.forEach((function(e){h(e.visit)})),y(".info-block","open"),v("0","")})):console.log("No token available");var b=function(){i.style.display="none",o.style.display="grid"};function E(e){return fetch("".concat(a,"/cards/remove/").concat(e),{method:"DELETE",headers:{Authorization:"".concat(sessionStorage.getItem("token"))}})}function B(e){return fetch("".concat(a,"/cards/show/").concat(e),{method:"GET",headers:{Authorization:"".concat(sessionStorage.getItem("token"))}})}function F(e){var t=e.target,n=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,o=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.webkitTransform=t.style.transform="translate("+n+"px, "+o+"px)",t.setAttribute("data-x",n),t.setAttribute("data-y",o)}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var i=w(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),e}window.dragMoveListener=F;var P,D=function(){function e(t,n,o,i,a,r,s){N(this,e),this.container=document.querySelector(".visit-inner"),this.doctorField=document.createElement("h3"),this.status=document.createElement("h2"),this.cardBlock=document.createElement("ul"),this.nameField=document.createElement("li"),this.surnameField=document.createElement("li"),this.reasonField=document.createElement("li"),this.descriptionField=document.createElement("li"),this.importantField=document.createElement("li"),this.buttonBlock=document.createElement("div"),this.closedButton=document.createElement("button"),this.deleteButton=document.createElement("button"),this.editButton=document.createElement("button"),this.status.className="visit-status",this.buttonBlock.className="button-block",this.closedButton.className="btn btn-success close-button",this.deleteButton.className="btn btn-danger delete-button",this.editButton.className="btn btn-primary edit-button",this.closedButton.innerHTML="Done",this.deleteButton.innerHTML="Delete",this.editButton.innerHTML="Edit",this.elements={id:t,doctor:n,name:o,surname:i,reason:a,description:r,importance:s}}return L(e,[{key:"render",value:function(){var e=this.elements,t=e.id,n=e.doctor,o=e.name,i=e.surname,a=e.reason,r=e.description,s=e.importance;b(),this.parent=document.querySelector(".visits-inner"),this.block=document.createElement("div"),this.block.className="visits-block",this.block.id=t,this.block.dataset.drag="drop",this.block.status="open",this.status.innerHTML=this.block.status,this.status.style.textAlign="center",this.status.style.color="red",this.infoBlock=document.createElement("div"),this.infoBlock.className="info-block",this.doctorField.textContent="Visit to ".concat(n),this.nameField.textContent="Name - ".concat(o),this.surnameField.textContent="Surname - ".concat(i),this.reasonField.textContent="Reason - ".concat(a),this.descriptionField.textContent="Description - ".concat(r),this.importantField.textContent="Importance - ".concat(s),this.buttonBlock.append(this.editButton,this.deleteButton,this.closedButton),this.infoBlock.append(this.status,this.doctorField,this.cardBlock),this.cardBlock.append(this.nameField,this.surnameField,this.reasonField,this.descriptionField,this.importantField),this.block.append(this.infoBlock,this.buttonBlock),this.parent.append(this.block)}},{key:"alreadyDone",value:function(){this.closedButton.style.display="none",this.massage=document.createElement("span"),this.massage.textContent="Already Done",this.buttonBlock.append(this.massage)}}]),e}(),q=function(e){S(n,e);var t=k(n);function n(e,o,i,a,r,s,l,d,c,u,m){var p;return N(this,n),(p=t.call(this,e,o,i,a,r,s,l)).ageField=document.createElement("li"),p.normalPressureField=document.createElement("li"),p.bodyMassIndexField=document.createElement("li"),p.cardioDiseaseField=document.createElement("li"),p.elements.age=d,p.elements.normalPressure=c,p.elements.bodyMassIndex=u,p.elements.cardioDisease=m,p}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this);var e=this.elements,t=e.age,o=e.normalPressure,i=e.bodyMassIndex,a=e.cardioDisease;this.ageField.textContent="Age - ".concat(t),this.normalPressureField.textContent="Normal pressure - ".concat(o),this.bodyMassIndexField.textContent="Body Mass Index - ".concat(i),this.cardioDiseaseField.textContent="Cardio Disease - ".concat(a),this.cardBlock.append(this.ageField,this.normalPressureField,this.bodyMassIndexField,this.cardioDiseaseField)}}]),n}(D),j=function(e){S(n,e);var t=k(n);function n(e,o,i,a,r,s,l,d){var c;return N(this,n),(c=t.call(this,e,o,i,a,r,s,l)).dateOfLastVisitField=document.createElement("li"),c.elements.dateOfLastVisit=d,c}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this);var e=this.elements.dateOfLastVisit;this.dateOfLastVisitField.textContent="Last visit at ".concat(e),this.cardBlock.append(this.dateOfLastVisitField)}}]),n}(D),M=function(e){S(n,e);var t=k(n);function n(e,o,i,a,r,s,l,d){var c;return N(this,n),(c=t.call(this,e,o,i,a,r,s,l)).ageField=document.createElement("li"),c.elements.age=d,c}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this);var e=this.elements.age;this.ageField.textContent="Age - ".concat(e),this.cardBlock.append(this.ageField)}}]),n}(D),V=function(){function e(){N(this,e),this.container=document.getElementById("modalWindow"),this.header=document.createElement("h3"),this.form=document.createElement("form"),this.nameField=document.createElement("input"),this.surnameField=document.createElement("input"),this.reasonField=document.createElement("input"),this.descriptionField=document.createElement("input"),this.importanceParagraph=document.createElement("p"),this.importanceSelect=document.createElement("select"),this.importanceOptionHigh=document.createElement("option"),this.importanceOptionNormal=document.createElement("option"),this.importanceOptionLow=document.createElement("option"),this.button=document.createElement("button"),this.header.className="modal-header",this.form.className="modal",this.form.action="#",this.form.method="post",this.form.style.textAlign="center",this.nameField.className="input-modal",this.nameField.type="text",this.nameField.name="name",this.nameField.id="modalName",this.nameField.placeholder="Client's name*",this.surnameField.className="input-modal",this.surnameField.type="text",this.surnameField.name="surname",this.surnameField.id="modalSurname",this.surnameField.placeholder="Client's surname*",this.reasonField.className="input-modal",this.reasonField.type="text",this.reasonField.name="reason",this.reasonField.id="modalReason",this.reasonField.placeholder="Purpose of the visit",this.descriptionField.className="input-modal",this.descriptionField.type="text",this.descriptionField.name="description",this.descriptionField.id="modalDescription",this.descriptionField.placeholder="Short description",this.importanceParagraph.className="inpit-modal",this.importanceParagraph.textContent="The importance of the visit",this.importanceSelect.className="inpit-modal",this.importanceSelect.name="importance",this.importanceSelect.id="modalImportance",this.importanceOptionHigh.value="high",this.importanceOptionNormal.value="normal",this.importanceOptionLow.value="low",this.importanceOptionHigh.textContent="High",this.importanceOptionNormal.textContent="Normal",this.importanceOptionLow.textContent="Low",this.importanceOptionNormal.selected=!0,this.button.className="submit",this.button.id="renderCardButton",this.button.textContent="Create Card"}return L(e,[{key:"render",value:function(){this.container.style.display="flex",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.importanceSelect.append(this.importanceOptionHigh,this.importanceOptionNormal,this.importanceOptionLow),this.form.append(this.header,this.nameField,this.surnameField),this.container.append(this.form)}},{key:"delete",value:function(){document.querySelector("form").remove(),this.container.style.display="none"}}]),e}(),R=function(e){S(n,e);var t=k(n);function n(){var e;return N(this,n),(e=t.call(this)).dateOfLastVisitField=document.createElement("input"),e.dateOfLastVisitField.className="input-modal dentist-card",e.dateOfLastVisitField.type="date",e.dateOfLastVisitField.name="date",e.dateOfLastVisitField.id="dateOfLastVisit",e.form.value="dentist",e}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this),this.header.textContent="Create a Dentist Card",this.form.append(this.reasonField,this.descriptionField,this.importanceParagraph,this.importanceSelect,this.dateOfLastVisitField,this.button)}}]),n}(V),A=function(e){S(n,e);var t=k(n);function n(){var e;return N(this,n),(e=t.call(this)).ageField=document.createElement("input"),e.pressureField=document.createElement("input"),e.bmiField=document.createElement("input"),e.cardioField=document.createElement("input"),e.form.value="cardiologist",e.ageField.className="input-modal cardiologist-card",e.ageField.type="text",e.ageField.name="age",e.ageField.id="age",e.ageField.placeholder="Client's age*",e.pressureField.className="input-modal cardiologist-card",e.pressureField.type="text",e.pressureField.name="pressure",e.pressureField.id="normalPressure",e.pressureField.placeholder="Normal pressure*",e.bmiField.className="input-modal cardiologist-card",e.bmiField.type="text",e.bmiField.name="bmi",e.bmiField.id="bodyMassIndex",e.bmiField.placeholder="Body mass index*",e.cardioField.className="input-modal cardiologist-card",e.cardioField.type="text",e.cardioField.name="desease",e.cardioField.id="cardioDisease",e.cardioField.placeholder="Cardiovascular diseases*",e}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this),this.header.textContent="Create a Cardiologost Card",this.form.append(this.ageField,this.reasonField,this.descriptionField,this.importanceParagraph,this.importanceSelect,this.pressureField,this.bmiField,this.cardioField,this.button)}}]),n}(V),H=function(e){S(n,e);var t=k(n);function n(){var e;return N(this,n),(e=t.call(this)).ageField=document.createElement("input"),e.form.value="therapist",e.ageField.className="input-modal cardiologist-card",e.ageField.type="text",e.ageField.name="age",e.ageField.id="age",e.ageField.placeholder="Client's age*",e}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this),this.header.textContent="Create a Therapist Card",this.form.append(this.ageField,this.reasonField,this.descriptionField,this.importanceParagraph,this.importanceSelect,this.button)}}]),n}(V),_=function(){function e(){N(this,e),this.container=document.getElementById("modalWindow"),this.container.style.display="block",this.form=document.createElement("form"),this.email=document.createElement("input"),this.password=document.createElement("input"),this.button=document.createElement("button"),this.form.className="modal",this.form.action="#",this.form.method="post",this.email.className="input-field",this.email.type="email",this.email.id="emailField",this.email.placeholder="Enter your email..*",this.password.className="input-field",this.password.type="password",this.password.id="passwordField",this.password.placeholder="Enter your password..*",this.button.className="submit",this.button.id="loginButton"}return L(e,[{key:"render",value:function(){this.container.style.display="flex",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.form.append(this.email,this.password,this.button),this.container.append(this.form)}},{key:"delete",value:function(){document.querySelector("form").remove(),this.container.style.display="none"}}]),e}(),U=function(e){S(n,e);var t=k(n);function n(){var e;return N(this,n),(e=t.call(this)).button.textContent="Log In",e}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this)}}]),n}(_),J=function(e){S(n,e);var t=k(n);function n(){var e;return N(this,n),(e=t.call(this)).button.textContent="Sign Up",e}return L(n,[{key:"render",value:function(){x(w(n.prototype),"render",this).call(this)}}]),n}(_),z=function(){function e(){N(this,e),this.container=document.getElementById("modalWindow"),this.form=document.createElement("form"),this.doctorSelect=document.createElement("select"),this.doctorOptionCardiologist=document.createElement("option"),this.doctorOptionDentist=document.createElement("option"),this.doctorOptionTherapist=document.createElement("option"),this.button=document.createElement("button"),this.form.className="modal",this.form.action="#",this.form.method="post",this.button.className="submit modal-button",this.button.type="submit",this.button.id="doctorVisit",this.doctorSelect.className="modal-field",this.doctorSelect.name="doctor",this.doctorSelect.id="doctor",this.doctorOptionCardiologist.value="cardiologist",this.doctorOptionDentist.value="dentist",this.doctorOptionTherapist.value="therapist",this.doctorOptionCardiologist.textContent="Cardiologist",this.doctorOptionDentist.textContent="Dentist",this.doctorOptionTherapist.textContent="Therapist",this.doctorOptionDentist.selected=!0,this.doctorOptionCardiologist.id="doctorCardiologist",this.doctorOptionDentist.id="doctorDentist",this.doctorOptionTherapist.id="doctorTherapist",this.button.className="submit",this.button.id="createCardButton",this.button.textContent="Create Card"}return L(e,[{key:"render",value:function(){this.container.style.display="flex",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.doctorSelect.append(this.doctorOptionDentist,this.doctorOptionCardiologist,this.doctorOptionTherapist),this.form.append(this.doctorSelect,this.button),this.container.append(this.form)}},{key:"delete",value:function(){document.querySelector("form").remove(),this.container.style.display="none"}}]),e}(),W=(n(336),n(337)),Y=n(124);!function(){var e=n(319),t=n(335),o=sessionStorage.getItem("token");if(o=!!o){var i=document.createElement("section");i.className="filters",i.innerHTML=e({userToken:o}),document.querySelector(".visits").prepend(i);var a=document.createElement("header");a.className="header",a.innerHTML=t({userToken:o}),document.body.prepend(a)}else{var r=document.createElement("h2");r.className="info-text";r.innerHTML=e({info:"Please login"}),document.body.appendChild(r);var s=document.createElement("header");s.className="header",s.innerHTML='\n        <div class="container">\n            <div class="header-inner">\n                <a href="#" class="logo"><span>la</span> Hospital</a>\n                <button class="add-visit" id="addVisitButton">Add a visit</button>\n                <button class="sign-up" id="signUpButton">Sign Up</button>\n                <button class="login" id="logInButton">Log in</button>\n            </div>\n        </div>',document.querySelector(".info-text").textContent="You are not logged in.",document.body.prepend(s)}}();var X=document.getElementById("resetFilters"),G=document.querySelector(".filter-search"),K=document.getElementById("status"),Q=document.getElementById("urgency");document.querySelector(".header-inner").addEventListener("click",(function(e){var t=document.querySelector(".login");"logInButton"===e.target.id?"Log in"===t.textContent?(P=new U).render():(Y.success("Bye-bye, have a nice one!"),sessionStorage.removeItem("token"),setTimeout((function(){window.location.reload()}),1300)):"signUpButton"===e.target.id?(P=new J).render():"addVisitButton"===e.target.id&&(P=new z).render()})),document.getElementById("modalWindow").addEventListener("click",(function(e){e.preventDefault();var t,n,o,i=document.getElementById("emailField"),r=document.getElementById("passwordField");if("loginButton"===e.target.id||"passwordField"===e.target.id||"emailField"===e.target.id)"Log In"===e.target.textContent?(l(i.value,r.value),(P=new _).delete(),void 0!==sessionStorage.getItem("token")&&setTimeout((function(){window.location.reload()}),1500)):"Sign Up"===e.target.textContent&&(n=i.value,o=r.value,fetch("".concat(a,"/auth/register"),{method:"POST",body:JSON.stringify({email:n,password:o}),headers:{"Content-Type":"application/json"}})).then((function(e){return e.json()})).then((function(e){"fail"===e.status?(Y.warning("Such user is already registered, please log in."),P.delete()):"noemail"===e.status||"nopassword"===e.status?Y.warning("Please enter correct data."):(Y.success("User has been registered, please log in to your account."),(P=new _).delete())}));else if("doctorVisit"===e.target.id||"doctor"===e.target.id||"createCardButton"===e.target.id)"createCardButton"===e.target.id&&d();else if("input-modal"===e.target.className||"renderCardButton"===e.target.id)"renderCardButton"===e.target.id&&c(),t=".input-field",document.querySelectorAll(t).forEach((function(e){e.value=""}));else if("editCardButton"===e.target.id){var s=document.querySelector(".modal").id.slice(0,-2),m=(u(),document.getElementById(s.toString()));c(),m.remove(),E(s)}else"modal"!==e.target.className&&"modal-header"!==e.target.className&&"inpit-modal"!==e.target.className&&"input-modal cardiologist-card"!==e.target.className&&"input-modal dentist-card"!==e.target.className&&(P=new _).delete()})),sessionStorage.getItem("token")&&(X.addEventListener("click",(function(){K.value="open",Q.value="",G.value="",y(".info-block","open"),v("0","")})),G.oninput=function(){y(".info-block",Q.value,G.value,K.value)},K.addEventListener("change",(function(){return y(".info-block",Q.value,G.value,K.value)})),Q.addEventListener("change",(function(){return y(".info-block",Q.value,G.value,K.value)})),G.addEventListener("change",(function(){return y(".info-block",Q.value,G.value,K.value)}))),document.querySelector(".visits-inner").addEventListener("click",(function(e){e.preventDefault(),W(".visits-block").draggable({inertia:!0,modifiers:[W.modifiers.restrictRect({restriction:"parent",endOnly:!0})],autoScroll:!0,listeners:{move:F}});var t=e.path[2],n=t.id;"Done"===e.target.innerText?(t.style.display="none",B(n).then((function(e){return e.json()})).then((function(e){var t;e.status="done",m(e),t=e,fetch("".concat(a,"/cards/edit/").concat(t.id),{method:"PUT",headers:{Authorization:"".concat(sessionStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(t)})}))):"Edit"===e.target.innerText?B(n).then((function(e){return e.json()})).then((function(e){var t,n;d(e.doctor),u(e),n=(t=e).doctor,document.querySelector(".modal-header").innerHTML="Edit a ".concat(n," Card"),document.getElementById("renderCardButton").innerText="Edit",document.getElementById("renderCardButton").id="editCardButton",document.querySelector(".modal").id="".concat(t.id,"id")})):"Delete"===e.target.innerText&&(t.remove(),E(n),f(document.querySelectorAll(".info-block")))}));n(338),n(339),n(340),n(341)}});