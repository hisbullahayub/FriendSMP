const IP="play.friendsmp.ink",HOST="uae-1.royalnode.cloud:6684";
const $=s=>document.querySelector(s);
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
document.querySelectorAll("[data-ip]").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(IP)}catch{}toast("IP copied!")});
$("#burger").onclick=()=>$("#menu").classList.toggle("open");
if($("#status"))fetch("https://api.mcsrvstat.us/3/"+HOST).then(r=>r.json()).then(d=>{
 $("#dot").className=d.online?"on":"off";
 if($("#pl"))$("#pl").textContent=d.players?.online??0;$("#status").textContent=d.online?`Online · ${d.players?.online??0} / ${d.players?.max??0} playing`:"Server offline · back soon"
}).catch(()=>{$("#status").textContent=IP});
if($("#dc"))fetch("https://discord.com/api/v9/invites/RsJBu8jEyg?with_counts=true").then(r=>r.json()).then(d=>{$("#dc").textContent=d.approximate_presence_count??"--"}).catch(()=>{$("#dc").textContent="--"});
