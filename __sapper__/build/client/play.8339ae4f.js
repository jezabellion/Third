import{S as a,i as e,s,e as t,c as r,b as l,d as c,h,k as n,l as o,n as i,a as f,t as g,f as v,g as d,E as p}from"./client.1d9869b4.js";import"./ChapterHeader.55040d70.js";function u(a,e,s){const t=a.slice();return t[2]=e[s],t[4]=s,t}function m(a,e,s){const t=a.slice();return t[2]=e[s],t[4]=s,t}function E(a){let e,s,f,g,v;return{c(){e=t("div"),s=t("figure"),f=t("img"),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);s=r(t,"FIGURE",{});var h=l(s);f=r(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(c),t.forEach(c),this.h()},h(){f.src!==(g=a[2].src)&&h(f,"src",g),h(f,"alt",v=a[2].alt),h(f,"class","svelte-14vpw1e"),h(e,"class","container image-gallery svelte-14vpw1e")},m(a,t){n(a,e,t),o(e,s),o(s,f)},p:i,d(a){a&&c(e)}}}function I(a){let e,s,f,g,v;return{c(){e=t("div"),s=t("figure"),f=t("img"),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=l(e);s=r(t,"FIGURE",{});var h=l(s);f=r(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(c),t.forEach(c),this.h()},h(){f.src!==(g=a[2].src)&&h(f,"src",g),h(f,"alt",v=a[2].alt),h(f,"class","svelte-14vpw1e"),h(e,"class","container image-gallery svelte-14vpw1e")},m(a,t){n(a,e,t),o(e,s),o(s,f)},p:i,d(a){a&&c(e)}}}function b(a){let e,s,b,D,V,G,y,H,x,C,F,M,N,P,R,U,k,A=a[0],B=[];for(let e=0;e<A.length;e+=1)B[e]=E(m(a,A,e));let S=a[1],q=[];for(let e=0;e<S.length;e+=1)q[e]=I(u(a,S,e));return{c(){for(let a=0;a<B.length;a+=1)B[a].c();e=f(),s=t("div"),b=t("div"),D=t("h2"),V=g(j),G=f(),y=t("p"),H=g("* * *"),x=f();for(let a=0;a<q.length;a+=1)q[a].c();C=f(),F=t("div"),M=t("div"),N=t("h2"),P=g(w),R=f(),U=t("p"),k=g("* * *"),this.h()},l(a){for(let e=0;e<B.length;e+=1)B[e].l(a);e=v(a),s=r(a,"DIV",{class:!0});var t=l(s);b=r(t,"DIV",{class:!0});var h=l(b);D=r(h,"H2",{});var n=l(D);V=d(n,j),n.forEach(c),G=v(h),y=r(h,"P",{});var o=l(y);H=d(o,"* * *"),o.forEach(c),h.forEach(c),t.forEach(c),x=v(a);for(let e=0;e<q.length;e+=1)q[e].l(a);C=v(a),F=r(a,"DIV",{class:!0});var i=l(F);M=r(i,"DIV",{class:!0});var f=l(M);N=r(f,"H2",{});var g=l(N);P=d(g,w),g.forEach(c),R=v(f),U=r(f,"P",{});var p=l(U);k=d(p,"* * *"),p.forEach(c),f.forEach(c),i.forEach(c),this.h()},h(){h(b,"class","chapter-header"),h(s,"class","container"),h(M,"class","chapter-header"),h(F,"class","container")},m(a,t){for(let e=0;e<B.length;e+=1)B[e].m(a,t);n(a,e,t),n(a,s,t),o(s,b),o(b,D),o(D,V),o(b,G),o(b,y),o(y,H),n(a,x,t);for(let e=0;e<q.length;e+=1)q[e].m(a,t);n(a,C,t),n(a,F,t),o(F,M),o(M,N),o(N,P),o(M,R),o(M,U),o(U,k)},p(a,[s]){if(1&s){let t;for(A=a[0],t=0;t<A.length;t+=1){const r=m(a,A,t);B[t]?B[t].p(r,s):(B[t]=E(r),B[t].c(),B[t].m(e.parentNode,e))}for(;t<B.length;t+=1)B[t].d(1);B.length=A.length}if(2&s){let e;for(S=a[1],e=0;e<S.length;e+=1){const t=u(a,S,e);q[e]?q[e].p(t,s):(q[e]=I(t),q[e].c(),q[e].m(C.parentNode,C))}for(;e<q.length;e+=1)q[e].d(1);q.length=S.length}},i:i,o:i,d(a){p(B,a),a&&c(e),a&&c(s),a&&c(x),p(q,a),a&&c(C),a&&c(F)}}}let j="Aït Benhaddou",w="Erg Chebbi";function D(a){return[[{src:"images/aaa.jpg",alt:"whatever"},{src:"images/bbb.jpg",alt:"yup"},{src:"images/ccc.jpg",alt:"new"}],[{src:"images/ddd.jpg",alt:"stuff"},{src:"images/eee.jpg",alt:"shit"}]]}export default class extends a{constructor(a){super(),e(this,a,D,b,s,{})}}