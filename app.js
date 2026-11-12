const canvas = document.querySelector("#sprite");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const palettes = {
  forest: { bg:"#243b3a", skin:"#f1c49d", hair:"#24302a", main:"#77a86b", trim:"#c9f25d", dark:"#132323" },
  neon:   { bg:"#251e48", skin:"#f0b9d0", hair:"#18122f", main:"#996dff", trim:"#58f6dd", dark:"#121024" },
  fire:   { bg:"#40231b", skin:"#efbc8d", hair:"#322018", main:"#e8583d", trim:"#ffc451", dark:"#211613" }
};
const shapes = {
 warrior:["................",".....hhhhhh.....","....hhhhhhhh....","....hsssssh....","....hs..ssh....","....hsssssh....",".....mmmm......","....mmmmmm.....","...mttmmttm....","...mttmmttm....",".....mmmm......","....dmmmmdd....","....dmmmmdd....","....dd..dd.....","................","................"],
 mage:["................","......hhhh......",".....hhhhhh.....","....hssssssh....","....hs..ssh....","....hsssssh....",".....mmmm......","....mmmmmm.....","....mmttmm.....","...mttttttm....","....mmmmmm.....","....dmmmmdd....","....ddmmdd.....",".....d..d.......","................","................"],
 scout:["................",".....hhhhhh.....","....hhhhhhhh....","....hsssssh....","....hs..ssh....","....hsssssh....",".....mmmm......","....mmmmmm.....","...mttmmttm....","..mmttmmttmm...",".....mmmm......","....dmmmmdd....","....dmmmmdd....","....dd..dd.....","................","................"]
};

function draw() {
  const kind = document.querySelector("#class").value;
  const mood = document.querySelector("#mood").value;
  const name = document.querySelector("#palette").value;
  const p = palettes[name], map = {h:p.hair,s:p.skin,m:p.main,t:p.trim,d:p.dark};
  ctx.fillStyle=p.bg; ctx.fillRect(0,0,256,256);
  shapes[kind].forEach((row,y)=>[...row].forEach((cell,x)=>{
    if(map[cell]) {ctx.fillStyle=map[cell];ctx.fillRect(x*16,y*16,16,16)}
  }));
  ctx.fillStyle=p.dark;
  const eyeY=75, eyes=mood==="alert"?[82,158]:[98,142];
  eyes.forEach(x=>ctx.fillRect(x,eyeY,12,12));
  if(mood==="angry"){ctx.fillRect(84,66,30,7);ctx.fillRect(142,66,30,7)}
  if(mood==="calm"){ctx.fillRect(110,112,36,5)}
  if(mood==="alert"){ctx.fillRect(116,110,24,8)}
  document.querySelector("#caption").textContent = `${name} ${kind} · ${mood}`.toUpperCase();
}
function randomize(){
  ["class","mood","palette"].forEach(id=>{
    const node=document.querySelector("#"+id);
    node.selectedIndex=Math.floor(Math.random()*node.options.length);
  }); draw();
}
document.querySelector("#mix").onclick=draw;
document.querySelector("#random").onclick=randomize;
document.querySelector("#export").onclick=()=>{
  const link=document.createElement("a"); link.download="sprite-mixer.png";
  link.href=canvas.toDataURL("image/png"); link.click();
};
document.querySelectorAll("select").forEach(x=>x.onchange=draw);
draw();
