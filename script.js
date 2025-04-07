let btns = document.getElementsByClassName("B");

let sbl = 0;
let ans;
let flag = 1;
for(let btn of btns){
    if(flag === 0) continue;
btn.addEventListener("click",function(){
    if(flag === 0) return;
    if(!this.querySelector("i")){
    let icon = document.createElement("i");
    if(sbl === 0){
        icon.className = "fa-solid fa-xmark";
        sbl = 1;
    }
    else if(sbl === 1){
        icon.className = "fa-solid fa-o";
        sbl = 0;
    }
    this.append(icon);
    if(sbl === 1)
        document.querySelector("h3").innerText = "O's Turn";
    else if(sbl === 0)
        document.querySelector("h3").innerText = "X's Turn";
    if(flag!==0)
    this.style.transform = "scale(1.05)";
    this.style.backgroundColor="rgb(176,91,31)";

    let i1 = document.getElementsByClassName("B")[0].getElementsByTagName("i")[0];
    let i2 = document.getElementsByClassName("B")[1].getElementsByTagName("i")[0];
    let i3 = document.getElementsByClassName("B")[2].getElementsByTagName("i")[0];
    let i4 = document.getElementsByClassName("B")[3].getElementsByTagName("i")[0];
    let i5 = document.getElementsByClassName("B")[4].getElementsByTagName("i")[0];
    let i6 = document.getElementsByClassName("B")[5].getElementsByTagName("i")[0];
    let i7 = document.getElementsByClassName("B")[6].getElementsByTagName("i")[0];
    let i8 = document.getElementsByClassName("B")[7].getElementsByTagName("i")[0];
    let i9 = document.getElementsByClassName("B")[8].getElementsByTagName("i")[0];

    if((i1&&i2&&i3&&i1.className==="fa-solid fa-xmark"&&i2.className==="fa-solid fa-xmark"&&i3.className==="fa-solid fa-xmark")||
    (i4&&i5&&i6&&i4.className==="fa-solid fa-xmark"&&i5.className==="fa-solid fa-xmark"&&i6.className==="fa-solid fa-xmark")||
    (i7&&i8&&i9&&i7.className==="fa-solid fa-xmark"&&i8.className==="fa-solid fa-xmark"&&i9.className==="fa-solid fa-xmark")||
    (i1&&i5&&i9&&i1.className==="fa-solid fa-xmark"&&i5.className==="fa-solid fa-xmark"&&i9.className==="fa-solid fa-xmark")||
    (i3&&i5&&i7&&i3.className==="fa-solid fa-xmark"&&i5.className==="fa-solid fa-xmark"&&i7.className==="fa-solid fa-xmark")||
    (i1&&i4&&i7&&i1.className==="fa-solid fa-xmark"&&i4.className==="fa-solid fa-xmark"&&i7.className==="fa-solid fa-xmark")||
    (i2&&i5&&i8&&i2.className==="fa-solid fa-xmark"&&i5.className==="fa-solid fa-xmark"&&i8.className==="fa-solid fa-xmark")||
    (i3&&i6&&i9&&i3.className==="fa-solid fa-xmark"&&i6.className==="fa-solid fa-xmark"&&i9.className==="fa-solid fa-xmark")){
        ans = document.createElement("div");
        ans.innerHTML = `<span class="result-text">X Wins</span>  
                        <i class="fa-solid fa-rotate-right restart"></i>`;
        ans.classList.add("result");
        document.body.append(ans);
        flag = 0;
        document.querySelector("h3").innerText = "";
    }
    else if((i1&&i2&&i3&&i1.className==="fa-solid fa-o"&&i2.className==="fa-solid fa-o"&&i3.className==="fa-solid fa-o")||
    (i4&&i5&&i6&&i4.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i6.className==="fa-solid fa-o")||
    (i7&&i8&&i9&&i7.className==="fa-solid fa-o"&&i8.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")||
    (i1&&i5&&i9&&i1.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")||
    (i3&&i5&&i7&&i3.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i7.className==="fa-solid fa-o")||
    (i1&&i4&&i7&&i1.className==="fa-solid fa-o"&&i4.className==="fa-solid fa-o"&&i7.className==="fa-solid fa-o")||
    (i2&&i5&&i8&&i2.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i8.className==="fa-solid fa-o")||
    (i3&&i6&&i9&&i3.className==="fa-solid fa-o"&&i6.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")){
        ans = document.createElement("div");
        ans.innerHTML = `<span class="result-text">O Wins</span><br>  
                        <i class="fa-solid fa-rotate-right restart"></i>`;
        ans.classList.add("result");
        document.body.append(ans);
        flag = 0;
        document.querySelector("h3").innerText = "";
    }
    if(flag === 0) return;
}
});
if(flag === 0) break;
}

document.addEventListener("click", function(e){
    if (e.target.classList.contains("restart")) {
    for(let btn of btns){
        btn.style.backgroundColor = "#D2B48C";
        let icon = btn.querySelector("i");
        if (icon) icon.remove(); 

    }
        let r = document.querySelector(".result");
        if(r) {
            r.remove();
        }
        sbl = 0;
        flag = 1;
        document.querySelector("h3").innerText = "X's Turn";
    }
});

