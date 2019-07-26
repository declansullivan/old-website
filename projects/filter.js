window.onload = function() {
    let hide = [false, false, false];

    document.getElementById("organization").onclick = function() {update("organization", 0)};
    document.getElementById("personal").onclick = function() {update("personal", 1)};
    document.getElementById("coursework").onclick = function() {update("coursework", 2)};

    function update(subj, ind) {
        let container = document.getElementById(subj + "-box");
        if (!hide[ind]) {
            container.style.display = "none";
            document.getElementById(subj + "-button").style.background = "#D1D1D1";
        }
        else {
            container.style.display = "block";
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
            blank.height = "0vh";
        }
    }
};