import{S as s,i as a,s as c,e as l,a as r,t as o,c as e,b as t,d as h,f as i,g as f,h as v,j as n,k as d,l as u,m,n as E}from"./client.e1f82e19.js";const I={one:"Morocco",two:"Istanbul",three:"Peru",four:"Russia"};function x(s){let a,c,x,D,V,b,p,q,w,M,A,g,k,j,T,B,N,O,P,R,S,U,$,y,z=I.one+"",C=I.two+"",F=I.three+"",G=I.four+"";return{c(){a=l("div"),c=l("div"),x=r(),D=l("div"),V=l("div"),b=l("div"),p=l("div"),q=l("a"),w=o(z),M=r(),A=l("div"),g=l("a"),k=o(C),j=r(),T=l("div"),B=l("a"),N=o(F),O=r(),P=l("div"),R=l("a"),S=o(G),U=r(),$=l("button"),this.h()},l(s){a=e(s,"DIV",{class:!0});var l=t(a);c=e(l,"DIV",{class:!0}),t(c).forEach(h),x=i(l),D=e(l,"DIV",{class:!0});var r=t(D);V=e(r,"DIV",{class:!0});var o=t(V);b=e(o,"DIV",{class:!0});var v=t(b);p=e(v,"DIV",{class:!0});var n=t(p);q=e(n,"A",{href:!0,class:!0});var d=t(q);w=f(d,z),d.forEach(h),n.forEach(h),M=i(v),A=e(v,"DIV",{class:!0});var u=t(A);g=e(u,"A",{href:!0,class:!0});var m=t(g);k=f(m,C),m.forEach(h),u.forEach(h),j=i(v),T=e(v,"DIV",{class:!0});var E=t(T);B=e(E,"A",{href:!0,class:!0});var I=t(B);N=f(I,F),I.forEach(h),E.forEach(h),O=i(v),P=e(v,"DIV",{class:!0});var y=t(P);R=e(y,"A",{href:!0,class:!0});var H=t(R);S=f(H,G),H.forEach(h),y.forEach(h),v.forEach(h),o.forEach(h),U=i(r),$=e(r,"BUTTON",{class:!0,"aria-label":!0}),t($).forEach(h),r.forEach(h),l.forEach(h),this.h()},h(){v(c,"class","modal-background"),v(q,"href","morocco"),v(q,"class","svelte-3x636q"),v(p,"class","column"),v(g,"href","istanbul"),v(g,"class","svelte-3x636q"),v(A,"class","column"),v(B,"href","peru"),v(B,"class","svelte-3x636q"),v(T,"class","column"),v(R,"href","russia"),v(R,"class","svelte-3x636q"),v(P,"class","column"),v(b,"class","columns has-text-centered"),v(V,"class","container"),v($,"class","modal-close is-large"),v($,"aria-label","close"),v(D,"class","modal-content svelte-3x636q"),v(a,"class","modal is-clipped svelte-3x636q"),n(a,"is-active",s[0])},m(l,r,o){d(l,a,r),u(a,c),u(a,x),u(a,D),u(D,V),u(V,b),u(b,p),u(p,q),u(q,w),u(b,M),u(b,A),u(A,g),u(g,k),u(b,j),u(b,T),u(T,B),u(B,N),u(b,O),u(b,P),u(P,R),u(R,S),u(D,U),u(D,$),o&&y(),y=m($,"click",s[1])},p(s,[c]){1&c&&n(a,"is-active",s[0])},i:E,o:E,d(s){s&&h(a),y()}}}function D(s,a,c){let{showModal:l=!1}=a;return s.$set=(s=>{"showModal"in s&&c(0,l=s.showModal)}),[l,()=>c(0,l=!1)]}class V extends s{constructor(s){super(),a(this,s,D,x,c,{showModal:0})}}export{V as M,I as d};