(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},24:function(e){e.exports=JSON.parse('[{"title":"Snake","stack":["HTML Canvas","CSS"],"description":"The iconic video game. Eat the fruit to make the snake grow.","img":"images/bg-project.jpg"},{"title":"2020 Motorcycles","stack":["NodeJS","Express","MongoDB"],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veritatis!","img":"images/bg-project.jpg"},{"title":"Ollie","stack":["ReactJS","NodeJS","Express","MongoDB"],"description":"Social network for skateboarder, allowing to connect with other people, create events and learn new tricks.","img":"images/bg-project.jpg"},{"title":"Ollie","stack":["ReactJS","NodeJS","Express","MongoDB"],"description":"Social network for skateboarder, allowing to connect with other people, create events and learn new tricks.","img":"images/bg-project.jpg"},{"title":"Ollie","stack":["ReactJS","NodeJS","Express","MongoDB"],"description":"Social network for skateboarder, allowing to connect with other people, create events and learn new tricks.","img":"images/bg-project.jpg"},{"title":"Ollie","stack":["ReactJS","NodeJS","Express","MongoDB"],"description":"Social network for skateboarder, allowing to connect with other people, create events and learn new tricks.","img":"images/bg-project.jpg"}]')},30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=(a(35),a(2)),i=a(9),s=a(15),m=a(12);i.b.add(s.b,s.a,m.a,m.c,m.b);a(14);var u=a(7);function p(){return l.a.createElement("nav",{className:"navbar flex full-width space-b"},l.a.createElement("div",{className:"brand"},l.a.createElement(u.b,{to:"/"},l.a.createElement("p",{className:"brand-name"},"Paul Dickerson"))),l.a.createElement("div",{className:"links flex space-b"},l.a.createElement(u.b,{to:"/"},"Home"),l.a.createElement(u.b,{to:"/about"},"\xc0 propos")))}function f(){return l.a.createElement("footer",{className:"footer flex full-width"},l.a.createElement("p",null,"\xa9 2020 Paul Dickerson"))}a(20);function h(e){var t=e.text;return l.a.createElement("button",{className:"btn",onClick:function(){window.scrollTo({top:1e4,behavior:"smooth"})}},t)}a(21);function E(){return l.a.createElement("section",{className:"greetings-section flex-col space-b"},l.a.createElement("div",{className:"greetings flex-col"},l.a.createElement("h1",null,l.a.createElement("span",{className:"hello"},"Bienvenue!",l.a.createElement("span",null," "),l.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b"))),l.a.createElement("h2",{className:"bold"},"Paul Dickerson",l.a.createElement("br",null),"D\xe9veloppeur full-stack Javascript"),l.a.createElement(h,{text:"Contact"})))}var g=a(24);function d(e){var t=e.project;return l.a.createElement("div",{className:"project-item flex-col"},l.a.createElement("img",{src:t.img,alt:"Projet",className:"img"}),l.a.createElement("div",{className:"card-bottom flex-col space-b full-height"},l.a.createElement("h3",{className:"title"},t.title),l.a.createElement("p",{className:"description"},t.description),l.a.createElement("p",{className:"stack"},t.stack.map((function(e,a){return a!==t.stack.length-1?"".concat(e," | "):"".concat(e)})))))}function b(){return l.a.createElement("section",{className:"project-section flex-col full-width"},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"grid-container full-width"},g.map((function(e,t){return l.a.createElement(d,{project:e,key:t,index:t})}))))}var v=a(25),k=a(26),w=a(27),N=a(29),x=a(28);function j(e){var t=e.text;return l.a.createElement("button",{className:"btn",type:"submit"},t)}var S={name:"",email:"",tel:"",message:""},C=function(e){Object(N.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state=S,e.handleChange=function(t){console.log(t.target.name,t.target.value),e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.setState(S,(function(){return console.log(e.state)}))},e}return Object(w.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"contact-form flex-col",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"name"},"Nom"),l.a.createElement("input",{type:"text",name:"name",id:"name",autoComplete:"off",required:!0,value:this.state.name,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",id:"email",autoComplete:"off",required:!0,value:this.state.email,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"tel"},"T\xe9l\xe9phone"),l.a.createElement("input",{type:"tel",name:"tel",id:"tel",autoComplete:"off",value:this.state.tel,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"5",required:!0,value:this.state.message,onChange:this.handleChange}),l.a.createElement(j,{text:"Envoyer"}))}}]),a}(n.Component),J=a(10);function y(){return l.a.createElement("div",{className:"contact-informations flex-col space-b"},l.a.createElement("div",{className:"info mail"},l.a.createElement("h3",null,"Vous n'aimez pas les formulaires?"),l.a.createElement("p",null,"N'h\xe9sitez pas \xe0 me contacter par email"),l.a.createElement("a",{href:"mailto:pauldkn.code@gmail.com",className:"link"},l.a.createElement(J.a,{icon:"envelope",size:"2x"}))),l.a.createElement("div",{className:"info networks"},l.a.createElement("h3",null,"Vous n'aimez pas les mails?"),l.a.createElement("p",null,"Voici mes r\xe9seaux sociaux"),l.a.createElement("div",{className:"all-networks flex"},l.a.createElement("a",{href:"https://www.linkedin.com/in/paul-dickerson/",target:"blank",rel:"noopener noreferrer"},l.a.createElement(J.a,{icon:["fab","linkedin"],size:"2x"})),l.a.createElement("a",{href:"https://github.com/pauldkn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(J.a,{icon:["fab","github"],size:"2x"})))),l.a.createElement("div",{className:"info resume"},l.a.createElement("h3",null,"Vous \xeates difficile."),l.a.createElement("p",null,"Voici mon CV"),l.a.createElement("a",{href:"/"},l.a.createElement(J.a,{icon:"file-alt",size:"2x"}))))}function D(){return l.a.createElement("section",{className:"contact-section flex-col"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"contact-options flex space-b"},l.a.createElement(C,null),l.a.createElement(y,null)))}function O(){return l.a.createElement("div",{className:"home-page flex-col space-b full-width"},l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(D,null))}function B(){return l.a.createElement("div",{className:"about-page flex-col space-b"},l.a.createElement("h1",null,"Hello about page!"))}var M=function(){return l.a.createElement("div",{className:"App flex-col space-b"},l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:O}),l.a.createElement(o.a,{path:"/about",component:B})),l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(u.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a93ddb2c.chunk.js.map