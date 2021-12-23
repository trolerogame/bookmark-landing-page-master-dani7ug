var C=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(t,n,i)=>n in t?C(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,f=(t,n)=>{for(var i in n||(n={}))q.call(n,i)&&x(t,i,n[i]);if(g)for(var i of g(n))j.call(n,i)&&x(t,i,n[i]);return t},h=(t,n)=>I(t,S(n));import{W as A,s as r,R as e,r as c,C as F,a as L}from"./vendor.6fa755a1.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}};M();const O=A`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
    }
`,s=r.button`
    border:none;
    color:${t=>t.color=="#f2f2f2"?"#111":"#fff"};
    background:${t=>t.color||"hsl(0, 94%, 66%)"};
    border-radius:5px;
    text-align:center;
    height:30px;
    padding:0 10px;
    cursor: pointer;
`,R=r.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
    background:hsl(229, 31%, 21%); 
    padding:30px 0;
    p{
        color:#fff;
        margin:20px 0;
        cursor:pointer;
        transition: all .1s linear;
        text-align: center;
    }
    #info{
        margin:20px 0;
    }
    p:hover{
        color:hsl(0, 94%, 66%);
    }
    img{
        margin:0 15px;
        cursor:pointer;
        padding:3px;
    }
    @media (min-width: 768px){
        p{
            margin:0 20px;
            display:inline;
        }

        #info{
            display:flex;
            align-items: center;
        }

        img{
            margin:0 10px;
        }
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 100px;
    }
`,b=r.div`
    margin:50px 30px;
    text-align: center;
    display:flex;
    flex-direction: ${t=>t.reverse?"column-reverse":"column"};
    img{
        width: 350px;
        height: 250px;
        object-fit: cover;
    }
    @media (min-width: 762px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        place-content: center;
        text-align: start;
    }
`,v=r.div`
    p{
    color:hsl(229, 31%, 21%);
    font-weight: 500;
    font-size:18px;
    }
    h2{
        font-size:26px;
    }
    button{
        height:40px;
        margin:0 10px;
    }
    #containButtons{
        display:flex;
        margin:20px 0;
        justify-content:center;
    }
    @media (min-width:762px){
        width:400px;
        margin-left:100px;
    }
`,E=r.div`
    position: relative;
    display: flex;
    justify-content: center;
`,u=r.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:30px 30px;
    margin-top:90px;
    text-align: center;
    p{
        margin-top:0px;
    }
    h2{
        font-size:25px;
    }
    @media (min-width:682px){
        width: 350px;
        margin:40px auto;
    }
`,$=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:280px;
    margin:30px 0;
    padding:20px 0;
    border-radius:15px;
    -webkit-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    -moz-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    b{
        font-size:23px;
        margin:20px 0 10px 0;
    }
    p{
        margin:0;
    }
    button{
        margin:50px 0 10px 0!important;
        padding:20px 40px;
        display:flex;
        align-items:center;
    }
    @media (min-width: 762px) {
        margin:0 25px;
        &:first-child{
            transform:translateY(-50px);
        }
        &:nth-child(3){
            transform:translateY(50px);
        }
    }
`,y=r.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    button{
        margin:50px 0;
        height:40px;
        padding:0 20px;
    }
`,N=r(y)`
    @media(min-width: 762px){
        flex-direction:row;
        justify-content:center;
        margin:50px 0 150px 0;
    }
`,B=r.div`
    width: 300px;
    margin-bottom:10px;
    -webkit-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    .title{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .title p{
        font-weight:bold;
    }
    .text{
        overflow: hidden;
        height:${t=>t.close?"auto":"0"};
        transition: all .1s linear;
    }
    .text p{
        letter-spacing:1px;
        color:#000;
    }
    img{
        width:20px;
        height:10px;
        object-fit: cover;
        cursor:pointer;
        transform: rotate(${t=>t.close?"-180deg":"0"});
        transition: all .1s linear;
    }
    @media(min-width: 762px){
        width:400px;
    }
`,H=r.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 762px){
        flex-direction: row;
        justify-content: center;
    }
`,T=r.button`
    background:#fff;
    border:none;
    padding:15px 0;
    font-size:20px;
    color:hsl(229, 31%, 21%);
    cursor:pointer;
    transition: all .1s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-top:1px solid rgb(200,200,200);
    border-bottom:1px solid rgb(200,200,200);
    &::after{
        content:'';
        display:block;
        margin-top:10px;
        width: ${t=>t.num==="true"?"calc(100% - 200px)":"0"};
        height:5px ;
        background-color:hsl(0, 94%, 66%);
        transition: all .2s linear;
        position: absolute;
        bottom:0;
    }
    @media (min-width: 762px){
        padding:15px 40px;
        border-top:0;
        &::after{
            width: ${t=>t.num==="true"?"100%":"0"};
        }
    }
`;var V="/bookmark-landing-page-master-dani7ug/assets/illustration-hero.d9bf4c64.svg";const P=({search:t,version:n,image:i})=>e.createElement($,null,e.createElement("img",{src:i,alt:""}),e.createElement("b",null,"Add to ",t),e.createElement("p",null,"Minimum version ",n),e.createElement(s,{color:"hsl(231, 69%, 60%)"},"Add & Install Extension"));var d=e.memo(P),G="/bookmark-landing-page-master-dani7ug/assets/icon-arrow.552464a7.svg";const W=({question:t,response:n})=>{const[i,l]=c.exports.useState(!1);return e.createElement(B,{close:i},e.createElement("div",{className:"title"},e.createElement("p",null,t),e.createElement("img",{src:G,alt:"arrow",onClick:()=>l(!i)})),e.createElement("div",{className:"text"},e.createElement("p",null,n)))};var D=[{id:1,question:"What is Bookmark?",response:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."},{id:2,question:"How can I request a new browser?",response:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."},{id:3,question:"Is there a mobile app?",response:"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."},{id:4,question:"What about other Chromium browsers?",response:"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."}],p=[{id:0,image:"./illustration-features-tab-1.svg",title:"Bookmark in one click",button:"Simple Bookmarking",text:"  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."},{id:1,image:"./illustration-features-tab-2.svg",title:"Intelligent search",button:"Speedy Searching",text:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},{id:2,image:"./illustration-features-tab-3.svg",title:"Share your bookmarks",button:"Easy Sharing",text:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."}];const Q=()=>{const[t,n]=c.exports.useState(0);return e.createElement("main",null,e.createElement(b,{reverse:!0},e.createElement(v,null,e.createElement("h2",null,"A Simple Bookmark Manager"),e.createElement("p",null,"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."),e.createElement("div",{id:"containButtons"},e.createElement(s,{color:"hsl(231, 69%, 60%)"},"Get it on Chrome"),e.createElement(s,{color:"#f2f2f2"},"Get it on Firefox"))),e.createElement(E,null,e.createElement("img",{src:V,alt:""}))),e.createElement(u,null,e.createElement("h2",null,"Features"),e.createElement("p",null,"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.")),e.createElement(H,null,p.map(({button:i,id:l})=>e.createElement(T,{num:t===l?"true":"",key:l,onClick:()=>n(l)},i))),e.createElement(b,null,e.createElement(E,null,e.createElement("img",{src:p[t].image,alt:""})),e.createElement(v,null,e.createElement("h2",null,p[t].title),e.createElement("p",null,p[t].text),e.createElement(s,{color:"hsl(231, 69%, 60%)"},"More Info"))),e.createElement(u,null,e.createElement("h2",null,"Download the extension"),e.createElement("p",null,"We\u2019ve got more browsers in the pipeline. Please do let us know if you\u2019ve got a favourite you\u2019d like us to prioritize.")),e.createElement(N,null,e.createElement(d,{search:"Chrome",version:"62",image:"./logo-chrome.svg"}),e.createElement(d,{search:"Firefox",version:"55",image:"./logo-firefox.svg"}),e.createElement(d,{search:"Opera",version:"46",image:"./logo-opera.svg"})),e.createElement(u,null,e.createElement("h2",null,"Frequently Asked Questions"),e.createElement("p",null,"Here are some of our FAQs. If you have any other questions you\u2019d like answered please feel free to email us.")),e.createElement(y,null,D.map(i=>e.createElement(W,h(f({},i),{key:i.id}))),e.createElement(s,{color:"hsl(231, 69%, 60%)"},"More Info")))},U=r.form`
    background:hsl(231, 69%, 60%);
    /* margin:20px; */
    padding:40px 20px;
    text-align:center;
    p,h2{
        color:#f2f2f2;
    }
    input{
        width:calc(100% - 20px);
        outline:none;
        border:${t=>t.error?"3px solid hsl(0, 94%, 66%)":"none"};
        border-bottom:${t=>t.error?"25px solid hsl(0, 94%, 66%)":"none"};
        border-radius:5px;
        padding:10px 0;
        height:30px;
        padding-left:20px;
    }
    input::placeholder{
        color:hsl(229, 8%, 60%);
    }
    button{
        margin-top:20px;
        width:100%;
        height:50px;
        padding:10px 0;
    }
    p{
        font-size:20px;
        letter-spacing: 5px;
    }
    #containInput{
        position:relative;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
    }
    img{
        position:absolute;
        width:20px;
        height: 20px;
        object-fit: cover;
        right:10px;
        margin-bottom:20px;
        z-index:1;
    }
    #containInput::after{
        display:${t=>t.error?"none":"block"};
        content:"Whoops, make sure it's an email";
        position: absolute;
        font-size:13px;
        font-weight: bold;
        bottom:4px;
        left:10px;
        color:#f2f2f2;
        padding:0 2px;
    }
    @media (min-width: 768px) {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:300px;
        padding:0;
        h2{
            margin-top:0;
            font-size:30px;
        }
        input{
            font-size:17px;
        }
        #containForm{
            display:flex;
            align-items: center;
        }

        input,button{
            margin:0;
        }
        #containButtonInput{
            width: 400px;
            display:grid;
            grid-template-columns: 75% 25%;
            grid-gap:10px;
        }
    }
`;var Y="/bookmark-landing-page-master-dani7ug/assets/icon-error.832752b1.svg";const Z=()=>{const t=c.exports.useRef(null),[n,i]=c.exports.useState(!1),l=o=>{o.preventDefault();let a=t.current.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g);a&&(t.current.value=""),i(!a)};return e.createElement(U,{onSubmit:l,error:n},e.createElement("p",null,"35,000+ already joined"),e.createElement("h2",null,"Stay up-to-date with what we\u2019re doing"),e.createElement("div",{id:"containButtonInput"},e.createElement("div",{id:"containInput"},n&&e.createElement("img",{src:Y,alt:""}),e.createElement("input",{ref:t,type:"text",placeholder:"Enter your email address"})),e.createElement(s,{type:"submit"},"Contact Us")))},K=r.header`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 100px;
    #info{
        display: flex;
        align-items: center;
    }
    img{
        cursor:pointer;
        display: none;
    }
    button{
        height:35px;
        padding:0 30px;
        letter-spacing: 2px;
        font-weight: bold;
        transition: all 0.1s linear;
    }
    button:hover{
        color:hsl(0, 94%, 66%);
        background:none;
        outline:1px  solid hsl(0, 94%, 66%);
    }
    #networks{
        display:none;
    }
    @media (max-width:762px){
        display: block;
        margin:0;
        #info{
            display:none;
        }
        #buttonLogo{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 30px;
        }
        img{
            display:block;
            width: 20px;
            height: 20px;
        }
        #networks{
            display:flex;
            justify-content: center;
            margin-top:150px;
        }
        #networks img{
            margin:0 20px;
            width: 30px;
            height:30px;
            object-fit: cover;
        }
        ${t=>!t.close&&F`
            display:grid;
            grid-template-columns: 100%;
            grid-template-rows:5% 40% 55%;
            background-color:rgb(40,40,50,.9);
            justify-content: center;
            padding:30px;
            position: fixed;
            z-index:10;
            top:0;
            left:0;
            width: calc(100% - 60px);
            height: 100vh;
            #buttonLogo{
                padding:20px;
            }
            #info{
                display:block;
            }
            button{
                width: 100%;
                border:3px solid #fff;
                background:none;
                height:50px;
                font-size:20px;
                letter-spacing:3px;
                font-weight: 600;
            }
            button:hover{
                color:#f2f2f2;
            }
        `}
    }
`,_=r.div`
    display:flex;
    flex-direction: column;
    margin-bottom:20px;
    p{
        margin:0;
        padding:20px 0;
        border-bottom:1px solid #888;
        color:#f2f2f2;
        text-align:center;
        font-size:20px;
        font-weight:600;
        letter-spacing: 3px;
        cursor:pointer;
        transition:all .1s linear;
    }
    p:hover{
        color:hsl(0, 94%, 66%);
    }
    p:first-child{
        border-top:1px solid #888;
        padding-top:20px;
    }
    @media (min-width: 762px) {
        flex-direction: row;
        margin:0 20px;
        p{
            border:none!important;
            color:#1a1a1a;
            font-size:12px;
            margin:0 10px;
        }
        
    }
`;var w=({color:t,color2:n,color3:i})=>e.createElement("svg",{width:"148",height:"25",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z",fill:t||"#fff",fillRule:"nonzero"}),e.createElement("g",null,e.createElement("circle",{fill:n||"#5267DF",cx:"12.5",cy:"12.5",r:"12.5"}),e.createElement("path",{d:"M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z",fill:i||"#fff"})))),J="/bookmark-landing-page-master-dani7ug/assets/icon-hamburger.e27716ac.svg",X="/bookmark-landing-page-master-dani7ug/assets/icon-close.af977150.svg",k="/bookmark-landing-page-master-dani7ug/assets/icon-facebook.84d2c466.svg",z="/bookmark-landing-page-master-dani7ug/assets/icon-twitter.4870c963.svg";const ee=()=>{const[t,n]=c.exports.useState(!1);return e.createElement(K,{close:!t},e.createElement("div",{id:"buttonLogo"},e.createElement(w,{color:t?"#fff":"#222",color2:t?"#fff":"",color3:t?"rgb(40,40,50,.9)":""}),e.createElement("img",{src:t?X:J,onClick:()=>n(!t)})),e.createElement("div",{id:"info"},e.createElement(_,null,e.createElement("p",null,"FEATURES"),e.createElement("p",null,"PRICING"),e.createElement("p",null,"CONTACT")),e.createElement(s,null,"LOGIN")),t&&e.createElement("div",{id:"networks"},e.createElement("img",{src:k,alt:""}),e.createElement("img",{src:z,alt:""})))},te=()=>e.createElement(R,null,e.createElement("div",{id:"info"},e.createElement(w,null),e.createElement("p",null,"FEATURES"),e.createElement("p",null,"PRICING"),e.createElement("p",null,"CONTACT")),e.createElement("div",{id:"logo"},e.createElement("img",{src:k,alt:""}),e.createElement("img",{src:z,alt:""})));var ne=e.memo(te);function ie(){return e.createElement("div",{className:"App"},e.createElement(O,null),e.createElement(ee,null),e.createElement(Q,null),e.createElement(Z,null),e.createElement(ne,null))}L.render(e.createElement(e.StrictMode,null,e.createElement(ie,null)),document.getElementById("root"));
