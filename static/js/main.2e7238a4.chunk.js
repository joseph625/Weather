(this["webpackJsonpweather-project"]=this["webpackJsonpweather-project"]||[]).push([[0],{9:function(e,t,n){"use strict";n.r(t);var c=n(0),i=(n(1),n(3));var r=function(){return Object(c.jsxs)("div",{className:"result",id:"Result",children:[Object(c.jsx)("h3",{id:"city-name",children:"----"}),Object(c.jsx)("h1",{id:"weather-type",children:"----"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Temp: ",Object(c.jsx)("span",{id:"temp",children:"--"}),"\xb0"]}),Object(c.jsxs)("li",{children:["Min Temp: ",Object(c.jsx)("span",{id:"min-temp",children:"--"}),"\xb0"]}),Object(c.jsxs)("li",{children:["Max Temp: ",Object(c.jsx)("span",{id:"max-temp",children:"--"}),"\xb0"]})]})]})};var a=function(){function e(e){var t="".concat("https://api.openweathermap.org/data/2.5/weather?","q=").concat(e,"&appid=").concat("a8e71c9932b20c4ceb0aed183e6a83bb");fetch(t).then((function(e){return e.json()})).then((function(e){var t;t=e,document.getElementById("city-name").innerText=t.name,document.getElementById("weather-type").innerText=t.weather[0].main,document.getElementById("temp").innerText=t.main.temp,document.getElementById("min-temp").innerText=t.main.temp_min,document.getElementById("max-temp").innerText=t.main.temp_max})).catch((function(e){console.log(e)}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("h1",{children:"Weather"}),Object(c.jsx)("input",{id:"name-city",type:"text",placeholder:" Search the city"}),Object(c.jsx)("a",{href:"#Result",children:Object(c.jsx)("button",{href:"#Result",type:"button",onClick:function(){e(document.getElementById("name-city").value)},children:"Search"})})]}),Object(c.jsx)("div",{className:"right",children:Object(c.jsx)("img",{src:"Weatherr.gif",alt:""})})]})})};var s=function(){var e=(new Date).getFullYear();return Object(c.jsx)("div",{children:Object(c.jsxs)("footer",{children:["copyright \xa9 ",e]})})};var j=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{}),Object(c.jsx)(r,{}),Object(c.jsx)(s,{})]})};n.n(i).a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.2e7238a4.chunk.js.map