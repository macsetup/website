(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(n,e,t){},255:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=t(13),l=t(10),u=t(15),s=t(14),p="LOAD_CATEGORIES",d="TOGGLE_ITEM_SELECTION",h="LOAD_SCRIPT",m='#!/usr/bin/env bash\n\necho "\u270b MaxItUp is a tool to create a setup script for newly formatted Mac devices."\n\necho "\ud83d\ude09 Just start selecting items from the left pane and watch how the script is updating!"\n\necho "\ud83d\udcbb Move to your download directory and use your terminal to run the script and install selected apps and packages by running \'sh setup.sh\'"\n\necho "\ud83d\udc4b Visit https://max-itup.github.io/mac/ for more details"',b="".concat(m,"\n{{MAIN}}\n"),f='\necho "\ud83d\ude80 Starting setup"\n\n# Install Homebrew if not already installed\nif test ! $(which brew); then\n    echo "\ud83c\udf7a Installing homebrew..."\n    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\nfi\n\necho "\ud83c\udf7a Updating homebrew..."\nbrew update\n{{PACKAGES}}{{CASKS}}{{GEMS}}\necho "\ud83e\uddfc Cleaning up..."\nbrew cleanup -s\n{{SHELL_SCRIPTS}}\n{{OS_SETTINGS}}\necho "\ud83c\udf89 Setup complete!"';function g(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";return n&&n.length?n.reduce(function(n,t){return n[t[e]]=t,n},{}):{}}function v(n){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.keys(n).map(function(e){return n[e]})}var x=Object(i.b)({data:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=e.categories,r=void 0===t?[]:t,a=e.item;r=g(r);var o=0;switch(e.type){case p:return Object(s.a)({},r);case d:o=a.is_selected?-1:1;var c=n[a.category].selected_count+o;return Object(s.a)({},n,Object(u.a)({},a.category,Object(s.a)({},n[a.category],{selected_count:c,children:Object(s.a)({},n[a.category].children,Object(u.a)({},a.id,Object(s.a)({},n[a.category].children[a.id],{is_selected:!a.is_selected})))})));default:return n}},script:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,t=e.script;switch(e.type){case h:return t;default:return n}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(21),k=(t(50),t(51),t(1)),w=t(2),O=t(4),j=t(3),E=t(5);var C=t(26),S=t(6),_=t(9),I=t(7),A=t(27),M=t.n(A);function T(){var n=Object(S.a)(["\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    user-select: none;\n    pointer-events : none;\n    background-color: #FE4654;\n    padding: 3px 8px;\n    font-size: 10px;\n    border-radius: 10px;\n"]);return T=function(){return n},n}var D=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"generateButton",value:function(){var n=this.props,e=n.category,t=n.onMouseUp,r="category-".concat(e.id),o=e.selected_count,c=void 0===o?0:o,i=null;c>0&&(i=a.a.createElement(U,null,c));var l="https://raw.githubusercontent.com/max-itup/content/master/mac/assets/categories/".concat(e.id,".svg?sanitize=true"),u={backgroundImage:"url(".concat(l,")")},s="".concat(e.name," (").concat(e.count,")");return[a.a.createElement("button",{key:"button",id:r,title:e.name,onMouseUp:t,style:u,"data-tip":s},i),a.a.createElement(M.a,{key:"tooltip",place:"right",type:"dark",effect:"solid"})]}},{key:"render",value:function(){return this.generateButton()}}]),e}(r.Component),U=I.a.span(T()),z=D,F=t(30),G=t.n(F);function L(){var n=Object(S.a)(["\n  width: 70px;\n  background-color: #323440;\n  display: block;\n  overflow-y: auto;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 12px;\n  height: calc(100% - 32px);\n\n  ::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; /* make scrollbar transparent */\n  }\n\n  > button {\n    position: relative;\n    font-size: 22px;\n    margin-bottom: 14px;\n    width: 46px;\n    height: 46px;\n    background-color: #252831;\n    color: white;\n    border: 0;\n    border-radius: 5px;\n\n    :hover {\n      background-color: black;\n    }\n\n    :focus {\n        outline: 0;\n    }\n\n  }\n"]);return L=function(){return n},n}var N=function(n){function e(n){var t;return Object(k.a)(this,e),t=Object(O.a)(this,Object(j.a)(e).call(this,n)),G.a.polyfill(),t.handleClick=t.handleClick.bind(Object(_.a)(t)),t}return Object(E.a)(e,n),Object(w.a)(e,[{key:"handleClick",value:function(n){var e=n.target.id.replace("category-","");document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"})}},{key:"render",value:function(){var n=this,e=this.props.categories;return a.a.createElement(B,null,e.map(function(e){return a.a.createElement(z,{key:e.id,category:e,onMouseUp:n.handleClick})}))}}]),e}(r.Component),B=I.a.div(L()),P=N,R=t(39),K=t(31),V=t.n(K);function $(){var n=Object(S.a)(["\n  margin-top: -30px;\n  margin-right: -30px;\n  margin-left: auto;\n"]);return $=function(){return n},n}function H(){var n=Object(S.a)(["\npadding: 10px;\nheight: 365px;\nflex: 0 0 225px;\nmax-width: 225px;\ncolor: white;\n\ndiv {\n  background-color: #323440;\n  padding: 20px;\n  height: 100%;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  box-shadow:inset 0 0 0 100em rgba(50,50,60,0.9);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border: 2px solid #252831;\n  user-select: none;\n  transition: 0.5s;\n\n  :hover {\n    background-color: #4D4F5C;\n    box-shadow:inset 0 0 0 100em rgba(50,50,60,0.45);\n    p, h1 {\n      text-shadow: 1px 1px 10px #252831;\n    }\n  }\n\n}\n\nh1 {\n  line-height: 0.85;\n  margin-bottom: 15px;\n  letter-spacing: 0;\n}\n\na {\n  font-size: 24px;\n  color: white;\n\n  :hover {\n    color: #D19A66;\n  }\n}\n\np {\n  font-size: 13px;\n  overflow-y: hidden;\n}\n\ncode {\n  margin-top: auto;\n  color: white;\n  user-select: text;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n}\n"]);return H=function(){return n},n}var X=function(n){function e(n){var t;return Object(k.a)(this,e),(t=Object(O.a)(this,Object(j.a)(e).call(this,n))).handleClick=t.handleClick.bind(Object(_.a)(t)),t}return Object(E.a)(e,n),Object(w.a)(e,[{key:"handleClick",value:function(){var n=this.props,e=n.item,t=n.data;this.props.toggleItemSelection({item:e});var r=function(n){var e=v(n).sort(function(n,e){return n.order-e.order}),t=[];return e.forEach(function(n){var e=n.children;(e=v(e)).forEach(function(n){n.is_selected&&t.push(n)})}),t}(t);-1===r.indexOf(e)?r.push(e):r=r.filter(function(n){return n!==e});var a=function(n){if(0===n.length)return"";var e=[],t=[],r=[],a=[],o=[];n.forEach(function(n){"cask"===n.type?e.push(n):"brew"===n.type?t.push(n):"gem"===n.type?r.push(n):"os_settings"===n.category?a.push(n):"shell_scripts"===n.category&&o.push(n)});var c=f;return c=(c=(c=(c=(c=c.replace("{{CASKS}}",function(n){if(0===n.length)return"";var e=n.map(function(n){return n.code}).join("\n    ");return"\nCASKS=(\n    ".concat(e,'\n)\necho "\ud83c\udf7a Installing cask apps..."\nbrew cask install ${CASKS[@]}\n')}(e))).replace("{{PACKAGES}}",function(n){if(0===n.length)return"";var e=n.map(function(n){return n.code}).join("\n    ");return"\nPACKAGES=(\n    ".concat(e,'\n)\necho "\ud83c\udf7a Installing brew packages..."\nbrew install ${PACKAGES[@]}\n')}(t))).replace("{{GEMS}}",function(n){if(0===n.length)return"";var e=n.map(function(n){return n.code}).join("\n    ");return"\nGEMS=(\n    ".concat(e,'\n)\necho "\ud83d\udc8e Installing Ruby gems..."\nsudo gem install ${GEMS[@]} -N\n')}(r))).replace("{{OS_SETTINGS}}",function(n){if(0===n.length)return"";var e=n.map(function(n){return"".concat(n.type," ").concat(n.code)}).join("\n");return'\necho "\ud83d\udee0 Configuring System..."\n'.concat(e,'\necho "\u26a0\ufe0f Some changes aren\'t applied until you log out and back in."\n')}(a))).replace("{{SHELL_SCRIPTS}}",function(n){if(0===n.length)return"";var e=n.map(function(n){return n.code}).join(" && \\\n");return'\necho "\ud83d\udcbb Running Scripts..."\n'.concat(e,"\n")}(o))}(r);this.props.loadScript(a)}},{key:"render",value:function(){var n=this.props.item,e=n.is_selected,t=void 0!==e&&e,r="https://raw.githubusercontent.com/max-itup/content/master/mac/assets/items/".concat(n.id,".png"),o={backgroundImage:"url(".concat(r,")")};o.border=t?"2px solid white":null;var c=t?{}:{display:"none"};return[a.a.createElement(J,{key:n.id},a.a.createElement("div",{style:o,onMouseUp:this.handleClick},a.a.createElement(W,{src:V.a,alt:"checkmark",style:c}),a.a.createElement("h1",null,a.a.createElement("a",{href:n.download_url,target:"_blanck"},n.name)),a.a.createElement("p",null,n.description),a.a.createElement("code",null,n.type," ",a.a.createElement("strong",null,n.code))))]}}]),e}(r.Component),J=I.a.div(H()),W=I.a.img($());var q=Object(l.b)(function(n){return n},function(n){return{toggleItemSelection:function(e){return n(function(n){var e=n.item;return{type:d,item:e}}(e))},loadScript:function(e){return n(function(n){return{type:h,script:n}}(e))}}})(X);function Q(){var n=Object(S.a)(["\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    display: flex;\n    flex-flow: wrap;\n"]);return Q=function(){return n},n}function Y(){var n=Object(S.a)(["\n  background-color: #252831;\n  padding: 20px;\n\n  > h1 {\n    padding: 40px 20px 10px 10px;\n    color: #A1F366;\n    font-size: 30px;\n    user-select: none;\n  }\n\n"]);return Y=function(){return n},n}var Z=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){var n=this.props.category,e=Object.entries(n.children).map(function(n){var e=Object(R.a)(n,2);e[0];return e[1]});return e.sort(function(n,e){return n.id<e.id?-1:n.id>e.id?1:0}),a.a.createElement(nn,{id:n.id},a.a.createElement("h1",null,n.name," (",n.count,")"),a.a.createElement(en,null,e.map(function(n){return a.a.createElement(q,{key:n.id,item:n})})))}}]),e}(r.Component),nn=I.a.div(Y()),en=I.a.div(Q()),tn=Z,rn=(t(65),t(32)),an=t.n(rn),on=t(33),cn=t.n(on);function ln(){var n=Object(S.a)(["\n    padding: 25px;\n    background: #252831;\n    color: white;\n    height: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n\n    > h1 {\n        font-size: 14pt;\n        line-height: 1.5;\n        width: 330px;\n    }\n\n    > p {\n        width: 470px;\n        text-align: justify;\n        font-family: Arial;\n        font-size: 10pt;\n        font-weight: normal;\n        color: #bbb;\n        padding: 13px 70px;\n        code {\n            user-select: text;\n        }\n    }\n\n    > button {\n        animation-duration: 5s;\n        background: #252831;\n        border: none;\n        :focus {\n            outline: 0;\n        }\n    }\n"]);return ln=function(){return n},n}var un=function(n){function e(n){var t;return Object(k.a)(this,e),(t=Object(O.a)(this,Object(j.a)(e).call(this,n))).handleClick=t.handleClick.bind(Object(_.a)(t)),t}return Object(E.a)(e,n),Object(w.a)(e,[{key:"handleClick",value:function(){document.getElementById("header").nextSibling.scrollIntoView({block:"start",behavior:"smooth"})}},{key:"render",value:function(){return a.a.createElement(sn,{id:"header"},a.a.createElement("img",{src:an.a,alt:"MaxItUp!"}),a.a.createElement("h1",null,"MaxItUp is a Mac setup tool to create",a.a.createElement("br",null),"a setup script for newly formatted Mac devices."),a.a.createElement("p",null,"Start selecting items and watch how the script is updating! Move to your download directory and use your terminal to run the script and install selected apps and packages by running ",a.a.createElement("code",null,"sh setup.sh")),a.a.createElement("button",{className:"animated infinite flash",onMouseUp:this.handleClick},a.a.createElement("img",{src:cn.a,alt:"scroll down"})))}}]),e}(r.Component),sn=I.a.div(ln()),pn=un;function dn(){var n=Object(S.a)(["\n  background-color: #252831;\n  flex: 2.15;\n  overflow: scroll;\n  height: calc(100% - 32px);\n  overflow-x: hidden;\n"]);return dn=function(){return n},n}var hn=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){var n=this.props.data;return a.a.createElement(mn,null,a.a.createElement(pn,null),n.map(function(n){return a.a.createElement(tn,{key:n.id,category:n})}))}}]),e}(r.Component),mn=I.a.div(dn()),bn=hn,fn=t(34),gn=t.n(fn);t(254);function vn(){var n=Object(S.a)(["\n  flex: 1;\n  margin: 0;\n  padding: 20px 20px 120px 20px !important;\n  background-color: #323440;\n  color: white;\n  overflow-y: scroll;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  font-size: 12px;\n  height: calc(100% - 32px);\n  max-width: 500px;\n  font-family: 'Source Code Pro', monospace;\n"]);return vn=function(){return n},n}var xn=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){var n=this.props.script,e=void 0===n?"":n;return e=b.replace("{{MAIN}}",e),a.a.createElement(yn,{className:"bash"},e)}}]),e}(r.Component),yn=Object(I.a)(gn.a)(vn()),kn=xn,wn=t(35),On=t.n(wn);function jn(){var n=Object(S.a)(["\n  margin: auto;\n"]);return jn=function(){return n},n}var En=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){return a.a.createElement(Cn,{type:"spin",color:"#5A9CD4"})}}]),e}(r.Component),Cn=Object(I.a)(On.a)(jn()),Sn=En;function _n(){var n=Object(S.a)(["\n  margin: auto;\n  background-color: #323440;\n  color: white;\n  padding: 50px;\n  text-align: center;\n  border-radius: 8px;\n\n  > h1 {\n    padding-top: 10px;\n    color: #DD6B74;\n    font-size: 60px;\n    user-select: none;\n  }\n"]);return _n=function(){return n},n}var In=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){var n=this.props,e=n.title,t=void 0===e?"Oops!":e,r=n.error,o=void 0===r?"Unknown Error":r;return a.a.createElement(An,null,a.a.createElement("h1",null,t),a.a.createElement("p",null,o))}}]),e}(r.Component),An=I.a.div(_n()),Mn=In,Tn=t(36),Dn=t.n(Tn);function Un(){var n=Object(S.a)(["\n  margin: auto;\n  background-color: #323440;\n  color: white;\n  padding: 30px;\n  text-align: center;\n  border-radius: 8px;\n  max-width: 80%;\n\n  > img {\n      width: calc(100% - 60px);\n      max-width: 300px;\n      height: auto;\n      margin: 0 30px 10px 30px;\n  }\n\n  > h1 {\n    color: #A1F366;\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n\n  > p {\n    font-size: 12px;\n    margin-bottom: 30px;\n  }\n\n  > a {\n      padding: 10px 20px;\n      background: #252831;\n      color: white;\n      border-radius: 5px;\n      text-decoration: none;\n  }\n\n"]);return Un=function(){return n},n}var zn=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){return a.a.createElement(Fn,null,a.a.createElement("img",{src:Dn.a,alt:"MaxItUp!"}),a.a.createElement("h1",null,"The new way to setup your newly formatted Mac."),a.a.createElement("p",null,"This website is designed to work on desktop devices only. Please visit us back from your desktop"),a.a.createElement("a",{href:"https://github.com/max-itup",target:"_blank",rel:"noopener noreferrer"},"View on Github"))}}]),e}(r.Component),Fn=I.a.div(Un()),Gn=zn,Ln=t(37),Nn=t.n(Ln);function Bn(){var n=Object(S.a)(["\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 60px;\n  right: 30px;\n  background-color: #F8C105;\n  border: 0;\n  border-radius: 50px;\n  background-position: center;\n\n  :hover {\n    background-color: #F5A623;\n  }\n\n  :disabled {\n    background-color: #F8C105;\n    opacity: 0.5;\n  }\n\n  :focus {\n      outline: 0;\n  }\n\n"]);return Bn=function(){return n},n}var Pn=function(n){function e(n){var t;return Object(k.a)(this,e),(t=Object(O.a)(this,Object(j.a)(e).call(this,n))).handleClick=t.handleClick.bind(Object(_.a)(t)),t}return Object(E.a)(e,n),Object(w.a)(e,[{key:"handleClick",value:function(){var n=this.props.script;n=m+n;var e=document.createElement("a"),t=new Blob([n],{type:"application/x-sh"});e.href=URL.createObjectURL(t),e.download="setup.sh",e.click()}},{key:"render",value:function(){var n=this.props.script,e=""===(void 0===n?"":n);return a.a.createElement(Rn,{title:"Download setup script",style:{backgroundImage:"url(".concat(Nn.a,")")},onClick:this.handleClick,disabled:e})}}]),e}(r.Component);var Rn=I.a.button(Bn()),Kn=Object(l.b)(function(n){return n},null)(Pn),Vn=t(38);function $n(){var n=Object(S.a)(["\n  background-color: #20252C;\n  color: #abb2bf;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  position: fixed;\n  bottom: 0;\n  font-size: 14px;\n  font-family: 'Source Code Pro', monospace;\n\n  > p {\n      margin: 0 2px ;\n      padding: 0 12px;\n      line-height: 32px;\n  }\n\n  a {\n      color: #F5A623;\n      :hover {\n        color: #F8C105;\n        text-decoration: none;\n      }\n  }\n\n  .github {\n    color: #BB95F2;\n    :hover {\n        color: #DCC4FF;\n    }\n  }\n\n  .twitter {\n    color: #38A1F3;\n    :hover {\n        color: #9ED5FF;\n    }\n  }\n  \n"]);return $n=function(){return n},n}var Hn=function(n){function e(){return Object(k.a)(this,e),Object(O.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(w.a)(e,[{key:"render",value:function(){var n="https://twitter.com/home?status=".concat("Check out MaxItUp, the new way to set up your newly formatted Mac! by @omaralbeik","%0A").concat("https://max-itup.github.io/mac/");return a.a.createElement(Xn,null,a.a.createElement("p",null,"An Open Source Project Built by ",a.a.createElement("a",{href:"https://omaralbeik.com",target:"_blank",rel:"noopener noreferrer"},"Omar Albeik"),"."),a.a.createElement("p",{style:{marginLeft:"auto"}},Vn.version),a.a.createElement("p",null,"Share via ",a.a.createElement("a",{className:"twitter",href:n,target:"_blank",rel:"noopener noreferrer"}," Twitter")),a.a.createElement("p",null,"Fork me on ",a.a.createElement("a",{className:"github",href:"https://github.com/max-itup",target:"_blank",rel:"noopener noreferrer"},"Github")))}}]),e}(r.Component),Xn=I.a.div($n()),Jn=Hn,Wn=function(n){function e(n){var t;return Object(k.a)(this,e),(t=Object(O.a)(this,Object(j.a)(e).call(this,n))).state={is_loading:!0,error:null},t.fetchData(),t}return Object(E.a)(e,n),Object(w.a)(e,[{key:"loadData",value:function(n){var e=n.categories,t=n.items;e.forEach(function(n){n.count=0,n.selected_count=0,n.children={}}),e=g(e),t.forEach(function(n){n.is_selected=!1,e[n.category].count+=1,e[n.category].children[n.id]=n}),e=v(e),this.props.loadCategories(e),this.setState({is_loading:!1})}},{key:"fetchData",value:function(){var n=this;fetch("https://raw.githubusercontent.com/max-itup/content/master/mac/data.json").then(function(n){return n.json()}).then(function(e){n.loadData(e)}).catch(function(e){n.setState({error:e})})}},{key:"render",value:function(){if(C.isMobile)return a.a.createElement(Gn,null);var n=this.state,e=n.is_loading,t=n.error;if(t)return a.a.createElement(Mn,{error:t.toString()});if(e)return a.a.createElement(Sn,null);var r=this.props.store,o=r.data,c=r.script;return o=v(o).sort(function(n,e){return n.order-e.order}),[a.a.createElement(P,{key:"categories",categories:o}),a.a.createElement(bn,{key:"contents",data:o}),a.a.createElement(kn,{key:"script",script:c}),a.a.createElement(Kn,{key:"download"}),a.a.createElement(Jn,{key:"footer"})]}}]),e}(r.Component);var qn=Object(l.b)(function(n){return{store:n}},function(n){return{loadCategories:function(e){return n(function(n){return{type:p,categories:n}}(e))}}})(Wn),Qn=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Yn=Object(i.c)(x,Qn);y.a.initialize("UA-133306128-1"),y.a.pageview(window.location.pathname+window.location.search),c.a.render(a.a.createElement(l.a,{store:Yn},a.a.createElement(qn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},31:function(n,e,t){n.exports=t.p+"static/media/checkmark.09ff307a.svg"},32:function(n,e,t){n.exports=t.p+"static/media/header_logo.e1afafb0.svg"},33:function(n,e,t){n.exports=t.p+"static/media/scroll_down.f41fa70b.svg"},36:function(n,e,t){n.exports=t.p+"static/media/mobile_logo.091a5a07.svg"},37:function(n,e,t){n.exports=t.p+"static/media/download.9ba15c41.svg"},38:function(n){n.exports={name:"max-it-up",homepage:"https://max-itup.github.io/mac",version:"0.4.6",private:!0,bugs:{url:"https://github.com/max-itup/mac/issues",email:"omaralbeik@gmail.com"},license:"MIT",author:{name:"Omar Albeik",email:"omaralbeik@gmail.com",url:"https://omaralbeik.com/"},dependencies:{"animate.css":"^3.7.0",bootstrap:"^4.3.1","gh-pages":"^2.0.1","normalize.css":"^8.0.1",react:"^16.8.6","react-device-detect":"^1.6.2","react-dom":"^16.8.6","react-ga":"^2.5.7","react-highlight":"^0.12.0","react-loading":"^2.0.3","react-redux":"^7.0.3","react-router-dom":"^5.0.0","react-scripts":"^3.0.1","react-tooltip":"^3.10.0",redux:"^4.0.1","smoothscroll-polyfill":"^0.4.4","styled-components":"^4.2.0"},scripts:{predeploy:"npm run build",deploy:"gh-pages -d build",start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},41:function(n,e,t){n.exports=t(255)},51:function(n,e,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.acb31db3.chunk.js.map