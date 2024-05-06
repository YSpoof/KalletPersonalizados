import{d as h,h as V,b as y,s as _,c as a,o as r,a as s,i as j,v as S,F as k,r as w,t as f,u as T,j as g,k as C,l as M,m as P,n as q,g as b}from"./BrN4khHX.js";const N={class:"flex flex-col justify-center items-center pt-4"},$=["value"],D=h({__name:"Query",props:{modelValue:{default:"todos"},modelModifiers:{}},emits:["update:modelValue"],setup(d){const p=V(d,"modelValue"),o=y(()=>{const t=[..._.products].flatMap(l=>l.tags);return[...new Set(t)].sort((l,m)=>l.localeCompare(m))});return(i,t)=>(r(),a("search",N,[t[2]||(t[2]=s("p",null,"Filtrar por:",-1)),j(s("select",{"onUpdate:modelValue":t[0]||(t[0]=n=>p.value=n)},[t[1]||(t[1]=s("option",{value:"todos"},"Todos",-1)),(r(!0),a(k,null,w(T(o),n=>(r(),a("option",{key:n,value:n},f(n),9,$))),128))],512),[[S,p.value]])]))}}),L={key:0,class:"grid grid-cols-1 w-full md:grid-cols-3 gap-4 container mx-auto my-4 bg-transparent"},O={class:"bg-[#f1f1f1] p-1 rounded shadow-md hover:scale-[1.02] transition-all w-full text-center md:text-left"},R=["src","alt"],B={class:"p-2 md:p-1 ml-1"},E=["href"],F={class:"flex just justify-between items-center"},I={class:"font-light text-balance mt-0.5 text-sm md:text-base"},Q={key:1,class:"text-center text-2xl font-bold"},U={key:2,class:"mx-auto py-4 mt-4 grid place-items-center"},z=h({__name:"ProductLooper",props:{limit:{type:Number,default:_.products.length},filter:{type:String,default:""}},setup(d,{expose:p}){const o=d,i=y(()=>{const u=_.products.slice(0,o.limit);return o.filter.toLowerCase()==="todos"?u:u.filter(e=>e.tags.includes(o.filter))}),t=g(null);p({rootEl:t});const n=()=>{scrollTo({top:0,behavior:"smooth"})},l=C({isOpen:!1}),m=u=>{var v;const e=(v=t.value)==null?void 0:v.querySelector("dialog"),c=u.target;if(l.isOpen)e==null||e.close(),l.isOpen=!1;else{const x=e==null?void 0:e.querySelector("img");x==null||x.setAttribute("src",c.src),e==null||e.showModal(),l.isOpen=!0}};return(u,e)=>(r(),a("section",{ref_key:"rootEl",ref:t,id:"products",class:"bg-stone-100 p-5 m-4 shadow-lg"},[e[2]||(e[2]=s("h1",{class:"p-3 text-center text-4xl"},"Produtos",-1)),i.value.length?(r(),a("main",L,[(r(!0),a(k,null,w(i.value,c=>(r(),a("article",O,[s("img",{onClick:m,class:"rounded-t-lg mx-auto object-cover cursor-pointer",width:"720",height:"720",src:c.image,alt:c.title,loading:"lazy"},null,8,R),s("div",B,[s("a",{href:c.link,target:"_blank",class:"block"},[s("div",F,[s("p",null,f(c.title),1),s("p",null,f(c.price),1)]),s("p",I,"Tipo: "+f(c.tags.join(", ")),1)],8,E)])]))),256))])):(r(),a("p",Q,"Nenhuma foto encontrada com a tag: "+f(d.filter),1)),i.value.length?(r(),a("div",U,[s("button",{onClick:e[0]||(e[0]=c=>n()),class:"text-xl px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded uppercase text-white shadow-md"},"Voltar ao topo")])):M("",!0),s("dialog",{onClick:m,class:"bg-transparent max-w-full max-h-full open:animate-modalf open:flex focus-visible:outline-none backdrop:bg-black/75 backdrop-blur-sm items-center justify-center overflow-clip"},e[1]||(e[1]=[s("img",{src:"",alt:"",class:"w-screen md:max-w-fit md:max-h-screen object-cover"},null,-1)]))],512))}}),H=h({__name:"products",props:{category:{type:String,default:"todos"}},setup(d){P({title:"Produtos"});const o=g(d.category),i=g(null);g(null);const t=q().query.category||"todos";return o.value=t,(n,l)=>{const m=D,u=z;return r(),a("div",null,[b(m,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e)},null,8,["modelValue"]),b(u,{ref_key:"imagesRef",ref:i,"show-button":!1,"limit-posts":!1,filter:o.value},null,8,["filter"])])}}});export{H as default};
