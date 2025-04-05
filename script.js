let btns = document.getElementsByClassName("B");

let sbl = 0;
let ans;
let flag = 1;
for(let btn of btns){
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
    this.style.transform = "scale(1.05)";
    this.style.backgroundColor="#8B4513";

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
        ans = document.createElement("h2");
        ans.textContent = "X Wins";
        ans.classList.add("result");
        document.body.append(ans);
        flag = 0;
    }
    else if((i1&&i2&&i3&&i1.className==="fa-solid fa-o"&&i2.className==="fa-solid fa-o"&&i3.className==="fa-solid fa-o")||
    (i4&&i5&&i6&&i4.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i6.className==="fa-solid fa-o")||
    (i7&&i8&&i9&&i7.className==="fa-solid fa-o"&&i8.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")||
    (i1&&i5&&i9&&i1.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")||
    (i3&&i5&&i7&&i3.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i7.className==="fa-solid fa-o")||
    (i1&&i4&&i7&&i1.className==="fa-solid fa-o"&&i4.className==="fa-solid fa-o"&&i7.className==="fa-solid fa-o")||
    (i2&&i5&&i8&&i2.className==="fa-solid fa-o"&&i5.className==="fa-solid fa-o"&&i8.className==="fa-solid fa-o")||
    (i3&&i6&&i9&&i3.className==="fa-solid fa-o"&&i6.className==="fa-solid fa-o"&&i9.className==="fa-solid fa-o")){
        ans = document.createElement("h2");
        ans.textContent = "O Wins";
        ans.classList.add("result");
        document.body.append(ans);
        flag = 0;
    }
    if(flag === 0) return;
}
});
if(flag === 0) break;
}