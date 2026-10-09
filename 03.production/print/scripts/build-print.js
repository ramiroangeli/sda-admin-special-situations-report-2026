// Imports (opentype.js as `ot`, pdf-lib as `PL`, pako) are supplied by run-build.mjs.
const {PDFDocument,rgb,cmyk,PDFRawStream,PDFName,PDFDict,LineCapStyle,LineJoinStyle,setLineJoin,pushGraphicsState,popGraphicsState,rectangle,clip,endPath}=PL;
// Fonts: local TTFs (print/fonts/), read through readFileBinary. No network access.
const urls={xb:'fonts/BarlowSemiCondensed-ExtraBold.ttf',sb:'fonts/BarlowSemiCondensed-SemiBold.ttf',md:'fonts/BarlowSemiCondensed-Medium.ttf',bd:'fonts/BarlowSemiCondensed-Bold.ttf',p6:'fonts/playfair-display_latin-600-normal.ttf',p6i:'fonts/playfair-display_latin-600-italic.ttf',p4i:'fonts/playfair-display_latin-400-italic.ttf',bs7:'fonts/big-shoulders-display_latin-700-normal.ttf',bs8:'fonts/big-shoulders-display_latin-800-normal.ttf'};
const F={};await Promise.all(Object.entries(urls).map(async([k,u])=>{F[k]=ot.parse(await (await readFileBinary(u)).arrayBuffer())}));
// Interior = the PDF produced by the WeasyPrint engine (INTERIOR_PDF, resolved by run-build.mjs).
const contentBytes=new Uint8Array(await (await readFileBinary('interior.pdf')).arrayBuffer());
const SUBJ_PRINT='PROVISIONAL print artwork - requires printer preflight approval (ICC/CMYK profile and binding not yet confirmed)';
const SUBJ_DIGITAL='Digital / proof edition (CMYK approximation, not ICC-managed)';
const BUILD_DATE=new Date((+process.env.SOURCE_DATE_EPOCH||1759276800)*1000);
const GHOST={size:130,lh:0.74,left:90,top:820,color:'#093870'};
function measure(f,s,size,tr){const g=f.stringToGlyphs(s);let x=0;const pos=[];g.forEach((gl,i)=>{pos.push(x);x+=gl.advanceWidth*size/f.unitsPerEm+tr*size;if(i<g.length-1)x+=f.getKerningValue(gl,g[i+1])*size/f.unitsPerEm});return{g,pos,w:x}}
function T(fk,s,size,x,top,lh,tr,c){const f=F[fk];const u=f.unitsPerEm,A=f.tables.hhea.ascender,D=-f.tables.hhea.descender;const base=top+(lh*size-(A+D)*size/u)/2+A*size/u;const m=measure(f,s,size,tr);let d='';m.g.forEach((gl,i)=>{d+=gl.getPath(x+m.pos[i],base,size).toPathData(3)});return{t:'fill',d,c,w:m.w}}
const W=(fk,s,size,tr)=>measure(F[fk],s,size,tr).w;
function xf(d,ox,oy,s){let i=0;return d.replace(/-?\d*\.?\d+/g,n=>{const v=+n;return ((i++%2===0)?ox+(v-18)*s:oy+(v-24)*s).toFixed(3)})}
function circ(cx,cy,r){const k=0.5523*r;return `M${cx+r} ${cy} C${cx+r} ${cy+k} ${cx+k} ${cy+r} ${cx} ${cy+r} C${cx-k} ${cy+r} ${cx-r} ${cy+k} ${cx-r} ${cy} C${cx-r} ${cy-k} ${cx-k} ${cy-r} ${cx} ${cy-r} C${cx+k} ${cy-r} ${cx+r} ${cy-k} ${cx+r} ${cy} Z`}
function logo(ox,oy,s,house,acc){return[
 {t:'stroke',d:xf('M28 108 L28 58 L64 28 L100 58 L100 108',ox,oy,s),c:house,w:7*s,round:true},
 {t:'stroke',d:xf('M22 108 L106 108',ox,oy,s),c:house,w:7*s,round:true},
 {t:'fill',d:circ(ox+(56-18)*s,oy+(63-24)*s,6.5*s),c:acc},
 {t:'stroke',d:xf('M52 108 C50 90 50 78 56 73 C62 68 76 67 88 55',ox,oy,s),c:acc,w:7*s,round:true}]}
function copyright(left,top,c){const cx=left+10.5,cy=top+10.5;const cw=W('bd','C',12.5,0);return[
 {t:'stroke',d:circ(cx,cy,9.65),c,w:1.7},T('bd','C',12.5,cx-cw/2,cy-6.25,1,0,c),T('bd','SDAHC RESEARCH',20,left+29,top+0.5,1,0.22,c)]}
const chev=(a,b,c)=>[{t:'stroke',d:a,c,w:54},{t:'stroke',d:b,c,w:54}];
const back=[{t:'rect',x:-15,y:-15,w:1080,h:1515,c:'#06336B'},
 ...chev('M-130 1880 L1050 995 L2230 1880','M470 1790 L1050 1355 L1630 1790','#1B57A6'),
 ...['SDA','HOME','CHOICES'].map((s,i)=>T('xb',s,GHOST.size,GHOST.left,GHOST.top+i*GHOST.size*GHOST.lh,GHOST.lh,-0.01,GHOST.color)),
 ...logo(95,88,72/92,'#FFFFFF','#8FB7D8'),
 T('p6','An SDA appointment',76,95,315,1.1,-0.01,'#FFFFFF'),
 T('p6','is not one asset.',76,95,315+83.6,1.1,-0.01,'#FFFFFF'),
 T('p6i','It is two.',76,95,315+167.2,1.1,-0.01,'#8FB7D8'),
 ...copyright(95,1379,'#FFFFFF')];
const badgeTw=W('md','SPECIALIST DISABILITY ACCOMMODATION',22,0.14);
const crTw=W('bd','SDAHC RESEARCH',20,0.22);
const front=[{t:'rect',x:-15,y:-15,w:1080,h:1515,c:'#ECE8E4'},
 ...chev('M-1180 1880 L0 995 L1180 1880','M-580 1790 L0 1355 L580 1790','#C8CCD1'),
 {t:'rect',x:95,y:123,w:40,h:2,c:'#0476D9'},
 T('sb','2026 EDITION',22,151,113,1,0.3,'#06336B'),
 ...logo(883,88,72/92,'#06336B','#0476D9'),
 {t:'rect',x:95,y:179,w:860,h:1.5,c:'#A7AFB9'},
 T('bs8','SDA',300,95,224.4,1,0,'#142434'),
 T('bs7','Administration &',120,95,509.7,1,0,'#142434'),
 T('bs7','Special Situations',120,95,619.7,1,0,'#142434'),
 T('p4i','Report',84,95,746.1,1,-0.01,'#4D6585'),
 {t:'rect',x:95,y:857,w:392,h:2,c:'#748490'},
 {t:'rect',x:95,y:887,w:64+badgeTw,h:66,c:'#4D6585'},
 T('md','SPECIALIST DISABILITY ACCOMMODATION',22,127,909,1,0.14,'#FFFFFF'),
 ...copyright(959.4-crTw-29,1379,'#122A56')];
const hdr='SDA ADMINISTRATION & SPECIAL SITUATIONS';const hw=W('sb',hdr,16,0.3);
const air1=[{t:'rect',x:0,y:0,w:1050,h:1485,c:'#ECE8E4'},...chev('M-100 1449 L525 980 L1150 1449','M325 1490 L525 1340 L725 1490','#C8CCD1'),T('sb',hdr,16,525-hw/2,120,1,0.3,'#4D6585')];
const air2=[{t:'rect',x:0,y:0,w:1050,h:1485,c:'#06336B'},...chev('M-100 1449 L525 980 L1150 1449','M325 1490 L525 1340 L725 1490','#1B57A6'),...logo(497,1160,56/92,'#FFFFFF','#8FB7D8')];

// Contents data is generated from pages.yaml (via build.py build_toc_data -> contents.json); only the
// typesetting (line breaks at 226 px, 23.4 px leading, 20 px gap between entries) is computed here.
function layoutContents(groups){const wrap=(t)=>{const out=[];let cur='';for(const w of t.split(' ')){const tr=cur?cur+' '+w:w;if(cur&&W('md',tr,18,0)>226){out.push(cur);cur=w}else cur=tr}out.push(cur);return out};
 return groups.map((g,i)=>{let top=800;const items=g.entries.map(e=>{const lines=wrap(e.title);const it={p:'p'+e.number,lines,top};top+=lines.length*23.4+20;return it});return{n:String(i+1).padStart(2,'0'),lab:g.label_lines||[g.name],items,end:top}})}
const CT=layoutContents(JSON.parse(await readFile('contents.json')));
const navy='#06336B',lb='#8FB7D8';
const rh=()=>{const t='SDA ADMINISTRATION & SPECIAL SITUATIONS';const tw=W('sb',t,13,0.3);return [T('sb',t,13,958.9-tw,70,1,0.3,lb),{t:'rect',x:95,y:100,w:860,h:1,c:'#1B57A6'}]};
const colOps=(sec,x)=>[{t:'rect',x:x-6,y:695,w:12,h:12,c:'#0476D9'},T('bs8',sec.n,140,x,556,1,0,'#FFFFFF'),
 ...sec.lab.map((l,i)=>T('sb',l,14,x,725+i*20,20/14,0.22,'#FFFFFF')),
 ...sec.items.flatMap(it=>[T('sb',it.p,17,x,it.top,23.4/17,0,lb),...it.lines.map((l,i)=>T('md',l,18,x+44,it.top+i*23.4,1.3,0,'#FFFFFF'))])];
const cols=[95,390,685];
const contL=[{t:'rect',x:0,y:0,w:1050,h:1485,c:navy},...rh(),{t:'rect',x:95,y:205,w:40,h:2,c:'#0476D9'},T('sb','UNDERSTAND',13,151,199.5,1,0.3,lb),
 T('p6','Contents',150,88,250,1,-0.01,'#FFFFFF'),{t:'rect',x:95,y:699,w:955,h:2,c:'#1B57A6'},...CT.slice(0,3).flatMap((sec,i)=>colOps(sec,cols[i])),
 T('md','© 2026 SDAHC Research',13,95,1390,1,0,lb)];
const contR=[{t:'rect',x:0,y:0,w:1050,h:1485,c:navy},...rh(),...logo(883,150,72/92,'#FFFFFF',lb),{t:'rect',x:0,y:699,w:955,h:2,c:'#1B57A6'},...CT.slice(3).flatMap((sec,i)=>colOps(sec,cols[i]))];
const k=72/25.4/5, mm=72/25.4, A4w=595.276, A4h=841.89, bl=3*mm, sl=10*mm;
const TBL=[['06336B',100,78,22,18],['1B57A6',92,64,4,0],['0476D9',86,48,0,0],['8FB7D8',45,18,5,0],['ECE8E4',6,7,9,0],['C8CCD1',21,14,12,0],['142434',86,68,45,52],['4D6585',75,54,28,8],['A7AFB9',36,25,20,2],['748490',57,40,33,8],['122A56',100,85,30,25],['093870',100,74,16,10],['FFFFFF',0,0,0,0]].map(([h,...v])=>[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16),...v.map(x=>x/100)]);
function toCmyk(r,g,b){const R8=r*255,G8=g*255,B8=b*255;for(const t of TBL)if(Math.abs(t[0]-R8)<=3&&Math.abs(t[1]-G8)<=3&&Math.abs(t[2]-B8)<=3)return t.slice(3);
 const mx=Math.max(r,g,b),mn=Math.min(r,g,b);if(mx-mn<0.02)return[0,0,0,1-(r+g+b)/3];
 const c=1-r,m=1-g,y=1-b,K=0.75*Math.min(c,m,y);return[(c-K)/(1-K),(m-K)/(1-K),(y-K)/(1-K),K]}
const col=h=>{const v=toCmyk(parseInt(h.slice(1,3),16)/255,parseInt(h.slice(3,5),16)/255,parseInt(h.slice(5,7),16)/255);return cmyk(...v)};
const f4=x=>(Math.round(x*10000)/10000).toString();
async function cmykify(d){const ctx=d.context;const contentRefs=new Set();
 for(const p of d.getPages()){const c=p.node.get(PDFName.of('Contents'));const arr=c&&c.asArray?c.asArray():[c];arr.forEach(r=>r&&contentRefs.add(r.toString()));
  const g=p.node.get(PDFName.of('Group'));const gd=g&&ctx.lookup(g);if(gd instanceof PDFDict&&gd.get(PDFName.of('CS')))gd.set(PDFName.of('CS'),PDFName.of('DeviceCMYK'));}
 let nOps=0,nImg=0,left=0;
 for(const [ref,obj] of ctx.enumerateIndirectObjects()){if(!(obj instanceof PDFRawStream))continue;const dict=obj.dict;const st=String(dict.get(PDFName.of('Subtype')));const filt=String(dict.get(PDFName.of('Filter')));
  if(st==='/Image'){if(String(dict.get(PDFName.of('ColorSpace')))!=='/DeviceRGB'||filt!=='/FlateDecode')continue;
   const w=dict.get(PDFName.of('Width')).asNumber(),h=dict.get(PDFName.of('Height')).asNumber();let px=pako.inflate(obj.contents);if(dict.get(PDFName.of('DecodeParms'))){const rb=w*3,o=new Uint8Array(w*h*3);for(let y=0;y<h;y++){const ft=px[y*(rb+1)],si=y*(rb+1)+1,di=y*rb;for(let x=0;x<rb;x++){const raw=px[si+x],L=x>=3?o[di+x-3]:0,U=y>0?o[di-rb+x]:0,UL=(x>=3&&y>0)?o[di-rb+x-3]:0;let v;if(ft===0)v=raw;else if(ft===1)v=raw+L;else if(ft===2)v=raw+U;else if(ft===3)v=raw+((L+U)>>1);else{const p=L+U-UL,pa=Math.abs(p-L),pb=Math.abs(p-U),pc=Math.abs(p-UL);v=raw+((pa<=pb&&pa<=pc)?L:(pb<=pc?U:UL))}o[di+x]=v&255}}px=o}if(px.length<w*h*3)continue;const cache=new Map();
   const out=new Uint8Array(w*h*4);for(let q=0;q<w*h;q++){const key=(px[q*3]<<16)|(px[q*3+1]<<8)|px[q*3+2];let v=cache.get(key);if(!v){v=toCmyk(px[q*3]/255,px[q*3+1]/255,px[q*3+2]/255);cache.set(key,v)}for(let z=0;z<4;z++)out[q*4+z]=Math.round(Math.max(0,Math.min(1,v[z]))*255)}
   const nd=dict.clone(ctx);nd.set(PDFName.of('ColorSpace'),PDFName.of('DeviceCMYK'));nd.delete(PDFName.of('DecodeParms'));ctx.assign(ref,PDFRawStream.of(nd,pako.deflate(out)));nImg++;continue}
  if(!(st==='/Form'||contentRefs.has(ref.toString())))continue;
  if(st==='/Form'){const g=dict.get(PDFName.of('Group'));const gd=g&&ctx.lookup(g);if(gd instanceof PDFDict&&gd.get(PDFName.of('CS')))gd.set(PDFName.of('CS'),PDFName.of('DeviceCMYK'));}
  let bytes=filt==='/FlateDecode'?pako.inflate(obj.contents):(filt==='undefined'?obj.contents:null);if(!bytes)continue;
  let t='';for(let q=0;q<bytes.length;q+=8192)t+=String.fromCharCode.apply(null,bytes.subarray(q,q+8192));
  t=t.replace(/(?<=^|\s)(-?\d*\.?\d+)\s+(-?\d*\.?\d+)\s+(-?\d*\.?\d+)\s+(rg|RG)(?=\s|$|[\/\[<(])/g,(m,a,b,c,op)=>{nOps++;const v=toCmyk(+a,+b,+c);return v.map(f4).join(' ')+' '+(op==='rg'?'k':'K')});
  left+=(t.match(/\s(rg|RG)\s/g)||[]).length;
  const ob=new Uint8Array(t.length);for(let q=0;q<t.length;q++)ob[q]=t.charCodeAt(q)&255;
  const nd=dict.clone(ctx);nd.set(PDFName.of('Filter'),PDFName.of('FlateDecode'));nd.delete(PDFName.of('DecodeParms'));ctx.assign(ref,PDFRawStream.of(nd,pako.deflate(ob)));}
 log('cmykify ops',nOps,'imgs',nImg,'rg left',left)}
function draw(page,ops,ox,oy){for(const o of ops){
 if(o.t==='rect')page.drawRectangle({x:ox+o.x*k,y:oy-(o.y+o.h)*k,width:o.w*k,height:o.h*k,color:col(o.c)});
 else if(o.t==='fill')page.drawSvgPath(o.d,{x:ox,y:oy,scale:k,color:col(o.c)});
 else{page.pushOperators(setLineJoin(o.round?LineJoinStyle.Round:LineJoinStyle.Miter));page.drawSvgPath(o.d,{x:ox,y:oy,scale:k,borderColor:col(o.c),borderWidth:o.w,borderLineCap:o.round?LineCapStyle.Round:LineCapStyle.Butt});page.pushOperators(setLineJoin(LineJoinStyle.Miter));}}}
function clipped(page,x,y,w,h,fn){page.pushOperators(pushGraphicsState(),rectangle(x,y,w,h),clip(),endPath());fn();page.pushOperators(popGraphicsState())}
function marks(page,tx,ty,tw,th,folds=[]){const L=5*mm,off=bl+1*mm,blk=cmyk(1,1,1,1),t=0.25;
 const line=(x1,y1,x2,y2)=>page.drawLine({start:{x:x1,y:y1},end:{x:x2,y:y2},thickness:t,color:blk});
 for(const x of [tx,tx+tw]){line(x,ty-off,x,ty-off-L);line(x,ty+th+off,x,ty+th+off+L)}
 for(const y of [ty,ty+th]){line(tx-off,y,tx-off-L,y);line(tx+tw+off,y,tx+tw+off+L,y)}
 for(const x of folds){line(x,ty-off,x,ty-off-L);line(x,ty+th+off,x,ty+th+off+L)}}
const save=async(d,name)=>saveFile(name,new Blob([await d.save()],{type:'application/pdf'}));
async function single(ops,name,title){const d=await PDFDocument.create();d.setTitle(title);d.setAuthor('SDAHC Research');d.setSubject(SUBJ_PRINT);d.setCreationDate(BUILD_DATE);d.setModificationDate(BUILD_DATE);
 const p=d.addPage([A4w+2*(bl+sl),A4h+2*(bl+sl)]);const tx=sl+bl,ty=sl+bl;
 clipped(p,sl,sl,A4w+2*bl,A4h+2*bl,()=>draw(p,ops,tx,ty+A4h));
 marks(p,tx,ty,A4w,A4h);p.setTrimBox(tx,ty,A4w,A4h);p.setBleedBox(sl,sl,A4w+2*bl,A4h+2*bl);await save(d,name)}
await single(front,'print/SDA-AdminSS-2026_Front-Cover_A4_3mm-bleed.pdf','SDA Admin & SS Report 2026 - Front cover');
await single(back,'print/SDA-AdminSS-2026_Back-Cover_A4_3mm-bleed.pdf','SDA Admin & SS Report 2026 - Back cover');
{const d=await PDFDocument.create();d.setTitle('SDA Admin & SS Report 2026 - Cover spread');d.setAuthor('SDAHC Research');d.setSubject(SUBJ_PRINT);d.setCreationDate(BUILD_DATE);d.setModificationDate(BUILD_DATE);
 const tw=2*A4w;const p=d.addPage([tw+2*(bl+sl),A4h+2*(bl+sl)]);const tx=sl+bl,ty=sl+bl;
 clipped(p,sl,sl,A4w+bl,A4h+2*bl,()=>draw(p,back,tx,ty+A4h));
 clipped(p,tx+A4w,sl,A4w+bl,A4h+2*bl,()=>draw(p,front,tx+A4w,ty+A4h));
 marks(p,tx,ty,tw,A4h,[tx+A4w]);p.setTrimBox(tx,ty,tw,A4h);p.setBleedBox(sl,sl,tw+2*bl,A4h+2*bl);
 await save(d,'print/SDA-AdminSS-2026_Cover-Spread_420x297_3mm-bleed.pdf')}
{const SW=3*mm;const d=await PDFDocument.create();d.setTitle('SDA Admin & SS Report 2026 - Spine');d.setAuthor('SDAHC Research');d.setSubject(SUBJ_PRINT);d.setCreationDate(BUILD_DATE);d.setModificationDate(BUILD_DATE);
 const p=d.addPage([SW+2*(bl+sl),A4h+2*(bl+sl)]);const tx=sl+bl,ty=sl+bl;p.drawRectangle({x:sl,y:sl,width:SW+2*bl,height:A4h+2*bl,color:col('#06336B')});
 marks(p,tx,ty,SW,A4h);p.setTrimBox(tx,ty,SW,A4h);p.setBleedBox(sl,sl,SW+2*bl,A4h+2*bl);await save(d,'print/SDA-AdminSS-2026_Spine_3mm_3mm-bleed.pdf')}
async function book(name,title,withCovers){const d=await PDFDocument.create();d.setTitle(title);d.setAuthor('SDAHC Research');d.setSubject(withCovers?SUBJ_DIGITAL:SUBJ_PRINT);d.setCreationDate(BUILD_DATE);d.setModificationDate(BUILD_DATE);
 const pg=ops=>{const p=d.addPage([A4w,A4h]);draw(p,ops,0,A4h)};
 const src=await PDFDocument.load(contentBytes);await cmykify(src);const n=src.getPageCount();
 const cp=await d.copyPages(src,[...Array(n-1).keys()].map(i=>i+1));
 if(withCovers)pg(front);pg(air1);d.addPage(cp[0]);pg(contL);pg(contR);cp.slice(2).forEach(p=>d.addPage(p));pg(air2);if(withCovers)pg(back);
 log(name,d.getPageCount());await save(d,name)}
// Metadata title carries the full approved report title (the supplied 28-page PDF had the short form).
await book('SDA-AdminSS-Report-2026_Complete.pdf','Specialist Disability Accommodation Administration & Special Situations Report 2026',true);
await book('print/SDA-AdminSS-2026_Interior_Air-pages+Content.pdf','SDA Admin & SS Report 2026 - Interior',false);
log('ghost CHOICES width',W('xb','CHOICES',GHOST.size,-0.01));
