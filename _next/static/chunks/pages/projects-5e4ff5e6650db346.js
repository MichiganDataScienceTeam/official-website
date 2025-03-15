(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8291:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return s(3669)}])},3669:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return g}});var l=s(5893),n=s(5559),a=s(6663),i=s(7510),r=s(5675),c=s.n(r);function o(e){let{project:t,basePath:s}=e,n="".concat(s||"","/images/projects/").concat(t.image),a=t.leads.length>1?"Leads":"Lead";return(0,l.jsxs)("div",{style:x.card,children:[(0,l.jsxs)("div",{style:{...x.column,...x.projectInfo},children:[(0,l.jsx)(c(),{style:x.projectImage,width:"300",height:"300",src:n,alt:t.label}),(0,l.jsx)("h3",{style:x.projectTitle,children:t.label})]}),(0,l.jsxs)("div",{style:{...x.column,...x.leadsInfo},children:[(0,l.jsxs)("h4",{style:x.leadText,children:[a,":"]}),(0,l.jsx)("div",{style:x.leadsContainer,children:t.leads.map((e,t)=>(0,l.jsxs)("div",{style:x.lead,children:[(0,l.jsx)(c(),{style:x.leadImage,width:"75",height:"75",src:"".concat(s||"","/images/team/").concat(e.image),alt:e.name}),(0,l.jsx)("p",{style:x.leadName,children:e.name})]},t))})]})]})}let x={card:{display:"flex",flexDirection:"row",backgroundColor:"#333",padding:"25px",borderRadius:"8px",width:"100%",maxWidth:"500px",marginBottom:"32px",justifyContent:"space-between",alignItems:"stretch"},column:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},projectInfo:{flex:"1 1 300px",alignItems:"center",justifyContent:"center",marginRight:"16px"},projectImage:{borderRadius:"10%",objectFit:"contain"},projectTitle:{marginTop:"16px",fontSize:"24px",fontWeight:"bold",textAlign:"center",color:"white"},leadsInfo:{flex:"0 0 35%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:"1 1 75px"},leadText:{fontSize:"20px",fontWeight:"bold",color:"white"},leadsContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"8px",gap:"16px"},lead:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},leadImage:{borderRadius:"50%",objectFit:"cover",width:"75px",height:"75px"},leadName:{marginTop:"8px",textAlign:"center",fontSize:"14px",fontWeight:"500",color:"white"}};var d=s(1664),m=s.n(d),h=s(9454);function p(e){let{project:t,basePath:s}=e,n="".concat(s,"/images/projects/").concat(t.label.toLowerCase().split(" ").join("_"),".jpg");return(0,l.jsxs)("div",{className:"text-left sm:text-center rounded bg-grey py-2 sm:py-4 px-2 sm:px-8 w-full sm:w-60 flex sm:block gap-8",children:[(0,l.jsx)(c(),{className:"sm:mx-auto sm:mb-4 sm:w-44 sm:h-44 w-24 h-24 my-auto rounded-full object-cover",width:"176",height:"176",src:n,alt:t.label}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h3",{className:"mb-1 text-2xl font-bold tracking-tight",children:t.label}),(0,l.jsxs)("ul",{className:"flex sm:justify-center mt-2 sm:mt-4 space-x-4",children:[t.github&&(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:t.github,className:"hover:text-gray","aria-label":"Github Repo",children:(0,l.jsx)(h.Z,{name:"github",className:"text-3xl"})})}),t.googleSlides&&(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:t.googleSlides,className:"hover:text-gray","aria-label":"Google Slides",children:(0,l.jsx)(h.Z,{name:"file-pdf",className:"text-3xl"})})})]})]})]})}var u=s(1163),j=!0;function g(e){let{groupedLinks:t,currentProjects:s}=e,r=(0,u.useRouter)(),c=r.basePath;return(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(n.Z,{title:"Michigan Data Science Team - Projects",description:"Michigan Data Science Team - MDST is the largest data science club at the University of Michigan. Here are some of our past projects."}),(0,l.jsx)(a.Z,{title:"Our Projects"}),(0,l.jsxs)("section",{className:"current-projects py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6",children:[(0,l.jsxs)("div",{className:"mx-auto mb-8 max-w-screen-sm lg:mb-16",children:[(0,l.jsx)("h2",{className:"text-3xl mb-4",children:"Current Projects 2025 Winter"}),(0,l.jsxs)("h3",{children:["More project details are on our"," ",(0,l.jsx)("a",{href:"https://mdst-club.notion.site/w25-projects",style:{color:"#C8BAF3",fontWeight:"bold",textDecoration:"underline"},children:"Notion Page"})]})]}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center gap-8",children:s.map((e,t)=>(0,l.jsx)(o,{project:e,basePath:c},t))})]}),Object.entries(t).sort((e,t)=>{let[s,l]=e[0].split(" "),[n,a]=t[0].split(" "),i={Winter:0,Fall:1};return l===a?i[n]-i[s]:parseInt(a)-parseInt(l)}).map(e=>{let[t,s]=e;return(0,l.jsx)(f,{basePath:c,semester:t,projects:s},t)})]})}function f(e){let{semester:t,projects:s,basePath:n}=e;return(0,l.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6",children:[(0,l.jsx)("div",{className:"mx-auto mb-8 max-w-screen-sm lg:mb-16",children:(0,l.jsx)("h2",{className:"text-3xl mb-4",children:t})}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:s.map((e,t)=>(0,l.jsx)(p,{basePath:n,project:e},t))})]})}}},function(e){e.O(0,[260,973,358,774,888,179],function(){return e(e.s=8291)}),_N_E=e.O()}]);