(function(){
var W=window.WEDDING,$=function(i){return document.getElementById(i)};
document.title=W.groom+" & "+W.bride+" | Wedding Invitation";

/* ---------- fill content ---------- */
$("mono").textContent=W.monogram;$("blessing").textContent=W.blessing;$("tag").textContent=W.tagline;
$("invite").textContent=W.inviteLine;$("groom").textContent=W.groom;$("bride").textContent=W.bride;
$("gp").textContent=W.groomParents;$("bp").textContent=W.brideParents;
$("dDay").textContent=W.dateDay;$("dMon").textContent=W.dateMonth;$("dYr").textContent=W.dateYear;
$("muT").textContent=W.muhurat.title;$("muLab").textContent=W.muhurat.label;$("muTime").textContent=W.muhurat.time;$("muX").textContent=W.muhurat.text;
$("vName").textContent=W.venueName;$("vNote").textContent=W.venueNote||"";$("vCity").textContent=W.venueCity||"";$("evEyebrow").textContent=W.eventsEyebrow;$("dEyebrow").textContent=W.dressEyebrow;$("dTitle").textContent=W.dressTitle;if(W.dressImage){$("rack").src=W.dressImage;$("rack").hidden=false}$("vAddr").textContent=W.venueAddress;
$("rsvpBy").textContent=W.rsvpBy;$("closeTxt").textContent=W.closing;$("fam").textContent=W.families;$("mono2").textContent=W.monogram;$("clNames").textContent=W.groom+" & "+W.bride;$("clDate").textContent=W.dateDay+" · "+W.dateMonth+" · "+W.dateYear;$("clTag").textContent=W.hashtag||("#"+W.groom+"Weds"+W.bride);
var cb=$("coverBg");cb.style.backgroundImage=(W.cover?"url('"+W.cover+"'),":"")+W.coverGradient;
if(W.couplePhoto){$("couplePhoto").src=W.couplePhoto;$("coupleWrap").hidden=false}
if(W.venueImage){$("vimg").src=W.venueImage}else{$("vimgWrap").hidden=true}
if(W.gallery&&W.gallery.length){$("gallery").hidden=false;$("gal").innerHTML=W.gallery.map(function(g){return '<img class="reveal-up" loading="lazy" src="'+g+'" alt="">'}).join("")}
var q=encodeURIComponent(W.mapQuery||W.venueAddress);
$("mapBtn").href="https://www.google.com/maps/search/?api=1&query="+q;
$("tl").innerHTML=W.events.map(function(e){return '<div class="ev reveal-up">'+(e.image?'<img class="pic" loading="lazy" src="'+e.image+'" alt="'+e.title+'" style="object-position:'+(e.focus||'center')+'">':'')+'<div class="d">'+e.date+' · '+e.time+'</div><h3>'+e.title+'</h3><p>'+e.note+'</p></div>'}).join("")+'<i class="tlend">✦</i>';
$("dressList").innerHTML=W.dressCode.map(function(d){return '<div class="lk reveal-up"><div class="tx"><b>'+d.event+'</b><span>'+d.look.split("|").join("<br>")+'</span></div>'+(d.image?'<img loading="lazy" src="'+d.image+'" alt="'+d.event+' outfits">':'')+'</div>'}).join("");

/* ---------- glitter burst (circle of sparkles) ---------- */
var cv=$("fx"),cx=cv.getContext("2d"),P=[],raf=0,dpr=Math.min(2,window.devicePixelRatio||1);
function size(){cv.width=innerWidth*dpr;cv.height=innerHeight*dpr}size();addEventListener("resize",size);
var COL=["#fff3c8","#f0d99a","#ffffff","#e8b86a","#f6c6d2"];
function star(x,y,r,rot){cx.beginPath();for(var i=0;i<8;i++){var a=rot+i*Math.PI/4,rr=i%2?r*.28:r;cx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}cx.closePath();cx.fill()}
function burst(x,y,big){
  var tiny=big==="tiny";var n=tiny?9:(big?300:110);
  for(var i=0;i<n;i++){var a=i/n*Math.PI*2+Math.random()*.03,s=(tiny?2:(big?7:4))+Math.random()*(big?1.4:.8);
    P.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:0,L:(big?95:70)+Math.random()*30,r:1.2+Math.random()*(big?3.4:2.4),c:COL[i%5],t:Math.random()*6,k:Math.random()<.35})}
  for(var j=0;j<(tiny?5:(big?160:50));j++){var b=Math.random()*Math.PI*2,sp=Math.random()*(big?6:3);
    P.push({x:x,y:y,vx:Math.cos(b)*sp,vy:Math.sin(b)*sp,l:0,L:60+Math.random()*60,r:1+Math.random()*2.6,c:COL[j%5],t:Math.random()*6,k:Math.random()<.5})}
  if(!tiny)P.push({ring:1,x:x,y:y,r:10,l:0,L:big?70:45,max:big?Math.max(innerWidth,innerHeight)*.8:90});
  if(!raf)raf=requestAnimationFrame(loop)}
function loop(){cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,innerWidth,innerHeight);
  for(var i=P.length-1;i>=0;i--){var p=P[i];p.l++;if(p.l>p.L){P.splice(i,1);continue}var u=p.l/p.L;
    if(p.ring){var rr=p.r+(p.max-p.r)*(1-Math.pow(1-u,3));var g=cx.createRadialGradient(p.x,p.y,rr*.9,p.x,p.y,rr*1.04);
      g.addColorStop(0,"rgba(255,230,160,0)");g.addColorStop(.7,"rgba(255,236,180,"+(.55*(1-u))+")");g.addColorStop(1,"rgba(255,236,180,0)");cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,rr*1.04,0,7);cx.fill();continue}
    p.x+=p.vx;p.y+=p.vy;p.vx*=.955;p.vy=p.vy*.955+.035;
    var tw=.55+.45*Math.sin(p.l*.5+p.t);cx.globalAlpha=Math.max(0,(1-u))*tw;cx.fillStyle=p.c;
    if(p.k)star(p.x,p.y,p.r*2.2,p.l*.1);else{cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()}}
  cx.globalAlpha=1;raf=P.length?requestAnimationFrame(loop):0}

/* ---------- petals ---------- */
var pet=$("petals");
function petal(){var p=document.createElement("div");p.className="petal";p.style.left=Math.random()*100+"vw";
  var s=14+Math.random()*16;p.style.width=s+"px";p.style.height=s*1.3+"px";
  p.style.setProperty("--dx",(Math.random()*160-80)+"px");p.style.setProperty("--rot",(300+Math.random()*400)+"deg");
  var d=8+Math.random()*7;p.style.animationDuration=d+"s";pet.appendChild(p);setTimeout(function(){p.remove()},d*1000)}

/* ---------- music ---------- */
var audio=null,mb=$("musicBtn");
if(W.music){audio=new Audio(W.music);audio.loop=true;audio.volume=.55;
  audio.addEventListener("canplaythrough",function(){mb.classList.add("has")},{once:true});
  audio.addEventListener("error",function(){audio=null});
  mb.onclick=function(){if(!audio)return;if(audio.paused){audio.play();mb.classList.remove("off")}else{audio.pause();mb.classList.add("off")}}}

/* ---------- open the invitation ---------- */
var env=$("env"),opened=false,seal=$("seal");
try{history.scrollRestoration='manual'}catch(e){}
function top0(){var h=document.documentElement;h.style.scrollBehavior='auto';window.scrollTo(0,0);h.scrollTop=0;document.body.scrollTop=0;setTimeout(function(){h.style.scrollBehavior=''},60)}
top0();
function open(){if(opened)return;opened=true;top0();
  var r=seal.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  env.style.setProperty("--cx",x+"px");env.style.setProperty("--cy",y+"px");
  burst(x,y,true);setTimeout(function(){burst(x,y,false)},260);
  document.body.classList.add("pre");
  setTimeout(function(){env.classList.add("opened")},380);
  if(audio)audio.play().catch(function(){});
  setTimeout(function(){document.body.classList.remove("locked");document.body.classList.add("in");top0();foilDraw()},1500);
  setTimeout(function(){env.classList.add("gone")},2300);
  for(var i=0;i<12;i++)setTimeout(petal,900+i*140);setInterval(petal,700)}
env.addEventListener("click",open);

/* ---------- scroll reveal ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal-up").forEach(function(n,i){n.style.transitionDelay=(i%4)*.08+"s";io.observe(n)});

/* ---------- save the date: foil that scratches away on tap ---------- */
var sd=$("sdate"),scr=$("scr"),KEY="wsd_"+(W.groom+W.bride).toLowerCase().replace(/\W/g,""),scratching=false;
try{if(W.rememberReveal&&localStorage.getItem(KEY))sd.classList.add("done")}catch(e){}
function foilDraw(){if(sd.classList.contains("done")||scratching)return;var r=sd.getBoundingClientRect(),w=r.width,h=r.height;if(!w)return;
  scr.width=w*dpr;scr.height=h*dpr;scr.style.width=w+"px";scr.style.height=h+"px";var c=scr.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";
  var g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,"#c59678");g.addColorStop(.28,"#efd5bc");g.addColorStop(.5,"#d2a487");g.addColorStop(.74,"#f5e0c9");g.addColorStop(1,"#c3957a");c.fillStyle=g;c.fillRect(0,0,w,h);
  var s=7;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<260;i++){c.fillStyle="rgba(255,255,255,"+(.12+rnd()*.4)+")";c.beginPath();c.arc(rnd()*w,rnd()*h,.5+rnd()*1.3,0,7);c.fill()}
  c.strokeStyle="rgba(255,255,255,.14)";c.lineWidth=1;for(var k=-h;k<w;k+=9){c.beginPath();c.moveTo(k,h);c.lineTo(k+h,0);c.stroke()}
  c.strokeStyle="rgba(107,22,48,.35)";c.lineWidth=1;c.strokeRect(6.5,6.5,w-13,h-13);c.strokeStyle="rgba(255,255,255,.55)";c.strokeRect(10.5,10.5,w-21,h-21);
  c.fillStyle="#4d0f22";c.textAlign="center";c.textBaseline="middle";c.font='30px "Great Vibes",cursive';c.fillText(W.dateReveal,w/2,h/2-8);
  c.font='500 9.5px Jost,sans-serif';c.fillStyle="#6b1630";if("letterSpacing" in c)c.letterSpacing="3px";c.fillText("✦  TAP  ✦",w/2,h/2+22)}
if(!sd.classList.contains("done")){foilDraw();(document.fonts&&document.fonts.ready||Promise.resolve()).then(foilDraw);addEventListener("resize",foilDraw)}
function reveal(){if(sd.classList.contains("done")||scratching)return;scratching=true;sd.classList.add("busy");
  var r=sd.getBoundingClientRect(),w=r.width,h=r.height,c=scr.getContext("2d"),passes=8,t0=performance.now(),dur=1900,prev=null,fr=0;
  c.globalCompositeOperation="destination-out";c.lineCap="round";c.lineJoin="round";c.lineWidth=Math.max(26,h/passes*2.6);
  function pt(u){var p=Math.min(passes-1,Math.floor(u)),sp=u-p,dir=p%2?-1:1,x=dir>0?-12+sp*(w+24):w+12-sp*(w+24);var y=(p+.5)/passes*h+Math.sin(sp*14+p)*h*.08;return[x,y]}
  function step(now){var p=Math.min(1,(now-t0)/dur),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,u=e*passes;
    var q=pt(Math.min(u,passes-.0001));if(prev){c.beginPath();c.moveTo(prev[0],prev[1]);c.lineTo(q[0],q[1]);c.stroke()}
    if(++fr%4===0)burst(r.left+q[0],r.top+q[1],"tiny");prev=q;
    if(p<1)requestAnimationFrame(step);else{c.clearRect(0,0,w,h);scr.style.transition="opacity .5s";scr.style.opacity="0";burst(r.left+w/2,r.top+h/2,false);
      setTimeout(function(){sd.classList.add("done");scratching=false},500);try{if(W.rememberReveal)localStorage.setItem(KEY,"1")}catch(e){}}}
  requestAnimationFrame(step)}
sd.addEventListener("click",reveal);sd.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();reveal()}});

/* ---------- countdown ---------- */
var target=new Date(W.weddingDateTime).getTime();
function two(n){return n<10?"0"+n:""+n}
function tick(){var s=Math.floor(Math.max(0,target-Date.now())/1000);
  $("cdD").textContent=two(Math.floor(s/86400));$("cdH").textContent=two(Math.floor(s%86400/3600));
  $("cdM").textContent=two(Math.floor(s%3600/60));$("cdS").textContent=two(s%60)}
tick();setInterval(tick,1000);

/* ---------- RSVP: Yes / No on WhatsApp ---------- */
function build(){var yes=document.querySelector("input[name=att]:checked").value==="yes",n=$("gName").value.trim(),m=$("msg").value.trim();
  var t="*RSVP – "+W.groom+" & "+W.bride+"*\n\nName: "+(n||"—")+"\nWill attend: "+(yes?"Yes, I'll be there 🎉":"Sorry, can't make it")+(m?"\n\nMessage: "+m:"");
  $("send").href="https://wa.me/"+W.whatsapp+"?text="+encodeURIComponent(t)}
$("form").addEventListener("input",build);$("form").addEventListener("change",build);$("form").addEventListener("submit",function(e){e.preventDefault()});build();
$("send").addEventListener("click",function(e){if(!$("gName").value.trim()){e.preventDefault();$("gName").focus()}});
})();

/* theme colours + section toggles from details.js */
(function(){var T=W.theme||{},r=document.documentElement.style;
if(T.main){r.setProperty('--wine',T.main)}if(T.dark){r.setProperty('--wine2',T.dark)}if(T.gold){r.setProperty('--gold',T.gold)}
var hide=W.hideSections||[];hide.forEach(function(id){var el=document.getElementById(id);if(el)el.style.display='none'});})();
