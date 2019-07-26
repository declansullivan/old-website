window.onload = function() {
    let hide = [false, false, false];

    console.log(document.getElementById("personal-box"));

    document.getElementById("organization").onclick = function() {update("organization", 0)};
    document.getElementById("personal").onclick = function() {update("personal", 1)};
    document.getElementById("coursework").onclick = function() {update("coursework", 2)};

    function update(subj, ind) {
        let container = document.getElementById(subj + "-box");
        if (!hide[ind]) {
            let projs = container.getElementsByClassName("project");
            for (let i = 0; i < projs.length; i++) {
                projs[i].style.width = "0%";
                projs[i].style.height = "0vh";
                projs[i].style.padding = "0";
                projs[i].style.marginTop = "0";
                projs[i].style.marginBottom = "0";
            }

            container.style.width = "0%";
            container.style.height = "0vw";
            container.style.float = "left";
            container.style.visibility = "hidden";
            document.getElementById(subj + "-button").style.background = "#D1D1D1";
        }
        else {
            let projs = container.getElementsByClassName("project");
            for (let i = 0; i < projs.length; i++) {
                projs[i].style.width = "100%";
                projs[i].style.height = "auto";
                projs[i].style.padding = "5px";
                projs[i].style.marginTop = "20px";
                projs[i].style.marginBottom = "20px";
            }

            container.style.width = "100%";
            container.style.height = "100%";
            container.style.float = "none";
            container.style.visibility = "visible";
            document.getElementById(subj + "-button").style.background = "#2E86AB";
        }

        hide[ind] = !hide[ind];
        let blank = document.getElementById("blank").style;

        if (hide[0] && hide[1] && hide[2]) {
            blank.visibility = "visible";
            blank.height = "100vh";
        }
        else {
            blank.visibility = "hidden";
            blank.height = "10vh";
        }
    }
};