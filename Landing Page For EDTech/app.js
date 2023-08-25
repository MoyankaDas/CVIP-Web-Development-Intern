function mytimer(){
    const date=new Date();
    document.querySelector("#timeline").innerHTML=date.toLocaleTimeString();
}

let myInterval=setInterval(mytimer,1000);

let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    clearInterval(myInterval);
})

