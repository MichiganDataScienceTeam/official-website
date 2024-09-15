"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{6243:function(e,t,n){var r,l,i=n(7294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let o=["children","options"],c=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},u=["style","script"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,p=/\n{2,}$/,f=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,A=/^ *> ?/gm,h=/^ {2,}\n/,g=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,k=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,S=/^(?:\n *)*\n/,j=/\r\n?/g,v=/^\[\^([^\]]+)](:.*)\n/,b=/^\[\^([^\]]+)]/,C=/\f/g,E=/^\s*?\[(x|\s)\]/,I=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,R=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,N=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,O=/&([a-zA-Z]+);/g,Z=/^<!--[\s\S]*?(?:-->)/,w=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,U=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,H=/^\{.*\}$/,J=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,X=/^<([^ >]+@[^ >]+)>/,F=/^<([^ >]+:\/[^ >]+)>/,q=/-([a-z])?/gi,B=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,V=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Q=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,M=/^\[([^\]]*)\] ?\[([^\]]*)\]/,T=/(\[|\])/g,z=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,D=/\t/g,P=/^ *\| */,W=/(^ *\||\| *$)/g,L=/ *$/,G=/^ *:-+: *$/,K=/^ *:-+ *$/,Y=/^ *-+: *$/,$=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,_=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ee=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,et=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,en=/^\\([^0-9A-Za-z\s])/,er=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,el=/^\n+/,ei=/^([ \t]*)/,ea=/\\([^\\])/g,eo=/ *\n+$/,ec=/(?:^|\n)( *)$/,es="(?:\\d+\\.)",eu="(?:[*+-])";function ed(e){return"( *)("+(1===e?es:eu)+") +"}let em=ed(1),ep=ed(2);function ef(e){return RegExp("^"+(1===e?em:ep))}let eA=ef(1),eh=ef(2);function eg(e){return RegExp("^"+(1===e?em:ep)+"[^\\n]*(?:\\n(?!\\1"+(1===e?es:eu)+" )[^\\n]*)*(\\n|$)","gm")}let ex=eg(1),ek=eg(2);function ey(e){let t=1===e?es:eu;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let eS=ey(1),ej=ey(2);function ev(e,t){let n=1===t,r=n?eS:ej,i=n?ex:ek,a=n?eA:eh;return{t(e,t,n){let l=ec.exec(n);return l&&(t.o||!t._&&!t.u)?r.exec(e=l[1]+e):null},i:l.HIGH,l(e,t,r){let l=n?+e[2]:void 0,o=e[0].replace(p,"\n").match(i),c=!1;return{p:o.map(function(e,n){let l;let i=a.exec(e)[0].length,s=RegExp("^ {1,"+i+"}","gm"),u=e.replace(s,"").replace(a,""),d=n===o.length-1,m=-1!==u.indexOf("\n\n")||d&&c;c=m;let p=r._,f=r.o;r.o=!0,m?(r._=!1,l=u.replace(eo,"\n\n")):(r._=!0,l=u.replace(eo,""));let A=t(l,r);return r._=p,r.o=f,A}),m:n,g:l}},h:(t,n,r)=>e(t.m?"ol":"ul",{key:r.k,start:t.g},t.p.map(function(t,l){return e("li",{key:l},n(t,r))}))}}let eb=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eC=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eE=[f,x,k,I,R,Z,B,ex,eS,ek,ej],eI=[...eE,/^[^\n]+(?:  \n|\n{2,})/,N,U];function eR(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eN(e){return Y.test(e)?"right":G.test(e)?"center":K.test(e)?"left":null}function eO(e,t,n){let r=n.v;n.v=!0;let l=t(e.trim(),n);n.v=r;let i=[[]];return l.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==l.length-1&&i.push([]):("text"!==e.type||null!=l[t+1]&&"tableSeparator"!==l[t+1].type||(e.$=e.$.replace(L,"")),i[i.length-1].push(e))}),i}function eZ(e,t,n){n._=!0;let r=eO(e[1],t,n),l=e[2].replace(W,"").split("|").map(eN),i=e[3].trim().split("\n").map(function(e){return eO(e,t,n)});return n._=!1,{S:l,A:i,L:r,type:"table"}}function ew(e,t){return null==e.S[t]?{}:{textAlign:e.S[t]}}function eU(e){return function(t,n){return n._?e.exec(t):null}}function eH(e){return function(t,n){return n._||n.u?e.exec(t):null}}function eJ(e){return function(t,n){return n._||n.u?null:e.exec(t)}}function eX(e){return function(t){return e.exec(t)}}function eF(e,t,n){if(t._||t.u||n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every(e=>!eE.some(t=>t.test(e))&&(r+=e+"\n",e.trim()));let l=r.trimEnd();return""==l?null:[r,l]}function eq(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function eB(e){return e.replace(ea,"$1")}function eV(e,t,n){let r=n._||!1,l=n.u||!1;n._=!0,n.u=!0;let i=e(t,n);return n._=r,n.u=l,i}function eQ(e,t,n){return n._=!1,e(t+"\n\n",n)}let eM=(e,t,n)=>({$:eV(t,e[1],n)});function eT(){return{}}function ez(){return null}function eD(e,t,n){let r=e,l=t.split(".");for(;l.length&&void 0!==(r=r[l[0]]);)l.shift();return r||n}(r=l||(l={}))[r.MAX=0]="MAX",r[r.HIGH=1]="HIGH",r[r.MED=2]="MED",r[r.LOW=3]="LOW",r[r.MIN=4]="MIN",t.Z=e=>{let{children:t,options:n}=e,r=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(l[n]=e[n]);return l}(e,o);return i.cloneElement(function(e,t={}){let n;t.overrides=t.overrides||{},t.slugify=t.slugify||eR,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},s,t.namedCodesToUnicode):s;let r=t.createElement||i.createElement;function o(e,n,...l){let i=eD(t.overrides,`${e}.props`,{});return r(function(e,t){let n=eD(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:eD(t,`${e}.component`,e):e}(e,t.overrides),a({},n,i,{className:function(...e){return e.filter(Boolean).join(" ")}(null==n?void 0:n.className,i.className)||void 0}),...l)}function p(e){let n,r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===z.test(e));let l=ea(Y(r?e:`${e.trimEnd().replace(el,"")}

`,{_:r}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===t.wrapper)return l;let a=t.wrapper||(r?"span":"div");if(l.length>1||t.forceWrapper)n=l;else{if(1===l.length)return"string"==typeof(n=l[0])?o("span",{key:"outer"},n):n;n=null}return i.createElement(a,{key:"outer"},n)}function W(e){let t=e.match(d);return t?t.reduce(function(e,t,n){let r=t.indexOf("=");if(-1!==r){var l,a;let o=(-1!==(l=t.slice(0,r)).indexOf("-")&&null===l.match(w)&&(l=l.replace(q,function(e,t){return t.toUpperCase()})),l).trim(),s=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(r+1).trim()),u=c[o]||o,d=e[u]=(a=s,"style"===o?a.split(/;\s?/).reduce(function(e,t){let n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===o?eq(a):(a.match(H)&&(a=a.slice(1,a.length-1)),"true"===a||"false"!==a&&a));"string"==typeof d&&(N.test(d)||U.test(d))&&(e[u]=i.cloneElement(p(d.trim()),{key:n}))}else"style"!==t&&(e[c[t]||t]=!0);return e},{}):null}let L=[],G={},K={blockQuote:{t:eJ(f),i:l.HIGH,l:(e,t,n)=>({$:t(e[0].replace(A,""),n)}),h:(e,t,n)=>o("blockquote",{key:n.k},t(e.$,n))},breakLine:{t:eX(h),i:l.HIGH,l:eT,h:(e,t,n)=>o("br",{key:n.k})},breakThematic:{t:eJ(g),i:l.HIGH,l:eT,h:(e,t,n)=>o("hr",{key:n.k})},codeBlock:{t:eJ(k),i:l.MAX,l:e=>({$:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(e,t,n)=>o("pre",{key:n.k},o("code",a({},e.I,{className:e.M?`lang-${e.M}`:""}),e.$))},codeFenced:{t:eJ(x),i:l.MAX,l:e=>({I:W(e[3]||""),$:e[4],M:e[2]||void 0,type:"codeBlock"})},codeInline:{t:eH(y),i:l.LOW,l:e=>({$:e[2]}),h:(e,t,n)=>o("code",{key:n.k},e.$)},footnote:{t:eJ(v),i:l.MAX,l:e=>(L.push({O:e[2],B:e[1]}),{}),h:ez},footnoteReference:{t:eU(b),i:l.HIGH,l:e=>({$:e[1],R:`#${t.slugify(e[1])}`}),h:(e,t,n)=>o("a",{key:n.k,href:eq(e.R)},o("sup",{key:n.k},e.$))},gfmTask:{t:eU(E),i:l.HIGH,l:e=>({T:"x"===e[1].toLowerCase()}),h:(e,t,n)=>o("input",{checked:e.T,key:n.k,readOnly:!0,type:"checkbox"})},heading:{t:eJ(I),i:l.HIGH,l:(e,n,r)=>({$:eV(n,e[2],r),j:t.slugify(e[2]),C:e[1].length}),h:(e,t,n)=>o(`h${e.C}`,{id:e.j,key:n.k},t(e.$,n))},headingSetext:{t:eJ(R),i:l.MAX,l:(e,t,n)=>({$:eV(t,e[1],n),C:"="===e[2]?1:2,type:"heading"})},htmlComment:{t:eX(Z),i:l.HIGH,l:()=>({}),h:ez},image:{t:eH(eC),i:l.HIGH,l:e=>({D:e[1],R:eB(e[2]),N:e[3]}),h:(e,t,n)=>o("img",{key:n.k,alt:e.D||void 0,title:e.N||void 0,src:eq(e.R)})},link:{t:eU(eb),i:l.LOW,l:(e,t,n)=>({$:function(e,t,n){let r=n._||!1,l=n.u||!1;n._=!1,n.u=!0;let i=e(t,n);return n._=r,n.u=l,i}(t,e[1],n),R:eB(e[2]),N:e[3]}),h:(e,t,n)=>o("a",{key:n.k,href:eq(e.R),title:e.N},t(e.$,n))},linkAngleBraceStyleDetector:{t:eU(F),i:l.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],type:"link"})},linkBareUrlDetector:{t:(e,t)=>t.Z?null:eU(J)(e,t),i:l.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],N:void 0,type:"link"})},linkMailtoDetector:{t:eU(X),i:l.MAX,l(e){let t=e[1],n=e[1];return m.test(n)||(n="mailto:"+n),{$:[{$:t.replace("mailto:",""),type:"text"}],R:n,type:"link"}}},orderedList:ev(o,1),unorderedList:ev(o,2),newlineCoalescer:{t:eJ(S),i:l.LOW,l:eT,h:()=>"\n"},paragraph:{t:eF,i:l.LOW,l:eM,h:(e,t,n)=>o("p",{key:n.k},t(e.$,n))},ref:{t:eU(V),i:l.MAX,l:e=>(G[e[1]]={R:e[2],N:e[4]},{}),h:ez},refImage:{t:eH(Q),i:l.MAX,l:e=>({D:e[1]||void 0,F:e[2]}),h:(e,t,n)=>o("img",{key:n.k,alt:e.D,src:eq(G[e.F].R),title:G[e.F].N})},refLink:{t:eU(M),i:l.MAX,l:(e,t,n)=>({$:t(e[1],n),P:t(e[0].replace(T,"\\$1"),n),F:e[2]}),h:(e,t,n)=>G[e.F]?o("a",{key:n.k,href:eq(G[e.F].R),title:G[e.F].N},t(e.$,n)):o("span",{key:n.k},t(e.P,n))},table:{t:eJ(B),i:l.HIGH,l:eZ,h:(e,t,n)=>o("table",{key:n.k},o("thead",null,o("tr",null,e.L.map(function(r,l){return o("th",{key:l,style:ew(e,l)},t(r,n))}))),o("tbody",null,e.A.map(function(r,l){return o("tr",{key:l},r.map(function(r,l){return o("td",{key:l,style:ew(e,l)},t(r,n))}))})))},tableSeparator:{t:function(e,t){return t.v?P.exec(e):null},i:l.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:eX(er),i:l.MIN,l:e=>({$:e[0].replace(O,(e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e)}),h:e=>e.$},textBolded:{t:eH($),i:l.MED,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>o("strong",{key:n.k},t(e.$,n))},textEmphasized:{t:eH(_),i:l.LOW,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>o("em",{key:n.k},t(e.$,n))},textEscaped:{t:eH(en),i:l.HIGH,l:e=>({$:e[1],type:"text"})},textMarked:{t:eH(ee),i:l.LOW,l:eM,h:(e,t,n)=>o("mark",{key:n.k},t(e.$,n))},textStrikethroughed:{t:eH(et),i:l.LOW,l:eM,h:(e,t,n)=>o("del",{key:n.k},t(e.$,n))}};!0!==t.disableParsingRawHTML&&(K.htmlBlock={t:eX(N),i:l.HIGH,l(e,t,n){let[,r]=e[3].match(ei),l=RegExp(`^${r}`,"gm"),i=e[3].replace(l,""),a=eI.some(e=>e.test(i))?eQ:eV,o=e[1].toLowerCase(),c=-1!==u.indexOf(o);n.Z=n.Z||"a"===o;let s=c?e[3]:a(t,i,n);return n.Z=!1,{I:W(e[2]),$:s,G:c,H:c?o:e[1]}},h:(e,t,n)=>o(e.H,a({key:n.k},e.I),e.G?e.$:t(e.$,n))},K.htmlSelfClosing={t:eX(U),i:l.HIGH,l:e=>({I:W(e[2]||""),H:e[1]}),h:(e,t,n)=>o(e.H,a({},e.I,{key:n.k}))});let Y=((n=Object.keys(K)).sort(function(e,t){let n=K[e].i,r=K[t].i;return n!==r?n-r:e<t?-1:1}),function(e,t){return function e(t,r){let l=[],i="";for(;t;){let a=0;for(;a<n.length;){let o=n[a],c=K[o],s=c.t(t,r,i);if(s){let n=s[0];t=t.substring(n.length);let a=c.l(s,e,r);null==a.type&&(a.type=o),l.push(a),i=n;break}a++}}return l}(e.replace(j,"\n").replace(C,"").replace(D,"    "),t)}),ea=function e(t,n={}){var r;if(Array.isArray(t)){let r=n.k,l=[],i=!1;for(let r=0;r<t.length;r++){n.k=r;let a=e(t[r],n),o="string"==typeof a;o&&i?l[l.length-1]+=a:null!==a&&l.push(a),i=o}return n.k=r,l}return r=e,K[t.type].h(t,r,n)},eo=p(e);return L.length?o("div",null,eo,o("footer",{key:"footer"},L.map(function(e){return o("div",{id:t.slugify(e.B),key:e.B},e.B,ea(Y(e.O,{_:!0})))}))):eo}(t,n),r)}},5559:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893),l=n(9008),i=n.n(l),a=n(1163);function o(e){let{title:t,description:n}=e,l=(0,a.useRouter)(),o=l.basePath,c=o?"".concat(o,"/images/favicon.png"):"/images/favicon.png";return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:c}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:c}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:c})]})}},6663:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);function l(e){let{children:t,title:n}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"md:text-left text-center hero",children:(0,r.jsxs)("div",{className:"container mx-auto px-2",children:[n?(0,r.jsx)("h1",{className:"mb-2 md:mb-5 lg:text-5xl text-4xl font-bold text-center",children:n}):null,t]})})})}n(7294)},9454:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(155),l=n(7294);let i={envelope:r.GYo,instagram:r.oVe,linkedin:r.gXb,github:r.JOq,caret_up:r.Gal,caret_down:r.lmx,"arrow-left":r.ZU_,"arrow-right":r.hgW,"arrow-stem-left":r.qvS,clipboard:r.AKQ,website:r.r$X,slack:r.zkG,copy:r.mcF,calendar:r.ORF,"file-text":r.jyt,"file-pdf":r.UuI};function a(e){let{name:t,...n}=e,r=i[t];return r?(0,l.createElement)(r,n):(console.error('Could not find icon with name "'.concat(t,'"')),null)}},7510:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(5893),l=n(1664),i=n.n(l),a=n(9454),o=n(5675),c=n.n(o);function s(e){let{size:t=40}=e;return(0,r.jsxs)(i(),{href:"/",className:"flex items-center",children:[(0,r.jsx)(c(),{height:t,width:t,src:"data:image/png;base64,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",alt:"MDST Logo"}),t>50?(0,r.jsxs)("div",{className:"pr-7 leading-tight md:block hidden text-sm font-medium",children:["Michigan",(0,r.jsx)("br",{})," Data Science ",(0,r.jsx)("br",{}),"Team"]}):(0,r.jsxs)("div",{className:"pr-7 ml-2 leading-tight md:block hidden text-sm font-medium",children:["Michigan Data ",(0,r.jsx)("br",{}),"Science Team"]})]})}function u(){return(0,r.jsxs)("footer",{className:"p-4 flex items-center justify-center gap-2",children:[(0,r.jsx)(s,{size:36}),(0,r.jsx)(i(),{href:"https://github.com/MichiganDataScienceTeam","aria-label":"MDST GitHub",children:(0,r.jsx)(a.Z,{name:"github",className:"text-4xl"})}),(0,r.jsx)(i(),{href:"https://instagram.com/mdst_um","aria-label":"MDST Instagram",children:(0,r.jsx)(a.Z,{name:"instagram",className:"text-4xl"})}),(0,r.jsx)(i(),{href:"https://www.linkedin.com/school/michigan-data-science-team/","aria-label":"MDST Linkedin",children:(0,r.jsx)(a.Z,{name:"linkedin",className:"text-4xl"})})]})}var d=n(7294);function m(e){let{to:t,children:n}=e;return(0,r.jsx)(i(),{href:t,className:"mx-4",children:n})}function p(e){let{open:t,setOpen:n}=e;return(0,r.jsxs)("div",{className:"absolute  top-0 left-0 h-screen w-screen transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter bg-grey"),children:[(0,r.jsxs)("div",{className:"flex items-center justify-center filter drop-shadow-md bg-grey-dark h-20",children:[" ",(0,r.jsx)(s,{size:60})]}),(0,r.jsxs)("div",{className:"flex flex-col ml-4",children:[(0,r.jsx)(i(),{className:"text-xl font-medium my-4",href:"/projects",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Projects"}),(0,r.jsx)(i(),{className:"text-xl font-normal my-4",href:"/team",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Our Team"}),(0,r.jsx)(i(),{className:"text-xl font-normal my-4",href:"/sponsors",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Our Sponsors"}),(0,r.jsx)(i(),{className:"text-xl font-normal my-4",href:"/calendar",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Calendar"}),(0,r.jsx)(i(),{className:"text-xl font-normal my-4",href:"/contact",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Contact"}),(0,r.jsx)(i(),{className:"text-xl font-normal my-4",href:"/join",onClick:()=>setTimeout(()=>{n(!t)},100),children:"Join"})]})]})}function f(){let[e,t]=(0,d.useState)(!1);return(0,r.jsxs)("nav",{className:"flex filter px-4 py-4 h-20 items-center fixed w-full backdrop-filter backdrop-blur z-50 pt-7",children:[(0,r.jsx)(p,{open:e,setOpen:t}),(0,r.jsx)("div",{className:"w-3/12 flex items-center",children:(0,r.jsx)(s,{size:64})}),(0,r.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,r.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden cursor-pointer",onClick:()=>{t(!e)},children:[(0,r.jsx)("span",{className:"h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(e?"rotate-45 translate-y-3.5":"")}),(0,r.jsx)("span",{className:"h-1 bg-white rounded-lg transition-all duration-300 ease-in-out ".concat(e?"w-0":"w-full")}),(0,r.jsx)("span",{className:"h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(e?"-rotate-45 -translate-y-3.5":"")})]}),(0,r.jsxs)("div",{className:"hidden md:flex",children:[(0,r.jsx)(m,{to:"/projects",children:"Projects"}),(0,r.jsx)(m,{to:"/team",children:"Our Team"}),(0,r.jsx)(m,{to:"/sponsors",children:"Our Sponsors"}),(0,r.jsx)(m,{to:"/calendar",children:"Calendar"}),(0,r.jsx)(m,{to:"/contact",children:"Contact"}),(0,r.jsx)(m,{to:"/join",children:"Join"})]})]})]})}function A(e){let{children:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{}),(0,r.jsx)("main",{children:t}),(0,r.jsx)(u,{})]})}}}]);