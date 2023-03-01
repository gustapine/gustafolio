const mario=document.querySelector(".mario"),
pipe=document.querySelector(".pipe"),
press=document.querySelector(".press"),
gameover=document.querySelector(".gameover"),
recarregue=document.querySelector(".hey"),
clouds=document.querySelector(".cloud"),
background=document.querySelector(".skills");

mario.classList.remove("jump"),
pipe.classList.add("hey2"),
gameover.classList.add("hey2"),
recarregue.classList.add("hey2"),
clouds.classList.add("hey2"),
background.classList.add("hey2");

const jump=()=>{
    clouds.classList.remove("hey2"),
    background.classList.remove("hey2"),
    pipe.classList.remove("hey2"),
    press.src="./images/press start.gif",
    press.style.width="0px",
    mario.classList.add("jump"),
    
    setTimeout((()=>{
        mario.classList.remove("jump")}),500)},
        
        loop=setInterval((()=>{
            const e=pipe.offsetLeft,
            s=+window.getComputedStyle(mario).bottom.replace("px","");
            e<=120&&e>0&&s<80&&(pipe.style.animation="none",pipe.style.left=`${e}px`,
            mario.style.animation="none",
            mario.style.bottom=`${s}px`,
            mario.src="./images/mario dying.webp",
            mario.style.width="75px",
            mario.style.marginLeft="50px",
            
            clearInterval(loop),
            gameover.classList.remove("hey2"),
            recarregue.classList.remove("hey2"),
            clouds.classList.add("hey2"),
            background.classList.add("hey2"))}),10);
            
document.addEventListener("keydown",jump);
