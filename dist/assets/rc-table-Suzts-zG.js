import{r}from"./react-Bf7irJ3V.js";import{c as Xt,a as vn,u as te}from"./@rc-component-CWVFqUjO.js";import"./react-is-DcfIKM1A.js";import{c as U,d as Ie,b as F,e as h,g as ne,h as Le,f as Ce}from"./@babel-6uu_lx9h.js";import{c as Z}from"./classnames-C9FZUsQl.js";import{o as tt,n as rt,D as mn,i as Te,h as Dn,x as Dt,c as Vt,q as Vn,H as qe,I as Un,J as jn,k as Ut,d as Yn,L as jt,A as Gn}from"./rc-util-BDhcp0wf.js";import{R as pn}from"./rc-resize-observer-Dz4Q5JLj.js";import{L as Yt}from"./rc-virtual-list-QdVo5CJL.js";var ke={},Qe="rc-table-internal-hook",xn=Xt(),at=xn.makeImmutable,Fe=xn.responseImmutable,Gt=xn.useImmutableMark,le=vn(),ot=r.createContext({renderWithProps:!1}),qt="RC_TABLE_KEY";function Jt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ze(e){var t=[],n={};return e.forEach(function(a){for(var o=a||{},l=o.key,i=o.dataIndex,c=l||Jt(i).join("-")||qt;n[c];)c="".concat(c,"_next");n[c]=!0,t.push(c)}),t}function dn(e){return e!=null}function Qt(e){return e&&Ie(e)==="object"&&!Array.isArray(e)&&!r.isValidElement(e)}function Zt(e,t,n,a,o,l){var i=r.useContext(ot),c=Gt(),s=tt(function(){if(dn(a))return[a];var u=t==null||t===""?[]:Array.isArray(t)?t:[t],p=mn(e,u),f=p,v=void 0;if(o){var d=o(p,e,n);Qt(d)?(f=d.children,v=d.props,i.renderWithProps=!0):f=d}return[f,v]},[c,e,a,t,o,n],function(u,p){if(l){var f=U(u,2),v=f[1],d=U(p,2),m=d[1];return l(m,v)}return i.renderWithProps?!0:!rt(u,p,!0)});return s}function er(e,t,n,a){var o=e+t-1;return e<=a&&o>=n}function nr(e,t){return te(le,function(n){var a=er(e,t||1,n.hoverStartRow,n.hoverEndRow);return[a,n.onHover]})}var tr=function(t){var n=t.ellipsis,a=t.rowType,o=t.children,l,i=n===!0?{showTitle:!0}:n;return i&&(i.showTitle||a==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():r.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function rr(e){var t,n,a,o,l,i,c,s,u=e.component,p=e.children,f=e.ellipsis,v=e.scope,d=e.prefixCls,m=e.className,w=e.align,g=e.record,E=e.render,b=e.dataIndex,k=e.renderIndex,I=e.shouldCellUpdate,S=e.index,_=e.rowType,P=e.colSpan,O=e.rowSpan,K=e.fixLeft,B=e.fixRight,X=e.firstFixLeft,N=e.lastFixLeft,L=e.firstFixRight,R=e.lastFixRight,H=e.appendNode,T=e.additionalProps,C=T===void 0?{}:T,x=e.isSticky,y="".concat(d,"-cell"),z=te(le,["supportSticky","allColumnsFixedLeft","rowHoverable"]),A=z.supportSticky,Y=z.allColumnsFixedLeft,G=z.rowHoverable,ge=Zt(g,b,k,p,E,I),ie=U(ge,2),ye=ie[0],D=ie[1],V={},ve=typeof K=="number"&&A,me=typeof B=="number"&&A;ve&&(V.position="sticky",V.left=K),me&&(V.position="sticky",V.right=B);var he=(t=(n=(a=D==null?void 0:D.colSpan)!==null&&a!==void 0?a:C.colSpan)!==null&&n!==void 0?n:P)!==null&&t!==void 0?t:1,ce=(o=(l=(i=D==null?void 0:D.rowSpan)!==null&&i!==void 0?i:C.rowSpan)!==null&&l!==void 0?l:O)!==null&&o!==void 0?o:1,Re=nr(S,ce),j=U(Re,2),ee=j[0],re=j[1],pe=Te(function($e){var ae;g&&re(S,S+ce-1),C==null||(ae=C.onMouseEnter)===null||ae===void 0||ae.call(C,$e)}),Be=Te(function($e){var ae;g&&re(-1,-1),C==null||(ae=C.onMouseLeave)===null||ae===void 0||ae.call(C,$e)});if(he===0||ce===0)return null;var Ae=(c=C.title)!==null&&c!==void 0?c:tr({rowType:_,ellipsis:f,children:ye}),we=Z(y,m,(s={},F(F(F(F(F(F(F(F(F(F(s,"".concat(y,"-fix-left"),ve&&A),"".concat(y,"-fix-left-first"),X&&A),"".concat(y,"-fix-left-last"),N&&A),"".concat(y,"-fix-left-all"),N&&Y&&A),"".concat(y,"-fix-right"),me&&A),"".concat(y,"-fix-right-first"),L&&A),"".concat(y,"-fix-right-last"),R&&A),"".concat(y,"-ellipsis"),f),"".concat(y,"-with-append"),H),"".concat(y,"-fix-sticky"),(ve||me)&&x&&A),F(s,"".concat(y,"-row-hover"),!D&&ee)),C.className,D==null?void 0:D.className),ue={};w&&(ue.textAlign=w);var W=h(h(h(h({},V),C.style),ue),D==null?void 0:D.style),oe=ye;return Ie(oe)==="object"&&!Array.isArray(oe)&&!r.isValidElement(oe)&&(oe=null),f&&(N||L)&&(oe=r.createElement("span",{className:"".concat(y,"-content")},oe)),r.createElement(u,ne({},D,C,{className:we,style:W,title:Ae,scope:v,onMouseEnter:G?pe:void 0,onMouseLeave:G?Be:void 0,colSpan:he!==1?he:null,rowSpan:ce!==1?ce:null}),H,oe)}const He=r.memo(rr);function Cn(e,t,n,a,o){var l=n[e]||{},i=n[t]||{},c,s;l.fixed==="left"?c=a.left[o==="rtl"?t:e]:i.fixed==="right"&&(s=a.right[o==="rtl"?e:t]);var u=!1,p=!1,f=!1,v=!1,d=n[t+1],m=n[e-1],w=d&&d.fixed===void 0||m&&m.fixed===void 0||n.every(function(I){return I.fixed==="left"});if(o==="rtl"){if(c!==void 0){var g=m&&m.fixed==="left";v=!g&&w}else if(s!==void 0){var E=d&&d.fixed==="right";f=!E&&w}}else if(c!==void 0){var b=d&&d.fixed==="left";u=!b&&w}else if(s!==void 0){var k=m&&m.fixed==="right";p=!k&&w}return{fixLeft:c,fixRight:s,lastFixLeft:u,firstFixRight:p,lastFixRight:f,firstFixLeft:v,isSticky:a.isSticky}}var lt=r.createContext({});function ar(e){var t=e.className,n=e.index,a=e.children,o=e.colSpan,l=o===void 0?1:o,i=e.rowSpan,c=e.align,s=te(le,["prefixCls","direction"]),u=s.prefixCls,p=s.direction,f=r.useContext(lt),v=f.scrollColumnIndex,d=f.stickyOffsets,m=f.flattenColumns,w=n+l-1,g=w+1===v?l+1:l,E=Cn(n,n+g-1,m,d,p);return r.createElement(He,ne({className:t,index:n,component:"td",prefixCls:u,record:null,dataIndex:null,align:c,colSpan:g,rowSpan:i,render:function(){return a}},E))}var or=["children"];function lr(e){var t=e.children,n=Le(e,or);return r.createElement("tr",n,t)}function en(e){var t=e.children;return t}en.Row=lr;en.Cell=ar;function ir(e){var t=e.children,n=e.stickyOffsets,a=e.flattenColumns,o=te(le,"prefixCls"),l=a.length-1,i=a[l],c=r.useMemo(function(){return{stickyOffsets:n,flattenColumns:a,scrollColumnIndex:i!=null&&i.scrollbar?l:null}},[i,a,l,n]);return r.createElement(lt.Provider,{value:c},r.createElement("tfoot",{className:"".concat(o,"-summary")},t))}const Je=Fe(ir);var cr=en;function sr(e){return null}function ur(e){return null}function it(e,t,n,a,o,l,i){e.push({record:t,indent:n,index:i});var c=l(t),s=o==null?void 0:o.has(c);if(t&&Array.isArray(t[a])&&s)for(var u=0;u<t[a].length;u+=1)it(e,t[a][u],n+1,a,o,l,u)}function ct(e,t,n,a){var o=r.useMemo(function(){if(n!=null&&n.size){for(var l=[],i=0;i<(e==null?void 0:e.length);i+=1){var c=e[i];it(l,c,0,t,n,a,i)}return l}return e==null?void 0:e.map(function(s,u){return{record:s,indent:0,index:u}})},[e,t,n,a]);return o}function st(e,t,n,a){var o=te(le,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,i=o.expandableType,c=o.expandedKeys,s=o.childrenColumnName,u=o.onTriggerExpand,p=o.rowExpandable,f=o.onRow,v=o.expandRowByClick,d=o.rowClassName,m=i==="nest",w=i==="row"&&(!p||p(e)),g=w||m,E=c&&c.has(t),b=s&&e&&e[s],k=Te(u),I=f==null?void 0:f(e,n),S=I==null?void 0:I.onClick,_=function(B){v&&g&&u(e,B);for(var X=arguments.length,N=new Array(X>1?X-1:0),L=1;L<X;L++)N[L-1]=arguments[L];S==null||S.apply(void 0,[B].concat(N))},P;typeof d=="string"?P=d:typeof d=="function"&&(P=d(e,n,a));var O=Ze(l);return h(h({},o),{},{columnsKey:O,nestExpandable:m,expanded:E,hasNestChildren:b,record:e,onTriggerExpand:k,rowSupportExpand:w,expandable:g,rowProps:h(h({},I),{},{className:Z(P,I==null?void 0:I.className),onClick:_})})}function ut(e){var t=e.prefixCls,n=e.children,a=e.component,o=e.cellComponent,l=e.className,i=e.expanded,c=e.colSpan,s=e.isEmpty,u=te(le,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),p=u.scrollbarSize,f=u.fixHeader,v=u.fixColumn,d=u.componentWidth,m=u.horizonScroll,w=n;return(s?m&&d:v)&&(w=r.createElement("div",{style:{width:d-(f?p:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(t,"-expanded-row-fixed")},w)),r.createElement(a,{className:l,style:{display:i?null:"none"}},r.createElement(He,{component:o,prefixCls:t,colSpan:c},w))}function dt(e,t,n,a,o){var l=e.record,i=e.prefixCls,c=e.columnsKey,s=e.fixedInfoList,u=e.expandIconColumnIndex,p=e.nestExpandable,f=e.indentSize,v=e.expandIcon,d=e.expanded,m=e.hasNestChildren,w=e.onTriggerExpand,g=c[n],E=s[n],b;n===(u||0)&&p&&(b=r.createElement(r.Fragment,null,r.createElement("span",{style:{paddingLeft:"".concat(f*a,"px")},className:"".concat(i,"-row-indent indent-level-").concat(a)}),v({prefixCls:i,expanded:d,expandable:m,record:l,onExpand:w})));var k;return t.onCell&&(k=t.onCell(l,o)),{key:g,fixedInfo:E,appendCellNode:b,additionalCellProps:k||{}}}function dr(e){var t=e.className,n=e.style,a=e.record,o=e.index,l=e.renderIndex,i=e.rowKey,c=e.indent,s=c===void 0?0:c,u=e.rowComponent,p=e.cellComponent,f=e.scopeCellComponent,v=st(a,i,o,s),d=v.prefixCls,m=v.flattenColumns,w=v.expandedRowClassName,g=v.expandedRowRender,E=v.rowProps,b=v.expanded,k=v.rowSupportExpand,I=r.useRef(!1);I.current||(I.current=b);var S=w&&w(a,o,s),_=r.createElement(u,ne({},E,{"data-row-key":i,className:Z(t,"".concat(d,"-row"),"".concat(d,"-row-level-").concat(s),E==null?void 0:E.className,s>=1?S:""),style:h(h({},n),E==null?void 0:E.style)}),m.map(function(K,B){var X=K.render,N=K.dataIndex,L=K.className,R=dt(v,K,B,s,o),H=R.key,T=R.fixedInfo,C=R.appendCellNode,x=R.additionalCellProps;return r.createElement(He,ne({className:L,ellipsis:K.ellipsis,align:K.align,scope:K.rowScope,component:K.rowScope?f:p,prefixCls:d,key:H,record:a,index:o,renderIndex:l,dataIndex:N,render:X,shouldCellUpdate:K.shouldCellUpdate},T,{appendNode:C,additionalProps:x}))})),P;if(k&&(I.current||b)){var O=g(a,o,s+1,b);P=r.createElement(ut,{expanded:b,className:Z("".concat(d,"-expanded-row"),"".concat(d,"-expanded-row-level-").concat(s+1),S),prefixCls:d,component:u,cellComponent:p,colSpan:m.length,isEmpty:!1},O)}return r.createElement(r.Fragment,null,_,P)}const fr=Fe(dr);function vr(e){var t=e.columnKey,n=e.onColumnResize,a=r.useRef();return r.useEffect(function(){a.current&&n(t,a.current.offsetWidth)},[]),r.createElement(pn,{data:t},r.createElement("td",{ref:a,style:{padding:0,border:0,height:0}},r.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function mr(e){var t=e.prefixCls,n=e.columnsKey,a=e.onColumnResize;return r.createElement("tr",{"aria-hidden":"true",className:"".concat(t,"-measure-row"),style:{height:0,fontSize:0}},r.createElement(pn.Collection,{onBatchResize:function(l){l.forEach(function(i){var c=i.data,s=i.size;a(c,s.offsetWidth)})}},n.map(function(o){return r.createElement(vr,{key:o,columnKey:o,onColumnResize:a})})))}function pr(e){var t=e.data,n=e.measureColumnWidth,a=te(le,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=a.prefixCls,l=a.getComponent,i=a.onColumnResize,c=a.flattenColumns,s=a.getRowKey,u=a.expandedKeys,p=a.childrenColumnName,f=a.emptyNode,v=ct(t,p,u,s),d=r.useRef({renderWithProps:!1}),m=l(["body","wrapper"],"tbody"),w=l(["body","row"],"tr"),g=l(["body","cell"],"td"),E=l(["body","cell"],"th"),b;t.length?b=v.map(function(I,S){var _=I.record,P=I.indent,O=I.index,K=s(_,S);return r.createElement(fr,{key:K,rowKey:K,record:_,index:S,renderIndex:O,rowComponent:w,cellComponent:g,scopeCellComponent:E,getRowKey:s,indent:P})}):b=r.createElement(ut,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:w,cellComponent:g,colSpan:c.length,isEmpty:!0},f);var k=Ze(c);return r.createElement(ot.Provider,{value:d.current},r.createElement(m,{className:"".concat(o,"-tbody")},n&&r.createElement(mr,{prefixCls:o,columnsKey:k,onColumnResize:i}),b))}const xr=Fe(pr);var Cr=["expandable"],ft="RC_TABLE_INTERNAL_COL_DEFINE";function yr(e){var t=e.expandable,n=Le(e,Cr),a;return"expandable"in e?a=h(h({},n),t):a=n,a.showExpandColumn===!1&&(a.expandIconColumnIndex=-1),a}var hr=["columnType"];function vt(e){for(var t=e.colWidths,n=e.columns,a=e.columCount,o=[],l=a||n.length,i=!1,c=l-1;c>=0;c-=1){var s=t[c],u=n&&n[c],p=u&&u[ft];if(s||p||i){var f=p||{};f.columnType;var v=Le(f,hr);o.unshift(r.createElement("col",ne({key:c,style:{width:s}},v))),i=!0}}return r.createElement("colgroup",null,o)}var gr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function wr(e,t){return r.useMemo(function(){for(var n=[],a=0;a<t;a+=1){var o=e[a];if(o!==void 0)n[a]=o;else return null}return n},[e.join("_"),t])}var Sr=r.forwardRef(function(e,t){var n=e.className,a=e.noData,o=e.columns,l=e.flattenColumns,i=e.colWidths,c=e.columCount,s=e.stickyOffsets,u=e.direction,p=e.fixHeader,f=e.stickyTopOffset,v=e.stickyBottomOffset,d=e.stickyClassName,m=e.onScroll,w=e.maxContentScroll,g=e.children,E=Le(e,gr),b=te(le,["prefixCls","scrollbarSize","isSticky","getComponent"]),k=b.prefixCls,I=b.scrollbarSize,S=b.isSticky,_=b.getComponent,P=_(["header","table"],"table"),O=S&&!p?0:I,K=r.useRef(null),B=r.useCallback(function(x){Dn(t,x),Dn(K,x)},[]);r.useEffect(function(){var x;function y(z){var A=z,Y=A.currentTarget,G=A.deltaX;G&&(m({currentTarget:Y,scrollLeft:Y.scrollLeft+G}),z.preventDefault())}return(x=K.current)===null||x===void 0||x.addEventListener("wheel",y),function(){var z;(z=K.current)===null||z===void 0||z.removeEventListener("wheel",y)}},[]);var X=r.useMemo(function(){return l.every(function(x){return x.width})},[l]),N=l[l.length-1],L={fixed:N?N.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(k,"-cell-scrollbar")}}},R=r.useMemo(function(){return O?[].concat(Ce(o),[L]):o},[O,o]),H=r.useMemo(function(){return O?[].concat(Ce(l),[L]):l},[O,l]),T=r.useMemo(function(){var x=s.right,y=s.left;return h(h({},s),{},{left:u==="rtl"?[].concat(Ce(y.map(function(z){return z+O})),[0]):y,right:u==="rtl"?x:[].concat(Ce(x.map(function(z){return z+O})),[0]),isSticky:S})},[O,s,S]),C=wr(i,c);return r.createElement("div",{style:h({overflow:"hidden"},S?{top:f,bottom:v}:{}),ref:B,className:Z(n,F({},d,!!d))},r.createElement(P,{style:{tableLayout:"fixed",visibility:a||C?null:"hidden"}},(!a||!w||X)&&r.createElement(vt,{colWidths:C?[].concat(Ce(C),[O]):[],columCount:c+1,columns:H}),g(h(h({},E),{},{stickyOffsets:T,columns:R,flattenColumns:H}))))});const qn=r.memo(Sr);var Rr=function(t){var n=t.cells,a=t.stickyOffsets,o=t.flattenColumns,l=t.rowComponent,i=t.cellComponent,c=t.onHeaderRow,s=t.index,u=te(le,["prefixCls","direction"]),p=u.prefixCls,f=u.direction,v;c&&(v=c(n.map(function(m){return m.column}),s));var d=Ze(n.map(function(m){return m.column}));return r.createElement(l,v,n.map(function(m,w){var g=m.column,E=Cn(m.colStart,m.colEnd,o,a,f),b;return g&&g.onHeaderCell&&(b=m.column.onHeaderCell(g)),r.createElement(He,ne({},m,{scope:g.title?m.colSpan>1?"colgroup":"col":null,ellipsis:g.ellipsis,align:g.align,component:i,prefixCls:p,key:d[w]},E,{additionalProps:b,rowType:"header"}))}))};function Er(e){var t=[];function n(i,c){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;t[s]=t[s]||[];var u=c,p=i.filter(Boolean).map(function(f){var v={key:f.key,className:f.className||"",children:f.title,column:f,colStart:u},d=1,m=f.children;return m&&m.length>0&&(d=n(m,u,s+1).reduce(function(w,g){return w+g},0),v.hasSubColumns=!0),"colSpan"in f&&(d=f.colSpan),"rowSpan"in f&&(v.rowSpan=f.rowSpan),v.colSpan=d,v.colEnd=v.colStart+d-1,t[s].push(v),u+=d,d});return p}n(e,0);for(var a=t.length,o=function(c){t[c].forEach(function(s){!("rowSpan"in s)&&!s.hasSubColumns&&(s.rowSpan=a-c)})},l=0;l<a;l+=1)o(l);return t}var br=function(t){var n=t.stickyOffsets,a=t.columns,o=t.flattenColumns,l=t.onHeaderRow,i=te(le,["prefixCls","getComponent"]),c=i.prefixCls,s=i.getComponent,u=r.useMemo(function(){return Er(a)},[a]),p=s(["header","wrapper"],"thead"),f=s(["header","row"],"tr"),v=s(["header","cell"],"th");return r.createElement(p,{className:"".concat(c,"-thead")},u.map(function(d,m){var w=r.createElement(Rr,{key:m,flattenColumns:o,cells:d,stickyOffsets:n,rowComponent:f,cellComponent:v,onHeaderRow:l,index:m});return w}))};const Jn=Fe(br);function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof t=="number"?t:t.endsWith("%")?e*parseFloat(t)/100:null}function Nr(e,t,n){return r.useMemo(function(){if(t&&t>0){var a=0,o=0;e.forEach(function(v){var d=Qn(t,v.width);d?a+=d:o+=1});var l=Math.max(t,n),i=Math.max(l-a,o),c=o,s=i/o,u=0,p=e.map(function(v){var d=h({},v),m=Qn(t,d.width);if(m)d.width=m;else{var w=Math.floor(s);d.width=c===1?i:w,i-=w,c-=1}return u+=d.width,d});if(u<l){var f=l/u;i=l,p.forEach(function(v,d){var m=Math.floor(v.width*f);v.width=d===p.length-1?i:m,i-=m})}return[p,Math.max(u,l)]}return[e,t]},[e,t,n])}var kr=["children"],Tr=["fixed"];function mt(e){return Dt(e).filter(function(t){return r.isValidElement(t)}).map(function(t){var n=t.key,a=t.props,o=a.children,l=Le(a,kr),i=h({key:n},l);return o&&(i.children=mt(o)),i})}function pt(e){return e.filter(function(t){return t&&Ie(t)==="object"&&!t.hidden}).map(function(t){var n=t.children;return n&&n.length>0?h(h({},t),{},{children:pt(n)}):t})}function fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(n){return n&&Ie(n)==="object"}).reduce(function(n,a,o){var l=a.fixed,i=l===!0?"left":l,c="".concat(t,"-").concat(o),s=a.children;return s&&s.length>0?[].concat(Ce(n),Ce(fn(s,c).map(function(u){return h({fixed:i},u)}))):[].concat(Ce(n),[h(h({key:c},a),{},{fixed:i})])},[])}function Ir(e){return e.map(function(t){var n=t.fixed,a=Le(t,Tr),o=n;return n==="left"?o="right":n==="right"&&(o="left"),h({fixed:o},a)})}function Lr(e,t){var n=e.prefixCls,a=e.columns,o=e.children,l=e.expandable,i=e.expandedKeys,c=e.columnTitle,s=e.getRowKey,u=e.onTriggerExpand,p=e.expandIcon,f=e.rowExpandable,v=e.expandIconColumnIndex,d=e.direction,m=e.expandRowByClick,w=e.columnWidth,g=e.fixed,E=e.scrollWidth,b=e.clientWidth,k=r.useMemo(function(){var N=a||mt(o)||[];return pt(N.slice())},[a,o]),I=r.useMemo(function(){if(l){var N=k.slice();if(!N.includes(ke)){var L=v||0;L>=0&&N.splice(L,0,ke)}var R=N.indexOf(ke);N=N.filter(function(x,y){return x!==ke||y===R});var H=k[R],T;(g==="left"||g)&&!v?T="left":(g==="right"||g)&&v===k.length?T="right":T=H?H.fixed:null;var C=F(F(F(F(F(F({},ft,{className:"".concat(n,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),"title",c),"fixed",T),"className","".concat(n,"-row-expand-icon-cell")),"width",w),"render",function(y,z,A){var Y=s(z,A),G=i.has(Y),ge=f?f(z):!0,ie=p({prefixCls:n,expanded:G,expandable:ge,record:z,onExpand:u});return m?r.createElement("span",{onClick:function(D){return D.stopPropagation()}},ie):ie});return N.map(function(x){return x===ke?C:x})}return k.filter(function(x){return x!==ke})},[l,k,s,i,p,d]),S=r.useMemo(function(){var N=I;return t&&(N=t(N)),N.length||(N=[{render:function(){return null}}]),N},[t,I,d]),_=r.useMemo(function(){return d==="rtl"?Ir(fn(S)):fn(S)},[S,d,E]),P=r.useMemo(function(){for(var N=-1,L=_.length-1;L>=0;L-=1){var R=_[L].fixed;if(R==="left"||R===!0){N=L;break}}if(N>=0)for(var H=0;H<=N;H+=1){var T=_[H].fixed;if(T!=="left"&&T!==!0)return!0}var C=_.findIndex(function(z){var A=z.fixed;return A==="right"});if(C>=0)for(var x=C;x<_.length;x+=1){var y=_[x].fixed;if(y!=="right")return!0}return!1},[_]),O=Nr(_,E,b),K=U(O,2),B=K[0],X=K[1];return[S,B,X,P]}function Hr(e){var t=e.prefixCls,n=e.record,a=e.onExpand,o=e.expanded,l=e.expandable,i="".concat(t,"-row-expand-icon");if(!l)return r.createElement("span",{className:Z(i,"".concat(t,"-row-spaced"))});var c=function(u){a(n,u),u.stopPropagation()};return r.createElement("span",{className:Z(i,F(F({},"".concat(t,"-row-expanded"),o),"".concat(t,"-row-collapsed"),!o)),onClick:c})}function _r(e,t,n){var a=[];function o(l){(l||[]).forEach(function(i,c){a.push(t(i,c)),o(i[n])})}return o(e),a}function Mr(e,t,n){var a=yr(e),o=a.expandIcon,l=a.expandedRowKeys,i=a.defaultExpandedRowKeys,c=a.defaultExpandAllRows,s=a.expandedRowRender,u=a.onExpand,p=a.onExpandedRowsChange,f=a.childrenColumnName,v=o||Hr,d=f||"children",m=r.useMemo(function(){return s?"row":e.expandable&&e.internalHooks===Qe&&e.expandable.__PARENT_RENDER_ICON__||t.some(function(S){return S&&Ie(S)==="object"&&S[d]})?"nest":!1},[!!s,t]),w=r.useState(function(){return i||(c?_r(t,n,d):[])}),g=U(w,2),E=g[0],b=g[1],k=r.useMemo(function(){return new Set(l||E||[])},[l,E]),I=r.useCallback(function(S){var _=n(S,t.indexOf(S)),P,O=k.has(_);O?(k.delete(_),P=Ce(k)):P=[].concat(Ce(k),[_]),b(P),u&&u(!O,S),p&&p(P)},[n,k,t,u,p]);return[a,m,k,v,d,I]}function Pr(e,t,n){var a=e.map(function(o,l){return Cn(l,l,e,t,n)});return tt(function(){return a},[a],function(o,l){return!rt(o,l)})}function xt(e){var t=r.useRef(e),n=r.useState({}),a=U(n,2),o=a[1],l=r.useRef(null),i=r.useRef([]);function c(s){i.current.push(s);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var p=i.current,f=t.current;i.current=[],p.forEach(function(v){t.current=v(t.current)}),l.current=null,f!==t.current&&o({})}})}return r.useEffect(function(){return function(){l.current=null}},[]),[t.current,c]}function Kr(e){var t=r.useRef(null),n=r.useRef();function a(){window.clearTimeout(n.current)}function o(i){t.current=i,a(),n.current=window.setTimeout(function(){t.current=null,n.current=void 0},100)}function l(){return t.current}return r.useEffect(function(){return a},[]),[o,l]}function Fr(){var e=r.useState(-1),t=U(e,2),n=t[0],a=t[1],o=r.useState(-1),l=U(o,2),i=l[0],c=l[1],s=r.useCallback(function(u,p){a(u),c(p)},[]);return[n,i,s]}var Zn=Vt()?window:null;function Or(e,t){var n=Ie(e)==="object"?e:{},a=n.offsetHeader,o=a===void 0?0:a,l=n.offsetSummary,i=l===void 0?0:l,c=n.offsetScroll,s=c===void 0?0:c,u=n.getContainer,p=u===void 0?function(){return Zn}:u,f=p()||Zn;return r.useMemo(function(){var v=!!e;return{isSticky:v,stickyClassName:v?"".concat(t,"-sticky-holder"):"",offsetHeader:o,offsetSummary:i,offsetScroll:s,container:f}},[s,o,i,t,f])}function Br(e,t,n){var a=r.useMemo(function(){var o=t.length,l=function(u,p,f){for(var v=[],d=0,m=u;m!==p;m+=f)v.push(d),t[m].fixed&&(d+=e[m]||0);return v},i=l(0,o,1),c=l(o-1,-1,-1).reverse();return n==="rtl"?{left:c,right:i}:{left:i,right:c}},[e,t,n]);return a}function et(e){var t=e.className,n=e.children;return r.createElement("div",{className:t},n)}var $r=function(t,n){var a,o,l=t.scrollBodyRef,i=t.onScroll,c=t.offsetScroll,s=t.container,u=te(le,"prefixCls"),p=((a=l.current)===null||a===void 0?void 0:a.scrollWidth)||0,f=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,v=p&&f*(f/p),d=r.useRef(),m=xt({scrollLeft:0,isHiddenScrollBar:!1}),w=U(m,2),g=w[0],E=w[1],b=r.useRef({delta:0,x:0}),k=r.useState(!1),I=U(k,2),S=I[0],_=I[1],P=r.useRef(null);r.useEffect(function(){return function(){Vn.cancel(P.current)}},[]);var O=function(){_(!1)},K=function(R){R.persist(),b.current.delta=R.pageX-g.scrollLeft,b.current.x=0,_(!0),R.preventDefault()},B=function(R){var H,T=R||((H=window)===null||H===void 0?void 0:H.event),C=T.buttons;if(!S||C===0){S&&_(!1);return}var x=b.current.x+R.pageX-b.current.x-b.current.delta;x<=0&&(x=0),x+v>=f&&(x=f-v),i({scrollLeft:x/f*(p+2)}),b.current.x=R.pageX},X=function(){P.current=Vn(function(){if(l.current){var R=jn(l.current).top,H=R+l.current.offsetHeight,T=s===window?document.documentElement.scrollTop+window.innerHeight:jn(s).top+s.clientHeight;H-Un()<=T||R>=T-c?E(function(C){return h(h({},C),{},{isHiddenScrollBar:!0})}):E(function(C){return h(h({},C),{},{isHiddenScrollBar:!1})})}})},N=function(R){E(function(H){return h(h({},H),{},{scrollLeft:R/p*f||0})})};return r.useImperativeHandle(n,function(){return{setScrollLeft:N,checkScrollBarVisible:X}}),r.useEffect(function(){var L=qe(document.body,"mouseup",O,!1),R=qe(document.body,"mousemove",B,!1);return X(),function(){L.remove(),R.remove()}},[v,S]),r.useEffect(function(){var L=qe(s,"scroll",X,!1),R=qe(window,"resize",X,!1);return function(){L.remove(),R.remove()}},[s]),r.useEffect(function(){g.isHiddenScrollBar||E(function(L){var R=l.current;return R?h(h({},L),{},{scrollLeft:R.scrollLeft/R.scrollWidth*R.clientWidth}):L})},[g.isHiddenScrollBar]),p<=f||!v||g.isHiddenScrollBar?null:r.createElement("div",{style:{height:Un(),width:f,bottom:c},className:"".concat(u,"-sticky-scroll")},r.createElement("div",{onMouseDown:K,ref:d,className:Z("".concat(u,"-sticky-scroll-bar"),F({},"".concat(u,"-sticky-scroll-bar-active"),S)),style:{width:"".concat(v,"px"),transform:"translate3d(".concat(g.scrollLeft,"px, 0, 0)")}}))};const zr=r.forwardRef($r);var Ct="rc-table",Wr=[],Ar={};function Xr(){return"No Data"}function Dr(e,t){var n=h({rowKey:"key",prefixCls:Ct,emptyText:Xr},e),a=n.prefixCls,o=n.className,l=n.rowClassName,i=n.style,c=n.data,s=n.rowKey,u=n.scroll,p=n.tableLayout,f=n.direction,v=n.title,d=n.footer,m=n.summary,w=n.caption,g=n.id,E=n.showHeader,b=n.components,k=n.emptyText,I=n.onRow,S=n.onHeaderRow,_=n.onScroll,P=n.internalHooks,O=n.transformColumns,K=n.internalRefs,B=n.tailor,X=n.getContainerWidth,N=n.sticky,L=n.rowHoverable,R=L===void 0?!0:L,H=c||Wr,T=!!H.length,C=P===Qe,x=r.useCallback(function(M,$){return mn(b,M)||$},[b]),y=r.useMemo(function(){return typeof s=="function"?s:function(M){var $=M&&M[s];return $}},[s]),z=x(["body"]),A=Fr(),Y=U(A,3),G=Y[0],ge=Y[1],ie=Y[2],ye=Mr(n,H,y),D=U(ye,6),V=D[0],ve=D[1],me=D[2],he=D[3],ce=D[4],Re=D[5],j=u==null?void 0:u.x,ee=r.useState(0),re=U(ee,2),pe=re[0],Be=re[1],Ae=Lr(h(h(h({},n),V),{},{expandable:!!V.expandedRowRender,columnTitle:V.columnTitle,expandedKeys:me,getRowKey:y,onTriggerExpand:Re,expandIcon:he,expandIconColumnIndex:V.expandIconColumnIndex,direction:f,scrollWidth:C&&B&&typeof j=="number"?j:null,clientWidth:pe}),C?O:null),we=U(Ae,4),ue=we[0],W=we[1],oe=we[2],$e=we[3],ae=oe??j,hn=r.useMemo(function(){return{columns:ue,flattenColumns:W}},[ue,W]),Ee=r.useRef(),nn=r.useRef(),q=r.useRef(),gn=r.useRef();r.useImperativeHandle(t,function(){return{nativeElement:Ee.current,scrollTo:function($){var J;if(q.current instanceof HTMLElement){var se=$.index,Q=$.top,Ke=$.key;if(Q){var be;(be=q.current)===null||be===void 0||be.scrollTo({top:Q})}else{var Ne,We=Ke??y(H[se]);(Ne=q.current.querySelector('[data-row-key="'.concat(We,'"]')))===null||Ne===void 0||Ne.scrollIntoView()}}else(J=q.current)!==null&&J!==void 0&&J.scrollTo&&q.current.scrollTo($)}}});var wn=r.useRef(),ht=r.useState(!1),Sn=U(ht,2),gt=Sn[0],Xe=Sn[1],wt=r.useState(!1),Rn=U(wt,2),St=Rn[0],De=Rn[1],Rt=xt(new Map),En=U(Rt,2),Et=En[0],bt=En[1],Nt=Ze(W),bn=Nt.map(function(M){return Et.get(M)}),Nn=r.useMemo(function(){return bn},[bn.join("_")]),Ve=Br(Nn,W,f),de=u&&dn(u.y),xe=u&&dn(ae)||!!V.fixed,_e=xe&&W.some(function(M){var $=M.fixed;return $}),tn=r.useRef(),Me=Or(N,a),Se=Me.isSticky,kt=Me.offsetHeader,Tt=Me.offsetSummary,It=Me.offsetScroll,Lt=Me.stickyClassName,Ht=Me.container,fe=r.useMemo(function(){return m==null?void 0:m(H)},[m,H]),ze=(de||Se)&&r.isValidElement(fe)&&fe.type===en&&fe.props.fixed,rn,Ue,an;de&&(Ue={overflowY:"scroll",maxHeight:u.y}),xe&&(rn={overflowX:"auto"},de||(Ue={overflowY:"hidden"}),an={width:ae===!0?"auto":ae,minWidth:"100%"});var kn=r.useCallback(function(M,$){Ut(Ee.current)&&bt(function(J){if(J.get(M)!==$){var se=new Map(J);return se.set(M,$),se}return J})},[]),_t=Kr(),Tn=U(_t,2),Mt=Tn[0],In=Tn[1];function je(M,$){$&&(typeof $=="function"?$(M):$.scrollLeft!==M&&($.scrollLeft=M,$.scrollLeft!==M&&setTimeout(function(){$.scrollLeft=M},0)))}var Pe=Te(function(M){var $=M.currentTarget,J=M.scrollLeft,se=f==="rtl",Q=typeof J=="number"?J:$.scrollLeft,Ke=$||Ar;if(!In()||In()===Ke){var be;Mt(Ke),je(Q,nn.current),je(Q,q.current),je(Q,wn.current),je(Q,(be=tn.current)===null||be===void 0?void 0:be.setScrollLeft)}var Ne=$||nn.current;if(Ne){var We=Ne.scrollWidth,un=Ne.clientWidth;if(We===un){Xe(!1),De(!1);return}se?(Xe(-Q<We-un),De(-Q>0)):(Xe(Q>0),De(Q<We-un))}}),Pt=Te(function(M){Pe(M),_==null||_(M)}),Ln=function(){xe&&q.current?Pe({currentTarget:q.current}):(Xe(!1),De(!1))},Kt=function($){var J,se=$.width;(J=tn.current)===null||J===void 0||J.checkScrollBarVisible();var Q=Ee.current?Ee.current.offsetWidth:se;C&&X&&Ee.current&&(Q=X(Ee.current,Q)||Q),Q!==pe&&(Ln(),Be(Q))},Hn=r.useRef(!1);r.useEffect(function(){Hn.current&&Ln()},[xe,c,ue.length]),r.useEffect(function(){Hn.current=!0},[]);var Ft=r.useState(0),_n=U(Ft,2),Ye=_n[0],Mn=_n[1],Ot=r.useState(!0),Pn=U(Ot,2),Kn=Pn[0],Bt=Pn[1];r.useEffect(function(){(!B||!C)&&(q.current instanceof Element?Mn(Yn(q.current).width):Mn(Yn(gn.current).width)),Bt(jt("position","sticky"))},[]),r.useEffect(function(){C&&K&&(K.body.current=q.current)});var $t=r.useCallback(function(M){return r.createElement(r.Fragment,null,r.createElement(Jn,M),ze==="top"&&r.createElement(Je,M,fe))},[ze,fe]),zt=r.useCallback(function(M){return r.createElement(Je,M,fe)},[fe]),Fn=x(["table"],"table"),Ge=r.useMemo(function(){return p||(_e?ae==="max-content"?"auto":"fixed":de||Se||W.some(function(M){var $=M.ellipsis;return $})?"fixed":"auto")},[de,_e,W,p,Se]),on,ln={colWidths:Nn,columCount:W.length,stickyOffsets:Ve,onHeaderRow:S,fixHeader:de,scroll:u},On=r.useMemo(function(){return T?null:typeof k=="function"?k():k},[T,k]),Bn=r.createElement(xr,{data:H,measureColumnWidth:de||xe||Se}),$n=r.createElement(vt,{colWidths:W.map(function(M){var $=M.width;return $}),columns:W}),zn=w!=null?r.createElement("caption",{className:"".concat(a,"-caption")},w):void 0,Wt=Gn(n,{data:!0}),Wn=Gn(n,{aria:!0});if(de||Se){var cn;typeof z=="function"?(cn=z(H,{scrollbarSize:Ye,ref:q,onScroll:Pe}),ln.colWidths=W.map(function(M,$){var J=M.width,se=$===W.length-1?J-Ye:J;return typeof se=="number"&&!Number.isNaN(se)?se:0})):cn=r.createElement("div",{style:h(h({},rn),Ue),onScroll:Pt,ref:q,className:Z("".concat(a,"-body"))},r.createElement(Fn,ne({style:h(h({},an),{},{tableLayout:Ge})},Wn),zn,$n,Bn,!ze&&fe&&r.createElement(Je,{stickyOffsets:Ve,flattenColumns:W},fe)));var An=h(h(h({noData:!H.length,maxContentScroll:xe&&ae==="max-content"},ln),hn),{},{direction:f,stickyClassName:Lt,onScroll:Pe});on=r.createElement(r.Fragment,null,E!==!1&&r.createElement(qn,ne({},An,{stickyTopOffset:kt,className:"".concat(a,"-header"),ref:nn}),$t),cn,ze&&ze!=="top"&&r.createElement(qn,ne({},An,{stickyBottomOffset:Tt,className:"".concat(a,"-summary"),ref:wn}),zt),Se&&q.current&&q.current instanceof Element&&r.createElement(zr,{ref:tn,offsetScroll:It,scrollBodyRef:q,onScroll:Pe,container:Ht}))}else on=r.createElement("div",{style:h(h({},rn),Ue),className:Z("".concat(a,"-content")),onScroll:Pe,ref:q},r.createElement(Fn,ne({style:h(h({},an),{},{tableLayout:Ge})},Wn),zn,$n,E!==!1&&r.createElement(Jn,ne({},ln,hn)),Bn,fe&&r.createElement(Je,{stickyOffsets:Ve,flattenColumns:W},fe)));var sn=r.createElement("div",ne({className:Z(a,o,F(F(F(F(F(F(F(F(F(F({},"".concat(a,"-rtl"),f==="rtl"),"".concat(a,"-ping-left"),gt),"".concat(a,"-ping-right"),St),"".concat(a,"-layout-fixed"),p==="fixed"),"".concat(a,"-fixed-header"),de),"".concat(a,"-fixed-column"),_e),"".concat(a,"-fixed-column-gapped"),_e&&$e),"".concat(a,"-scroll-horizontal"),xe),"".concat(a,"-has-fix-left"),W[0]&&W[0].fixed),"".concat(a,"-has-fix-right"),W[W.length-1]&&W[W.length-1].fixed==="right")),style:i,id:g,ref:Ee},Wt),v&&r.createElement(et,{className:"".concat(a,"-title")},v(H)),r.createElement("div",{ref:gn,className:"".concat(a,"-container")},on),d&&r.createElement(et,{className:"".concat(a,"-footer")},d(H)));xe&&(sn=r.createElement(pn,{onResize:Kt},sn));var Xn=Pr(W,Ve,f),At=r.useMemo(function(){return{scrollX:ae,prefixCls:a,getComponent:x,scrollbarSize:Ye,direction:f,fixedInfoList:Xn,isSticky:Se,supportSticky:Kn,componentWidth:pe,fixHeader:de,fixColumn:_e,horizonScroll:xe,tableLayout:Ge,rowClassName:l,expandedRowClassName:V.expandedRowClassName,expandIcon:he,expandableType:ve,expandRowByClick:V.expandRowByClick,expandedRowRender:V.expandedRowRender,onTriggerExpand:Re,expandIconColumnIndex:V.expandIconColumnIndex,indentSize:V.indentSize,allColumnsFixedLeft:W.every(function(M){return M.fixed==="left"}),emptyNode:On,columns:ue,flattenColumns:W,onColumnResize:kn,hoverStartRow:G,hoverEndRow:ge,onHover:ie,rowExpandable:V.rowExpandable,onRow:I,getRowKey:y,expandedKeys:me,childrenColumnName:ce,rowHoverable:R}},[ae,a,x,Ye,f,Xn,Se,Kn,pe,de,_e,xe,Ge,l,V.expandedRowClassName,he,ve,V.expandRowByClick,V.expandedRowRender,Re,V.expandIconColumnIndex,V.indentSize,On,ue,W,kn,G,ge,ie,V.rowExpandable,I,y,me,ce,R]);return r.createElement(le.Provider,{value:At},sn)}var Vr=r.forwardRef(Dr);function Ur(e){return at(Vr,e)}var Oe=Ur();Oe.EXPAND_COLUMN=ke;Oe.INTERNAL_HOOKS=Qe;Oe.Column=sr;Oe.ColumnGroup=ur;Oe.Summary=cr;var yn=vn(null),yt=vn(null);function jr(e,t,n){var a=t||1;return n[e+a]-(n[e]||0)}function Yr(e){var t=e.rowInfo,n=e.column,a=e.colIndex,o=e.indent,l=e.index,i=e.component,c=e.renderIndex,s=e.record,u=e.style,p=e.className,f=e.inverse,v=e.getHeight,d=n.render,m=n.dataIndex,w=n.className,g=n.width,E=te(yt,["columnsOffset"]),b=E.columnsOffset,k=dt(t,n,a,o,l),I=k.key,S=k.fixedInfo,_=k.appendCellNode,P=k.additionalCellProps,O=P.style,K=P.colSpan,B=K===void 0?1:K,X=P.rowSpan,N=X===void 0?1:X,L=a-1,R=jr(L,B,b),H=B>1?g-R:0,T=h(h(h({},O),u),{},{flex:"0 0 ".concat(R,"px"),width:"".concat(R,"px"),marginRight:H,pointerEvents:"auto"}),C=r.useMemo(function(){return f?N<=1:B===0||N===0||N>1},[N,B,f]);C?T.visibility="hidden":f&&(T.height=v==null?void 0:v(N));var x=C?function(){return null}:d,y={};return(N===0||B===0)&&(y.rowSpan=1,y.colSpan=1),r.createElement(He,ne({className:Z(w,p),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:i,prefixCls:t.prefixCls,key:I,record:s,index:l,renderIndex:c,dataIndex:m,render:x,shouldCellUpdate:n.shouldCellUpdate},S,{appendNode:_,additionalProps:h(h({},P),{},{style:T},y)}))}var Gr=["data","index","className","rowKey","style","extra","getHeight"],qr=r.forwardRef(function(e,t){var n=e.data,a=e.index,o=e.className,l=e.rowKey,i=e.style,c=e.extra,s=e.getHeight,u=Le(e,Gr),p=n.record,f=n.indent,v=n.index,d=te(le,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),m=d.scrollX,w=d.flattenColumns,g=d.prefixCls,E=d.fixColumn,b=d.componentWidth,k=te(yn,["getComponent"]),I=k.getComponent,S=st(p,l,a,f),_=I(["body","row"],"div"),P=I(["body","cell"],"div"),O=S.rowSupportExpand,K=S.expanded,B=S.rowProps,X=S.expandedRowRender,N=S.expandedRowClassName,L;if(O&&K){var R=X(p,a,f+1,K),H=N==null?void 0:N(p,a,f),T={};E&&(T={style:F({},"--virtual-width","".concat(b,"px"))});var C="".concat(g,"-expanded-row-cell");L=r.createElement(_,{className:Z("".concat(g,"-expanded-row"),"".concat(g,"-expanded-row-level-").concat(f+1),H)},r.createElement(He,{component:P,prefixCls:g,className:Z(C,F({},"".concat(C,"-fixed"),E)),additionalProps:T},R))}var x=h(h({},i),{},{width:m});c&&(x.position="absolute",x.pointerEvents="none");var y=r.createElement(_,ne({},B,u,{"data-row-key":l,ref:O?null:t,className:Z(o,"".concat(g,"-row"),B==null?void 0:B.className,F({},"".concat(g,"-row-extra"),c)),style:h(h({},x),B==null?void 0:B.style)}),w.map(function(z,A){return r.createElement(Yr,{key:A,component:P,rowInfo:S,column:z,colIndex:A,indent:f,index:a,renderIndex:v,record:p,inverse:c,getHeight:s})}));return O?r.createElement("div",{ref:t},y,L):y}),nt=Fe(qr),Jr=r.forwardRef(function(e,t){var n=e.data,a=e.onScroll,o=te(le,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,i=o.onColumnResize,c=o.getRowKey,s=o.expandedKeys,u=o.prefixCls,p=o.childrenColumnName,f=o.emptyNode,v=o.scrollX,d=te(yn),m=d.sticky,w=d.scrollY,g=d.listItemHeight,E=d.getComponent,b=d.onScroll,k=r.useRef(),I=ct(n,p,s,c),S=r.useMemo(function(){var T=0;return l.map(function(C){var x=C.width,y=C.key;return T+=x,[y,x,T]})},[l]),_=r.useMemo(function(){return S.map(function(T){return T[2]})},[S]);r.useEffect(function(){S.forEach(function(T){var C=U(T,2),x=C[0],y=C[1];i(x,y)})},[S]),r.useImperativeHandle(t,function(){var T={scrollTo:function(x){var y;(y=k.current)===null||y===void 0||y.scrollTo(x)}};return Object.defineProperty(T,"scrollLeft",{get:function(){var x;return((x=k.current)===null||x===void 0?void 0:x.getScrollInfo().x)||0},set:function(x){var y;(y=k.current)===null||y===void 0||y.scrollTo({left:x})}}),T});var P=function(C,x){var y,z=(y=I[x])===null||y===void 0?void 0:y.record,A=C.onCell;if(A){var Y,G=A(z,x);return(Y=G==null?void 0:G.rowSpan)!==null&&Y!==void 0?Y:1}return 1},O=function(C){var x=C.start,y=C.end,z=C.getSize,A=C.offsetY;if(y<0)return null;for(var Y=l.filter(function(j){return P(j,x)===0}),G=x,ge=function(ee){if(Y=Y.filter(function(re){return P(re,ee)===0}),!Y.length)return G=ee,1},ie=x;ie>=0&&!ge(ie);ie-=1);for(var ye=l.filter(function(j){return P(j,y)!==1}),D=y,V=function(ee){if(ye=ye.filter(function(re){return P(re,ee)!==1}),!ye.length)return D=Math.max(ee-1,y),1},ve=y;ve<I.length&&!V(ve);ve+=1);for(var me=[],he=function(ee){var re=I[ee];if(!re)return 1;l.some(function(pe){return P(pe,ee)>1})&&me.push(ee)},ce=G;ce<=D;ce+=1)he(ce);var Re=me.map(function(j){var ee=I[j],re=c(ee.record,j),pe=function(we){var ue=j+we-1,W=c(I[ue].record,ue),oe=z(re,W);return oe.bottom-oe.top},Be=z(re);return r.createElement(nt,{key:j,data:ee,rowKey:re,index:j,style:{top:-A+Be.top},extra:!0,getHeight:pe})});return Re},K=r.useMemo(function(){return{columnsOffset:_}},[_]),B="".concat(u,"-tbody"),X=E(["body","wrapper"]),N=E(["body","row"],"div"),L=E(["body","cell"],"div"),R;if(I.length){var H={};m&&(H.position="sticky",H.bottom=0,Ie(m)==="object"&&m.offsetScroll&&(H.bottom=m.offsetScroll)),R=r.createElement(Yt,{fullHeight:!1,ref:k,prefixCls:"".concat(B,"-virtual"),styles:{horizontalScrollBar:H},className:B,height:w,itemHeight:g||24,data:I,itemKey:function(C){return c(C.record)},component:X,scrollWidth:v,onVirtualScroll:function(C){var x=C.x;a({scrollLeft:x})},onScroll:b,extraRender:O},function(T,C,x){var y=c(T.record,C);return r.createElement(nt,ne({data:T,rowKey:y,index:C},x))})}else R=r.createElement(N,{className:Z("".concat(u,"-placeholder"))},r.createElement(He,{component:L,prefixCls:u},f));return r.createElement(yt.Provider,{value:K},R)}),Qr=Fe(Jr),Zr=function(t,n){var a=n.ref,o=n.onScroll;return r.createElement(Qr,{ref:a,data:t,onScroll:o})};function ea(e,t){var n=e.columns,a=e.scroll,o=e.sticky,l=e.prefixCls,i=l===void 0?Ct:l,c=e.className,s=e.listItemHeight,u=e.components,p=e.onScroll,f=a||{},v=f.x,d=f.y;typeof v!="number"&&(v=1),typeof d!="number"&&(d=500);var m=Te(function(E,b){return mn(u,E)||b}),w=Te(p),g=r.useMemo(function(){return{sticky:o,scrollY:d,listItemHeight:s,getComponent:m,onScroll:w}},[o,d,s,m,w]);return r.createElement(yn.Provider,{value:g},r.createElement(Oe,ne({},e,{className:Z(c,"".concat(i,"-virtual")),scroll:h(h({},a),{},{x:v}),components:h(h({},u),{},{body:Zr}),columns:n,internalHooks:Qe,tailor:!0,ref:t})))}var na=r.forwardRef(ea);function ta(e){return at(na,e)}ta();export{ke as E,cr as F,ft as I,ta as a,Qe as b,mt as c,Ur as g};
