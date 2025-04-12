let btns = document.getElementsByClassName("B");

let sbl = 0;
let ans;
let flag = 1;

function winner(...elements){
    elements.forEach(e=>{
        if(e)
            e.classList.add("icon-pair");
    })
}

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let btn of btns) {
    if (flag === 0) continue;
    btn.addEventListener("click", function () {
        if (flag === 0) return;
        if (!this.querySelector("i")) {
            let icon = document.createElement("i");
            if (sbl === 0) {
                icon.className = "fa-solid fa-xmark";
                sbl = 1;
            }
            else if (sbl === 1) {
                icon.className = "fa-solid fa-o";
                sbl = 0;
            }
            this.append(icon);
            const icons = Array.from(btns).map(box => box.getElementsByTagName("i")[0]);
            if (sbl === 1)
                document.querySelector("h3").innerText = "O's Turn";
            else if (sbl === 0)
                document.querySelector("h3").innerText = "X's Turn";
            if (flag !== 0)
                this.style.transform = "scale(1.05)";
            this.style.backgroundColor = "rgb(176,91,31)";
            for (let onePattern of patterns) {
                const [a, b, c] = onePattern;
                if (icons[a] && icons[b] && icons[c] &&
                    icons[a].className === "fa-solid fa-xmark" &&
                    icons[b].className === "fa-solid fa-xmark" &&
                    icons[c].className === "fa-solid fa-xmark"
                ) {
                    winner(icons[a],icons[b],icons[c]);
                    ans = document.createElement("div");
                    ans.innerHTML = `<span class="result-text">X Wins</span>  
                        <i class="fa-solid fa-rotate-right restart"></i>`;
                    ans.classList.add("result");
                    document.querySelector(".container").appendChild(ans);
                    flag = 0;
                    document.querySelector("h3").innerText = "";
                    break;
                }

                else if (icons[a] && icons[b] && icons[c] &&
                    icons[a].className === "fa-solid fa-o" &&
                    icons[b].className === "fa-solid fa-o" &&
                    icons[c].className === "fa-solid fa-o"
                ) {
                    winner(icons[a],icons[b],icons[c]);
                    ans = document.createElement("div");
                    ans.innerHTML = `<span class="result-text">O Wins</span> 
                        <i class="fa-solid fa-rotate-right restart"></i>`;
                    ans.classList.add("result");
                    document.querySelector(".container").appendChild(ans);
                    flag = 0;
                    document.querySelector("h3").innerText = "";
                    break;
                }
            }
            if (flag === 0) return;


            if (flag !== 0) {
                let tie = true;
                for (let btn of btns) {
                    if (!btn.querySelector("i")) {
                        tie = false;
                        break;
                    }
                }
                if (tie) {
                    let tie_ans = document.createElement("div");
                    tie_ans.innerHTML = `<span class="result-text">Tie</span>  
                            <i class="fa-solid fa-rotate-right restart"></i>`;
                    tie_ans.classList.add("result");
                    document.querySelector(".container").appendChild(tie_ans);
                    flag = 0;
                    document.querySelector("h3").innerText = "";
                }
            }

        }
    });
}


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("restart")) {
        for (let btn of btns) {
            btn.style.backgroundColor = "#D2B48C";
            let icon = btn.querySelector("i");
            if (icon) icon.remove();

        }
        let r = document.querySelector(".result");
        if (r) {
            r.remove();
        }
        sbl = 0;
        flag = 1;
        document.querySelector("h3").innerText = "X's Turn";
    }
});

