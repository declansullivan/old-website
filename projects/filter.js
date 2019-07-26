window.onload = function() {
    let hide = [false, false, false];

    console.log(document.getElementById("personal-box"));

    document.getElementById("organization").onclick = function() {update("organization", 0)};
    document.getElementById("personal").onclick = function() {update("personal", 1)};
    document.getElementById("coursework").onclick = function() {update("coursework", 2)};

    function update(subj, ind) {
        let orgs = document.getElementById(subj + "-box");
        if (!hide[ind]) {
            orgs.style.width = "0%";
            orgs.style.height = "0%";
            orgs.style.float = "left";
            orgs.style.visibility = "hidden";
            document.getElementById(subj + "-button").style.background = "#D1D1D1";
        }
        else {
            orgs.style.width = "100%";
            orgs.style.visibility = "visible";
            document.getElementById(subj + "-button").style.background = "#2E86AB";
        }

        hide[ind] = !hide[ind];

        if (hide[0] && hide[1] && hide[2]) document.getElementById("blank").style.visibility = "visible";
        else document.getElementById("blank").style.visibility = "hidden";
    }
};